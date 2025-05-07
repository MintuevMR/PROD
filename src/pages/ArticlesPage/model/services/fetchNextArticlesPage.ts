import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import { getArticlesPageisLoading, getArticlesPageHasMore, getArticlesPageNum } from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slices/articlePageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const hasMore = getArticlesPageHasMore(thunkApi.getState());
        const page = getArticlesPageNum(thunkApi.getState());
        const isLoading = getArticlesPageisLoading(thunkApi.getState());
        if (hasMore && !isLoading) {
            thunkApi.dispatch(articlesPageActions.setPage(page + 1));
            thunkApi.dispatch(fetchArticlesList({}));
        }
    },
);
