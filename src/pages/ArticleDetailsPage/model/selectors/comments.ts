import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetails?.error;
