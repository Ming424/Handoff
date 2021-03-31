import { DirectionsRenderer, DirectionsService, GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle = {
    width: '400px',
    height: '400px',
    margin: "auto"
};

const computeDuration = (response) => {
    if (response.routes && response.routes.length) {
        const raw = response.routes.shift().legs.reduce((total, leg) => total += leg.duration.value, 0);
        const hours = Math.floor(raw / 3600)
        const minutes = Math.floor((raw % 3600) / 60);
        let output = hours ? `${hours} hours and ` : "";
        return output += minutes ? `${minutes} minutes` : "";
    }
    return "";
}

function Map(props) {
    const [directions, setDirections] = useState(null);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyA06QKC8vg76n-N22v64aFHyS7EZBfkTTo"
    });

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={10}
        >
            <DirectionsService
                options={{
                    origin: {lat: 45.46501895077987, lng: -73.63730895767137},
                    destination: {lat: 45.46506489842774, lng: -73.46695018950182},
                    travelMode: "DRIVING",
                    transitOptions: {
                        departureTime: new Date()
                    }
                }}
                callback={(response) => {
                    if (response) {
                        console.log(response);
                        setDirections(response);
                        props.onDurationUpdate(computeDuration(response));
                    }
                }}
            />
            {
                directions && (
                    <DirectionsRenderer
                        options={{
                            directions: directions
                        }}
                    />
                )
            }
        </GoogleMap>
    ) : null;
}

export default React.memo(Map);