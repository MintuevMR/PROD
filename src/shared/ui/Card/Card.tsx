import { classNames } from 'shared/lib/classNames/classNames';
import React, { HTMLAttributes } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OULTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    theme?: CardTheme;
}

const Card = ({
    className, children, theme = CardTheme.NORMAL, ...otherProps
}: CardProps) => (
    <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </div>
);

export default Card;
