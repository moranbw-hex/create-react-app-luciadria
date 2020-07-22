import React from 'react';
import './Map.css';

export default function Map(props) {
    React.useEffect(() => {
        props.MapAPI.createMap();
    }, []);

    return (
        <div id="map"/>
    );

}