import React, { Component } from 'react';

import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../css/booking.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DateSelector = (props) => {
    let {
        checkinDate,
        checkoutDate,
        totalDays,
        onCheckinChange,
        onCheckoutChange,
        invalidRange
    } = props;
    return (
        <div>
            <h4>Date Range</h4>

            {/*<div style={{ display: 'flex', flexDirection: 'row' }}>*/}

            <label><strong>Check In</strong></label>
            <DatePicker
                selected={checkinDate}
                onChange={onCheckinChange}
                style={{ width: 50 }}
            />

            <label><strong>Check Out</strong></label>
            <DatePicker
                selected={checkoutDate}
                onChange={onCheckoutChange}
            />

            <div className='pad-top'>
                <span><strong>You selected:</strong> {totalDays} night/s</span>
            </div>

            <div className='pad-top'>
                <span><strong><em>*10% discount on 4 nights or more!</em></strong></span>
            </div>


            {invalidRange && <p>Invalid Date Range</p>}
        </div>
    );
}


DateSelector.propTypes = {
    checkinDate: PropTypes.instanceOf(Date).isRequired,
    checkoutDate: PropTypes.instanceOf(Date).isRequired,
    onCheckinChange: PropTypes.func.isRequired,
    onCheckoutChange: PropTypes.func.isRequired,
    totalDays: PropTypes.number.isRequired
}

export default DateSelector;