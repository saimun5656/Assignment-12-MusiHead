/* eslint-disable react/prop-types */
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({from}) => {
    const { signUpWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleGoogle = () => {
        signUpWithGoogle()
            .then(res => {
                const user = { name: res.user.displayName, email: res.user.email, image: res.user.photoURL, role: 'student' }
                console.log(user);
                axios.post('https://assignment-12-summer-camp-server-saimun5656.vercel.app/users', user)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `New User created successfully`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    navigate(from)
            })
    }
    return (
        <div>
            <h1 className="flex items-center gap-2">Or Continue With <button onClick={handleGoogle}><FcGoogle className="text-xl" /></button></h1>
        </div>
    );
};

export default SocialLogin;