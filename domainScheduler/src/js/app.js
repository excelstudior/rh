import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Nav from '../js/Common/Component/nav/index';
class App extends Component {
    render() { 
        return ( 
            <Provider store = { store } >
                <div>
                    <Nav/>
                </div>
            </Provider> 
            
        )
    }
}
 
export default App;