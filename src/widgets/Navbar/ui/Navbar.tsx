import { FC } from 'react';
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={classNames(styles.links)}>
                <AppLink theme={AppLinkTheme.SECONADARY} className={classNames(styles.mainLink)} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>О нас</AppLink>
            </div>
        </div>
    );
};