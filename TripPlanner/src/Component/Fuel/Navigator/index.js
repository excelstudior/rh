import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css';
import { MULTISELECTOR_HEADER_TITLE_FUEL_TYPE
    ,MULTISELECTOR_HEADER_TITLE_FUEL_BRAND 
    ,CONTENT_FUEL_TYPE_LIST
    ,CONTENT_FUEL_BRAND_LIST} from '../constant';

export class Navigator extends Component {


    onItemClick = ()=>{console.log(event.target.title)
        this.props.showContent(event.target.title)
    }
    render() {
        let rp=this.props;
        let st=this.state;
        console.log(rp,st)
        return (
            <div className='navigator'>
                <ul>
                    <li title={CONTENT_FUEL_BRAND_LIST} onClick={this.onItemClick}>{MULTISELECTOR_HEADER_TITLE_FUEL_BRAND}</li>
                    <li title={CONTENT_FUEL_TYPE_LIST} onClick={this.onItemClick}>{MULTISELECTOR_HEADER_TITLE_FUEL_TYPE}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   
})



export default connect(mapStateToProps)(Navigator)
