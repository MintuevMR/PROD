import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment/model/types/comment';
import Text from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList = ({ className, comments, isLoading }: CommentListProps) => (
    <div className={classNames(cls.CommentList, {}, [className])}>
        {comments?.length
            // eslint-disable-next-line react/no-array-index-key
            ? comments.map((comment, index) => <CommentCard key={index} comment={comment} />)
            : <Text title="No commets" />}
    </div>
);

export default CommentList;
