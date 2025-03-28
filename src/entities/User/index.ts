import { User } from './ui/User';
import type { UserSchema } from './model/types/user';
import { userActions, userReducer } from './model/slice/UserSlice';
import { getUserAuthData } from './model/selectors/getAuthData/getAuthData';

export {
    User,
    UserSchema,
    userActions,
    userReducer,
    getUserAuthData,
};
