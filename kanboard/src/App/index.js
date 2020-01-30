import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { Route, Switch,Link }from 'react-router-dom';
import Header from '../Component/Common/Header/index';
import routes from './routes';


class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    renderRoutes = (routes)=>{
        return routes.map((route,i)=>{
            return <Route key={i}
                          path={route.path} 
                          render={(props)=>{
                                return <route.component {...props} />
                          }} 
                          exact={route.exact}/>
        })}

    render() {
        return (
            <Provider store={store}>
                <Header/>
                <Switch>
                   {this.renderRoutes(routes)}
                </Switch>
            </Provider>
        );
    }
}


App.propTypes = {
    
};

export default DragDropContext(HTML5Backend)(App);
