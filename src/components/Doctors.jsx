import React from 'react'
import ParticlesBg from 'particles-bg';
import {Fade, Slide} from 'react-reveal';

function Doctors(){

    return (
        <div className='doctors' id='doctors'>
            <div>
                <div class="p-background">
                    <ParticlesBg color="#222222" background-color="#000000" num={150} type="cobweb" />
                </div>

                <div class="doc-list">
                    <div class="doc-title">
                        <h1>Doctors List</h1>
                    </div>
                    <Slide right duration={1500}>
                        <div class="doc-body">
                            <div class="doc-list-box">
                                <h2> Doctor Name </h2>
                                <h3> Doctor Org </h3>
                                <p> Visit Duration 15min</p>
                            </div>

                            <div class="doc-list-box">
                                <h2> Doctor Name </h2>
                                <h3> Doctor Org </h3>
                                <p> Visit Duration 15min</p>
                            </div>

                        </div>

                    </Slide>
                </div>

            </div>
            <div>
                
            </div>
        </div>
    )

}

export default Doctors;



