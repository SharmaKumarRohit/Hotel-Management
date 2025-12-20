const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my hotels");
});

app.listen(3000, () =>
  console.log("Server is listening on port http://localhost:3000")
);
