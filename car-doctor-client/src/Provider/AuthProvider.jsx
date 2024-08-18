// Import necessary modules
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, deleteUser, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

// Create AuthContext with a default value of null or an initial state object
const AuthContext = createContext(null);
export { AuthContext };

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    //google login
    const googleAuthentication = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Corrected function name from creatUser to createUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth)
    }
    const removeProfile = (user) => {

        return deleteUser(user)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)

            //access_token_JW
            if (user && user.email) {
                const logged_user = {
                    email: user.email
                }
                fetch(`https://car-servicings-9paq.vercel.app/api/jwt`, {
                    method: "POST",
                    body: JSON.stringify(logged_user),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then(data =>
                        localStorage.setItem("access-token", data.token)
                    );
            }
            else {
                localStorage.removeItem('access-token');
            }

        });
        // Corrected the cleanup function to call unsubscribe
        return () => {
            unsubscribe();
        };
    }, [auth]);

    const userInfo = {
        user,
        createUser,
        login,
        logOut,
        removeProfile,
        loading,
        googleAuthentication,


    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
