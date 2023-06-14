/* eslint-disable react/prop-types */

const InstructorCard = ({instructor}) => {
    return (
        <div>
            <div className="card w-[340px] bg-gray-50 shadow-xl border-t-4 border-green-500 rounded-none">
                <figure className="px-10 pt-10">
                    <img  src={instructor.image} alt="Shoes" className="rounded-full w-40 h-40" />
                </figure>
                <div className="card-body  space-y-3">
                    <h2 className="card-title">{instructor.name}</h2>
                    <p>{instructor.email}</p>
                    <div className="card-actions">
                        <button className="border-2 font-medium border-green-500 px-4 py-[6px] rounded hover:bg-green-500 hover:text-white">See Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;