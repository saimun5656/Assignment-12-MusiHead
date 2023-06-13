import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AddClasses = () => {
    const axiosSecure = useAxiosSecure()
    const {user} =useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
     const price = parseFloat(data.price)
     console.log(price);
     const formData = new FormData() 
     formData.append("image",data.img[0])
     axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_api_Key}`,formData)
     .then(res=>{
        if(res.data.success){
        const imgurl = res.data.data.display_url;
        const newclass = {instructor_name:user?.displayName,instructor_email:user?.email,class_name:data.class,image:imgurl,seats:parseInt(data.seats),price:price,enrolled:0,status:'pending'}
        console.log(newclass);
        axiosSecure.post('/classes',newclass)
        }
     })
    }
    console.log(errors);
    return (
        <div className="md:grid grid-cols-3 md:h-[600px] w-11/12 mx-auto md:mx-10 drop-shadow-[15px_20px_15px_rgba(0,0,0,0.25)] ">
            <div className="bg-gray-50 flex items-center rounded-t-md md:rounded-s-md">
                <img src="https://i.ibb.co/f9KG5DB/Uploading-cuate.png" alt="" />
            </div>
            <div className="col-span-2 bg-[#39423d] px-3 py-10 md:p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Class Name</span>
                        </label>
                        <input {...register("class",{required:true})} type="text" placeholder="class name" className="p-2 rounded-sm" />
                        {errors.class?<p className="text-red-300 mt-1">*Class name requred</p>:''}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Class image</span>
                        </label>
                        <input {...register("img",{required:true})} type="file" placeholder="class name" className="p-2 rounded-sm bg-white" />
                        {errors.img?<p className="text-red-300 mt-1">*Class image requred</p>:''}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Instructor Name</span>
                        </label>
                        <input {...register("name")} type="text" disabled defaultValue={user?.displayName} className="p-2 rounded-sm disabled:bg-slate-100 disabled:opacity-70" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Instructor Email</span>
                        </label>
                        <input {...register("email")} type="text"  disabled defaultValue={user?.email} className="p-2 rounded-sm disabled:bg-slate-100 disabled:opacity-70" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Available Seats</span>
                        </label>
                        <input {...register("seats",{required:true})} type="number" placeholder="Available Seats" className="p-2 rounded-sm " />
                        {errors.seats?<p className="text-red-300 mt-1">*Available seats number requred</p>:''}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Price</span>
                        </label>
                        <input step={0.01} {...register("price",{required:true})} type="number" placeholder="price"  className="p-2 rounded-sm" />
                        {errors.price?<p className="text-red-300 mt-1">*Class price requred</p>:''}
                    </div>
                    </div>
                     <div className="mt-10 md:grid grid-cols-5 items-center justify-center">
                        <div className="col-span-2 text-green-100  hidden md:block"><hr className="border-1 border-green-500" /></div>
                        <div className="text-center border-2 border-gray-300 text-white px-1 py-2 rounded hover:border-green-500"><button type="" className="">ADD CLASS</button></div>
                        <div className="col-span-2"><hr className="border-1 border-green-500 hidden md:block"/></div>
                     </div>
                </form>
            </div>
        </div>
    );
};

export default AddClasses;