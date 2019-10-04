import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './app.css';
//import Nav from './Common/Component/_nav/index';
import Navbar from './Common/Component/Navbar/index';
import Agencies from './Common/Component/Agency/index';
import ModalWrapper from './Common/Component/Common/Modal/index';
class App extends Component {
    render() { 
        return ( 
            <Provider store = { store } >
                    <ModalWrapper title='i am not titleless' message="dddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"/>
                    <Navbar/>
                    <Agencies/>
            </Provider> 
            
        )
    }
}
 
export default App;