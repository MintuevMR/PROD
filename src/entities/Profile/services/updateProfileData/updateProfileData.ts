import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import { validateProfileData } from '../validateProfile/validateProfile';

export const updateProfileeData = createAsyncThunk<Profile, void, { rejectValue: ValidateProfileErrors[], extra: ThunkExtraArg, state: StateSchema }>(
    'profile/updateProfileeData',
    async (_, thunkAPI) => {
        const formData = getProfileForm(thunkAPI.getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return thunkAPI.rejectWithValue(errors);
        }

        try {
            const response = await thunkAPI.extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue([ValidateProfileErrors.SERVER_ERRROR]);
        }
    },
);
