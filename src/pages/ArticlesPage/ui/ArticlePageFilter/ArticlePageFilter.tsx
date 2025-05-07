import { classNames } from 'shared/lib/classNames/classNames';
import {
    ArtcileSortField, ArticleTypeTabs, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import Card from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import ArticleSortSelector from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article/model/types/article';
import cls from './ArticlePageFilter.module.scss';

interface ArticlePageFilterProps {
    className?: string;
}

const ArticlePageFilter = ({ className }: ArticlePageFilterProps) => {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = () => {
        dispatch(fetchArticlesList({ replace: true }));
    };

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = (newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    };

    const onChangeSort = (newSort: ArtcileSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };

    const onChangeOrder = (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };

    const onChangeInput = (search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    };

    const onChangeType = (type: ArticleType) => {
        dispatch(articlesPageActions.setType(type));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };

    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder="Поиск" value={search} onChange={onChangeInput} />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
};

export default ArticlePageFilter;
