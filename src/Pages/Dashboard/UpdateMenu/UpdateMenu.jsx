import { useForm } from "react-hook-form";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import UsePublicAxios from "../../../Hooks/PublicAxios/UsePublicAxios";
import UseAxios from "../../../Hooks/Axios/UseAxios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const imageBBKey = import.meta.env.VITE_IMAGE_KEY
const url = `https://api.imgbb.com/1/upload?key=${imageBBKey}`


const UpdateMenu = () => {

    const { _id, name, recipe, price, category } = useLoaderData()

    const axiosPublic = UsePublicAxios()
    const axiosSecure = UseAxios()

    const { register, handleSubmit, reset } = useForm()


    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(url, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        if (res.data.success) {
            const menuItems = {
                name: data.name,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url,
                category: data.category
            }
            axiosSecure.patch(`/menu/${_id}`, menuItems)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        reset()
                        Swal.fire({
                            icon: "success",
                            title: `${data.name} has been Updated`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }

    }

    return (
        <div className="my-10">
            <SectionTittle subTittle={"---What's new?---"} tittle={'ADD AN ITEM'}></SectionTittle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 w-[80%] mx-auto bg-[#F3F3F3] p-10">
                    <div className="form-control col-span-2 w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue={'default'} {...register("category", { required: true })} className="select select-bordered w-full max-w-xs">
                            <option disabled value={category}>Who shot first?</option>
                            <option>salad</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>dessert</option>
                            <option>drinks</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input defaultValue={price} {...register("price", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control col-span-2 w-full">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control col-span-2 w-full">
                        <input {...register("image")} type="file" className="file-input file-input-ghost w-full max-w-xs" />
                    </div>

                    <div className="form-control w-fit col-span-2">
                        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMenu;