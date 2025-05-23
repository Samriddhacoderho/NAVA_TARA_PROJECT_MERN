import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NoticeMap = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} className="text-blue-600" />
              <span className="font-semibold text-blue-600">
                {props.adminName}
              </span>
            </div>
            <span className="inline-flex px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
              {props.noticecategory}
            </span>
          </div>
          <time className="text-sm text-gray-500">
            Posted on: {props.date.slice(0, props.date.indexOf("T"))}
          </time>
        </div>

        {/* Notice Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {props.noticetitle}
        </h2>

        {/* Notice Description */}
        <div className="prose prose-sm max-w-none text-gray-600 mb-4 whitespace-pre-line">
          {props.noticedes}
        </div>

        {/* Attachment Button */}
        {props.attachments && (
          <a
            href={`http://localhost:8000/${props.attachments}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
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
