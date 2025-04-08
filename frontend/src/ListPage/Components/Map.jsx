import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

function Map({ items }) {
  return (
    <MapContainer
      center={[52.4797, -1.90289]}
      zoom={7}
      scrollWheelZoom={false}
      className="h-full border-10px"
    >
      <TileLayer
        attribution='&copy; '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
