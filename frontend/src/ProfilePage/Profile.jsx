import Chat from "../Components/Chat";
import Card from "../ListPage/Components/Card";
import { listData } from "../Data/DummyData";
function Profile() {
  return (
    <div className="h-full md:m-20 sm:m-5 md:flex-col md:overflow-scroll justify-between ">
      {/* Left Side: User Details */}
      <div className=" overflow-y-scroll pb-[50px] md:flex-none md:h-auto">
        <div className=" flex flex-col gap-[50px]">
          {/* User Info Title */}
          <div className="flex items-center justify-between">
            <h1 className="font-light text-xl">User Information</h1>
            <button className="px-6 py-3 bg-[#fece51] cursor-pointer border-none">
              Update Profile
            </button>
          </div>

          {/* User Info Details */}
          <div className="flex flex-col self-center bg-gray-200 rounded-2xl md:w-100 sm:w-fit p-5 h-40 items-center gap-5 ">
            <span className="flex text-lg  items-center gap-5">
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-10 h-10  rounded-full object-cover"
              />
            </span>
            <span className="flex text-lg  items-center gap-5">
              Username: <b>Niloy </b>
            </span>
            <span className="flex text-lg  items-center my-0 gap-5">
              E-mail: <b>niloy@gmail.com</b>
            </span>
          </div>

          {/* My List Section */}
          <div className="flex items-center justify-between">
            <h1 className="font-light text-xl">My List</h1>
            <button className="px-6 py-3 bg-[#fece51] cursor-pointer border-none">
              Create New Post
            </button>
          </div>

          <div className="w-full h-full ">
            <div className="h-full p-3 flex flex-col gap-10 overflow-y-scroll ">
              {listData.slice(1,4).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Saved List Section */}
          <div className="flex-wrap items-center justify-between ">
            <h1 className="font-light text-xl">Saved List</h1>
              <div className="h-full p-3 flex flex-col gap-8">
              {listData.slice(4,6).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Right Side: Chat */}
      <div className=" bg-[#fcf5f3] h-full md:flex-none md:h-auto">
        <div className="px-5 h-full">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Profile;
