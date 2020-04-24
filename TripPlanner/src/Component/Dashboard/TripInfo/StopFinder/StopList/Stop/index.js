import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Stop extends Component {
    render() {
        let { name }=this.props;
        return (
            <div>
                <div>{name }</div>
                <div>
                    <span>Parent</span>
                    <span>Mode 1</span>
                    <span>Mode 2</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Stop)
