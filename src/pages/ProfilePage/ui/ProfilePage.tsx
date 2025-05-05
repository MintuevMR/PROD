import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import Text, { TextThemes } from 'shared/ui/Text/Text';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import { useParams } from 'react-router-dom';
import Page from 'widgets/Page/Page';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validateError = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorsTranslate: Record<ValidateProfileErrors, string> = {
        [ValidateProfileErrors.INCORRECT_USER_DATA]: 'Имя и фамилия обязательны',
        [ValidateProfileErrors.INCORRECT_AGE]: 'Некорректный возраст',
        [ValidateProfileErrors.INCORRECT_COUNTRY]: 'Некорректная страна',
        [ValidateProfileErrors.SERVER_ERRROR]: 'SERVER_ERRROR',
    };

    const onChengeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChengeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateError?.length && validateError.map((error) => (
                    <Text key={error} title={validateErrorsTranslate[error]} theme={TextThemes.ERROR} />
                ))}
                <ProfileCard
                    readOnly={readOnly}
                    data={formData}
                    error={error}
                    isLoading={isLoading}
                    onChengeFirstName={onChengeFirstName}
                    onChengeLastname={onChengeLastname}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
