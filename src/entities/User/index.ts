import { User } from './ui/User';
import type { UserSchema } from './model/types/user';
import { userActions, userReducer } from './model/slice/UserSlice';
import { getUserAuthData } from './model/selectors/getAuthData/getAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    User,
    UserSchema,
    userActions,
    userReducer,
    getUserAuthData,
    getUserInited,
};
