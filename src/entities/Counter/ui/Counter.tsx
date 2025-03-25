import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const increment = () => { dispatch(counterActions.increment()); };
    const decrement = () => { dispatch(counterActions.decrement()); };
    return (
        <div>
            <h1 data-testID="value-title">{value}</h1>
            <Button data-testID="increment-btn" onClick={increment}>increment</Button>
            <Button data-testID="decrement-btn" onClick={decrement}>decrement</Button>
        </div>
    );
};

export default Counter;
