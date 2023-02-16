import { useState } from 'react';
import classes from './styles.module.scss'

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(() => {
            return count + 1
        })
    }

    return (
        <div >
            <span>{count}</span>
            <button className={classes.btn} onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;