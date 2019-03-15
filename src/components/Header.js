import React, { Component } from 'react';
import './Header.css';
import { months } from '../utils/constants';

class Header extends Component {
    render () {
        let {selectedDate} = this.props,
            mm;

        selectedDate = selectedDate.split('/');
        mm = +(selectedDate[1].trim()) - 1;
        return (
            <div className='calendar-header'>
                <div className='calendar-nav calendar-nav-left'>‹</div>
                <div className='calendar-header-title'>{months[mm]} {selectedDate[2].trim()}</div>
                <div className='calendar-nav calendar-nav-right'>›</div>
            </div>
        );
    }
}

export default Header;
