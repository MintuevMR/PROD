import { Reducer } from '@reduxjs/toolkit';
import { reduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [keyName in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

const DynamicModuleLoader: FC<{ children: ReactNode, reducers: ReducerList, removeAfter?: boolean }> = (props) => {
    const store = useStore() as reduxStoreWithManager;
    const dispatch = useDispatch();

    const {
        children,
        reducers,
        removeAfter = true,
    } = props;

    useEffect(() => {
        Object.entries(reducers).forEach(([keyName, reducer]: ReducerListEntry) => {
            store.reducerManager.add(keyName, reducer);
            dispatch({ type: `${keyName}/init` });
        });

        return () => {
            if (removeAfter) {
                Object.entries(reducers).forEach(([keyName]: ReducerListEntry) => {
                    store.reducerManager.remove('loginForm');
                    dispatch({ type: `${keyName}/destroy` });
                });
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>

    );
};

export default DynamicModuleLoader;
