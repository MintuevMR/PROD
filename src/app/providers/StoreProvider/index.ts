import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { StateSchema, reduxStoreWithManager, ThunkExtraArg } from './config/StateSchema';
import type { AppDispatch } from './config/store';

export {
    StoreProvider, createReduxStore, StateSchema, reduxStoreWithManager, AppDispatch, ThunkExtraArg,
};
