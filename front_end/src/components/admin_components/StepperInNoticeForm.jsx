import React from "react";

const StepperInNoticeForm = ({ stepCount }) => {
  return (
    <div>
      <ol className="flex items-center w-full">
        <li
          className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block
            ${stepCount >= 2 ? "after:border-blue-800 dark:after:border-blue-800" : "after:border-gray-700 dark:after:border-gray-700"}
          `}
        >
          <span className="text-yellow-400 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            1
          </span>
        </li>

        <li
          className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block
            ${stepCount >= 3 ? "after:border-blue-800 dark:after:border-blue-800" : "after:border-gray-700 dark:after:border-gray-700"}
          `}
        >
          <span
            className={`text-yellow-400 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12
              ${stepCount >= 2 ? "dark:bg-blue-800" : "dark:bg-gray-700"} shrink-0
            `}
          >
            2
          </span>
        </li>

        <li className="flex items-center w-full">
          <span
            className={`text-yellow-400 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12
              ${stepCount >= 3 ? "dark:bg-blue-800" : "dark:bg-gray-700"} shrink-0
            `}
          >
            3
          </span>
        </li>
      </ol>
    </div>
  );
};

export default StepperInNoticeForm;
