import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NoticeMap = (props) => {
  return (
    <div>
      <div
        id="toast-message-cta"
        className="w-100 max-w-xs p-4 bg-white text-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-300"
        role="alert"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
              <FontAwesomeIcon icon={faUser} />
              <span>{props.adminName}</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Posted on: {props.date.slice(0, props.date.indexOf("T"))}
            </div>
          </div>

          <div className="inline-block w-fit px-2 py-0.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {props.noticecategory}
          </div>

          <div className="text-lg font-bold text-gray-900 dark:text-red-500">
            {props.noticetitle}
          </div>

          <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {props.noticedes}
          </div>

          {props.attachments && (
            <a
              href={`http://localhost:8000/${props.attachments}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit px-3 py-1 text-xs font-medium text-white bg-yellow-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-400 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-blue-800"
            >
              View Attachments
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeMap;
