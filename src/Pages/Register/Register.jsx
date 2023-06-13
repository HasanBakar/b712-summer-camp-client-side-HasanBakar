import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUser, FaClinicMedical } from "react-icons/fa";
import { useContext } from 'react';
import { toast } from "react-toastify";
import { AuthContext } from './../../Providers/AuthProviders';
import { Helmet } from 'react-helmet-async';



const Register = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.from?.state?.pathname || "/";
    const { createUser, setUser, updateUserProfile, LoginWithGoogle } =
      useContext(AuthContext);
    const { reset,formState: { errors },
      register,
      handleSubmit,
    } = useForm();

    const handleRegister = (data) => {

      const {confirmPassword,email,password, name,photo} = data;

      if(confirmPassword === password){
      createUser(email, password)
      .then(result=>{
        const user = result.user;
        setUser(user);

        updateUserProfile(name, photo)
        .then(()=>{

          const userData = {name: name, email: email, image: photo, userType: "student"}
          fetch(
            "https://b7a12-summer-camp-server-side-hasan-bakar.vercel.app/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast("Successfully Registration complete!", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                reset();
                navigate("/");
              }
            }); 

        })
        .catch(error=>{
          toast.error(error.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
       
        
      })
      .catch(error=>{
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      }
     else{
     toast.error("Doesn't matched your password!", {
       position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
     });
     }
    };

    const handleGoogleLogin = () => {
      reset();
      LoginWithGoogle()
        .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user);
          const userData = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            userType: "student",
          };
          fetch(
            "https://b7a12-summer-camp-server-side-hasan-bakar.vercel.app/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast("Your Register Successful with Google", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    };

  return (
    <>
      <Helmet>
        <title>Register | DanceScape</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center my-28 px-6 mx-auto">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="w-full max-w-md"
          >
            <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
              Please Register
            </h1>

            <div className="relative flex items-center mt-4">
              <span className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute">
                <FaUser></FaUser>
              </span>

              <input
                {...register("name", { required: true })}
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Name"
              />
            </div>
            <p className="text-red-500">
              {errors.name && <>Name field is required</>}
            </p>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                {...register("email", { required: true })}
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>
            <p className="text-red-500">
              {errors.email && <>Email field is required</>}
            </p>

            <div className="relative flex items-center mt-4">
              <span className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute">
                <FaUser></FaUser>
              </span>

              <input
                {...register("photo", { required: true })}
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Photo URL"
              />
            </div>
            <div className="relative flex items-center mt-4">
              <span className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute">
                <FaClinicMedical></FaClinicMedical>
              </span>

              <select
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("gender")}
              >
                <option value="female">
                  female
                </option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~])(?=.{6,16})/,
                })}
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>
            <p className="text-red-500">
              {errors.password && (
                <small>
                  Your password must Contain at least one lowercase and one
                  uppercase letter, one digit, one special character, and
                  password length between 6 and 16 characters.
                </small>
              )}
            </p>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
              />
            </div>

            <div className="mt-6">
              <input
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:bg-orange-300 focus:ring-opacity-50"
                type="submit"
                value="Register"
              />

              <div className="mt-6 text-center ">
                <Link
                  to="/login"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  If you have already an account? Please Login
                </Link>
              </div>
              <Link
                onClick={handleGoogleLogin}
                className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>

                <span className="mx-2">Sign up with Google</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
