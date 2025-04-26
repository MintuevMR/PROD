import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleList view={ArticleView.BIG} articles={[]} />
    </div>
);

export default memo(ArticlesPage);
