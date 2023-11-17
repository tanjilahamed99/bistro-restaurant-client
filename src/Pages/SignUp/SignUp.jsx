import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import loginImg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import UsePublicAxios from '../../Hooks/PublicAxios/UsePublicAxios';
import { FaGoogle } from 'react-icons/fa';


const SignUp = () => {

    const { createUser,googleLogin } = useContext(AuthContext)

    const publicAxios = UsePublicAxios()

    const navigate = useNavigate()

    const { register, handleSubmit, } = useForm()
    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(() => {

                const userInfo = { email: data.email, name: data.name }

                publicAxios.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
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


    const handleGoogleLogin = () => {
        const publicAxios = UsePublicAxios()

        googleLogin()
            .then((res) => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                publicAxios.post('/users', userInfo)
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            {/* <LoadCanvasTemplate /> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p>Already have a account <Link className='text-bold' to={'/login'}>Login</Link></p>
                        </form>
                    </div>
                    <button onClick={handleGoogleLogin} className="btn bg-blue-500 flex mx-auto w-[90%] my-5 text-white">
                        <FaGoogle></FaGoogle>
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;