// variables

let stageName: string = "A beautiful Vue";
let roomSize: number = 100;
let isComplete: boolean = true;
let shoppingList: string[] = ["apple", "bananas", "cherries"];

// functions

let generateFullName = (firstName: string, latsName: string): string => {
  return firstName + " " + latsName;
};

// types and Intehfaces

type ComicUniverse = "Marvel" | "DC";

interface Hero {
  name: string;
  age: number;
  activeAvenger: boolean;
  powers: string[];
  universe: ComicUniverse;
}

let person: Hero = {
  name: "Peter Parker",
  age: 20,
  activeAvenger: true,
  powers: ["wall-crawl", "spider-sense"],
  universe: "Marvel",
};

const app = document.getElementById("app");

if (app) {
  app.innerHTML = `
  <h1>TypeScript Demo</h1>

  <h2>Variables</h2>
  <p><strong>stageName:</strong> ${stageName}</p>
  <p><strong>roomSize:</strong> ${roomSize}</p>
  <p><strong>isComplete:</strong> ${isComplete}</p>

  <h2>Shopping List</h2>
  <ul>
    ${shoppingList.map((item) => `<li>${item}</li>`).join("")}
  </ul>

  <h2>Function Result</h2>
  <p>${generateFullName("Peter", "Parker")}</p>

  <h2>Person</h2>
  <p><strong>Name:</strong> ${person.name}</p>
  <p><strong>Age:</strong> ${person.age}</p>
  <p><strong>Active Avenger:</strong> ${person.activeAvenger}</p>

  <h3>Powers</h3>
  <ul>
    ${person.powers.map((power) => `<li>${power}</li>`).join("")}
  </ul>

  <p><strong>Universe:</strong> ${person.universe}</p>

  <h2>JSON View</h2>
  <pre>${JSON.stringify(person, null, 2)}</pre>
`;
}
