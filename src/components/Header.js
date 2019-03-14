import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <div className='calendar-header'>
                <div className='calendar-nav calendar-nav-left'>&lt;</div>
                <div className='calendar-header-title'>February 2019</div>
                <div className='calendar-nav calendar-nav-right'>&gt;</div>
            </div>
        );
    }
}

export default Header;
