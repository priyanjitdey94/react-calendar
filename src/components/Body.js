import React, { Component } from 'react';
import { TOTAL_DATE_CELLS, NUMBER_OF_DATE_ROWS } from '../utils/constants';
import Cell from './Cell';
import './Body.css'

class Body extends Component {
    generateDateRows () {
        let {dd, mm, yy, onDayChange} = this.props,
            date = new Date(yy, mm, dd),
            monthStart = new Date(yy, mm, 1),
            dayStartIndex = monthStart.getDay(),
            interactive = true,
            selected = false,
            i,
            j,
            cellCount = 0,
            dateCells = [],
            dateRows = [];

        for (i = 0; i < dayStartIndex; i++, cellCount++) {
            date = (new Date(yy, mm, i - dayStartIndex + 1)).getDate();

            dateCells.push(
                <Cell
                    key={cellCount}
                    innerHTML={(date < 10 ? '0' : '') + date} 
                    interactive={false}
                    selected={selected}
                    onClick={onDayChange}
                /> 
            );
        }

        for (i = 1; cellCount < TOTAL_DATE_CELLS; i++, cellCount++) {
            date = new Date(yy, mm, i);
            if (date.getMonth() !== monthStart.getMonth()) {
                interactive = false;
            } else {
                interactive = true;
                if (date.getDate() === dd) {
                    selected = true;
                } else {
                    selected = false;
                }
            };
            
            date = date.getDate();
            
            dateCells.push(
                <Cell
                    key={cellCount}
                    innerHTML={(date < 10 ? '0' : '') + date} 
                    interactive={interactive}
                    selected={selected}
                    onClick={onDayChange}
                /> 
            );
        }

        for (i = 0, j = 0; j < NUMBER_OF_DATE_ROWS; i += 7, j++) {
            dateRows.push(
                <div className='calendar-body-row' key={j} >
                    {dateCells.slice(i, i + 7)}
                </div>
            );
        }

        return dateRows;
    }

    render () {
        return (
            <div className='calendar-body'>
                {this.generateDateRows()}
            </div>
        );
    }
}

export default Body;
