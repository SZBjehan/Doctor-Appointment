import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar'; 
import Doctors from '../components/Doctors';

function Booking(){

    return (
        <div>
            <Nav />
            <Calendar />
            {/* <Doctors /> */}
            <Footer />
        </div>

    )

}

export default Booking;



