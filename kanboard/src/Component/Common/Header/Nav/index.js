import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuItem from './menuItem';
import './index.css';
import menuItems from '../../../../App/navMenuItems';

class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    renderMenuItem = (item,i,node) => {
        if (item.children == undefined){
                return <MenuItem key={i} node={node} title={item.value} icon={item.icon} path={item.path}/>
        } else {
                let childrenNode=item.children.map((child,i)=>{
                    return this.renderMenuItem(child,i,node+1);
                })
                return <MenuItem key={i} node={node} title={item.value} icon={item.icon} path={item.path}>
                   {childrenNode}
                </MenuItem>
        }

    }
    renderMenuItems = ()=>{
        return (
            <div className='navMenu'>
                <ul>
                    {menuItems.map((menu,i)=>{
                       return  this.renderMenuItem(menu,i,0)
                    })}
                </ul>
            </div>
        )
    }
    render() {
       console.log(menuItems)
        return  (
            <div className='navContainer'>
                {this.renderMenuItems()}
            </div>
        );
    }
}

Nav.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        auth:state.auth
    };
}

export default connect(mapStateToProps)(Nav);
