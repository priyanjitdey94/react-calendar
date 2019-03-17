import React, { Component } from 'react';
import './Header.css';
import { months } from '../utils/constants';

class Header extends Component {
    render () {
        let {mm, yy} = this.props;

        return (
            <div className='calendar-header'>
                <div className='calendar-nav calendar-nav-left'>‹‹</div>
                <div className='calendar-nav calendar-nav-left'>‹</div>
                <div className='calendar-header-title'>
                    <span>{months[mm]}</span> <span>{yy}</span>
                </div>
                <div className='calendar-nav calendar-nav-right'>›</div>
                <div className='calendar-nav calendar-nav-right'>››</div>
            </div>
        );
    }
}

export default Header;
