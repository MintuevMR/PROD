import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createConfigureStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createConfigureStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
