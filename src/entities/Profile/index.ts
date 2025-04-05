import ProfileCard from './ui/ProfileCard/ProfileCard';

export { fetchProfileData } from './services/fetchProfileData/fetchProfileData';
export { profileActions, profileReducer } from './model/slice/ProfileSlice';
export type { Profile, ProfileSchema } from './model/types/profile';
export { ProfileCard };
