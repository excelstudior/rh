import React, { Component } from 'react'
import { connect } from 'react-redux'

export class UserBanner extends Component {
    render() {
        return (
            <div>
                UserBanner
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBanner)
