import { Container, Typography } from "@material-ui/core";
import GoogleMap from "react-google-maps/lib/components/GoogleMap"; // TODO switch to more recent library
import Marker from "react-google-maps/lib/components/Marker";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";

const API_KEY = "AIzaSyAC4N3ize44dCziEefFXjjFhbUHDhfQegk";

export default function ConfirmationPage() {
    const Map = withScriptjs(withGoogleMap((props) => 
        <GoogleMap
            defaultZoom={0x10}
            defaultCenter={{ lat: 45.46500045077495, lng: -73.63728298465728 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 45.46500045077495, lng: -73.63728298465728 }} />}
        </GoogleMap>
    ))
    return (
        <Container maxWidth="lg">
            <Typography>
                From: Your Location
            </Typography>
            <Typography>
                To: Microsoft Store Rive-Sud
            </Typography>
            <Map
                isMarkerShown 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `512px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            <Typography>
                Estimated Time:
            </Typography>
        </Container>
    )
}