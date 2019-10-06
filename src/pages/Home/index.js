import React, { useState, useEffect } from 'react';
import './style.scss';
import Child from "./components/Child";

function Home() {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');

    useEffect(() => {
        console.log('mounted');
        return function() {
            console.log('unmounted');
        }
    }, []);
    useEffect(() => {
        console.log('something changed');
    });
    useEffect(() => {
        console.log('count changed');
    }, [count]);

    function getChildData(value) {
        console.log('get child data', value);
    }

    return (
        <div className={'container'}>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                click me
            </button>
            <p>{fruit}</p>
            <Child count={count} childData={getChildData} />
        </div>
    )
}

export default Home;
