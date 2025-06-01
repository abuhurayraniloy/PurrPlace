import Chat from "../Components/Chat";
import Card from "../ListPage/Components/Card";
import { listData } from "../Data/DummyData";
import apiRequest from "../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { CgProfile } from "react-icons/cg";

function Profile() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const user = currentUser;


  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err.res.message);
    }
  };
  return (
    currentUser &&
    (
      <div className="h-full md:m-20 sm:m-5 md:flex-col md:overflow-scroll justify-between ">
        {/* Left Side: User Details */}
        <div className=" overflow-y-scroll pb-[50px] md:flex-none md:h-auto">
          <div className=" flex flex-col gap-[50px]">
            {/* User Info Title */}
            <div className="flex items-center justify-between">
              <h1 className="font-light text-xl">User Information</h1>
              <button className="px-6 py-3 bg-[#fece51] cursor-pointer border-none">
                <a href="/profile/update">Update Profile</a>
              </button>
            </div>

            {/* User Info Details */}
            <div className="flex flex-col self-center bg-gray-200 rounded-2xl md:w-100 sm:w-fit p-3 sm:p-5 h-50 drop-shadow-lg shadow-lg items-center gap-5 ">
              <span className="flex text-lg  items-center gap-5">
                Avatar:
                {/* user.avatar || */}
                  <img
                    src={ user.avatar ||(<CgProfile className="w-12 h-12 md:w-10 md:h-12 hidden sm:inline" />)}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  
              </span>
              <span className="flex text-lg items-center gap-5">
                Username: <b>{user?.username || ''} </b>
              </span>
              <span className="flex text-lg items-center gap-5">
                E-mail: <b>{user?.email || ''}</b>
              </span>
              <button
                className="bg-[#fece51] w-full p-2 md:m-8 sm:m-15 rounded-xl shadow-xl hover:bg-[#9f8c5ce6]"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>

            {/* My List Section */}
            <div className="flex mt-5 items-center justify-between">
              <h1 className="font-light text-xl">My List</h1>
              <button className="px-6 py-3 bg-[#fece51] cursor-pointer border-none">
                <a href="/add">Create New Post</a>
              </button>
            </div>

            <div className="w-full h-full ">
              <div className="h-full p-3 flex flex-col gap-10 overflow-y-scroll ">
                {listData.slice(1, 4).map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Saved List Section */}
            <div className="flex-wrap items-center justify-between ">
              <h1 className="font-light text-xl">Saved List</h1>
              <div className="h-full p-3 flex flex-col gap-8">
                {listData.slice(4, 6).map((item) => (
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
    )
  );
}

export default Profile;
