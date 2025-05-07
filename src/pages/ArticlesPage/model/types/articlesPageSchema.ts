import { EntityState } from '@reduxjs/toolkit';
import { ArtcileSortField, Article, ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    order: SortOrder;
    sort: ArtcileSortField;
    search: string;

    type: ArticleType;

    _inited?: boolean;
}
