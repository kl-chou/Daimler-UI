import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import Accounts from './Accounts';
import Home from './Home'

export default class App extends Component {
    render() {
        return (
            // <Accounts />)
            <Home />
        )
    };
}
registerRootComponent(App);
