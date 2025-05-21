// Description: Hero section consisting of image stack in left side and related text in right side.
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {cat , dog , bird} from '../../public/Assets.jsx'

const heroImg = [dog, cat, bird];
const texts = [
  {
    title: "Loyal Companion: The Story of Dogs",
    subtitle:
      "Dogs have been human's best friends for thousands of years. From being loyal guardians to playful companions, their unwavering love makes them the perfect pet.",
  },
  {
    title: "Mysterious & Independent: The Life of Cats",
    subtitle:
      "Cats are known for their mysterious personalities and independent nature. Despite their aloofness, they form deep bonds with their owners, making them beloved companions.",
  },
  {
    title: "Feathered Friends: The Charm of Pet Birds",
    subtitle:
      "From chirping canaries to talking parrots , birds bring joy and melody to our homes. Their vibrant colors and intelligence make them unique and lovable pets.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImg.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-around h-screen max-md:h-auto bg-gradient-to-b from-slate-400 to-gray-100 py-5 px-5 max-md:flex-col">
    {/* Left: Image Stack */ }
        <div className=" max-md:w-full w-1/2 h-120 overflow-hidden max-md:h-60 mx-10 z-0">
            {heroImg.map((img, i) => (
                <motion.img
                    key={i}
                    src={img}
                    alt={`Image ${i}`}
                    className="  w-full h-full object-cover rounded-lg shadow-lg"
                    initial={{ y: 100, opacity: 0 }}
                    animate={i === index ? { y: 0, opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ display: i === index ? "block" : "none" }}
                />
            ))}
        </div>
        {/* Right: Text Section */}
      <div className="text-center w-1/3 overflow-hidden max-md:mt-5 max-md:w-full">
        <motion.div
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold">{texts[index].title}</h1>
          <p className="text-lg mt-2 text-gray-600">{texts[index].subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
