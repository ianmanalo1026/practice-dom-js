const highClassSelector = document.querySelector(".high-class");
const middleClassSelector = document.querySelector(".middle-class");
const lowClassSelector = document.querySelector(".low-class");

const numberGenerator = Math.floor(Math.random() * 100) + 1;

highClassSelector.addEventListener("mouseover", function (e) {
  highClassSelector.style.backgroundColor = "orange";
});

highClassSelector.addEventListener("mouseleave", function (e) {
  highClassSelector.style.backgroundColor = "green";
});

middleClassSelector.addEventListener("mouseover", function (e) {
  middleClassSelector.style.backgroundColor = "black";
});

middleClassSelector.addEventListener("mouseleave", function (e) {
  middleClassSelector.style.backgroundColor = "blue";
});

lowClassSelector.addEventListener("mouseover", function (e) {
  lowClassSelector.style.backgroundColor = "purple";
});

lowClassSelector.addEventListener("mouseleave", function (e) {
  lowClassSelector.style.backgroundColor = "red";
});

lowClassSelector.addEventListener("click", function () {
  lowClassSelector.textContent = numberGenerator + numberGenerator;
});

const orderSet = new Set(["Apple", "Apple", "Banana", "Orange"]);
const arr1 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

//forEach Function
for (const arr of arr1) {
  console.log(arr);
}

arr1.forEach(function (arr, i) {
  if (i % 2) {
    console.log(`Number ${i + 1} ->> ${arr}`);
  }
});

//Map Data Structure

const rest = new Map();
rest.set("Name", "Classico Italiano").set("open", 11).set("close", 23);

console.log(rest.get("close"));
