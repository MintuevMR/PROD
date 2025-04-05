import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile/model/types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, { rejectValue: string, extra: ThunkExtraArg }>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    },
);
