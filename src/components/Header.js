import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <div className='calendar-header'>
                <div className='calendar-nav calendar-nav-left'>‹</div>
                <div className='calendar-header-title'>February 2019</div>
                <div className='calendar-nav calendar-nav-right'>›</div>
            </div>
        );
    }
}

export default Header;
