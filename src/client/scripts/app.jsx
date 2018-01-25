// Import styles

import '../styles/styles.less';

// Import library scripts

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

// Import pages

import Home from './pages/home.jsx';
import Presentation from './pages/presentation.jsx';
import Controller from './pages/controller.jsx';

class App extends React.Component {

    constructor () {
        super();

        this.state = {};
    }

    render () {
        return (
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/present' component={Presentation} />
                <Route path='/control' component={Controller} />
            </div>
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
), document.getElementById('page'));
