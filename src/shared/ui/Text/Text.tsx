import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextThemes {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextThemes;
}

const Text = (props: TextProps) => {
    const {
        className, title, description, theme = TextThemes.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <h1 className={cls.title}>{title}</h1>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    );
};

export default Text;
