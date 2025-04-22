import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const NoticeMap = (props) => {
  return (
    <div>
      <div
        id="toast-message-cta"
        className="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-400"
        role="alert"
      >
        <div className="flex">
        <FontAwesomeIcon icon={faUser} width={8} height={8}/>
          <div className="ms-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              <b>{props.adminName}</b>:{props.noticetitle}
            </span>
            <div className="mb-2 text-sm font-normal">
                {props.noticedes}
            </div>
            <button
              className="cursor-pointer inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeMap;
