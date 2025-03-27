import React from "react";
import HeroSection from "../Components/HeroSection";
import SearchBar from "../Components/SearchBar";
import { listData } from "../Data/DummyData";
import Card from "../ListPage/Components/Card";

function Home() {
  const data = listData;
  const len = data.length- 4;
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center min-h-screen">
      <HeroSection />
      <SearchBar />
      <div className="h-full w-full max-w-6xl px-4 sm:px-8 flex flex-wrap gap-8 justify-center">
        {data.slice(0, 4).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
