import { User } from './ui/User';
import type { UserSchema } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';

export {
    User,
    UserSchema,
    userActions,
    userReducer,
};
