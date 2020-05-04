import React, { Component } from 'react'
import { connect } from 'react-redux';
import './index.css';
import { map } from 'googleConfig';
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import fuel from '../reducer';
import { convertRemToPx } from '../../../Util/style';

export class MapView extends Component {
    constructor(props){
        super(props)
        this.mapBody=React.createRef()
    }
    componentDidMount(){
        console.log(this.props)
        window.initGoogleMap=this.initializeMap;
        console.log(window.initGoogleMap)

        const googleMapScript=document.createElement('script')
        googleMapScript.src=`https://maps.googleapis.com/maps/api/js?key=${map.apiKey}&libraries=drawing,geometry&callback=initGoogleMap`
        googleMapScript.async=true;
        googleMapScript.defer=true;
        window.document.body.appendChild(googleMapScript);
    }

    /**
     * Calculate base on bottom distance of 3rem
     */
    setMapBodyHeight = ()=>{
        return screen.height
        //return screen.height-convertRemToPx(3)
    }
    initializeMap=()=>{
        let { latitude,longitude} =this.props.location;
        let mapInstance=this.createGoogleMap(latitude,longitude,16,this.mapBody.current);
        let marker =this.createMarker(latitude,longitude);
        marker.setMap(mapInstance)
        console.log(marker,mapInstance)

    }
    createGoogleMap =(lat,lng,zoom,mapElement)=> {
      return  new window.google.maps.Map(mapElement,{
            zoom,
            center:{
                lat,
                lng
            },
            disableDefaultUI:true
        })
    }
    createMarker = (lat,lng)=> {
      return  new window.google.maps.Marker({
        position: { lat, lng } ,
    })}
    render() {
        let { location }=this.props
        let mapBodyHeight=this.setMapBodyHeight()+'px'
        console.log(mapBodyHeight)
        return (
            <div className='mapview'>
                <div className ='mapview-header'>
                    MAP VIEW | List View
                </div>
                <div className='mapview-map' 
                        ref={this.mapBody} 
                        style={{height:mapBodyHeight}}> 
                
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fuel:state.fuel
})



export default connect(mapStateToProps)(MapView)
