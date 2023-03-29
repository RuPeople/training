import { LoginSchema } from 'features/AuthByUsername';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
        };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('admin123'),
        )).toEqual({ username: 'admin123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '',
        };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toEqual({ password: '123' });
    });
});
