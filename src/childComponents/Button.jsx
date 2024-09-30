import React from "react";

const Button = (props) => {
  return (
    <button
      className={`px-8 py-3 ${
        props.type == "secondary"
          ? "text-gray-600 bg-transparent"
          : "text-white bg-blue-600"
      }  rounded-lg shadow-sm`}
    >
      {props.children}
    </button>
  );
};

export default Button;
