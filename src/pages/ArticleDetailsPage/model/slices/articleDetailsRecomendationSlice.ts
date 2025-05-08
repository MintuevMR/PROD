import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleDetailsRecomendationSchema } from '../types/ArticleDetailsRecomendationSchema';
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations';

const recomdationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecomendations = recomdationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recomendations || recomdationAdapter.getInitialState(),
);

const articleDetailsRecomendationSlice = createSlice({
    name: 'articleDetailsRecomendationSlice',
    initialState: recomdationAdapter.getInitialState<ArticleDetailsRecomendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecomendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecomendations.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                recomdationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecomendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecomendationReducer } = articleDetailsRecomendationSlice;
