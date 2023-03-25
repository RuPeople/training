import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
// Почему-то тесты валятся от абсолютных импортов
// TODO: Пофиксить проблему с абсолютными импортами
import { counterReducer } from '../../../../entity/Counter';
import { userReducer } from '../../../../entity/User';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
