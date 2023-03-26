import { act, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { userEvent, waitFor } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });
    test('Test increment button', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        act(() => {
            userEvent.click(screen.getByTestId('counter-increment-btn'));
        });
        await waitFor(() => {
            expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
        });
    });
    test('Test decrement button', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        act(() => {
            userEvent.click(screen.getByTestId('counter-decrement-btn'));
        });
        await waitFor(() => {
            expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
        });
    });
});
