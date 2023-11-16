import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {

        loginUser(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }

    const validCaptcha = (e) => {
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }
    };


    // const handleGoogleLogin = () => {

    //     googleLogin()
    //         .then(res => { console.log(res) })
    //         .catch(error => console.log(error.message))

    // }

    return (
        <div className="hero min-h-screen bg-base-200 py-20">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-center mb-5 font-semibold text-2xl'>Login</h2>
                    <div className="card mx-auto flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <LoadCanvasTemplate />
                                <input onBlur={validCaptcha} type="text" placeholder="captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn btn-primary">Login</button>
                            </div>
                            <p>New here <Link className='text-bold' to={'/signUp'}>Create Account</Link></p>
                        </form>
                    </div>
                    {/* <button onClick={handleGoogleLogin} className="btn">
                        <FaGoogle></FaGoogle>
                        Button
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Login;