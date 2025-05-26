import Slider from "./Components/Slider";
import Map from "../ListPage/Components/Map";
import { singlePostData, userData } from "../Data/DummyData";
import { LiaCatSolid } from "react-icons/lia";

function SinglePage(items) {
  return (
    <div className="flex flex-col md:flex-row h-full m-4 md:m-10">
      {/* Details Section */}
      <div className="flex-1 md:flex-3 overflow-y-auto mb-8 md:mb-0">
        <div className="pr-0 md:pr-12 lg:pr-5">
          <Slider images={singlePostData.images} />

          {/* Info Section */}
          <div className="mt-8 md:mt-12">
            <div className="flex flex-col sm:flex-row justify-between gap-5">
              {/* Post */}
              <div className="flex flex-col gap-3 md:gap-5">
                <h1 className="font-normal text-lg md:text-xl">{singlePostData.title}</h1>
                <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                  <img src="/pin.png" alt="location" className="w-4 h-4" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="text-base md:text-lg font-light px-2 py-1 bg-yellow-100 rounded w-max">
                  $ {singlePostData.price}
                </div>
              </div>

              {/* User Info */}
              <div className="flex flex-row sm:flex-col items-center justify-center gap-3 md:gap-5 px-6 md:px-12 py-3 md:py-5 rounded-lg bg-yellow-100 font-semibold">
                <img
                  src={userData.img}
                  alt="user"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
                <span className="text-sm md:text-base">{userData.name}</span>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-gray-600 leading-5 text-sm md:text-base">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex-1 md:flex-[2] bg-[#fcf5f3] overflow-y-auto mb-8 md:mb-0 mt-6 md:mt-0">
        <div className="p-3 md:p-5 flex flex-col gap-4 md:gap-5">
          {/* General */}
          <p className="font-bold text-base md:text-lg mb-1 md:mb-2">General</p>
          <div className="flex flex-col gap-3 md:gap-5 p-3 md:p-5 bg-white rounded-lg">
            {[
              { icon: "/utility.png", title: "Utilities", desc: "Additionally need to pay for foods and litters" },
              { icon: "/pet.png", title: "Pet Policy", desc: "Only Cats are Allowed" },
              {
                icon: "/fee.png",
                title: "Rent Policy",
                desc: "Must pay the rent before the month ends",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-3">
                <img src={item.icon} className="w-5 h-5 md:w-6 md:h-6 bg-yellow-100" alt="" />
                <div>
                  <span className="font-bold block text-sm md:text-base">{item.title}</span>
                  <p className="text-xs md:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sizes */}
                <p className="font-bold text-base md:text-lg">Sizes & Availability</p>
                <div className="flex flex-wrap gap-2 md:gap-4 justify-between bg-white text-xs md:text-sm">
                {[
                  { icon: <img src="/size.png" className="w-5 h-5 md:w-6 md:h-6" alt="" />, label: singlePostData.size + " sqft" },
                  { icon: <LiaCatSolid className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />, label: singlePostData.available + " Available" },
                  { icon: <LiaCatSolid className="w-5 h-5 md:w-6 md:h-6 " />, label: singlePostData.total_seat + " Total Seats" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white p-2 md:p-3 rounded-md">
                  {item.icon}
                  <span>{item.label}</span>
                  </div>
                ))}
                </div>
                <p className="font-bold text-base md:text-lg">Nearby Places</p>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-around gap-2 md:gap-4 bg-white p-3 md:p-5 rounded-lg">
                  {[
                    { icon: "/pet.png", title: "Bus Stop", desc: singlePostData.bus },
                    { icon: "/fee.png", title: "Restaurant", desc: singlePostData.restaurant },
                    { icon: "/school.png", title: "School", desc: singlePostData.school },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                    <img src={item.icon} className="w-5 h-5 md:w-6 md:h-6 bg-yellow-100" alt="" />
                    <div>
                      <span className="font-bold block text-sm md:text-base">{item.title}</span>
                      <p className="text-xs md:text-sm">{item.desc}</p>
                    </div>
                    </div>
                  ))}
                </div>
          <p className="font-bold text-base md:text-lg">Location</p>
          <div className="w-full h-40 md:h-52">
            <Map items={[singlePostData]} />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
            <button className="flex items-center gap-2 p-3 md:p-5 cursor-pointer bg-white border border-yellow-400 rounded">
              <img src="/chat.png" className="w-4 h-4" alt="chat" />
              <span className="text-sm md:text-base">Send a Message</span>
            </button>
            <button className="flex items-center gap-2 p-3 md:p-5 cursor-pointer bg-white border border-yellow-400 rounded">
              <img src="/save.png" className="w-4 h-4" alt="save" />
              <span className="text-sm md:text-base">Save the Place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
