import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
// jest отказывается воспринимать абсолютный путь
// TODO: Пофиксить абсолютный путь в jest
import { User, userActions } from '../../../../entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkApi.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue(i18n.t(
                'Incorrect username or password',
                { ns: 'login' },
            ));
        }
    },
);
