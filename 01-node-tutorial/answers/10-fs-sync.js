const { writeFileSync, readFileSync } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileA.txt");

writeFileSync(filePath, "This is the first line.\n");
writeFileSync(filePath, "This is the second line.\n", { flag: "a" });
writeFileSync(filePath, "This is the third line.\n", { flag: "a" });

const content = readFileSync(filePath, "utf8");
console.log(content);
