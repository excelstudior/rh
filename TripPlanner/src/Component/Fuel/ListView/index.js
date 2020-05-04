import React, { Component } from 'react'
import { connect } from 'react-redux';
import './index.css'

export class ListView extends Component {
    render() {
        return (
            <div>
                ListView
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
