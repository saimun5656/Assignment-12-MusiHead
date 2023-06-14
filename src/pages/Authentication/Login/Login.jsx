import { LuMailQuestion } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
    const [error,setError]= useState()
    const {emailLogin}= useAuth()
    const loaction = useLocation();
    const from = loaction.state?.from||'/';
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, trigger , reset} = useForm()
    useEffect(() => {
        trigger("email");
        trigger("password");
      }, [trigger]);
      const handleInputChange = (e) => {
        trigger(e.target.email);
        trigger(e.target.password);
      };
      const onSubmit = data => {
        emailLogin(data.email,data.password)
        .then(res=>{
            reset()
            console.log(res.user)
            navigate(from)
        })
        .catch(err=>setError(`* ${err.message}`))
      }
    return (
        <div>
          <div className="w-11/12 mx-auto max-w-screen-xl lg:grid grid-cols-2 md:h-700px shadow-xl mt-5 bg-slate-50 px-2 py-16 md:p-16">
      <div >
        <img src="https://i.ibb.co/pwRqJdL/Privacy-policy-rafiki.png" alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="mb-2 text-3xl font-bold text-slate-400">LOGIN</h1>
        <h2  className="mb-8">* Do not have an account? <Link to ='/user/register' className="hover:text-green-500 hover:font-semibold"> Register</Link></h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
         
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
          <h1 className="text-red-500 font-semibold">{error}</h1>
          <input className=" text-slate-200 font-semibold bg-[#39d075] px-6 py-1 rounded" type="submit" value={'LOG IN'} />
        </form>
        <div className="mt-5">
        <span>Continue with </span><button>G</button>
        </div>
      </div>
          </div>
        </div>
    );
};

export default Login;