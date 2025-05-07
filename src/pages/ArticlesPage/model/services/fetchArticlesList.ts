import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
    getArticlesPageType,
} from '../selectors/articlesPageSelectors';

export interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }
>(
    'articlesPage/fetchArticlesList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        const page = getArticlesPageNum(thunkApi.getState());
        const order = getArticlesPageOrder(thunkApi.getState());
        const sort = getArticlesPageSort(thunkApi.getState());
        const search = getArticlesPageSearch(thunkApi.getState());
        const limit = getArticlesPageLimit(thunkApi.getState());
        const type = getArticlesPageType(thunkApi.getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    __order: order,
                    type,
                    q: search,
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
