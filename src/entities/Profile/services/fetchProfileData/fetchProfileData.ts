import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile/model/types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, { rejectValue: string, extra: ThunkExtraArg }>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    },
);
