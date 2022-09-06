import React, { useState } from "react";
import FormInputTypeBasic from "../../components/form/FormInputTypeBasic";

const Createplayer = () => {
  const [formData, setFormData] = useState({});
  const handleInputChange = (e, el) => {
    setFormData({ ...formData, [el]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <title>Create Player</title>
      <div className="text-center bg-gray-100 h-screen">
        <div className="py-8">
          <form
            className="bg-white shadow-md rounded px-8 py-8 mb-4 w-9/12 mx-auto"
            onSubmit={handleSubmit}
          >
            <FormInputTypeBasic
              label="playerInitials"
              placeholder="playerInitials"
              handleInputChange={handleInputChange}
              required
            />
            <FormInputTypeBasic
              label="displayName"
              placeholder="displayName"
              handleInputChange={handleInputChange}
              required
            />
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
                    onChange={(e) =>
                      setFormData({ ...formData, batStyle: e.target.value })
                    }
                  />
                  Left-Hand Bat
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="battingStyle"
                    value="right-hand bat"
                    onChange={(e) =>
                      setFormData({ ...formData, batStyle: e.target.value })
                    }
                  />
                  Right-Hand Bat
                </div>
              </div>
            </div>
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
                    onChange={(e) =>
                      setFormData({ ...formData, batStyle: e.target.value })
                    }
                  />
                  Left-Hand Bat
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="battingStyle"
                    value="right-hand bat"
                    onChange={(e) =>
                      setFormData({ ...formData, batStyle: e.target.value })
                    }
                  />
                  Right-Hand Bat
                </div>
              </div>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createplayer;
