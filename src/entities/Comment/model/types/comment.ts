import { User } from 'entities/User/model/types/user';

export interface Comment {
    id: string;
    user: User;
    text: string;
}
