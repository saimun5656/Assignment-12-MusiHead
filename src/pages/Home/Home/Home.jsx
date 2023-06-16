import { useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import { MdDarkMode,MdSunny } from "react-icons/md";
const Home = () => {
    const [isDark ,setIsDark]= useState(false);
    const setdarkmode = ()=>{
        setIsDark(!isDark)
    }
    return (
        <div className={`${isDark?'bg-slate-800':''}`}>
             <div className='absolute top-[69px] left-[288px] lg:top-[73px]'>
             <button className='text-2xl' onClick={setdarkmode}>{!isDark?<MdDarkMode/>:<MdSunny/>}</button>
             </div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;