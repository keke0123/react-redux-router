import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <p>app page</p>
            <Router>
                <Switch>
                    {/*exact 안써주면 화면 안나옴*/}
                    <Redirect exact from={'/'} to={'/home/1'}/>
                    <Route path={`/home/:id`} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
