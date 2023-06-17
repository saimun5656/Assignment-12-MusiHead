import { Typewriter } from "react-simple-typewriter";

const Ourfeatures = () => {
    return (
        <div className="bg-fixed bg-[url('https://i.ibb.co/XVjrqQL/wes-hicks-MEL-j-Jnm7-RQ-unsplash.jpg')] min-h-[500px] bg-cover mt-16 p-4">
            <div className="min-h-[500px] bg-[#13181b] bg-opacity-90 flex flex-col justify-center items-center p-4 rounded-md">
                <h1 className="text-green-400 text-4xl font-medium"><Typewriter
                    words={['OUR FEATURES']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></h1>
                <p className="text-gray-200 mt-5">
                <Typewriter
                    words={['Discover  a   World', 'of  Musical  Inspiration', 'with Interactive  Lessons,', 'Practice Tools' , 'and Personalized  Feedback']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                </p>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Ourfeatures;