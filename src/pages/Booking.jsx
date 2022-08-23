import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BookDoctor from '../components/BookDoctor';
import CalendarComponent from '../components/CalendarComponent'
// import Doctors from '../components/Doctors';

function Booking(){

    return (
        <div>
            <Nav />

            <BookDoctor />
            <CalendarComponent />
            {/* <Doctors /> */}
            <Footer />
        </div>

    )

}

export default Booking;



