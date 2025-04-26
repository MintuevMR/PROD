import { classNames } from 'shared/lib/classNames/classNames';
import React, { HTMLAttributes } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}

const Card = ({ className, children, ...otherProps }: CardProps) => (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
        {children}
    </div>
);

export default Card;
