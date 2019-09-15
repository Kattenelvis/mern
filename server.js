const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const items = require("./api/items");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys");

mongoose
  .connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Server started at ${port}`));

app.use("/api/items", items);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port);
