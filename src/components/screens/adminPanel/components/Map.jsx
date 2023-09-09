import React from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import "./Map.css"

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDwoKu83lJ8AjJbWY2rq0tG-96_Fod63tY", // Замените на ваш ключ API
    });


    const mapContainerStyle = {
        width: "1920px",
        height: "400px",
        borderRadius: "20px",
        border:"2px solid black",
    };

    const center = {
        lat: 50.436106,
        lng: 30.5155573,
    };


    if (loadError) return "ERROR map loading";
    if (!isLoaded) return "Loading map...";

    return (
        <div className='map-container' >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={19}
                center={center}
            >

                <Marker position={center} icon="../../../../public/img/loc.png" />
            </GoogleMap>
        </div>
    );
};

export default Map;