import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => (
    <div className={classNames(cls.LoginForm, {}, [className])}>
        <Input autoFocus placeholder="Логин" className={cls.input} />
        <Input placeholder="Пароль" className={cls.input} />
        <Button className={cls.loginBtn}>
            Войти
        </Button>
    </div>
);

export default LoginForm;
