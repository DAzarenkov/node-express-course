const { createReadStream } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../content/big.txt");

const stream = createReadStream(filePath, {
  encoding: "utf8",
  highWaterMark: 200,
});

let chunkCount = 0;

stream.on("data", (chunk) => {
  chunkCount++;
  console.log(`Chunk #${chunkCount}`);
  console.log(chunk);
});

stream.on("end", () => {
  console.log(`Total chunks received: ${chunkCount}`);
});

stream.on("error", (err) => {
  console.error(err);
});
