import './index.css';
import api from '../../../../images/ApiConnect.png';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="navbarWrapper">
                <div id="narbar">
                    <div id="logo"></div>
                    <h1 id='brand'>House Inspector</h1>
                    <div>
                        <ul id='menu'>
                            <li className='menuItem'><span>Schedule</span></li>
                            <li className='menuItem'><a href="">Agents</a></li>
                            <li className='menuItem'><img src={api} alt='Connect to domain api'></img></li>
                            <li className='menuItem'><span className="fa fa-user"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mode: state.nav.mode
    }
}

const mapStateToDispatch = () => {
    
}

export default connect( mapStateToProps )(NavBar);