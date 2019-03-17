import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    render () {
        let {innerHTML, highlightedCSS, enabledCSS, disabledCSS, uniqueCSS,
                interactive, selected} = this.props,
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
            <div className={classNames} onClick={this.onClickHandler}>
                {innerHTML}            
            </div>
        );
    }

    onClickHandler = () => {
        let {onClick, innerHTML, interactive, selected} = this.props;

        if (interactive && !selected && typeof onClick === 'function') {
            onClick(innerHTML);
        }
    }
}

export default Cell;
