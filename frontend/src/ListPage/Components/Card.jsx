import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa";

function Card({ item }) {
  return (
    <div className="flex items-center gap-5 p-4 bg-white shadow-md rounded-lg">
      {/* Image Container */}
      <Link to={`/${item.id}`} className="flex-2 h-[200px] hidden md:block">
        <img
          src={item.img}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      {/* Text Container */}
      <div className="flex-3 flex flex-col justify-between gap-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-black hover:scale-[1.01]">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        {/* Address */}
        <p className="text-sm flex items-center gap-1 text-gray-500">
          <img src="/pin.png" alt="" className="w-4 h-4" />
          <span>{item.address}</span>
        </p>

        {/* Price */}
        <p className="text-lg font-light px-2 py-1 rounded-md bg-yellow-200 w-max">
          $ {item.price}
        </p>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between gap-3">
          {/* Features */}
          <div className="flex gap-4 text-sm ">
            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
              {/* <img src="/bed.png" alt="" className="w-4 h-4" /> */}
              <span className="flex flex-row ">
                <FaCat className="mx-2 items-center w-4 h-4" /> Total seat:{' '}
                {item.total_seat}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
              {/* <img src="/bath.png" alt="" className="w-4 h-4" /> */}
              <span className="flex flex-row  ">
                <FaCat className="mx-1 items-center w-4 h-4" /> Available:{' '}
                {item.available}
              </span>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-4">
            <div className="border border-gray-500 p-1 px-2 rounded-md cursor-pointer flex items-center justify-center hover:bg-gray-300">
              <img src="/save.png" alt="" className="w-5 h-5" />
            </div>
            <div className="border border-gray-500 p-1 px-2 rounded-md cursor-pointer flex items-center justify-center hover:bg-gray-300">
              <img src="/chat.png" alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
