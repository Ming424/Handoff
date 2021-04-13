import { Component, useState } from "react";
import { Container, Button } from '@material-ui/core';
import Calendar from 'react-calendar';
import TimeKeeper from 'react-timekeeper';
import {KeyboardTimePicker} from '@material-ui/pickers';
//import DatePicker from 'react-date-picker'; //can be used but mockup showed calendar so calendar shall be implemented


export function Schedule(props) {
    const [ date, setDate ] = useState(new Date());
    const [ time, setTime ] = useState("00:00"); 
    
    const today = new Date(Date.now());
    var newTime = today;

    const changeDate = newDate => {
        setDate(newDate);
    };

    const changeTime = time => {
        var hours = parseInt(time.split(':')[0]), mins = parseInt(time.split(':')[1]);
        date.setHours(hours);
        date.setMinutes(mins);
        console.log(date);
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Calendar
                    calendarType={"Hebrew"}
                    minDate={today}
                    minDetail={"month"}
                    next2Label={null}
                    prev2Label={null}

                    onChange={changeDate}
                    value={date}
                />
            </Container>
            
            <h1>
                Pick up on {date.toDateString()}
            </h1>

            <Container maxWidth="sm">
                <TimeKeeper
                    time = { time }
                    onChange = { (newTime) => setTime(newTime.formatted24) }
                    switchToMinuteOnHourSelect = {true}
                />
                {changeTime(time)}
            </Container>

            <Button variant="contained" color="primary"
            //todo onClick={}
            >
                Schedule
            </Button>
        </div>
    )
    
}
//for now im just gonna put in the calendar in there but we could create a component to control possible delivery dates

export default Schedule;
