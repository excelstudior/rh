import './index.css';
import React, { Component } from 'react';
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="navbarWrapper">
                <div id="narbar">
                    <div id="logo"></div>
                    <h1 id='brand'>Home Inspector</h1>
                    <div>
                        <ul id='menu'>
                            <li className='menuItem'><span>Schedule</span></li>
                            <li className='menuItem'><a href="">Agents</a></li>
                            <li className='menuItem'><span className="fa fa-user"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;