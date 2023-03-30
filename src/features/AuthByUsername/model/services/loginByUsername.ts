import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
// jest отказывается воспринимать абсолютный путь
// TODO: Пофиксить абсолютный путь в jest
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from '../../../../entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            if (extra.navigate) {
                extra?.navigate('/profile');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t(
                'Incorrect username or password',
                { ns: 'login' },
            ));
        }
    },
);
