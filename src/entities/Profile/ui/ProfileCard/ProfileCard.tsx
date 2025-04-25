import { classNames } from 'shared/lib/classNames/classNames';
import Text, { TextAlign, TextThemes } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChengeFirstName?: (value: string) => void;
    onChengeLastname?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

const ProfileCard = ({
    className,
    data,
    error,
    isLoading,
    readOnly,
    onChengeFirstName,
    onChengeLastname,
    onChangeCountry,
    onChangeCurrency,
}: ProfileCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextThemes.ERROR}
                    title={error}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                {data?.avatar
                    && (
                        <div className="avatarWrapper">
                            <Avatar alt="ava" src={data?.avatar} />
                        </div>
                    )}
                <Input
                    value={data?.first}
                    className={cls.input}
                    placeholder="Имя"
                    onChange={onChengeFirstName}
                    readOnly={readOnly}
                />
                <Input
                    placeholder="Фамилия"
                    className={cls.input}
                    value={data?.lastname}
                    onChange={onChengeLastname}
                    readOnly={readOnly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency as Currency}
                    onChange={onChangeCurrency}
                    readonly={readOnly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country as Country}
                    onChange={onChangeCountry}
                    readonly={readOnly}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
