import { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };

  return (
    <div className="w-full h-[350px] flex gap-5 sm:h-[280px] relative">
      {/* Fullscreen Slider */}
      {imageIndex !== null && (
        <div className="fixed inset-0 bg-black z-[9999] flex justify-between items-center">
          {/* Left Arrow */}
          <div className="flex-1 flex justify-center items-center cursor-pointer" onClick={() => changeSlide("left")}>
            <img
              src="/arrow.png"
              alt="left arrow"
              className="w-[50px] md:w-[30px] sm:w-[20px]"
            />
          </div>

          {/* Image Container */}
          <div className="flex-[10] h-full">
            <img
              src={images[imageIndex]}
              alt="fullscreen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Arrow */}
          <div className="flex-1 flex justify-center items-center cursor-pointer" onClick={() => changeSlide("right")}>
            <img
              src="/arrow.png"
              alt="right arrow"
              className="w-[50px] md:w-[30px] sm:w-[20px] transform rotate-180"
            />
          </div>

          {/* Close Button */}
          <div
            className="absolute top-0 right-0 text-white text-4xl font-bold p-[50px] cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}

      {/* Main Image */}
      <div className="flex-[3] sm:flex-[2] h-full rounded-xl overflow-hidden cursor-pointer">
        <img
          src={images[0]}
          alt="main"
          className="w-full h-full object-cover"
          onClick={() => setImageIndex(0)}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex-1 sm:flex-1 flex flex-col justify-between gap-5">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`thumb-${index}`}
            className="h-[100px] sm:h-[80px] w-full object-cover rounded-xl cursor-pointer"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
