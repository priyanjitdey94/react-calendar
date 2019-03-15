import React, { Component } from 'react';
import { TOTAL_DATE_CELLS, NUMBER_OF_DATE_ROWS } from '../utils/constants';
import Cell from './Cell';
import './Body.css'

class Body extends Component {
    constructor (props) {
        super(props);

        let {selectedDate} = props,
            curDate,
            curMonth,
            curYear;

        selectedDate = selectedDate.split('/');
        curDate = +(selectedDate[0].trim());
        curMonth = +(selectedDate[1].trim()) - 1;
        curYear = +(selectedDate[2].trim());

        this.state = {
            curDate,
            curMonth,
            curYear
        };
    }

    generateDateRows () {
        let {curDate, curMonth, curYear} = this.state,
            date = new Date(curYear, curMonth, curDate),
            monthStart = new Date(curYear, curMonth, 1),
            dayStartIndex = monthStart.getDay(),
            interactive = true,
            selected = false,
            i,
            j,
            cellCount = 0,
            dateCells = [],
            dateRows = [];

        for (i = 0; i < dayStartIndex; i++, cellCount++) {
            date = (new Date(curYear, curMonth, i - dayStartIndex + 1)).getDate();

            dateCells.push(
                <Cell
                    key={cellCount}
                    innerHTML={(date < 10 ? '0' : '') + date} 
                    interactive={false}
                    selected={selected}
                /> 
            );
        }

        for (i = 1; cellCount < TOTAL_DATE_CELLS; i++, cellCount++) {
            date = new Date(curYear, curMonth, i);
            if (date.getMonth() !== monthStart.getMonth()) {
                interactive = false;
            } else {
                interactive = true
                if (date.getDate() === curDate) {
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
