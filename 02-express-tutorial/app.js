const express = require("express");
const { products } = require("./data");

console.log("Express Tutorial");

const app = express();
const port = 3000;

app.use(express.static("./public"));

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
