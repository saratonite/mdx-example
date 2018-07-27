import React, { Component , Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navigation from './Navigation.mdx';
import Hello from './Home.mdx';
import About from './About.mdx';


const App = () => (
    
    <BrowserRouter>
        <Fragment>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={ Hello   } />
                <Route path="/about" component={ About   } />

            </Switch>
        </Fragment>
        
    </BrowserRouter>
   
)

render(<App/>, document.getElementById('app'))