const express = require("express");
const app = express();

app.get("/sayHello", (req, res) => {
  res.json({ message: "Hello FarAlpha" });
});

app.listen(80, () => {
  console.log("Server running on port 80");
});
