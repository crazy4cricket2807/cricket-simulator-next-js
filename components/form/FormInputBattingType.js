import React from "react";

const FormInputBattingType = ({ handleInputChange }) => {
  return (
    <div className="my-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 text-left"
        htmlFor={"battingStyle"}
      >
        Batting Style
      </label>
      <div className="flex justify-around ">
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            name="battingStyle"
            value="left-hand bat"
            onChange={(e) => handleInputChange(e, "batStyle")}
          />
          Left-Hand Bat
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            name="battingStyle"
            value="right-hand bat"
            onChange={(e) =>  handleInputChange(e, "batStyle")}
          />
          Right-Hand Bat
        </div>
      </div>
    </div>
  );
};

export default FormInputBattingType;
