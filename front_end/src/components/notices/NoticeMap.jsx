import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { contextCreate } from "../../Context";


const NoticeMap = (props) => {
  const {mode, setMode} = useContext(contextCreate);
  
  return (
    <div className={`rounded-lg shadow-sm border transition-shadow duration-200 ${
      mode === 'light'
        ? 'bg-white border-gray-100 hover:shadow-md'
        : 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-700/30'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon 
                icon={faUser} 
                className={mode === 'light' ? 'text-blue-600' : 'text-blue-400'} 
              />
              <span className={`font-semibold ${
                mode === 'light' ? 'text-blue-600' : 'text-blue-400'
              }`}>
                {props.adminName}
              </span>
            </div>
            <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
              mode === 'light'
                ? 'text-blue-800 bg-blue-100'
                : 'text-blue-300 bg-blue-900/50'
            }`}>
              {props.noticecategory}
            </span>
          </div>
          <time className={`text-sm ${
            mode === 'light' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Posted on: {props.date.slice(0, props.date.indexOf("T"))}
          </time>
        </div>

        {/* Notice Title */}
        <h2 className={`text-xl font-bold mb-4 ${
          mode === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {props.noticetitle}
        </h2>

        {/* Notice Description */}
        <div className={`prose prose-sm max-w-none mb-4 whitespace-pre-line ${
          mode === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          {props.noticedes}
        </div>

        {/* Attachment Button */}
        {props.attachments && (
          <a
            href={`${import.meta.env.VITE_BACKEND_URL}/${props.attachments}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              mode === 'light'
                ? 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                : 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-gray-800'
            }`}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
            View Attachments
          </a>
        )}
      </div>
    </div>
  );
};

export default NoticeMap;
