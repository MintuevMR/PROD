import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { useSelector } from 'react-redux';
import { getArticlesPageisLoading, getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import Page from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage';
import cls from './ArticlesPage.module.scss';

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

    const onChangeView = (newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    };

    const onLoadNextPart = () => {
        dispatch(fetchNextArticlesPage());
    };

    useEffect(() => {
        dispatch((articlesPageActions.initState()));
        dispatch(fetchArticlesList({
            page: 1,
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticlesPage, {}, [className])} onScrollCallbeck={onLoadNextPart}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList view={view} articles={articles} isLoading={isLoading} />
                {(articles.length === 0 || isLoading) && <div className={cls.loading}>Loading...</div>}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
