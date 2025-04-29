import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../selectors/articlesPageSelectors';

export interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }
>(
    'articlesPage/fetchArticlesList',
    async (args, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        const { page = 1 } = args;
        const limit = getArticlesPageLimit(thunkApi.getState());
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
