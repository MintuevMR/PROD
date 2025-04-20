import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileeData } from '../../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
            state.form = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        builder.addCase(updateProfileeData.pending, (state) => {
            state.isLoading = true;
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileeData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
            state.form = action.payload;
            state.isLoading = false;
            state.readonly = true;
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileeData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
