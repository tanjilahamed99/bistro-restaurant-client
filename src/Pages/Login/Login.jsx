import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        
        loginUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })

    }

    // loadCaptchaEnginge(6)

    return (
        <div className="hero min-h-screen bg-base-200">
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
                            {/* <LoadCanvasTemplate /> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>New here <Link className='text-bold' to={'/signUp'}>Create Account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;