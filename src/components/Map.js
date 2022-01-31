import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { PropTypes } from 'prop-types'
import AmazingRaceData from '../assets/AmazingRaceLocations.json';
import React, {useEffect, useState} from 'react';

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

const Map = ({ data }) => {
    const [lines, SetLines] = useState(INITIAL_LINES)
    const [markers, SetMarkers] = useState(INITIAL_MARKER)
    useEffect(() => {
        if (data == "Amazing Race"){
            var toLines = [[]]
            var toMarkers = [[]]
            var from = false
            var count = 0;
            var mCount = 0;
            for (var i=1; i<Object.keys(AmazingRaceData[0]).length; i++){
                if (AmazingRaceData[0][i]=="" || AmazingRaceData[0][i+1]=="") break;
                    toLines[count] = [
                        AmazingRaceData[0][i][1],
                        AmazingRaceData[0][i][2],
                        count,
                        AmazingRaceData[0][i+1][1],
                        AmazingRaceData[0][i+1][2]
                    ]
                if (AmazingRaceData[0][i][1]!=AmazingRaceData[0][i+1][1]){
                    toMarkers[mCount] = [AmazingRaceData[0][i][0], mCount, [AmazingRaceData[0][i][2], AmazingRaceData[0][i][1]]]
                    mCount++;
                }
                count++;
            }
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
                [fromlat, fromlng], [tolat, tolng],]} color={'red'}/>  
        )}
        {markers.map(([country, id, location])=>
            <Marker key={`marker-${id}`} position={location}>
                <Popup>
                    <span>{id+1}: {country}</span>
                </Popup>
            </Marker>
        )}
    </MapContainer>
    )
}

Map.defaultProps = {
    data:""
}

Map.propTypes = {
    data: PropTypes.string,
}



export default Map