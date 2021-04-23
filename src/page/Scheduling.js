import { Button, Container } from '@material-ui/core';
import { useState } from "react";
import Calendar from 'react-calendar';
import { useHistory } from "react-router";
import TimeKeeper from 'react-timekeeper';
import { orders } from "../App";
import BackButtom from '../component/backButton';



const orderFor = (orderNumber) => {
    const state = orders.getState();
    return state[orderNumber];
}

export function Schedule(props) {
    const history = useHistory();
    const [order] = useState(orderFor(props.location.state.orderNumber));
    const [date, setDate] = useState(new Date(order.readyAt));
    const [time, setTime] = useState(date.toTimeString().substring(0, 5));


    const changeDate = newDate => {
        setDate(newDate);
    };

    const changeTime = newTime => {
        const hours = parseInt(newTime.split(':')[0]), mins = parseInt(newTime.split(':')[1]);
        date.setHours(hours);
        date.setMinutes(mins);
    }

    const validPickUpDate = date => {
        return date > order.readyAt ? true : false;
    }

    return (
        <div>
            <BackButtom />
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
                    time={time}
                    onChange={(time) => setTime(time.formatted24)}
                    switchToMinuteOnHourSelect={true}
                />
                {changeTime(time)}
            </Container>

            <Container>
                {!validPickUpDate(date) ? "Please pick a date after " + order.readyAt.toLocaleString() : ""}
            </Container>

            <Button disabled={!validPickUpDate(date)} variant="contained" color="primary" style={{ marginTop: "10px" }}
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
