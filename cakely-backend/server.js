import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let menu = [
  { id: 1, name: "Chocolate Cake", price: 15000, description: "Deep cocoa flavor with ganache" },
  { id: 2, name: "Vanilla Cake", price: 11000, description: "Classic Madagascar vanilla bean" },
  { id: 3, name: "Red Velvet Cake", price: 20000, description: "Velvety texture with cream cheese frosting" },
  { id: 4, name: "Lemon Drizzle Cake", price: 18000, description: "Zesty lemon with a crunchy sugar glaze" },
  { id: 5, name: "Carrot Cake", price: 17000, description: "Spiced sponge with walnuts and raisins" },
  { id: 6, name: "Banana Milkshake", price: 14000, description: "Made with real ripened bananas" },
  { id: 7, name: "Vanilla Milkshake", price: 15000, description: "Creamy vanilla with whipped cream" },
  { id: 8, name: "Cookies and Cream Milkshake", price: 16500, description: "Blended with crushed chocolate cookies" }
];

let orders = [];
let orderId = 1;

app.get("/api/menu", (req, res) => {
  res.json({ data: menu });
});

app.get("/api/order/:id", (req, res) => {
  const order = orders.find(o => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json({ data: order });
});

app.post("/api/order", (req, res) => {
  const newOrder = { id: orderId++, ...req.body };
  orders.push(newOrder);
  res.status(201).json({ data: newOrder });
});

app.patch("/api/order/:id", (req, res) => {
  const order = orders.find(o => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: "Order not found" });
  Object.assign(order, req.body);
  res.json({ data: order });
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is moving and shaking on port ${PORT}`);
});
