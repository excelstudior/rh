import React, { Component } from 'react'
import { connect } from 'react-redux'
import Stop from'./Stop/index';

export class StopList extends Component {
    
    render() {
        let stopList=this.props.stopList
        return (
            <div>
                <ul>
                    {stopList.map((stop,i)=>{
                        return <li key={i}>
                                <Stop  name={stop.name}/>
                            </li>
                    })}
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    stopList:state.stopFinder.stopList
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(StopList)
