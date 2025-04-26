import { Article, ArticleView } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = ({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
}: ArticleListProps) => {
    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} className={cls.card} article={article} view={view} />
    );
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
};
