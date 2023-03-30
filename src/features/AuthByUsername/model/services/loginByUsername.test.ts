import axios from 'axios';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { userActions } from '../../../../entities/User';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
    test('success auth', async () => {
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(result.payload).toBe(userValue);
    });

    test('auth error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
