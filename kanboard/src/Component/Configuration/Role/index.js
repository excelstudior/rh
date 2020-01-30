import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Role extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        return (
            <div>Roles</div>
        );
    }
}

Role.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

export default connect(mapStateToProps)(Role);
