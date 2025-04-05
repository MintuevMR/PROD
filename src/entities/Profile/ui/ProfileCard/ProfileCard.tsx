import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import Text from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const errpor = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title="Профиль" />
                <Button theme={ThemeButton.OUTLINE}>Редактировать</Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstname}
                    className={cls.input}
                    placeholder="Имя"
                />
                <Input
                    placeholder="Фамилия"
                    className={cls.input}
                    value={data?.lastname}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
