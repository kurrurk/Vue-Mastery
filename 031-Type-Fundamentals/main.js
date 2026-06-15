// variables
var stageName = "A beautiful Vue";
var roomSize = 100;
var isComplete = true;
var shoppingList = ["apple", "bananas", "cherries"];
// functions
var generateFullName = function (firstName, latsName) {
    return firstName + " " + latsName;
};
// objects
var person = {
    name: "Peter Parker",
    age: 20,
    activeAvenger: true,
    powers: ["wall-crawl", "spider-sense"]
};
var app = document.getElementById("app");
if (app) {
    app.innerHTML = "\n  <h1>TypeScript Demo</h1>\n\n  <h2>Variables</h2>\n  <p><strong>stageName:</strong> ".concat(stageName, "</p>\n  <p><strong>roomSize:</strong> ").concat(roomSize, "</p>\n  <p><strong>isComplete:</strong> ").concat(isComplete, "</p>\n\n  <h2>Shopping List</h2>\n  <ul>\n    ").concat(shoppingList.map(function (item) { return "<li>".concat(item, "</li>"); }).join(""), "\n  </ul>\n\n  <h2>Function Result</h2>\n  <p>").concat(generateFullName("Peter", "Parker"), "</p>\n\n  <h2>Person</h2>\n  <p><strong>Name:</strong> ").concat(person.name, "</p>\n  <p><strong>Age:</strong> ").concat(person.age, "</p>\n  <p><strong>Active Avenger:</strong> ").concat(person.activeAvenger, "</p>\n\n  <h3>Powers</h3>\n  <ul>\n    ").concat(person.powers.map(function (power) { return "<li>".concat(power, "</li>"); }).join(""), "\n  </ul>\n\n  <h2>JSON View</h2>\n  <pre>").concat(JSON.stringify(person, null, 2), "</pre>\n");
}
