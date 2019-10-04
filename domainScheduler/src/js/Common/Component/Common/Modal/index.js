import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';

class ModalWrapper extends Component {
    constructor(props){
        super(props)
        this.state={
            show:'hide',
            dimensions:null
        }
        this.wrapper=React.createRef();
    }
    componentDidMount(){
        this.setState({
            show:'show'
        })
    }
    close = () =>{
        this.setState({
            show:'hide'
        })
    }

    renderInner= ()=>{
        // let { dimensions }=this.state;
        let { show, dimensions }=this.state;
        let { title,message,children }=this.props;
        console.log(title)
        return (
            <div className={`modalInner ${show}`}>       
            {/* <div className='modalInner'>        */}
            <div className='modal-content'>
                    {title!==''&& title!==undefined ?<span className='modal-title'>{ title }</span>:''}
                    <p className='modal-message'>{ message }</p>
            </div>
                    
            <div id='modal-btnGroup' >
                <ul>
                    <li onClick={this.close} id='modal-close'>CLOSE</li>
                        {children}
                </ul>
            </div>        
            </div>
        )
    }

    render() { 
        
        let { show,dimensions }=this.state;
        return (
            <div className='modalWrapper' ref={this.wrapper}>
            {/* <div className={`modalWrapper ${show} `} ref={this.wrapper}> */}
                {/* {dimensions&&this.renderInner()} */}
                {this.renderInner()}
            </div>
        );
    }
}
ModalWrapper.propTypes={
    title:PropTypes.string,
    message:PropTypes.string.isRequired
}


const mapStateToProps= (state) => {
    // return {
    //     agencyInfo:state.agencyInfo
    // }
}
const mapDispatchToProps = ( dispatch ) =>({
    // loadNextPage:( criteria, pageNumber ) => dispatch ( getAgencies ( criteria,pageNumber ) ),
    // searchAgencies: ( criteria, pageNumber ) => dispatch ( getAgencies ( criteria,pageNumber ) ),
    // resetCriteriaAndSearchAgencies:( criteria,pageNumber )=>{
    //     dispatch ( resetAgencySearchCriteria( criteria ) )
    //     dispatch ( getAgencies( criteria, pageNumber ) )
    // },
    // getAgencyDetails:( agencyId )=>dispatch ( getAgencyDetailsById( agencyId ) )
})
// export default connect(mapStateToProps,mapDispatchToProps)(ModalWrapper);
export default connect()(ModalWrapper);