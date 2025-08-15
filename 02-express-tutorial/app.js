const express = require("express");
const { products } = require("./data");
const { people } = require("./data");
const peopleRouter = require("./routes/people");

console.log("Express Tutorial");

const app = express();
const port = 3000;

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function logger(req, res, next) {
  console.log("Method: ", req.method);
  console.log("URL: ", req.url);
  console.log("Current time: ", new Date().toLocaleString());

  next();
}
app.use(logger);

app.use("/api/v1/people", peopleRouter);

// app.get("/api/v1/people", (req, res) => {
//   res.json(people);
// });

// app.post("/api/v1/people", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     res.status(400).json({ success: false, message: "Please provide a name" });
//   }
//   people.push({ id: people.length + 1, name });

//   res.status(201).json({ success: true, name });
// });

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const { productID } = req.params;

  const idToFind = parseInt(productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    res.status(404).json({ message: "That product was not found." });
  }

  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  let filteredArray = [...products];
  const { search, limit, maxPrice } = req.query;

  if (search) {
    filteredArray = filteredArray.filter((p) => {
      return p.name.toLowerCase().startsWith(search.toLocaleLowerCase());
    });
  }

  if (limit) {
    filteredArray = filteredArray.slice(0, Number(limit));
  }

  if (maxPrice) {
    filteredArray = filteredArray.filter((p) => {
      return p.price < maxPrice;
    });
  }

  res.json(filteredArray);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
