const cities = [
  "New York",
  "Paris",
  "London",
  "Madrid",
  "Berlin",
  "Rome",
  "Barcelona",
  "Amsterdam",
  "Vienna",
  "Prague",
  "Budapest",
  "Hamburg",
  "Warsaw",
  "Copenhagen",
  "Oslo",
  "Stockholm",
  "Helsinki",
  "Athens",
];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (typeof str !== "string") {
      reject(Error("The string is not a string"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = randomString;
