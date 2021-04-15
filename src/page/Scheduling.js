import { useEffect, useState } from "react";
import { Container, Button, TableContainer } from '@material-ui/core';
import Calendar from 'react-calendar';
import TimeKeeper from 'react-timekeeper';
import { orders } from "../App";
import { useHistory } from "react-router";
import { getAllByTestId } from "@testing-library/dom";



const orderFor = (orderNumber) => {
    const state = orders.getState();
    return state[orderNumber];
}

export function Schedule(props) {
    const history = useHistory();
    const [ order ] = useState(orderFor(props.location.state.orderNumber));
    const [ date, setDate ] = useState(new Date(order.readyAt));
    const [ time, setTime ] = useState(date.toTimeString().substring(0,5));


    const changeDate = newDate => {
        setDate(newDate);
        console.log("changeDate()->"+date);
        //console.log(order.readyAt);
    };

    const changeTime = newTime => {
        const hours = parseInt(newTime.split(':')[0]), mins = parseInt(newTime.split(':')[1]);
        date.setHours(hours);
        date.setMinutes(mins);
        console.log("changeTime()->"+time);
        //console.log(order.readyAt);
    }

    const validPickUpDate = date => {
        return date > order.readyAt ? true : false;
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Calendar
                    calendarType={"Hebrew"}
                    minDate={order.readyAt}
                    minDetail={"month"}
                    next2Label={null}
                    prev2Label={null}

                    onChange={changeDate}
                    value={date}
                />
            </Container>
            
            <h1>
                Pick up on {date.toLocaleString()}
            </h1>

            <Container maxWidth="sm">
                <TimeKeeper
                    time = { time }
                    onChange = { (time) => setTime(time.formatted24)}
                    switchToMinuteOnHourSelect = {true}
                />
                {changeTime(time)}
            </Container>

            <Container>
                {!validPickUpDate(date)? "Please pick a date after "+order.readyAt.toLocaleString():""}
            </Container>

            <Button disabled={!validPickUpDate(date)} variant="contained" color="primary"
                onClick={() => {
                    order.readyAt = date;
                    history.push("/history");
                }}
            >
                Schedule
            </Button>
        </div>
    )
    
}
//for now im just gonna put in the calendar in there but we could create a component to control possible delivery dates

export default Schedule;
