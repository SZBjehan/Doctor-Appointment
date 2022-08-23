import React from 'react'
import sqhLogo from '../square-health.png'
import {Link} from 'react-router-dom'; 

function Nav(){

    return (
        <div className='nav' id='Nav'>
            <div className='nav-logo'>
                <Link 
                    to={{
                        pathname: "/"
                    }}
                >
                
                    <img src={sqhLogo} alt="Logo" class="nav-photo" />
                </Link>
            </div>
            {/* <div class="nav-title">
                Doctors Appointment
            </div> */}
        </div>

    )

}

export default Nav;



