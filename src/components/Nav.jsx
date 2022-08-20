import React from 'react'
import DocLogo from '../docLogo.png'
import sqhLogo from '../square-health.png'
function Nav(){

    return (
        <div className='nav' id='Nav'>
            <div class="nav-logo">
                <a href="/"><img src={sqhLogo} alt="Logo" class="nav-photo" /></a>
            </div>
            {/* <div class="nav-title">
                Doctors Appointment
            </div> */}
        </div>

    )

}

export default Nav;



