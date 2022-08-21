import React, { useState } from 'react';
import { Container } from "../components/Container";
import TimeSlot from "./TimeSlot"

const Cal = () => {
    const triggerText = 'Book Appointment';
    const onSubmit = (event) => {
      event.preventDefault(event);
      
    };
// 
    // const fileInput = useRef();
    // const selectFile = () => {
    //     fileInput.current.click();
    // }
//  Week day slot
    const [btnState, setBtnState] = useState(true);
    const [btnState1, setBtnState1] = useState(true);
    const [btnState2, setBtnState2] = useState(true);
    const [btnState3, setBtnState3] = useState(true);
    const [btnState4, setBtnState4] = useState(true);
    const [btnState5, setBtnState5] = useState(true);
    const [btnState6, setBtnState6] = useState(true);
    
    function handleClick(){
        setBtnState(btnState => !btnState);
    }
    function handleClick1(){
        setBtnState1(btnState1 => !btnState1);
    }
    function handleClick2(){
        setBtnState2(btnState2 => !btnState2);
    }
    function handleClick3(){
        setBtnState3(btnState3 => !btnState3);
    }
    function handleClick4(){
        setBtnState4(btnState4 => !btnState4);
    }
    function handleClick5(){
        setBtnState5(btnState5 => !btnState5);
    }
    function handleClick6(){
        setBtnState6(btnState6 => !btnState6);
    }

    let toggleClassCheck = btnState ? 'active-week-box' : 'inactive-week-box';
    let toggleClassCheck1 = btnState1 ? 'active-week-box' : 'inactive-week-box';
    let toggleClassCheck2 = btnState2 ? 'active-week-box' : 'inactive-week-box';
    let toggleClassCheck3 = btnState3 ? 'active-week-box' : 'inactive-week-box';
    let toggleClassCheck4 = btnState4 ? 'active-week-box' : 'inactive-week-box';
    let toggleClassCheck5 = btnState5 ? 'active-week-box' : 'inactive-week-box';
    let toggleClassCheck6 = btnState6 ? 'active-week-box' : 'inactive-week-box';
    // let toggleClassCheck7 = btnState7 ? 'active-week-box' : 'inactive-week-box';
// 

//  Time Slot 
    // const [btnStateTime, setBtnStateTime] = useState(true);
    const [btnStateTime, setBtnStateTime] = useState(true);
    function handleClickTime(){
        setBtnStateTime(btnStateTime => !btnStateTime);
    }



    return (
        <div className="calendar" id="Calendar">
            <div>
                <div class="cal-title">
                    <h1>Calendar</h1>
                    <h2>Doctor's Availability</h2>
                </div>
                <div class='week'>
                    <div class={`${toggleClassCheck} disabled`} onClick={handleClick}    > Saturday    </div>
                    <div class={`${toggleClassCheck1}`} onClick={handleClick1}  > Sunday      </div>
                    <div class={`${toggleClassCheck2}`} onClick={handleClick2}  > Monday      </div>
                    <div class={`${toggleClassCheck3}`} onClick={handleClick3}  > Tuesday     </div>
                    <div class={`${toggleClassCheck4}`} onClick={handleClick4}  > Wednesday   </div>
                    <div class={`${toggleClassCheck5}`} onClick={handleClick5}  > Thursday    </div>
                    <div class={`${toggleClassCheck6}`} onClick={handleClick6}  > Friday      </div>
                    
                </div>
            </div>
            <div >
                <div class="availibility">
                    <div class="cal-title">
                        <h2>Time Slot</h2>
                    </div>
                    <div class="ava">
                        <TimeSlot />
                        {/* <div class="ava-box"> Book for <br /> 10:00AM - 6:00PM </div>
                        <div class="ava-box"> Book for <br /> 9:00PM - 11:00AM </div> */}
                    </div>
                </div>
                <div class="container">
                    <Container class="con" triggerText={triggerText} onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
}

export default Cal;



