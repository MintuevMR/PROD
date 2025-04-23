import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetaildCommentsSchema } from '../types/ArticleDetaildCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleDeatailsComment = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetaildComments || commentsAdapter.getInitialState(),
);

const articleDeatailsCommentSlice = createSlice({
    name: 'articleDeatailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetaildCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: ['1', '2'],
        entities: {
            1: { id: '1', text: '123', user: { id: '1', username: 'Ivan' } },
            2: { id: '2', text: '456', user: { id: '2', username: 'Maga' } },
        },
    }),
    reducers: {},
});

// const { } = articleDeatailsCommentSlice.actions;
export const { reducer: articleDeatailsCommentsReducer } = articleDeatailsCommentSlice;
