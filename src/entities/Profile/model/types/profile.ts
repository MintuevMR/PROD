export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number,
    currency?: string;
    country?: string;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
