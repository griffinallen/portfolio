import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { PropTypes } from 'prop-types'
import React, {useEffect, useState} from 'react';
import { map } from 'leaflet';
import L from 'leaflet';

const Map = ({ data, season }) => {
        
    return (
    <MapContainer center={[20,0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; | React.js | Amazing Race location data scraped from <a href="https://amazingrace.fandom.com/wiki/The_Amazing_Race_Wiki">Amazing Race Wiki</a> | Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
            url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        />
    </MapContainer>
    )
}

Map.defaultProps = {
    data:"",
    season:0
}

Map.propTypes = {
    data: PropTypes.string,
    season: PropTypes.number
}



export default Map