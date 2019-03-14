import React, { Component } from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Body from './components/Body';

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
