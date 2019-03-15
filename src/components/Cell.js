import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    render () {
        let {innerHTML} = this.props;

        return (
            <div className='calendar-cell'>
                {innerHTML}            
            </div>
        );
    }
}

export default Cell;
