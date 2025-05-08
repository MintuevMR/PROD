import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsRecomendationReducer } from './articleDetailsRecomendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recomendations: articleDetailsRecomendationReducer,
    comments: articleDetailsCommentsReducer,
});
