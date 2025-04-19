import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Profile } from 'entities/Profile/model/types/profile';

export const updateProfileeData = createAsyncThunk<Profile, void, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
    'profile/updateProfileeData',
    async (_, thunkAPI) => {
        const formData = getProfileForm(thunkAPI.getState());

        try {
            const response = await thunkAPI.extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    },
);
