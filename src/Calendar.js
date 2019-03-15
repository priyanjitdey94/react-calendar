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
	render() {
		return (
			<div className="calendar-root">
				<Header />
				<SubHeader />
				<Body />
			</div>
		);
  	}
}

export default Calendar;
