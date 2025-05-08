import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecomendations = createAsyncThunk<
    Article[],
    void,
    { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }
>(
    'articlesDetailsPage/fetchArticleRecomendations',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
