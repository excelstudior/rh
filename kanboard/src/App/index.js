import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { Link,Route, Switch }from 'react-router-dom';
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
        console.log(this.props)
        return (
            <Provider store={store}>
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
