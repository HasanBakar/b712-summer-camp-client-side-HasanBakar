import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUser, FaClinicMedical } from "react-icons/fa";




const onSubmit = (data) => {
  console.log(data);
};

const Register = () => {

    const { reset,formState: { errors },
      register,
      handleSubmit,
      // formState: { errors },
    } = useForm();

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
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
                placeholder="Gender"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("gender")}
              >
                <option value="female"> female</option>
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
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
