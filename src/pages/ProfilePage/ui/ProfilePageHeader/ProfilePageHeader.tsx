import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileeData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageLoaderProps {
    className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageLoaderProps) => {
    const readOnly = useSelector(getProfileReadOnly);

    const dispatch = useAppDispatch();

    const onToggleEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onToggleCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileeData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title="Профиль" />
            {readOnly
                ? (
                    <Button
                        theme={ThemeButton.OUTLINE}
                        onClick={onToggleEdit}
                    >
                        Редактировать
                    </Button>
                )
                : (
                    <>
                        <Button
                            theme={ThemeButton.OUTLINE}
                            className={cls.editBtn}
                            onClick={onToggleCancelEdit}
                        >
                            Отменить
                        </Button>
                        <Button
                            theme={ThemeButton.OUTLINE}
                            className={cls.editBtn}
                            onClick={onSave}
                        >
                            Сохранить
                        </Button>
                    </>
                )}
        </div>
    );
};

export default ProfilePageHeader;
