import React from 'react'
import ParticlesBg from 'particles-bg';
// import {Fade, Slide} from 'react-reveal';
import Records from "../db.json";

function Doctors(){

    return (
        <div className='doctors' id='doctors'>
            <div>
                {/* <div class="p-background">
                    <ParticlesBg color="#222222" background-color="#000000" num={150} type="cobweb" />
                </div> */}

                <div class="doc-list">
                    <div class="doc-title">
                        <h1>Doctors List</h1>
                    </div>
                    {/* <Slide right duration={1500}> */}

                        {
                            Records && Records.map( record => {
                                return(
                                    
                                    <div>
                                        <div class="doc-body" key={record.id}>
                                            <div class="doc-list-box">
                                                <h2> {record.name} </h2>
                                                <h3> {record.org} </h3>
                                                <p> Visit Duration {record.visitDurationInMin} minutes </p>
                                            </div>
                                        </div>
                                    </div>
                                
                                )


                            })
                        }
                        
                    {/* </Slide> */}
                </div>

            </div>
            <div>
                
            </div>
        </div>
    )

}

export default Doctors;



