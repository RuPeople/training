import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
// jest отказывается воспринимать абсолютный путь
// TODO: Пофиксить абсолютный путь в jest
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.post<Profile>('/profile', formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t(
                'Error updating profile',
                { ns: 'profile' },
            ));
        }
    },
);
