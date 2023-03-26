import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { userReducer, userActions } from './model/slice/userSlice';
import { UserSchema } from './model/types/user';
import type { User } from './model/types/user';

export {
    getUserAuthData,
    userReducer, userActions,
    UserSchema,
    User,
};
