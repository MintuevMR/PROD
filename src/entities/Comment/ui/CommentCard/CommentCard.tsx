import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment/model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => (
    <div className={classNames(cls.CommentCard, {}, [className])}>
        <p>{comment.user.username}</p>
        <p>{comment.text}</p>
    </div>
);

export default CommentCard;
