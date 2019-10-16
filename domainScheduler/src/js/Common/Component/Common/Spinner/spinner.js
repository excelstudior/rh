import React, { Component } from 'react';
import './spinner.css';
class Spinner extends Component {

    constructor(props){
        super(props);
        this.state={
            width:'90',
            height:'90',
            marginTop:'',
            color:'#0ea800'
        }
    }
    componentWillMount () {
        if(!isNaN(this.props.width) && !isNaN(this.props.height)){
            if (this.props.width===this.props.height){
                let width=this.props.width;
                let height=this.props.height;
                this.setState({
                    width,
                    height
                })
            }
        }
        if(this.props.color !=undefined && 
            this.IsValidColor(this.props.color)){
            let newColor=this.props.color;
            this.setState({
                color:newColor
            })
        }
        if (this.props.marginTop != undefined && !isNaN(this.props.marginTop)){
            let marginTop=this.props.marginTop
            this.setState({
                marginTop,
            })
        }

    }

    IsValidColor = (strColor) =>{
        let el=new Option().style;
        el.color=strColor;
        return el.color !=='';
    }
    render() { 
        let { width, height, color,marginTop }=this.state;
        
        let mLeft=-width/2+'px';
        let mTop=marginTop !=''?marginTop+'px':-height/2+'px';
        let bColor=color+' transparent '+color+' transparent';
        width=width+'px';
        height=height+'px';
        return (  
            <div className="lds-dual-ring"
                style={{"width":width,
                        "height":height,
                        "margin-left":mLeft,
                        "margin-top":mTop,
                        "border-color":bColor
                    }}
                 ></div>
        )
    }
}
 
export default Spinner;