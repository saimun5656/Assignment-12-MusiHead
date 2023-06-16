import PageBanner from "../../../Components/PageBanner";
import useClasses from "../../../Hooks/useClasses";
import ClassesCard from "../ClassCard/ClassesCard";
const Classes = () => {
    const[classes]= useClasses()
    return (
        <div>
            <PageBanner img="https://i.ibb.co/X5YmJrh/Orchestra-pana.png"  tittle={'ALL ClASSES'}></PageBanner>
           <div className='flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto mt-16 justify-center items-center'>
           {
               classes?.map(cls=><ClassesCard cls={cls} key={cls._id}></ClassesCard>)
           }
           </div> 
        </div>
    );
};

export default Classes;