import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg, StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetails } from 'entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from 'entities/User';
// import { getCommentFormText } from 'features/addCommentForm/model/selectors/getCommentForm/getCommentForm';
// import { addCommentFormActions } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const articleId = getArticleDetails(thunkAPI.getState());
        const userData = getUserAuthData(thunkAPI.getState());

        if (!text || !articleId || !userData) {
            return thunkAPI.rejectWithValue('no data');
        }

        try {
            const response = await thunkAPI.extra.api.post('/comments', {
                text,
                articleId: articleId.id,
                userId: userData.id,
            });
            if (!response.data) {
                throw new Error();
            }
            thunkAPI.dispatch(fetchCommentsByArticleId(articleId.id));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    },
);
