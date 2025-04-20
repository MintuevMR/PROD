import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import ProfileCard from './ui/ProfileCard/ProfileCard';
import { getProfileValidateErrors } from './model/selectors/getProfileValidateError/getProfileValidateErrors';

export { updateProfileeData } from './services/updateProfileData/updateProfileData';

export { fetchProfileData } from './services/fetchProfileData/fetchProfileData';

export { profileActions, profileReducer } from './model/slice/ProfileSlice';
export type { Profile, ProfileSchema } from './model/types/profile';
export { ProfileCard };
export {
    getProfileData, getProfileError, getProfileLoading, getProfileReadOnly, getProfileForm, getProfileValidateErrors,
};
