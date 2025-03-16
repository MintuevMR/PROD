import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
    L = 'size_l',
    M = 'size_m',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = SizeButton.M,
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[size], cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
