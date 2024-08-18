//import React from 'react';

import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const GoogleLogin = () => {
    const { googleAuthentication } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        console.log('hi google')
        googleAuthentication()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                const email = error.customData.email;
                console.log(email, errorMessage)
            });

    }
    return (
        <div>
            <div onClick={handleGoogleLogin} className="space-y-3">
                <a
                    className="flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    style={{ backgroundColor: '#3b5998' }}
                    role="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                >
                    <span className="mr-2 fill-white [&>svg]:mx-auto ">
                        <FcGoogle className="text-xl" />
                    </span>
                    Continue with Google
                </a>
            </div>
        </div>
    );
};

export default GoogleLogin;