// variables

let stageName: string = "A beautiful Vue";
let roomSize: number = 100;
let isComplete: boolean = true;
let shoopingList: string[] = ["apple", "bananas", "cherries"];

// functions

let generateFullName = (firstName: string, latsName: string): string => {
  return firstName + " " + latsName;
};

// objects

let person: {
  name: string;
  age: number;
  activeAvenger: boolean;
  powers: string[];
} = {
  name: "Peter Parker",
  age: 20,
  activeAvenger: true,
  powers: ["wall-crawl", "spider-sense"],
};
