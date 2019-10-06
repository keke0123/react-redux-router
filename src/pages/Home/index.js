import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import Child from "./components/Child";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {
    addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters
} from '../../store/actions';

function Home(props, ref) {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');

    const inputEl = useRef(null);

    const selector = useSelector(state => state);
    const visibilityFilter = useSelector(state => state.visibilityFilter);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('mounted');
        console.log('props', props);
        console.log('match', props.match);
        console.log('ref', ref);
        dispatch(addTodo('Learn about actions'));
        dispatch(addTodo('Learn about reducers'));
        dispatch(addTodo('Learn about store'));
        dispatch(toggleTodo(0));
        dispatch(toggleTodo(1));
        dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
        console.log('selector', selector);
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

    function getSelector() {
        console.log('selector', selector);
    }

    return (
        <div className={'container'}>
            <button onClick={getSelector}>redux button</button>
            <button onClick={refButton}>ref button</button>
            <p ref={inputEl}><span>You Clicked {count} times</span></p>
            <button onClick={() => setCount(count+1)}>
                click me
            </button>
            <p>{fruit}</p>
            <Link className={'link'} to={`${props.match.url}/child`}>child</Link>
            <Route path={`${props.match.url}/child`}>
                <Child count={count} childData={getChildData} />
            </Route>
        </div>
    )
}

export default Home;
