import React from 'react'
import HeroSection from '../Components/HeroSection'
import SearchBar from '../Components/SearchBar'

function Home() {
  return (
    <div className='w-full  mx-auto flex flex-col '>
      <HeroSection />
      <SearchBar />
    </div>
  );
}

export default Home;
