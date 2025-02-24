
import { useForm } from "react-hook-form"
import { Link,useNavigate } from "react-router-dom";
import { login } from "../redux/slices/LoginSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from '@mui/material';






const Login = () => {

  const dispatch = useDispatch()

  const { handleSubmit, register } = useForm()


const navigate = useNavigate()

const {role,loading}  = useSelector((state)=>state.auth)



  const onSubmit = async (data) => {
    console.log(data)

   dispatch(login(data))
   
  }




  useEffect(() => {
    if (role === 'admin') {
      navigate('/');
    }
    if (role === 'user') {
      navigate('/');
    }
  }, [role]);




 





  
  return (
    
    <section className="flex justify-center w-full min-h-screen bg-gray-100 x-auto m">
    
      <div className="flex flex-col items-center justify-center w-full px-6 py-8 mx-auto md:h-800 lg:py-0">
       
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an login
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
            


              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" {...register("email")} className="bg-grey-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" {...register("password")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
             {/* <CircularProgress /> */}
              <button type="submit" className="w-full bg-green-600 text-white  hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{loading ? <CircularProgress size={24} className='text-white'/> : 'Login'}</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account?{" "}<Link to={"/reg"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

