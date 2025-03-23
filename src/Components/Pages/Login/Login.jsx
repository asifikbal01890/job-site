import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaArrowRight, FaFileImage } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../Firebase/firebase.config";
import Lottie from "lottie-react";
import animationLoginData from "../../../assets/login-animation.json";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);


    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(userInfo => {
                console.log("User Logged In:", userInfo);
                toast.success("Login successfully!")
                navigate(location.state ? location.state : "/");

            })
            .catch(error => {
                console.error("Login Error:", error);
                if (error.code === 'auth/wrong-password') {
                    toast.error("Incorrect password. Try again.");
                } else if (error.code === 'auth/user-not-found') {
                    toast.error("No account found with this email.");
                } else {
                    toast.error("Failed to login. Please check your details.");
                }
            });

    };


    //  Google Login
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log("Google Sign-In Success:", result.user);
                toast.success("Google Login Successful!");
                navigate(location.state ? location.state : "/");
            })
            .catch(error => {
                console.error("Google Sign-In Error:", error);
                toast.error("Google Sign-In Failed.");
            });
    };

    return (
        <div>
            <Toaster position="top-right" />
            <div className=" flex bg-gray-100 items-center justify-center gap-6">

                    <div className="flex items-center justify-center">
                        <div className="bg-white p-6 my-12 max-w-lg">
                            <h2 className="text-3xl font-bold text-orange-500 text-center">Login</h2>
                            <p className="text-gray-600 text-center mb-8 mt-4">
                                Discover the latest in job with Job Nest. Your go-to source for insights, trends, and internships.
                            </p>
                            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                                    <input type="email"  {...register("email")} placeholder="Your Email Address" className="w-full p-3 pl-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                                </div>
                                <div className="relative pb-4">
                                    <FaLock className="absolute left-3 top-4 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register("password")}
                                        placeholder="Password"
                                        className="w-full p-3 pl-10 pr-10 border  focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-4 text-gray-400"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>


                                <button type="submit" className="w-full flex items-center gap-2 justify-center bg-orange-500 text-white py-3  font-semibold hover:bg-orange-600 transition duration-300">
                                    Login <FaArrowRight />
                                </button>
                            </form>
                            <div className="text-center my-4">OR</div>
                            <div className="flex justify-center space-x-4">
                                <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full py-3 border border-gray-300  shadow-md hover:bg-orange-200 transition duration-200">
                                    <FcGoogle className="text-xl mr-2" />
                                    <span className="text-gray-700 font-medium">Continue with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
           
                <div className="w-2/5">
                    <Lottie animationData={animationLoginData}></Lottie>
                </div>
            </div>


        </div>
    );
};

export default Login;