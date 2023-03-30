import React, { PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/store/useAppDispatch';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    dontRemoveAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: PropsWithChildren<DynamicModuleLoaderProps>) => {
    const {
        children, reducers, dontRemoveAfterUnmount = false,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]) => {
            store.reducerManager.add(key as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${key} reducer` });
        });

        return () => {
            if (dontRemoveAfterUnmount) {
                return;
            }

            Object.entries(reducers).forEach(([key]) => {
                store.reducerManager.remove(key as StateSchemaKey);
                dispatch({ type: `@DESTROY ${key} reducer` });
            });
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
