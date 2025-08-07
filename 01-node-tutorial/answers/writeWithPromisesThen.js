const path = require("path");
const { writeFile, readFile } = require("fs").promises;

const filePath = path.join(__dirname, "temp.txt");

writeFile(filePath, "\nfour", { flag: "a" }) // write line 1
  .then(() => {
    return writeFile(filePath, "\nfive", { flag: "a" }); // write line 2.
    // Return the promise so you can chain the .then statements
  })
  .then(
    () => {
      return writeFile(filePath, "\nsix", { flag: "a" });
    } // write the third line, and follow that with two more .then blocks,
  )
  // one to call readFile to read it back out, and one to log the data to the screen.
  .then(() => {
    return readFile(filePath, "utf-8");
  })
  .then((content) => {
    console.log(content);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
