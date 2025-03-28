import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUserName } from 'features/AuthByUserName/model/service/loginByUsername/loginByUsername';
import Text, { TextThemes } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title="Авторизация" />
            <div className={classNames(cls.errorWrapper, { [cls.visible]: error }, [])}>
                {error && <Text theme={TextThemes.ERROR} description={error} />}
            </div>
            <Input
                autoFocus
                placeholder="Логин"
                className={cls.input}
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                placeholder="Пароль"
                className={cls.input}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {isLoading ? 'Загрузка...' : 'Войти'}
            </Button>
        </div>
    );
});

export default LoginForm;
