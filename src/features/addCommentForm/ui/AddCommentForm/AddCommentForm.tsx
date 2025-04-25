import Input from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { useSelector } from 'react-redux';
import { getCommentFormError, getCommentFormText } from 'features/addCommentForm/model/selectors/getCommentForm/getCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const text = useSelector(getCommentFormText);
    const error = useSelector(getCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = (value: string) => {
        dispatch(addCommentFormActions.setText(value));
    };

    const onSendHandler = () => {
        onSendComment(text || '');
        onCommentTextChange('');
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input placeholder="Текст комментарии" value={text} onChange={onCommentTextChange} className={cls.input} />
                <Button onClick={onSendHandler}>Оставить комментарии</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
