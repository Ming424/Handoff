import { DirectionsRenderer, DirectionsService, GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle = {
    width: '512px',
    height: '512px',
    margin: "auto"
};

// MAP COMPONENT
function Map(props) {
    const [directions, setDirections] = useState(null);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyA06QKC8vg76n-N22v64aFHyS7EZBfkTTo"
    });

    // calculate routine time and status
    const computeDuration = (response) => {
        if (response.routes && response.routes.length) {
            const raw = response.routes.shift().legs.reduce((total, leg) => total += leg.duration.value, 0);
            let traffic = "fluid";
            if (response.routes && response.routes.length) { // TODO app crashes if we don't check twice.
                const rawTraffic = response.routes.shift().legs.reduce((total, leg) => total += leg.duration_in_traffic.value, 0);
                if (rawTraffic / raw > 1.5) {
                    traffic = "congested";
                } else if (rawTraffic / raw > 1.25) {
                    traffic = "slower than ususal";
                }
            }
            const hours = Math.floor(raw / 3600)
            const minutes = Math.floor((raw % 3600) / 60);
            let output = hours ? `${hours} hours and ` : "";
            output += minutes ? `${minutes} minutes` : "";
            props.onDurationUpdate(output, traffic);
        }
        return "";
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={10}
        >
            {
                !directions && (
                    <DirectionsService
                        options={{
                            origin: props.origin,
                            destination: props.destination,
                            travelMode: "DRIVING",
                            drivingOptions: {
                                departureTime: new Date()
                            }
                        }}
                        callback={(response) => {
                            if (response) {
                                setDirections(response);
                                computeDuration(response)
                            }
                        }}
                    />
                )
            }
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