import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article/model/types/article';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: 'big',
    },
    {
        view: ArticleView.SMALL,
        icon: 'small',
    },
];

const ArticleViewSelector = ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newItem: ArticleView) => () => {
        onViewClick?.(newItem);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={classNames('', { [cls.selected]: viewType.view === view }, [])}
                >
                    {viewType.icon}
                </Button>
            ))}
        </div>
    );
};

export default ArticleViewSelector;
