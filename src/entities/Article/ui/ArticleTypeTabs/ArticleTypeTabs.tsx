import { classNames } from 'shared/lib/classNames/classNames';
import Tabs, { TabsItem } from 'shared/ui/Tabs/Tabs';
import { useMemo } from 'react';
import { ArticleType } from 'entities/Article/model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

const ArticleTypeTabs = ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const typetabs = useMemo<TabsItem[]>(() => [
        {
            value: 'IT',
            content: 'Айти',
        },
        {
            value: 'ECONIMIC',
            content: 'Экономика',
        },
    ], []);

    const onTabClick = (tab: TabsItem) => {
        onChangeType(tab.value);
    };

    return (<Tabs onTabClick={onTabClick} tabs={typetabs} value={value} className={classNames('', {}, [className])} />);
};

export default ArticleTypeTabs;
