import React, { useContext } from 'react'
import HeroSection from '../Components/HeroSection'
import SearchBar from '../Components/SearchBar'
import { AuthContext } from '../Context/AuthContext';

function Home() {
  // const{currentUser} = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className='w-full  mx-auto flex flex-col '>
      <HeroSection />
      <SearchBar />
    </div>
  );
}

export default Home;
