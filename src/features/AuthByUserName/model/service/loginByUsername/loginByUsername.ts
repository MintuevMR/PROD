import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User/model/types/user';
import { userActions, userReducer } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { LoginSchema } from '../../types/loginSchema';

export const loginByUserName = createAsyncThunk<User, Pick<LoginSchema, 'username' | 'password'>, { rejectValue: string }>(
    'login/loginByUserNmae',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error('Ошибка авторизации');
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
