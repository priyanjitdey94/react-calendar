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

		let {selectedDate, isDaySelected} = this.getActiveDateRange(props) || {},
			curDate = new Date();

		selectedDate = selectedDate || curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear();
		isDaySelected = getFirstValue(isDaySelected, true);
		
		this.state = {
			selectedDate,
			isDaySelected
		};
	}

	getActiveDateRange (props) {
		let {selectedDate} = props,
			dateAr,
			date,
			isDaySelected = true;

		if (!selectedDate || typeof selectedDate !== 'string') {
			return;
		}

		dateAr = selectedDate.split('/');
		if (dateAr.length === 3) {
			date = new Date(+dateAr[2], +dateAr[1] - 1, +dateAr[0]);
			if (isNaN(+date)) {
				return;
			}
		} else if (dateAr.length === 2) {
			if (+dateAr[0] < 1 || +dateAr[0] > 12) {
				return;
			}
			isDaySelected = false;
		} else return;

		return {
			selectedDate,
			isDaySelected
		};
	}

	render() {
		let {selectedDate, isDaySelected} = this.state,
			dateAr = selectedDate.split('/');
		return (
			<div className="calendar-root">
				<Header 
					selectedDate={isDaySelected ? (dateAr[1] + '/' + dateAr[2]) : (dateAr[0] + '/' + dateAr[1])}
				/>
				<SubHeader />
				<Body
					selectedDate={selectedDate}
				/>
			</div>
		);
  	}
}

export default Calendar;
