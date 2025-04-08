import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex flex-wrap gap-5">
          <img
            src={item.img}
            alt=""
            className="w-16 h-12 object-cover rounded"
          />
          <div className="flex flex-col justify-between min-w-[150px]">
            <Link to={`/${item.id}`} className="text-blue-600 hover:underline">
              {item.title}
            </Link>
            <span className="text-sm text-gray-600">{item.available} available</span>
            <b className="text-black font-semibold">${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
