const PageBanner = ({img}) => {
    return (
        <div className='bg-[#f0f0f0] h-[400px] text-center flex flex-col  items-center relative'>
            <img className='h-[300px] max-w-[560px]' src="https://i.ibb.co/VD2cvqg/Webinar-pana.png" alt="" />
            <h1 className='banner-title bg-[#47b968] px-8 text-2xl py-2 font-bold mt-5 text-white absolute bottom-0'>INSTRUCTORS</h1>
        </div>
    );
};

export default PageBanner;