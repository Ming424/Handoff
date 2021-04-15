import { Container, Typography } from "@material-ui/core";
import { useCallback, useState } from "react";
import Map from "../component/map";
import { Button } from "@material-ui/core";
import MapIcon from '@material-ui/icons/Map';
import BackButtom from '../component/backButton';

export function Confirmation(props) {
    const [duration, setDuration] = useState("");
    const [traffic, setTraffic] = useState("");
    const onDurationUpdate = useCallback((duration, traffic) => {
        setDuration(duration);
        setTraffic(traffic);
    }, []);

    return (
        <Container maxWidth="lg" style={confirmationStyle}>
            <BackButtom />
            <Typography>From: Your location</Typography>
            <Typography>To: {props.location.state.store}</Typography>
            <Map
                onDurationUpdate={onDurationUpdate}
                origin={props.location.state.userLocation}
                destination={props.location.state.storeLocation}
            />
            <Typography>Estimated Time: {duration}</Typography>
            <Typography>Traffic Conditions: {traffic}</Typography>
            <Button style={buttonStyle}
                variant="contained"  
                color="primary">
                    <MapIcon />&nbsp;&nbsp;&nbsp;Go to Google Map
                </Button>
        </Container>
    )
}

const confirmationStyle = {
    lineHeight: "200%",
};

const buttonStyle = {
    marginTop: "5px",
    color: "white",
    backgroundColor: "green"
}