import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterdData = [
  {
    filterType: "Location",
    array: ["Banglore", "Delhi", "Mumbai", "Chennai", "Pune", "Hyderabad"],
  },
  {
    filterType: "Industry",
    array: [
      "frontend developer",
      "backend developer",
      "fullstack developer",
      "data analyst",
      "data scientist",
    ],
  },
  {
    filterType: "Location",
    array: ["0-40k", "40-80k", "80-120k", "120-160k", "160-200k"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterdData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2"> 
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
