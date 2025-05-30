import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageInited, getArticlesPageisLoading, getArticlesPageType, getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import Page from 'widgets/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage';
import cls from './ArticlesPage.module.scss';
import ArticlePageFilter from '../ArticlePageFilter/ArticlePageFilter';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageisLoading);
    const view = useSelector(getArticlesPageView);
    const inited = useSelector(getArticlesPageInited);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlesPage());
    };

    useEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    useEffect(() => {
        if (!inited) {
            dispatch((articlesPageActions.initState()));
            dispatch(fetchArticlesList({}));
        }
    }, [dispatch, inited]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticlesPage, {}, [className])} onScrollCallbeck={onLoadNextPart}>
                <ArticlePageFilter />
                <ArticleList view={view} articles={articles} isLoading={isLoading} />
                {(articles.length === 0 || isLoading) && <div className={cls.loading}>Loading...</div>}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
