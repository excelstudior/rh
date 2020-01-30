import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class menuItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.childrenNodes=React.createRef();    
        this.state={isShow:false}
    }


    render() {
        let { children, title,node,icon,path } = this.props;
        let styling = node == 0 ? 'navMenu-top':'navMenu-side'
        path= path!=undefined? path : '/'
        return  (
            children != undefined 
            ? <li className={styling} title={title} >
                {icon!=undefined?<i className={icon}></i>:''}
                <Link to={path} className='navMenu-item'>{title}</Link>
                {/* <a className='navMenu-item' {path!=undefined && href}>{title}</a>  */}
                {<ul ref={this.childrenNodes} className='navMenu-sub'>
                {children}
                </ul>}
                </li>
            : <li className={styling} title={title}>
                {icon!=undefined?<i className={icon}></i>:''}
                <Link to={path} className='navMenu-item'>{title}</Link>
                {/* <a className='navMenu-item'>{title}</a> */}
                </li>
        );
    }
}

menuItem.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        auth:state.auth
    };
}

export default connect(mapStateToProps)(menuItem);
