const text = "Hello World";
const array = [1, 2, "melon"];
test("Containt text", () => {
  expect(text).toBe("Hello World");
});

test("Containt a word", () => {
  expect(text).toContain("World");
});

test("Containt an array", () => {
  expect(array).toContain(2);
});

test(" >= number ", () => {
  expect(2).toBeGreaterThan(1);
});

test(" <= number ", () => {
  expect(1).toBeLessThan(2);
});

test("is True", () => {
  expect(true).toBeTruthy();
});
// callback

const reverString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("probe a string", () => {
  reverString("Hello World", (str) => {
    expect(str).toBe("dlroW olleH");
  });
});

test("true", () => {
  expect(true).toBeTruthy();
});

// promesas

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (typeof str !== "string") {
      reject(Error("The string is not a string"));
    }
    resolve(str.split("").reverse().join(""));
  });
};


test('Test Promisse', () => {
  return reverseString2("Hello World").then(
    (str) => {
      expect(str).toBe("dlroW olleH");
    },
    (error) => {
      expect(error).toBe(Error("The string is not a string"));
    }
  );
});


test('Async / Await', async () => {
  const string = await reverseString2("Hello World");
  expect(string).toBe("dlroW olleH");
});


// afterEach(() => {
//   console.log("After each");
// });

// afterAll(() => console.log("After all"));
// beforeEach(() => console.log("Before each"));
// beforeAll(() => console.log("Before all"));