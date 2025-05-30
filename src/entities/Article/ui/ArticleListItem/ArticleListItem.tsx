import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleTextBlock, ArticleView } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import Card from 'shared/ui/Card/Card';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

const ArticleListItem = ({ className, article, view }: ArticleListItemProps) => {
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text title={article.user.username} className={cls.username} />
                        <Text title={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text title={article.type.join(', ')} className={cls.types} />
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={RoutePath.articles_details + article.id}>
                            <Button theme={ThemeButton.OUTLINE}>
                                Читать далее...
                            </Button>
                        </AppLink>
                        <Text title={String(article.views)} className={cls.views} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink to={RoutePath.articles_details + article.id} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text title={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text title={article.type.join(', ')} className={cls.types} />
                    <Text title={String(article.views)} className={cls.views} />
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};

export default ArticleListItem;
