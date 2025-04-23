import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDeatailsCommentsReducer, getArticleDeatailsComment } from 'pages/ArticleDetailsPage/model/slice/articleDeatailsCommentSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;

}

const reducers: ReducerList = {
    articleDetaildComments: articleDeatailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleDeatailsComment.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                Статья не найдена
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <CommentList comments={comments} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
