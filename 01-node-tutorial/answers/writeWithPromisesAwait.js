const { writeFile, readFile } = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "temp.txt");

const writer = async () => {
  try {
    await writeFile(filePath, "one\ntwo\nthree");
  } catch (error) {
    console.log(error);
  }
};

const reader = async () => {
  try {
    const content = await readFile(filePath, "utf8");

    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

const readWrite = async () => {
  await writer();
  await reader();
};

readWrite();
