import { Profile, ValidateProfileErrors } from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.INCORRECT_USER_DATA];
    }

    const { first, lastname } = profile;
    const errors: ValidateProfileErrors[] = [];

    if (!first?.trim() || !lastname?.trim()) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    return errors;
};
