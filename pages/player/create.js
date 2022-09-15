import React, { useState } from "react";
import FormInputBattingType from "../../components/form/FormInputBattingType";
import FormInputBowlingType from "../../components/form/FormInputBowlingType";
import FormInputTypeBasic from "../../components/form/FormInputTypeBasic";

const Createplayer = () => {
  const [formData, setFormData] = useState({
    oversData: new Array(20).fill(0),
    overNumbers: [],
  });
  const handleInputChange = (e, el) => {
    setFormData({ ...formData, [el]: e.target.value });
  };

  const handleInputChangeOverNumbers = (e, index) => {
    formData.oversData[index] = e.target.value;
  };
  const overs = new Array(20).fill(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.oversData.forEach((overData, index) => {
      const curr = new Array(parseInt(overData)).fill(index + 1);
      formData.overNumbers = formData.overNumbers.concat(curr);
    });
    console.log(formData);
  };

  return (
    <>
      <title>Create Player</title>
      <div className="text-center bg-gray-100 h-full">
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
            <FormInputBattingType handleInputChange={handleInputChange} />
            <FormInputBowlingType handleInputChange={handleInputChange} />
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor={"bowlStyle"}
              >
                Batting Stats
              </label>
              <div className="flex justify-between gap-x-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="batRunsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, batRunsTotal: e.target.value })
                  }
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="batBallsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, batRunsTotal: e.target.value })
                  }
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="batOutsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, batRunsTotal: e.target.value })
                  }
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="catches"
                  onChange={(e) =>
                    setFormData({ ...formData, batRunsTotal: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor={"bowlStyle"}
              >
                Bowling Stats
              </label>
              <div className="flex justify-between gap-x-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlRunsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlRunsTotal: e.target.value })
                  }
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlBallsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlBallsTotal: e.target.value })
                  }
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlOutsTotal"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlOutsTotal: e.target.value })
                  }
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlNoballs"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlNoballs: e.target.value })
                  }
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="bowlWides"
                  onChange={(e) =>
                    setFormData({ ...formData, bowlWides: e.target.value })
                  }
                />
              </div>
              <div className="my-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor={"bowlStyle"}
                >
                  Over Numbers
                </label>
                {overs.map((over, index) => (
                  <div className="my-2" key={index}>
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                      {index + 1}
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="number"
                      placeholder={over}
                      key={index}
                      onChange={(e) => handleInputChangeOverNumbers(e, index)}
                    />
                  </div>
                ))}
                <FormInputTypeBasic
                  label="Matches"
                  placeholder="matches"
                  handleInputChange={handleInputChange}
                  required
                />
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
