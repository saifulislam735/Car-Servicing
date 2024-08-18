import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../Login/GoogleLogin";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const signUpInfo = { name, email, password }
        console.log(signUpInfo)

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                Swal.fire({
                    title: "Good job!",
                    text: "Account created successfully!",
                    icon: "success"
                });
                form.reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });

            });
    };

    return (
        <div className="h-screen">
            <div className="container h-full px-6 pb-24">
                <h2 className="text-center text-5xl font-bold text-blue-500">Please SignUp!!</h2>
                <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* Left column container with background */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>

                    {/* Right column container with form */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={handleSignUp}>
                            {/* Name input */}
                            <div className="relative mb-6" data-twe-input-wrapper-init>
                                <input
                                    type="text"
                                    name="name"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="nameInput"
                                    placeholder="Name"
                                    required
                                    style={{ color: '#333' }} // Adjust text color for better visibility
                                />
                                <label
                                    htmlFor="nameInput"
                                    className="pointer-events-none absolute left-3 top-5 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.4rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                >
                                    Name
                                </label>
                            </div>

                            {/* Email input */}
                            <div className="relative mb-6" data-twe-input-wrapper-init>
                                <input
                                    type="email"
                                    name="email"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="emailInput"
                                    placeholder="Email address"
                                    required
                                    style={{ color: '#333' }} // Adjust text color for better visibility
                                />
                                <label
                                    htmlFor="emailInput"
                                    className="pointer-events-none absolute left-3 top-5 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.4rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                >
                                    Email address
                                </label>
                            </div>

                            {/* Password input */}
                            <div className="relative mb-6" data-twe-input-wrapper-init>
                                <input
                                    name="password"
                                    type="password"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                    id="passwordInput"
                                    placeholder="Password"
                                    required
                                    style={{ color: '#333' }} // Adjust text color for better visibility
                                />
                                <label
                                    htmlFor="passwordInput"
                                    className="pointer-events-none absolute left-3 top-5 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.4rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                >
                                    Password
                                </label>
                            </div>

                            {/* Remember me checkbox */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="block min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                                        type="checkbox"
                                        id="exampleCheck3"
                                        defaultChecked // Use defaultChecked for initial checked state
                                    />
                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="exampleCheck3"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                {/* Forgot password link */}
                                <a
                                    href="#"
                                    className="text-primary focus:outline-none dark:text-primary-400"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                name="submit"
                                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                            >
                                Sign in
                            </button>

                            {/* Divider and Social Login Buttons */}
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
                            </div>

                            {/* Social login buttons */}
                            <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
