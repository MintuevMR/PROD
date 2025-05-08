import { Reducer } from '@reduxjs/toolkit';
import { reduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [keyName in StateSchemaKey]?: Reducer<NonNullable<StateSchema[keyName]>>;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

const DynamicModuleLoader: FC<{ children: ReactNode, reducers: ReducerList, removeAfterUnmount?: boolean }> = (props) => {
    const store = useStore() as reduxStoreWithManager;
    const dispatch = useDispatch();

    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;

    useEffect(() => {
        Object.entries(reducers).forEach(([keyName, reducer]) => {
            store.reducerManager.add(keyName as StateSchemaKey, reducer);
            dispatch({ type: `${keyName}/init` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([keyName]) => {
                    store.reducerManager.remove(keyName as StateSchemaKey);
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
