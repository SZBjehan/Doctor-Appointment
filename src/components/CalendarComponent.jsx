import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 7, 1),
        end: new Date(2022, 7, 1),
    },
    {
        title: "Vacation",
        start: new Date(2022, 8, 7),
        end: new Date(2022, 8, 10),
    },
    {
        title: "Conference",
        start: new Date(2022, 8, 20),
        end: new Date(2022, 8, 23),
    },
];


function CalendarComponent(){
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="Calendar">
            <h1>Calendar</h1>
            
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default CalendarComponent;



