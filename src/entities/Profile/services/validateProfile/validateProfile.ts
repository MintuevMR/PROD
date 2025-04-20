import { Profile, ValidateProfileErrors } from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.INCORRECT_USER_DATA];
    }

    const { firstname, lastname } = profile;
    const errors: ValidateProfileErrors[] = [];

    if (!firstname?.trim() || !lastname?.trim()) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    return errors;
};
