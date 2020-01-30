import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import UserMenu from './UserMenu/index';

class Shortcut extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        return (
            <div className='shortcut'>
                <ul>
                    <li><UserMenu/></li>
                </ul>
            </div>
        );
    }
}

Shortcut.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

export default connect(mapStateToProps)(Shortcut);
