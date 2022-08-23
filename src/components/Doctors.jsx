import React, { useState, useEffect } from 'react';
// import ParticlesBg from 'particles-bg';
import {Fade, Slide} from 'react-reveal';
import PBG from './ParticlesBG';
import Records from "../db.json";
import {Link, Route, Switch} from 'react-router-dom'; 

function Doctors({}){
    // 
    // const [appointment, setAppointment] = useContext(AppointmentContext);
    // const toBookingPage = () => {
    //     const newBookingItem = {
    //         id: itemId,
    //         name: itemName,
    //         availibility: itemAvailibility,
    //     };
    //     const newCart = [...cart, newCartItem];
    //     setCart(newCart);
    //     localStorage.setItem("cart", JSON.stringify(newCart));
    // }
    const [data, setData] = useState('');
    const recordData = (recordID) => {
        setData(recordID);
      }

    return (
        <div className='doctors' id='doctors'>
            <div>
                <div className='pbg'>
                    <PBG />

                </div>
                {/* <div class="p-background">
                    <ParticlesBg color="#222222" background-color="#000000" num={150} type="cobweb" />
                </div> */}
            
                <div class="doc-list">
                    <div class="doc-title">
                        <h1>Doctors List</h1>
                    </div>
                    <Slide right duration={1500}>

                        {
                            Records && Records.map( record => {
                                return(
                                    
                                    <div>
                                        <Link 
                                            to={`/booking/${record.name}`}
                                            recordData={recordData}
                                        >
                                            <div class="doc-body" key={record.id}>
                                                <div class="doc-list-box">
                                                    <h2> {record.name} </h2>
                                                    <h3> {record.org} </h3>
                                                    <p> Visit Duration {record.visitDurationInMin} minutes </p>
                                                </div>
                                        
                                            </div>
                                            
                                        </Link>
                                        
                                    </div>
                                
                                )


                            })
                        }
                        
                    </Slide>
                </div>

            </div>
            <div>
                
            </div>
        </div>
    )

}

export default Doctors;



