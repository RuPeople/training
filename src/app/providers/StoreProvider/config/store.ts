import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { StateSchema } from './StateSchema';
// Почему-то тесты валятся от абсолютных импортов
// TODO: Пофиксить проблему с абсолютными импортами
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
