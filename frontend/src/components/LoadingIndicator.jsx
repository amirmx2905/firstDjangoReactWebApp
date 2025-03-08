import React from "react";

const LoadingIndicator = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-5 h-5 border-4 border-t-4 border-white border-t-gray-800 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingIndicator;
