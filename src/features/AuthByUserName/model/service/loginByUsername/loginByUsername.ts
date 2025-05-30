import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User/model/types/user';
import { userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/loginSchema';

export const loginByUserName = createAsyncThunk<User, Pick<LoginSchema, 'username' | 'password'>, { rejectValue: string, extra: ThunkExtraArg }>(
    'login/loginByUserNmae',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post('/login', authData);
            if (!response.data) {
                throw new Error('Ошибка авторизации');
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    },
);
