import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css';
import * as actions from './action';
export class LocationInfo extends Component {
    constructor(props){
        super(props)
        this.searchInputText=React.createRef();
        this.state={
            autoComplete:null,
            lat:0,
            lng:0
        }
    }
    componentWillReceiveProps(nextprops){
        console.log('next props ',nextprops)
        if ((nextprops.googleMap!=undefined ||nextprops.googleMap!=null)){
            this.initGoogleMapAutoCompleteObj(nextprops.googleMap)
        }
        
    }
    initGoogleMapAutoCompleteObj =(googleMap) =>{
        let autoCompleteOptions={
            types: ['(cities)'],
            componentRestrictions: {country: 'au'}
        }
        let autoComplete=new googleMap.maps.places.Autocomplete(this.searchInputText.current, autoCompleteOptions);
        console.log('auto   ',autoComplete)
        autoComplete.addListener('place_changed', this.onPlaceChanged);
        this.setState({
            autoComplete
        })
      
    }

    onPlaceChanged = ()=>{
        console.log(this.props)
        let places=this.state.autoComplete.getPlace();
     
        console.log(places.geometry.location.lat())
        this.setState({
            lat:places.geometry.location.lat(),
            lng:places.geometry.location.lng()
        })
    }

    setGeoLocation = () =>{
        let location={};
        location.latitude=this.state.lat;
        location.longitude=this.state.lng;
        this.props.setLocation(location)
    }
    onSearchFocus=()=>{
        event.target.select()
    }
    onGoogleMapReady = ()=>{
       return  this.props.googleMap !=undefined
    }
    
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
                        <input type='text' 
                                placeholder='Postcode/Suburb' 
                                disable={this.onGoogleMapReady} 
                                onFocus={this.onSearchFocus}
                                ref={this.searchInputText}></input>
                        <span onClick={this.setGeoLocation}>SET</span>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, actions)(LocationInfo)
