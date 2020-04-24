import React, { Component } from 'react';
import { connect } from 'react-redux';
import StopFinder from './StopFinder/index';
export class TripInfo extends Component {
    render() {
        return (
            <div>
                TripInfo
                <StopFinder/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TripInfo)
