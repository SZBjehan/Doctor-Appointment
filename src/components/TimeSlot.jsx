import React, { useState } from 'react';


function TimeSlot(){

    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    }
    let toggleClassCheck = btnState ? 'active' : '';

    return(
        <button
            className={`ava-box ${toggleClassCheck}`}
            onClick={handleClick}
        > <b>Book for </b>  <br /> 10:00AM - 6:00PM </button>
    )

}

export default TimeSlot;