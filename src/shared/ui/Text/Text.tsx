import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextThemes {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextThemes;
    align?: TextAlign
    size?: TextSize;
}

const Text = memo((props: TextProps) => {
    const {
        className, title, description, size = TextSize.M, theme = TextThemes.PRIMARY, align = TextAlign.LEFT,
    } = props;
    return (
        <div className={classNames(cls.Text, {}, [className, cls[align], cls[size], cls[theme]])}>
            {title && <h1 className={cls.title}>{title}</h1>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    );
});

export default Text;
