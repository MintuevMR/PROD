import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import { ArticleType } from 'entities/Article/model/types/article';
import cls from './Tabs.module.scss';
import Card, { CardTheme } from '../Card/Card';

export interface TabsItem {
    value: ArticleType;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabsItem[];
    value: string;
    onTabClick: (tab: TabsItem) => void;
}

const Tabs = ({
    className,
    tabs,
    onTabClick,
    value,
}: TabsProps) => {
    const handleClick = useCallback((tab: TabsItem) => () => onTabClick(tab), [onTabClick]);
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    onClick={handleClick(tab)}
                    className={cls.tab}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OULTLINE}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};

export default Tabs;
