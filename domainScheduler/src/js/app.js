import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
//import Nav from './Common/Component/_nav/index';
import Navbar from './Common/Component/Navbar/index';
import Agencies from './Common/Component/Agency/index';
class App extends Component {
    render() { 
        return ( 
            <Provider store = { store } >
                <div>
                    
                    <Navbar/>
                    <Agencies/>
                </div>
            </Provider> 
            
        )
    }
}
 
export default App;