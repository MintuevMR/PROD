import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'> {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        autoFocus,
        readOnly,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            {/* {placeholder && (
                <div className={cls.placeholder}>{placeholder}</div>
            )} */}
            <input
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={onChangeHandler}
                className={cls.input}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
});
export default Input;
