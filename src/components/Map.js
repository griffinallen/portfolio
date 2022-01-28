import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { PropTypes } from 'prop-types'

const Map = ({ data }) => {
    return (
    <MapContainer center={[43.6532, -79.3832]} zoom={8} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
    )
}

Map.defaultProps = {
    data:null
}

Map.propTypes = {
    data: PropTypes.string,
}

export default Map