import './swiper.css'
const Banner = () => {
  return (
    <div className="h-[730px] bg-gradient-to-r from-black to-[#363636] ">
    <div className="md:grid grid-cols-3 w-11/12 mx-auto max-w-screen-xl">
    <div className="lg:col-span-2	text-white">
      <h2 className="text-slate-300 uppercase">Unlock Your Full Potential</h2>
      <h1 className="text-6xl font-semibold">Discover the Joy <br />Unleash Your Inner Melody</h1>
     </div>
     <div className="scrollable-div h-[730px] overflow-y-scroll grid grid-cols-2 gap-5">
        <img  src="https://i.ibb.co/fthRkcS/joel-vogt-XAd-PSp-Lh-Hpg-unsplash.jpg
" alt="" />
        <img src="https://i.ibb.co/M8CjLP1/levi-ventura-zcz3rlfp-NPY-unsplash.jpg
" alt="" />
        <img src="https://i.ibb.co/X73fJx3/moises-alex-RAah-FB0kpk-unsplash.jpg
" alt="" />
        <img src="https://i.ibb.co/K5X9Pb0/zachary-smith-Ji-Aw-Nju-Wm-WQ-unsplash-1.jpg
" alt="" />
        <img src="https://i.ibb.co/PM2JnGB/lily-fischer-a-Sivyt-3y-Iw-unsplash.jpg" alt="" />

        <img src="https://i.ibb.co/QKmbD8b/andriyko-podilnyk-P2zhu-Uv9l3c-unsplash.jpg" alt="" />
     </div>  
    </div>
    </div>
  );
};
export default Banner;