import { useState } from "react";
import { CgProfile } from "react-icons/cg";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex flex-col gap-5 overflow-y-scroll">
        <h1 className="font-light text-xl">Messages</h1>

        {Array(4).fill().map((_, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-[10px] flex items-center gap-5 cursor-pointer"
            onClick={() => setChat(true)} 
            role="button"
          >
            {/* <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            /> */}
            <CgProfile className="w-15 h-10 text-[#f7c14b85] rounded-full" />
            <span className="font-bold">XYZ Abc</span>
            <p>Hey there, Any seat available!</p>
            <span className="text-xs text-gray-500  self-end">{new Date("2023-03-15T12:00:00Z").toLocaleString().split(",")[0]}</span>
          </div>
        ))}
      </div>

      {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between">
          {/* Top Bar */}
          <div className="bg-[#f7c14b85] p-5 font-bold flex items-center justify-between">
            <div className="flex items-center gap-5">
              {/* <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover"
              /> */}
              <CgProfile className="w-10 h-10 text-[#4810a185] rounded-full" />
              XYZ Abc
            </div>
            <span className="cursor-pointer" onClick={() => setChat(null)}>
              X
            </span>
          </div>

          {/* Center Messages */}
          <div className="h-[350px] overflow-scroll p-5 flex flex-col gap-5">
            {Array(10).fill().map((_, i) => (
              <div
                key={i}
                className={`w-1/2 ${i % 2 === 1 ? "self-end text-right" : ""}`}
              >
                <p>Lorem ipsum dolor sit </p>
                <span className="text-xs bg-[#f7c14b39] px-1 py-[2px] rounded">
                  1 hour ago
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Input Area */}
          <div className="border-t-2 border-[#f7c14b85] h-[60px] flex items-center justify-between">
            <textarea
              className="flex-[3] h-full border-none p-5 resize-none focus:outline-none"
              placeholder="Type your message..."
            ></textarea>
            <button className="flex-[1] bg-[#f7c14b85] h-full border-none cursor-pointer">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
