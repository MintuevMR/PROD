import { classNames } from 'shared/lib/classNames/classNames';
import Select, { SelectOptions } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { ArtcileSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    sort: ArtcileSortField;
    onChangeSort: (sort: ArtcileSortField) => void;
}

const ArticleSortSelector = ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
}: ArticleSortSelectorProps) => {
    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            content: 'возрастанию',
            value: 'asc',
        },
        {
            content: 'убыванию',
            value: 'desc',
        },
    ], []);

    const sortFieldOptions = useMemo<SelectOptions<ArtcileSortField>[]>(() => [
        {
            content: 'дате',
            value: ArtcileSortField.CREATED,
        },
        {
            content: 'названию',
            value: ArtcileSortField.TITLE,
        },
        {
            content: 'просмотрам',
            value: ArtcileSortField.VIEWS,
        },
    ], []);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select options={sortFieldOptions} label="Сортировать ПО" value={sort} onChange={onChangeSort} />
            <Select options={orderOptions} label="ПО" onChange={onChangeOrder} />
        </div>
    );
};

export default ArticleSortSelector;
