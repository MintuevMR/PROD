import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import Counter from './Counter';

describe('Counter', () => {
    test('value-title', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
});
