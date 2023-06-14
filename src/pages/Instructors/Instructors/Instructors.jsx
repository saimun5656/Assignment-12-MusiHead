import PageBanner from '../../../Components/PageBanner';
import useInstructors from '../../../Hooks/useInstructors';
import InstructorCard from '../InstructorCard/InstructorCard';

const Instructors = () => {
    const [instructors]= useInstructors()
    console.log(instructors);
    return (
        <div>
            <PageBanner img='https://i.ibb.co/VD2cvqg/Webinar-pana.png' tittle='INSTRUCTORS'></PageBanner>
           <div className='flex flex-col gap-8 md:grid md:grid-cols-2 xl:grid-cols-3 w-11/12 mx-auto mt-16 justify-center items-center'>
           {
                instructors?.map(ins => <InstructorCard key={ins._id} instructor={ins}></InstructorCard>)
            }
           </div>
        </div>
    );
};

export default Instructors;