import { Container, Typography } from "@material-ui/core";
import { useCallback, useState } from "react";
import Map from "../component/map";

export function Confirmation(props) {
    const [duration, setDuration] = useState("");
    const [traffic, setTraffic] = useState("");
    const onDurationUpdate = useCallback((duration, traffic) => {
        setDuration(duration);
        setTraffic(traffic);
    }, []);

    return (
        <Container maxWidth="lg">
            <Typography>From: Your location</Typography>
            <Typography>To: {props.location.state.store}</Typography>
            <Map
                onDurationUpdate={onDurationUpdate}
                origin={props.location.state.userLocation}
                destination={props.location.state.storeLocation}
            />
            <Typography>Estimated Time: {duration}</Typography>
            <Typography>Traffic Conditions: {traffic}</Typography>
        </Container>
    )
}