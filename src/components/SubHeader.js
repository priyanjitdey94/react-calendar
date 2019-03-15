import React, { Component } from 'react';
import Cell from './Cell';
import './SubHeader.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
class SubHeader extends Component {
    render () {
        let i,
            len = days.length,
            cellAr = [];

        for (i = 0; i < len; i++) {
            cellAr.push(
                <Cell key={i}
                    innerHTML={days[i]}
                />
            );
        }
        return (
            <div className='calendar-sub-header'>
                {cellAr}
            </div>
        );
    }
}

export default SubHeader;
