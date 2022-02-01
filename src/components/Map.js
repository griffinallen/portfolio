import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { PropTypes } from 'prop-types'
import AmazingRaceData from '../assets/AmazingRaceLocations.json';
import React, {useEffect, useState} from 'react';
import { map } from 'leaflet';
import L from 'leaflet';


/**
 fromlng: -112.49150994096404, 
        fromlat: 45.69557676130325,
        id: 0,
        tolng: -112.49150994096404, 
        tolat: 45.69557676130325
 */
const INITIAL_LINES = [
    [-112.49150994096404, 45.69557676130325, 0,-112.49150994096404, 45.69557676130325]
]

const INITIAL_MARKER = [
    [["United States"],[-112.49150994096404, 45.69557676130325]]
]

const myIcon = new L.Icon({
    iconUrl: require('../assets/marker.jpg'),
    iconRetinaUrl: require('../assets/marker.jpg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(10, 10),
    className: 'leaflet-div-icon'
});

const Map = ({ data, season }) => {
    const [lines, SetLines] = useState(INITIAL_LINES)
    const [markers, SetMarkers] = useState(INITIAL_MARKER)
    useEffect(() => {
        if (data == "Amazing Race"){
            var from = season+1
            var to = season+1
            if (season==0){
                from = 0
                to = AmazingRaceData.length-1
            }

            var toLines = [[]]
            var toMarkers = [[]]
            
            var totalCount = 0;
            var totalmCount = 0;

            for (var j=from; j<=to; j++){
                var count = 0;
                var mCount = 0;
            
                for (var i=1; i<Object.keys(AmazingRaceData[j]).length-1; i++){
                    if (AmazingRaceData[j][i]=="" || AmazingRaceData[j][i+1]=="") break;
                        toLines[totalCount] = [
                            AmazingRaceData[j][i][1],
                            AmazingRaceData[j][i][2],
                            totalCount,
                            AmazingRaceData[j][i+1][1],
                            AmazingRaceData[j][i+1][2]
                        ]
                    if (AmazingRaceData[j][i][1]!=AmazingRaceData[j][i+1][1]){
                        toMarkers[totalmCount] = [
                            AmazingRaceData[j][i][0],
                            totalmCount, 
                            mCount,
                            [
                                AmazingRaceData[j][i][2], 
                                AmazingRaceData[j][i][1]
                            ]
                        ]
                        mCount++;
                        totalmCount++;
                    }
                    count++;
                    totalCount++;
                }
        }
        console.log(toMarkers);
            SetLines(toLines)
            SetMarkers(toMarkers)
        }
    }, [])
    return (
    <MapContainer center={[0,0]} zoom={1} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lines.map(([fromlng,fromlat,id,tolng,tolat]) => 
            <Polyline key={`line-${id}`} positions={[
                [fromlat, fromlng], [tolat, tolng],]} color={'black'}/>  
        )}
        {markers.map(([country, id, num, location])=>
            <Marker key={`marker-${id}`} position={location} icon={myIcon}>
                <Popup>
                    <span>{num+1}: {country}</span>
                </Popup>
            </Marker>
        )}
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