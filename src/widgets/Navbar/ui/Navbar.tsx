import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const onClosehModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpenAuthModal(true);
    }, []);

    return (

        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ThemeButton.CLEAR}
                    className={cls.link}
                    onClick={onShowModal}
                >
                    Войти
                </Button>
                <LoginModal isOpen={isOpenAuthModal} onClose={onClosehModal} />
            </div>
        </div>
    );
};
