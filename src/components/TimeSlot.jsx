import React, { useState } from 'react';
import Records from "../db.json";


function TimeSlot(){

    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    }
    let toggleClassCheck = btnState ? 'active' : '';

    return(
        <div>
        
        {
            Records && Records.map( record => {
                return(                                    
                    <div>
                        <button
                            className={`ava-box ${toggleClassCheck}`}
                            onClick={handleClick}
                            key={record.id}
                        >
                        <b>Book for </b>  <br />
                        <p key={record.id}> {record.sun} </p>
                            
                        </button>
                        
                    </div>
                                
                )


            })
        }

            {/* <button
                className={`ava-box ${toggleClassCheck}`}
                onClick={handleClick}
            > <b>Book for </b>  <br /> 10:00AM - 6:00PM </button> */}
        
        </div>
    
    )

}

export default TimeSlot;