import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

export class MultiSelector extends Component {
    render() {
        let {styling}=this.props;
        return (
            <div className='multiselector'>
                <div className={styling}>
                    <div className='multiselector-header'>header</div>
                    <div className='multiselector-body'>
                        <div className='multiselector-content'>
                            <ul>
                                <li><input type='checkbox' /><label>Label 1</label></li>
                                <li><input type='checkbox' /><label>Label 2</label></li>
                                <li><input type='checkbox' /><label>Label 3</label></li>
                            </ul>
                        </div>
                        <div className='multiselector-footer'>
                            <span>Cancel</span>
                            <span>Update</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelector)
