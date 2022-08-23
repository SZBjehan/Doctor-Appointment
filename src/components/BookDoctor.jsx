import React, { useState, useEffect } from 'react';
import { Container } from "./Container";
import TimeSlot from "./TimeSlot"
import {Link} from 'react-router-dom'; 
import Records from "../db.json";
import moment from 'moment';
import axios from 'axios';

const BookDoctor = () => {
    const triggerText = 'Book Appointment';
    const onSubmit = (event) => {
      event.preventDefault(event);
      
    };
    
    // const recordID = props.match.params.recordID
    // useEffect(()=>{
    //     Axios.get(`/api/record/records_by_id?name=${recordID}&type=single`)
    //         .then(response =>)
    
    // },[])
//     const [isAvail, setIsAvail] = useState(false);
//     const handleAvail = async()
// // 
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
    // const [btnStateTime, setBtnStateTime] = useState(true);
    // function handleClickTime(){
    //     setBtnStateTime(btnStateTime => !btnStateTime);
    // }
    let toggleTImeCheck = btnState ? 'availibility' : 'hidden';
    let toggleTImeCheck1 = btnState1 ? 'availibility' : 'hidden';
    let toggleTImeCheck2 = btnState2 ? 'availibility' : 'hidden';
    let toggleTImeCheck3 = btnState3 ? 'availibility' : 'hidden';
    let toggleTImeCheck4 = btnState4 ? 'availibility' : 'hidden';
    let toggleTImeCheck5 = btnState5 ? 'availibility' : 'hidden';
    let toggleTImeCheck6 = btnState6 ? 'availibility' : 'hidden';

    // 

    const [timeData, setTimeData] = useState([]);
    useEffect(()=>{
        axios.get('../db.json')
            .then(response =>
                setTimeData(response.data));
    })
    const disabled = "";    
    if(timeData.availibility == null){
        const [disabled, setDisable] = "disabled";
    }

    // let time = Records.availibility.sun;
    let time = "06:00 PM - 09:00 PM"
    let intime = time.slice(0, 8)
    let outtime = time.slice(12)
    const [result, setResult] = useState([])
    console.log("Array", result)

    function intervals(startString, endString) {
        var start = moment(startString, 'hh:mm a');
        var end = moment(endString, 'hh:mm a');
        start.minutes(Math.ceil(start.minutes() / 15) * 15);

        var current = moment(start);

        while (current <= end) {
        if (result.includes(current.format('hh:mm a'))) {
            return null
        }
        else {
            result.push(current.format('hh:mm a'));
            current.add(15, 'minutes');
        }
        }


        return result;
    }

    intervals(intime, outtime);


    return (
        <div className="calendar" id="Calendar">
            <Link 
                to={{
                    pathname: "/",
                }}
            > <i class="fa fa-home home-button"></i> </Link>
            
            {
                Records && Records.map( record => {
                    return(
                        <div>
                            <div className='cal-title' key={record.id}>
                                <h1>Calendar</h1>
                                <h2>{record.name}</h2>
                                <h3>{record.org}</h3>
                                
                            </div>
                            <div className='cal'>
                                <h3>Please click on the following day you want to book {record.name}</h3>
                                <details className="week">
                                    <summary class={`${toggleClassCheck} ${disabled}`} onClick={handleClick} > Book Saturday    </summary>
                                    <p> 
                                    <b key={record.id}> Book from {record.availibility.sat}</b>
                                    <p>Visit Duration {record.visitDurationInMin}</p>
                                    {/*  */}
                                    <div className='slots'>
                                    {
                                        result && result.length > 0 ? result.map((time, index) => {
                                        return (
                                            <div className='container'>
                                                <Container triggerText={time} key={index} onSubmit={onSubmit}>
                                                    <button>{record.availibility.sat}</button>
                                                </Container>
                                            </div>
                                        )
                                        }) : null
                                    }
                                    </div>
                                    {/*  */}
                                    </p>
                                </details>
                                <details className="week">
                                    <summary class={`${toggleClassCheck1} `} onClick={handleClick1}> Book Sunday    </summary>
                                    <p> 
                                    <b key={record.id}> Book from {record.availibility.sun}</b>
                                    <p>Visit Duration {record.visitDurationInMin}</p>
                                    {/*  */}
                                    <div className='slots'>
                                    {
                                        result && result.length > 0 ? result.map((time, index) => {
                                        return (
                                            <div className='container'>
                                                <Container triggerText={time} key={index} onSubmit={onSubmit}>
                                                    <button>{record.availibility.sun}</button>
                                                </Container>
                                            </div>
                                        )
                                        }) : null
                                    }
                                    </div>
                                    {/*  */}
                                    </p>
                                </details>
                                <details className="week">
                                    <summary class={`${toggleClassCheck2} disabled`} onClick={handleClick2}> Book Monday    </summary>
                                    <p> 
                                    <b key={record.id}> Book from {record.availibility.mon}</b>
                                    <p>Visit Duration {record.visitDurationInMin}</p>
                                    {/*  */}
                                    <div className='slots'>
                                    {
                                        result && result.length > 0 ? result.map((time, index) => {
                                        return (
                                            <div className='container'>
                                                <Container triggerText={time} key={index} onSubmit={onSubmit}>
                                                    <button>{record.availibility.mon}</button>
                                                </Container>
                                            </div>
                                        )
                                        }) : null
                                    }
                                    </div>
                                    {/*  */}
                                    </p>
                                </details>
                                <details className="week">
                                    <summary class={`${toggleClassCheck3} disabled`} onClick={handleClick3}> Book Tuesday    </summary>
                                    <p> 
                                    <b key={record.id}> Book from {record.availibility.tue}</b>
                                    <p>Visit Duration {record.visitDurationInMin}</p>
                                    {/*  */}
                                    <div className='slots'>
                                    {
                                        result && result.length > 0 ? result.map((time, index) => {
                                        return (
                                            <div className='container'>
                                                <Container triggerText={time} key={index} onSubmit={onSubmit}>
                                                    <button>{record.availibility.tue}</button>
                                                </Container>
                                            </div>
                                        )
                                        }) : null
                                    }
                                    </div>
                                    {/*  */}
                                    </p>
                                </details>
                                <details className="week">
                                    <summary class={`${toggleClassCheck4} `} onClick={handleClick4}> Book Wednesday    </summary>
                                    <p> 
                                    <b key={record.id}> Book from {record.availibility.wed}</b>
                                    <p>Visit Duration {record.visitDurationInMin}</p>
                                    {/*  */}
                                    <div className='slots'>
                                    {
                                        result && result.length > 0 ? result.map((time, index) => {
                                        return (
                                            <div className='container'>
                                                <Container triggerText={time} key={index} onSubmit={onSubmit}>
                                                    <button>{record.availibility.wed}</button>
                                                </Container>
                                            </div>
                                        )
                                        }) : null
                                    }
                                    </div>
                                    {/*  */}
                                    </p>
                                </details>
                                <details className="week">
                                    <summary class={`${toggleClassCheck5} disabled`} onClick={handleClick5}> Book Thursday    </summary>
                                    <p> 
                                    <b key={record.id}> Book from {record.availibility.thu}</b>
                                    <p>Visit Duration {record.visitDurationInMin}</p>
                                    {/*  */}
                                    <div className='slots'>
                                    {
                                        result && result.length > 0 ? result.map((time, index) => {
                                        return (
                                            <div className='container'>
                                                <Container triggerText={time} key={index} onSubmit={onSubmit}>
                                                    <button>{record.availibility.thu}</button>
                                                </Container>
                                            </div>
                                        )
                                        }) : null
                                    }
                                    </div>
                                    {/*  */}
                                    </p>
                                </details>
                                <details className="week">
                                    <summary class={`${toggleClassCheck6} `} onClick={handleClick6}> Book Friday    </summary>
                                    <p> 
                                    <b key={record.id}> Book from {record.availibility.fri}</b>
                                    <p>Visit Duration {record.visitDurationInMin}</p>
                                    {/*  */}
                                    <div className='slots'>
                                    {
                                        result && result.length > 0 ? result.map((time, index) => {
                                        return (
                                            <div className='container'>
                                                <Container triggerText={time} key={index} onSubmit={onSubmit}>
                                                    <button>{record.availibility.fri}</button>
                                                </Container>
                                            </div>
                                        )
                                        }) : null
                                    }
                                    </div>
                                    {/*  */}
                                    </p>
                                </details>
                            </div>
                        </div>
                    )} 
            )}
            
            
            {/* <div>
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
            </div> */}
            {/* <div >
                //<div className={`${toggleTImeCheck} ${toggleClassCheck1} ${toggleClassCheck2} ${toggleClassCheck3} ${toggleClassCheck4} ${toggleClassCheck5} ${toggleClassCheck6} `}>
                <div class="availibility">
                    <div class="cal-title">
                        <h2>Time Slot</h2>
                    </div>
                    <div class="ava">
                        < TimeSlot />
                        //</div><div class="ava-box"> Book for <br /> 10:00AM - 6:00PM </div>
                        //<div class="ava-box"> Book for <br /> 9:00PM - 11:00AM </div>
                    </div>
                </div>
                <div class="container">
                    <Container class="con" triggerText={triggerText} onSubmit={onSubmit} />
                </div>
            </div>
             */}
        </div>
    );
}

export default BookDoctor;



