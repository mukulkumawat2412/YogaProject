

import { Link } from "react-router-dom";
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { toast, Toaster } from "sonner";
import axios from "axios";
import { useForm } from "react-hook-form";





const schema = z.object({
  name: z.string().min(1,"Name is required").max(40,"Name cannot exceed 40 characters"),
  email:z.string().min(1,"email is required").email("enter correct email"),
  password:z.string().min(8,"Password is too short").regex(/[0-9]/,"Password must contain a Number")
  .regex(/[a-z]/,"Password must contain a lowercase letter")
  .regex(/[A-Z]/,"Password must contain a Uppercase letter")
  .regex(/[\W_]/,"Password must contain a special character")
  
  
  
})



const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver:zodResolver(schema)
  });



const onSubmit = (data)=>{


  axios.post('https://yogaproject-zuhz.onrender.com/register',data).then((data)=>{
    console.log(data)
    if(data.status===201){
      toast.success("User Register Successfully")
    }

  }).catch((err)=>{
    console.log(err)
    
  })
  
  
}

  



  return (
    
    <section className="flex justify-center w-full min-h-screen mx-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full px-6 py-8 mx-auto md:h-600 lg:py-0">
      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl leading-tight tracking-tight text-red-900 t-bold tex md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">

              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName </label>

                <input {...register('name')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>


              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                <input {...register("email")} type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input {...register("password")} type="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
              </div>
            



              <button type="submit" className="w-full bg-red-600 text-white  hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account?{" "}<Link to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link></p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp

