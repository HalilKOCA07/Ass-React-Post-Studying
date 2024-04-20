import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// Initialization for ES Users
import {
  Input,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Input, Ripple });

const Login = () => {

    const { loginIn, setLoginIn } = useLoginContext()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoginIn(true)
        navigate("/input") //* bir önceki dizindeki adrese gider
    }

  return (

    <div className="">
<section class="h-screen">
  <div class="h-full">
    {/* <!-- Left column container with background--> */}
    <div
      class="flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Sample image" />
      </div>

      {/* <!-- Right column container --> */}
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form>
          {/* <!--Sign in section--> */}
          <div
            class="flex flex-row items-center justify-center lg:justify-start">
            <p class="mb-0 me-4 text-lg">Sign in with</p>

            {/* <!-- Facebook --> */}
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              class=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
              {/* <!-- Facebook --> */}

              <FaFacebook />

            </button>

            {/* <!-- X --> */}
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              class=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
              {/* <!-- X --> */}
              <FaXTwitter />
            </button>

            {/* <!-- Linkedin --> */}
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              class=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
              {/* <!-- Linkedin --> */}
              <FaLinkedinIn />
            </button>
          </div>

          {/* <!-- Separator between social media sign in and email/password sign in --> */}
          <div
            class=" w-[30rem] my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>
          </div>

          {/* <!-- Email input --> */}
          <div class="relative mb-6" data-twe-input-wrapper-init>
            <label htmlFor="loginEmail">Email adress</label>
            <input
              type="text"
              class=" shadow-lg w-[30rem] shadow-inner border-red-200 border-2 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="loginEmail"
              placeholder="codeveloper@cw.com"
               />

          </div>

          {/* <!-- Password input --> */}
          <div class="relative mb-6" data-twe-input-wrapper-init>
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              class="shadow-lg w-[30rem] shadow-inner border-red-200 border-2 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="loginPassword"
              placeholder="admin" />
          </div>

          <div class="mb-6 flex items-center justify-evenly">
            {/* <!-- Remember me checkbox --> */}
            <div class="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
              <input
                class="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                type="checkbox"
                value="remember"
                id="exampleCheck2" />
              <label
                class="inline-block ps-[0.15rem] hover:cursor-pointer"
                for="exampleCheck2">
                Remember me
              </label>
            </div>

            {/* <!--Forgot password link--> */}
            <a href="#!">Forgot password?</a>
          </div>

          {/* <!-- Login button --> */}
          <div class="text-center lg:text-left">
            <button
              type="button"
              class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              Login
            </button>

            {/* <!-- Register link --> */}
            <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
              Don't have an account?
              <a
                href="#!"
                class="text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                > Register</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Login;
