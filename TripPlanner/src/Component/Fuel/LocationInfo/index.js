import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css';
import * as actions from './action';
export class LocationInfo extends Component {
    
    render() {
        return (
            <div className='locationInfo'>
                <div className='locationInfo-wrapper'>
                    <div className='locationInfo-header'>
                        {/* get user agent/navigation agent, detect agent to change wording */}
                        <p>Location Not Found.</p> 
                        <p>Please Turn On Location Service.</p>
                        <p>Or set location below.</p>
                    </div>
                    <div className='locationInfo-content'>
                        <input type='text' placeholder='Postcode/Suburb'></input>
                        <span>SET</span>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, actions)(LocationInfo)
