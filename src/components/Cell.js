import React, { Component } from 'react';
import './Cell.css';
import { getFirstValue } from '../utils/methods';

class Cell extends Component {
    constructor (props) {
        super(props);

        this.state = {
            interactive: getFirstValue(props.interactive, true),
            selected: getFirstValue(props.selected, false)
        }
    }
    render () {
        let {innerHTML, highlightedCSS, enabledCSS, disabledCSS, uniqueCSS} = this.props,
            {interactive, selected} = this.state,
            classNames = 'calendar-cell';

        if (!interactive) {
            classNames += ' ' + (disabledCSS || ' disabled-cell ');
        } else {
            classNames += ' ' + (enabledCSS || ' enabled-cell ') + (uniqueCSS || '');
            if (selected) {
                classNames += (highlightedCSS || ' highlighted-cell ');
            }
        }
        return (
            <div className={classNames}>
                {innerHTML}            
            </div>
        );
    }
}

export default Cell;
