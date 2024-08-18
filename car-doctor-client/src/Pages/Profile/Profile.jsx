import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Profile = () => {
    const { user, logOut, removeProfile } = useContext(AuthContext);

    // Function to handle user logout
    const handleLogout = () => {
        logOut();
    };

    // Function to handle user removal
    const handleRemoveUser = async () => {
        3
        Swal.fire({
            title: "Are you sure?",
            text: "Deleting your profile!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your account has been deleted.",
                    icon: "success"
                });
                removeProfile(user);
            }
        });
    };


    // Check if user data is available
    if (!user) {
        return (
            <div className="flex justify-center items-center h-[400px]">
                <p className="text-3xl">Error: User data not found.</p>

            </div>
        );
    }



    // Render user profile when user data is available
    return (
        <div className="container mx-auto p-4 mb-10">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Profile" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{user.displayName || "Anonymous User"}</h1>
                        <p className="mt-2 text-gray-500">Email: {user.email}</p>
                        <p className="mt-2 text-gray-500">Email Verified: {user.emailVerified ? "Yes" : "No"}</p>
                        <p className="mt-2 text-gray-500">User ID: {user.uid}</p>
                        <p className="mt-2 text-gray-500">Provider: {user.providerId}</p>
                        <p className="mt-2 text-gray-500">Creation Time: {new Date(user.metadata.creationTime).toLocaleString()}</p>
                        <p className="mt-2 text-gray-500">Last Sign-In Time: {new Date(user.metadata.lastSignInTime).toLocaleString()}</p>
                        {user.photoURL && (
                            <img className="h-16 w-16 rounded-full mt-4" src={user.photoURL} alt="Profile Picture" />
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                    Logout
                </button>
                <button
                    onClick={handleRemoveUser}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700"
                >
                    Remove User
                </button>
            </div>
        </div>
    );
};

export default Profile;
