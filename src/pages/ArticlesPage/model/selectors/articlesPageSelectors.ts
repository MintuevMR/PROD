import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageisLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
