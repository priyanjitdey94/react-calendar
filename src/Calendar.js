import React, { Component } from 'react';
import WebFont from 'webfontloader';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Body from './components/Body';
import './Calendar.css';

WebFont.load({
	google: {
		families: ['Raleway']
	}
});

class Calendar extends Component {
	constructor (props) {
		super(props);

		let curDate = new Date();
		this.state = {
			selectedDate: curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear()
		};

		this.getActiveDateRange(props);
	}
	getActiveDateRange (props) {
		let {selectedDate} = props;

		if (!selectedDate || typeof selectedDate !== 'string') {
			return;
		}
		this.setState({
			selectedDate
		});
	}
	render() {
		let {selectedDate} = this.state;
		return (
			<div className="calendar-root">
				<Header 
					selectedDate={selectedDate}
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
