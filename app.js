const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

let shops = [
  { id: 1, name: "Shop a" },
  { id: 2, name: "Shop b" },
  { id: 3, name: "Shop c" },
  { id: 4, name: "Shop d" },
];
let items = [
  { id: 1, name: "Item a", price: 10 },
  { id: 2, name: "Item b", price: 20 },
  { id: 3, name: "Item c", price: 30 },
  { id: 4, name: "Item d", price: 40 },
];

// get shops
app.get("/shops", (req, res) => {
  res.json(shops);
});

//post shop
app.post("/shops", (req, res) => {
  const newShop = req.body;
  shops.push(newShop);
  res.status(201).json(newShop);
});

app.put("/shops/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedShop = req.body;
  const index = shops.findIndex((shop) => shop.id === id);
  if (index !== -1) {
    shops[index] = { ...shops[index], ...updatedShop };
    res.json(shops[index]);
  } else {
    res.status(404).send("Shop not found");
  }
});

// Delete shop by id
app.delete("/shops/:id", (req, res) => {
  const id = parseInt(req.params.id);
  shops = shops.filter((shop) => shop.id !== id);
  res.sendStatus(204);
});

// get items
app.get("/items", (req, res) => {
  res.json(items);
});

//post items
app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...updatedItem };
    res.json(items[index]);
  } else {
    res.status(404).send("Item not found");
  }
});
// Delete item by id
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter((item) => item.id !== id);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
