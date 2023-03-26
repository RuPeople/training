import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('Should decrement value', () => {
        const state: CounterSchema = {
             value: 10,
        };

        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('Should increment value', () => {
        const state: CounterSchema = {
             value: 10,
        };

        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('Should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
