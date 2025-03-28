import { classNames } from 'shared/lib/classNames/classNames';

interface UserProps {
    className?: string;
}

export const User = ({ className }: UserProps) => (
    <div className={classNames('', {}, [className])} />
);
