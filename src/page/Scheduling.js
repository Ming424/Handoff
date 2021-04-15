import { useEffect, useState } from "react";
import { Container, Button } from '@material-ui/core';
import Calendar from 'react-calendar';
import TimeKeeper from 'react-timekeeper';
import { orders } from "../App";
import { useHistory } from "react-router";
import BackButtom from '../component/backButtom';



const orderFor = (orderNumber) => {
    const state = orders.getState();
    return state[orderNumber];
}

export function Schedule(props) {

    const history = useHistory();
    const [ order ] = useState(orderFor(props.location.state.orderNumber));
    const [ date, setDate ] = useState(order.readyAt);
    const [ time, setTime ] = useState("00:00");

    const changeDate = newDate => {
        setDate(newDate);
    };

    const changeTime = time => {
        const hours = parseInt(time.split(':')[0]), mins = parseInt(time.split(':')[1]);
        date.setHours(hours);
        date.setMinutes(mins);
    }

    return (
        <div>
            <BackButtom />
            <Container maxWidth="sm">
                <Calendar
                    calendarType={"Hebrew"}
                    minDate={date}
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
                    onChange = { (newTime) => setTime(newTime.formatted24) }
                    switchToMinuteOnHourSelect = {true}
                />
                {changeTime(time)}
            </Container>

            <Button variant="contained" color="primary" style={{marginTop:"10px"}}
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
