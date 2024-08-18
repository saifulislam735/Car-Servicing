// import React from 'react';

const Error = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-2xl text-gray-800 mb-4">
                    Oops! Something went wrong.
                </div>
                <button onClick={goBack} className="text-lg text-blue-500 underline">
                    Go back to the previous page
                </button>
            </div>
        </div>
    );
};

export default Error;
