import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';

interface CodeProps {
    className?: string;
    text: string
}

const Code = ({ className, text }: CodeProps) => {
    const onCopy = () => {
        navigator.clipboard.writeText(text);
    };
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn}>Копировать</Button>
            <code>{text}</code>
        </pre>
    );
};

export default Code;
