import React from "react";

const NoAccess = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-red-800 text-3xl mb-6 text-center">
        Sorry, you cannot access this page!
      </h1>
    </div>
  );
};

export default NoAccess;
