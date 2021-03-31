import { Container, Typography } from "@material-ui/core";
import { useCallback, useState } from "react";
import Map from "../component/map";

export function Confirmation() {
    const [duration, setDuration] = useState("");
    const onDurationUpdate = useCallback((duration) => {
        setDuration(duration);
    }, []);

    return (
        <Container maxWidth="lg">
            <Typography>From: Your Location</Typography>
            <Typography>To: Microsoft Store Rive-Sud</Typography>
            <Map onDurationUpdate={onDurationUpdate} />
            <Typography>Estimated Time: {duration}</Typography>
            <Typography>Traffic Conditions: fluid</Typography>
        </Container>
    )
}