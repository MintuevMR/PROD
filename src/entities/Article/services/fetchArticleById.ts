import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { Article } from '../model/types/article';

export const fetchArticleById = createAsyncThunk<Article, string, { rejectValue: string, extra: ThunkExtraArg }>(
    'articleDetails/fetchArticleById',
    async (id, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    },
);
