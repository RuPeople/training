import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
// jest отказывается воспринимать абсолютный путь
// TODO: Пофиксить абсолютный путь в jest
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t(
                'Error fetching profile',
                { ns: 'login' },
            ));
        }
    },
);
