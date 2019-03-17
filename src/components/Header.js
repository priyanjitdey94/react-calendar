import React, { Component } from 'react';
import './Header.css';
import { months } from '../utils/constants';

class Header extends Component {
    render () {
        let {mm, yy} = this.props;

        return (
            <div className='calendar-header'>
                <div className='calendar-nav calendar-nav-left' onClick={() => this.changeMonth('yy', -1)}>‹‹</div>
                <div className='calendar-nav calendar-nav-left' onClick={() => this.changeMonth('mm', -1)}>‹</div>
                <div className='calendar-header-title'>
                    <span className='calendar-title-highlight'>{months[mm]}</span> <span className='calendar-title-highlight'>{yy}</span>
                </div>
                <div className='calendar-nav calendar-nav-right' onClick={() => this.changeMonth('mm', 1)}>›</div>
                <div className='calendar-nav calendar-nav-right' onClick={() => this.changeMonth('yy', 1)}>››</div>
            </div>
        );
    }

    changeMonth = (field, offset) => {
        this.props.onMonthYearChange({
            [field]: this.props[field] + offset
        });
    }
}

export default Header;
