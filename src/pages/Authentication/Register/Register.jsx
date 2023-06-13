import { LuMailQuestion } from "react-icons/lu";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
const Register = () => { 
 const {signUpWithEmail} = useAuth()
  const { register, handleSubmit, formState: { errors }, trigger } = useForm()
  const onSubmit = data => {
    const formdata = new FormData()
    formdata.append("image",data.img[0])
    axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_api_Key}`,formdata)
    .then(res=>{
      if(res.data.success){
        const imgurl =res.data.data.display_url
        console.log(imgurl)
        signUpWithEmail(data.email,data.password)
        .then(res=>{
          updateProfile(res.user,{displayName:data.name,photoURL:imgurl})
          .then()
          console.log(res.user);
         })
      }
    })
    console.log(data,data.img[0],formdata);
  }
  console.log(errors);
  useEffect(() => {
    trigger("name");
    trigger("email");
    trigger("password");
    trigger("confirm");
    trigger("name");
  }, [trigger]);
  const handleInputChange = (e) => {
    trigger(e.target.name);
    trigger(e.target.email);
    trigger(e.target.password);
    trigger(e.target.confirm);
  };


  return (
    <div className="w-11/12 mx-auto max-w-screen-xl lg:grid grid-cols-2 md:h-700px shadow-xl mt-5 bg-slate-50 px-2 py-16 md:p-16">
      <div >
        <img src="https://i.ibb.co/pwRqJdL/Privacy-policy-rafiki.png" alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="mb-2 text-3xl font-bold text-slate-400">REGISTER</h1>
        <h2  className="mb-8">* already have an account? <Link to='/user/login' className="hover:text-green-500 hover:font-semibold"> Login</Link></h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control grid grid-cols-9 items-center">
            <p className="text-xl col-span-2 ps-2 py-[6px] bg-gray-100">Name</p>
            <p className="text-2xl bg-gray-200 w-[38px] px-[8px] py-[8px]"><BsFillPersonCheckFill /></p>
            <div className="col-span-6">
              {!errors?.name ? <span className="border-s-[10px] rounded-s border-green-400 py-2 me-1"></span> : ''}
              <input name="name" onKeyUp={handleInputChange} {...register("name", { required: true, minLength: 6 })} type="text" placeholder="Name" className="focus:outline-0	 focus:border-green-400 border-b-2  bg-transparent w-full py-2" />
            </div>
          </div>
          <div className="form-control grid grid-cols-9 items-center">
            <p className="text-xl col-span-2 ps-2 py-[6px] bg-gray-100">Email</p>
            <p className="text-2xl bg-gray-200 w-[38px] px-[8px] py-[8px]"><LuMailQuestion /></p>
            <div className="col-span-6">
              {!errors?.email ? <span className="border-s-[10px] rounded-s border-green-400 py-2 me-1"></span> : ''}
              <input   name="email" onKeyUp={handleInputChange} {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })} type="text" placeholder="Email" className="focus:outline-0	 focus:border-green-400 border-b-2  bg-transparent w-full py-2" />
            </div>
          </div>
          <div className="form-control grid grid-cols-9 items-center">
            <p className="text-xl col-span-2 ps-2 py-[6px] bg-gray-100">Password</p>
            <p className="text-2xl bg-gray-200 w-[38px] px-[8px] py-[8px]"><RiLockPasswordFill /></p>
            <div className="col-span-6">
              {!errors.password ? <span className="border-s-[10px] rounded-s border-green-400 py-2 me-1"></span> : ''}
              <input  name="password" onKeyUp={handleInputChange} {...register("password", { required: true, pattern: /^[^A-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/, minLength: 6 })} type="password" placeholder="Password" className="focus:outline-0	 focus:border-green-400 border-b-2  bg-transparent w-full py-2" />
            </div>
          </div>
          <div className="form-control grid grid-cols-9 items-center">
            <p className="text-xl col-span-2 ps-2 py-[6px] bg-gray-100">Confirm </p>
            <p className="text-2xl bg-gray-200 w-[38px] px-[8px] py-[8px]"><RiLockPasswordFill /></p>
            <div className="col-span-6">
            {(!errors.password && !errors.confirm)?<span className="border-s-[10px] rounded-s border-green-400 py-2 me-1"></span> : ''}
              <input  name="confirm" onKeyUp={handleInputChange}  {...register("confirm", { required: true, minLength:6 })} type="password" placeholder="Confirm  Password" className="focus:outline-0	 focus:border-green-400 border-b-2  bg-transparent w-full py-2" />
            </div>
          </div>
          <div className="form-control grid grid-cols-9 items-center">
            <p className="text-xl col-span-2 ps-2 py-[6px] bg-gray-100">Photo </p>
            <p className="text-2xl bg-gray-200 w-[38px] px-[8px] py-[8px]"><RxAvatar /></p>
            <div className="col-span-6">
              <input {...register("img",{required:true})} type="file" className="focus:outline-0	 focus:border-green-400 border-b-2  bg-transparent w-full py-2" />
            </div>
          </div>
          <input className=" text-slate-200 font-semibold bg-[#39d075] px-6 py-1 rounded" type="submit" value={'SIGN UP'} />
        </form>
        <div className="mt-5">
        <span>Continue with </span><button>G</button>
        </div>
      </div>
    </div>
  );
};

export default Register;