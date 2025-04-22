/* eslint-disable indent */
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useCallback, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/services/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import Text, { TextAlign, TextSize, TextThemes } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import Avatar from 'shared/ui/Avatar/Avatar';
import { ActicleBlock } from 'entities/Article/model/types/article';
import cls from './ArticleDetails.module.scss';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = { articleDetails: articleDetailsReducer };

const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetails);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const isLoading = true;
    const error = useSelector(getArticleDetailsError);

    const renderBlocks = useCallback((article: ActicleBlock) => {
        switch (article.type) {
            case 'TEXT':
                return <ArticleTextBlockComponent key={article.id} block={article} />;
            case 'CODE':
                return <ArticleCodeBlockComponent key={article.id} block={article} />;
            case 'IMAGE':
                return <ArticleImageBlockComponent key={article.id} block={article} />;
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <div><Skeleton className={cls.avatar} width={200} height={200} border="50%" /></div>
                <div><Skeleton className={cls.title} width={300} height={32} /></div>
                <div><Skeleton className={cls.skeleton} width={60} height={24} /></div>
                <div><Skeleton className={cls.skeleton} width="100%" height={200} /></div>
                <div><Skeleton className={cls.skeleton} width="100%" height={200} /></div>
            </>
        );
    } else if (error) {
        content = (
            <Text
                className={cls.error}
                title={error}
                theme={TextThemes.ERROR}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar alt="img" size={200} src={article?.img} className={cls.avatar} />
                </div>
                <Text
                    size={TextSize.L}
                    title={article?.title}
                    description={article?.subtitle}
                    className={cls.title}
                />
                <div>
                    {article?.blocks.map(renderBlocks)}
                </div>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetails;
