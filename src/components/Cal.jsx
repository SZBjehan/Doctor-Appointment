import React from 'react';
import { Container } from "../components/Container";


const Cal = () => {
    const triggerText = 'Book Appointment';
    const onSubmit = (event) => {
      event.preventDefault(event);
      console.log(event.target.name.value);
      console.log(event.target.email.value);
    };
    return (
        <div className="calendar" id="Calendar">
            <div>
                <div class="cal-title">
                    <h1>Calendar</h1>
                    <h2>Doctor's Availability</h2>
                </div>
                <div class='week'>
                    <div class="week-box"> Saturday </div>
                    <div class="week-box"> Sunday </div>
                    <div class="week-box"> Monday </div>
                    <div class="week-box"> Tuesday </div>
                    <div class="week-box"> Wednesday </div>
                    <div class="week-box"> Thursday </div>
                    <div class="week-box"> Friday </div>
                </div>
            </div>
            <div class="availibility">
                <div class="cal-title">
                    <h2>Time Slot</h2>
                </div>
                <div class="ava">
                    <div class="ava-box"> Book for <br /> 10:00AM - 6:00PM </div>
                    <div class="ava-box"> Book for <br /> 9:00PM - 11:00AM </div>
                </div>
            </div>
            <div class="container">
                <Container class="con" triggerText={triggerText} onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default Cal;



