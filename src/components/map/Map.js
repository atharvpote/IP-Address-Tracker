import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { icons } from "../../assets";
import { useContext } from "react";
import { StateContext } from "../../stateManagement";

const marker = new Icon({
  iconUrl: icons.locationIcon,
  iconSize: [40, 40 * 1.2],
});

export function Map() {
  const { state } = useContext(StateContext);

  return (
    <MapContainer
      center={[state.latitude, state.longitude]}
      zoom={15}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[state.latitude, state.longitude]}
        icon={marker}
      ></Marker>
      <ChangeMapView coords={[state.latitude, state.longitude]} />
    </MapContainer>
  );
}

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}
