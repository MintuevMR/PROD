import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

const Avatar = ({
    className,
    src,
    alt,
    size,
}: AvatarProps) => {
    const mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img style={styles} className={classNames(cls.Avatar, mods, [className])} src={src} alt={alt} />
    );
};

export default Avatar;
