import React, { Component } from 'react';
import WebFont from 'webfontloader';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Body from './components/Body';
import './Calendar.css';
import { getFirstValue } from './utils/methods';

WebFont.load({
	google: {
		families: ['Raleway']
	}
});

class Calendar extends Component {
	constructor (props) {
		super(props);

		let {dd, mm, yy} = this.getActiveDateRange(props) || {},
			curDate = new Date();

		dd = getFirstValue(dd, curDate.getDate());
		mm = getFirstValue(mm, curDate.getMonth());
		yy = getFirstValue(yy, curDate.getFullYear());
		
		this.state = {
			dd,
			mm,
			yy,
			selectedDate: dd,
			selectedMonth: mm,
			selectedYear: yy
		};
	}

	getActiveDateRange (props) {
		let {selectedDate} = props,
			dateAr,
			date,
			dd,
			mm,
			yy;

		if (!selectedDate || typeof selectedDate !== 'string') {
			return;
		}

		dateAr = selectedDate.split('/');
		if (dateAr.length === 3) {
			date = new Date(+dateAr[2], +dateAr[1] - 1, +dateAr[0]);
			if (isNaN(+date)) {
				return;
			}
			dd = +dateAr[0];
			mm = dateAr[1] - 1;
			yy = +dateAr[2];
		} else if (dateAr.length === 2) {
			if (+dateAr[0] < 1 || +dateAr[0] > 12) {
				return;
			}
			mm = dateAr[0] - 1;
			yy = +dateAr[1];
		} else return;

		return {
			dd,
			mm,
			yy
		};
	}

	render () {
		let {dd, mm, yy} = this.state;
		return (
			<div className='calendar-root'>
				<Header 
					mm={mm}
					yy={yy}
					onMonthYearChange={this.onMonthYearChange}
				/>
				<div className='separator'></div>
				<SubHeader />
				<Body
					dd={dd}
					mm={mm}
					yy={yy}
					onDayChange={this.onDayChange}
				/>
			</div>
		);
	}
	
	onDayChange = dd => {
		let {mm, yy} = this.state;
		this.setState({
			dd: +dd,
			selectedDate: +dd,
			selectedMonth: mm,
			selectedYear: yy
		});
	}

	onMonthYearChange = newDate => {
		let {mm, yy, selectedYear, selectedMonth, selectedDate} = this.state,
			newYY = +getFirstValue(newDate.yy, yy),
			newMM = +getFirstValue(newDate.mm, mm),
			date = new Date(newYY, newMM),
			dd;

		mm = date.getMonth();
		yy = date.getFullYear();
		if (selectedYear === yy && selectedMonth === mm) {
			dd = selectedDate;
		} else {
			dd = undefined;
		}
		this.setState({
			yy,
			mm,
			dd
		});
	}
}

export default Calendar;
