import React from 'react'
import sqhLogo from '../square-health.png'

function Footer(){

    return (
        <div className='footer' id='Footer'>
        
            <div>
            <div class="foot">
                <div class="foot-box">
                    <div class="foot-left">
                        <h1>Contact us</h1>
                        <div class="foot-title">Address</div>
                        <div class="foot-info">
                            123, Road, location, Dhaka
                        </div>
                    </div>
                    <div class="foot-left">
                        <div class="foot-title">Email</div>
                        <div class="foot-info">
                            email@email.com
                        </div>
                    </div>
                    <div class="foot-left">
                        <div class="foot-title">Contact</div>
                        <div class="foot-info">
                            +8801791787053
                        </div>
                    </div>
                </div>
                <div class="foot-box">
                    <div class="foot-right">
                        <h1>Customer Service</h1>

                        {/* <div class="foot-title"><b> Customer Service </b></div> */}
                        <div class="foot-info">
                            <p><a href="/home">Terms & Conditions</a></p>
                            <p><a href="/home">About us</a></p>
                            <p><a href="/home">Newsletter</a></p>
                            <p><a href="/home">Privacy Policy</a></p>
                        </div>
                    </div>
                    <div class="foot-social">
                        <a href="https://www.facebook.com/szb.jehan"
                            ><i class="fab fa-facebook-square"></i>
                        </a><br />
                        <a href="https://github.com/SZBjehan"
                            ><i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://szbjehan.github.io/portfolio/"
                            ><i class="fas fa-code"></i>
                        </a>
                        <div class="foot-logo">
                            <a href="https://squarehealth.com.bd/"><img src={sqhLogo} alt="Logo" class="foot-photo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>


    )

}

export default Footer;



