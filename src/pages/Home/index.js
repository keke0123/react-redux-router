import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import Child from "./components/Child";

function Home() {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');

    const inputEl = useRef(null);

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

    function refButton() {
        console.log(inputEl);
    }

    return (
        <div className={'container'}>
            <button onClick={refButton}>ref button</button>
            <p ref={inputEl}><span>You Clicked {count} times</span></p>
            <button onClick={() => setCount(count+1)}>
                click me
            </button>
            <p>{fruit}</p>
            <Child count={count} childData={getChildData} />
        </div>
    )
}

export default Home;