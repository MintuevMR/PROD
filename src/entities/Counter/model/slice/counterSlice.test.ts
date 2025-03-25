import { counterActions, counterReducer } from './CounterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
    test('slice inc', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });
});
