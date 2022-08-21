import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CalendarComponent from '../components/CalendarComponent'; 
import Cal from '../components/Cal';
import Doctors from '../components/Doctors';

function Booking(){

    return (
        <div>
            <Nav />
            {/* <CalendarComponent /> */}
            <Cal />
            {/* <Doctors /> */}
            <Footer />
        </div>

    )

}

export default Booking;



