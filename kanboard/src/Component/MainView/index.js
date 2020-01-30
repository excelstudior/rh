import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Common/Header/index';
import { getUserPermissions } from  '../MainView/action';
import Dashboard from '../Dashboard/index';

class MainView extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        return (
            <div className='mainview'>
            </div>
        );
    }
}

MainView.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        auth:state.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
       getUserPermissions:()=>{dispatch(getUserPermissions())}
    };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainView));
