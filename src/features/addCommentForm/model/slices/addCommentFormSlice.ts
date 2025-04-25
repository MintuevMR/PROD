import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
    error: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        //     builder.addCase(loginByUserName.pending, (state) => {
        //         state.isLoading = true;
        //         state.error = undefined;
        //     });
        //     builder.addCase(loginByUserName.fulfilled, (state, action) => {
        //         state.username = action.payload.username;
        //         state.isLoading = false;
        //     });
        //     builder.addCase(loginByUserName.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
