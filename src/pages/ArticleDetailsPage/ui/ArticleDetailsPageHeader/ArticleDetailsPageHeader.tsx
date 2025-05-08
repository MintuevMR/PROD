import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetails } from 'entities/Article/model/selectors/articleDetails';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
    const article = useSelector(getArticleDetails);

    const navigate = useNavigate();

    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = () => {
        window.history.back();
    };

    const onEditArtcile = () => {
        navigate(`${RoutePath.articles_details}${article?.id}}/edit`);
    };

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                Назад
            </Button>
            {canEdit && (
                <Button onClick={onEditArtcile}>
                    Редактировать
                </Button>
            )}
        </div>
    );
};

export default ArticleDetailsPageHeader;
