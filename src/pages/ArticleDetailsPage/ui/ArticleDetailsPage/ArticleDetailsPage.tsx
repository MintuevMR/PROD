import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import AddCommentForm from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import Page from 'widgets/Page/Page';
import { getArticleRecomendations } from 'pages/ArticleDetailsPage/model/slices/articleDetailsRecomendationSlice';
import { getArticleRecomendationsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recomendations';
import { fetchArticleRecomendations } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecomendations/fetchArticleRecomendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';

import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const recomendations = useSelector(getArticleRecomendations.selectAll);
    const recomendationsIsLoading = useSelector(getArticleRecomendationsIsLoading);

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
        dispatch(fetchArticleRecomendations());
    }, [dispatch, id]);

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                Статья не найдена
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title="Рекомендуем"
                />
                <ArticleList isLoading={recomendationsIsLoading} articles={recomendations} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title="Комментарии"
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
