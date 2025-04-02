import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUError = (state: StateSchema) => state?.loginForm?.error;
