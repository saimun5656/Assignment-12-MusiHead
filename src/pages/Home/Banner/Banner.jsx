import './swiper.css'
import { MdLocationSearching } from "react-icons/md";
const Banner = () => {
  return (
    <div className="h-[1200px] md:h-[730px] bg-gradient-to-r from-black to-[#363636] ">
      <div className="md:grid grid-cols-3 w-11/12 mx-auto max-w-screen-xl">
        <div className="pt-16 lg:col-span-2 flex flex-col gap-y-10 justify-center	text-white">
          <h2 className="text-slate-300 uppercase">Unlock Your Full Potential</h2>
          <h1 className="text-6xl font-semibold">Discover the Joy <br />Unleash Your Inner Melody</h1>
          <h2 className='text-slate-300 uppercase'>Join Our Thriving Community and Experience Unwavering Support</h2>
          <div className='relative max-w-[440px]'>
            <input className='w-full  px-4 py-3 bg-transparent border border-[#1ab06a] rounded-sm' placeholder='Seacrch Courses' type="text" name="" id="" />
            <div className='rounded-sm absolute top-[2px] right-[2px] bg-white w-[45px] h-[45px] flex justify-center items-center'><MdLocationSearching className='text-green-600 text-2xl'></MdLocationSearching></div>
           <div className='relative'>
           <div className="avatar-group -space-x-6 mt-10 w-28">
              <div className="avatar border-[1px]">
                <div className="w-14">
                  <img src="https://i.ibb.co/Mp1CT22/aiony-haust-3-TLl-97-HNJo-unsplash.jpg" />
                </div>
              </div>
              <div className="avatar border-[1px]">
                <div className="w-14 ">
                  <img src="https://i.ibb.co/3y6MV2B/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg" />
                </div>
              </div>
              <div className="avatar border-[1px] ">
                <div className="w-14">
                  <img className='' src="https://i.ibb.co/dWJ46rW/imansyah-muhamad-putera-n4-Kew-LKFOZw-unsplash.jpg" />
                </div>
              </div>
              <div className="avatar placeholder border-[1px] border-transparent">
                <div className="w-14 bg-neutral-focus text-neutral-content">
                  <span className='ms-2 text-green-500 font-semibold'>+99</span>

                </div>

              </div>
              
            </div>
            <div className='absolute top-2 right-44'><span className='text-white'>Joined Our classes</span></div>
           </div>
            
            
          </div>
        </div>
        <div className="mt-10 scrollable-div h-[500px] md:h-[690px] overflow-y-scroll grid grid-cols-2 gap-5 ">
          <div className="child"><img className="w-full h-full rounded-md" src="https://i.ibb.co/fthRkcS/joel-vogt-XAd-PSp-Lh-Hpg-unsplash.jpg " alt="" /></div>
          <div className="h-[160px]">        <img className="w-full h-full rounded-md" src="https://i.ibb.co/M8CjLP1/levi-ventura-zcz3rlfp-NPY-unsplash.jpg" alt="" /></div>
          <div className="child h-[160px]">        <img className="w-full h-full rounded-md" src="https://images.unsplash.com/photo-1602261192256-3a8503ae7343?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="" /></div>
          <div className="child -mt-24">        <img className="w-full  rounded-md" src="https://i.ibb.co/K5X9Pb0/zachary-smith-Ji-Aw-Nju-Wm-WQ-unsplash-1.jpg" alt="" /></div>
          <div className="child">        <img className="w-full h-full rounded-md" src="https://i.ibb.co/PM2JnGB/lily-fischer-a-Sivyt-3y-Iw-unsplash.jpg" alt="" /></div>
          <div className="child h-[160px]">        <img className="w-full h-full rounded-md" src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" /></div>
          <div className="child h-[160px]">        <img className="w-full h-full rounded-md" src="https://i.ibb.co/myTZ25C/asba-drums-q-Y7qb6o-Ytg-unsplash.jpg" alt="" /></div>
          <div className="child -mt-24">        <img className="w-full h-full rounded-md" src="https://i.ibb.co/gzxGdmD/milo-bauman-hr-Ie5-Hk-IZ-E-unsplash.jpg" alt="" /></div>

        </div>
      </div>
    </div>
  );
};
export default Banner;