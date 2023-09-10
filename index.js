const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const productRouter = require("./routes/products");
const port = 3000;
var cors = require("cors");
const uri =
  "mongodb+srv://edisoncardenas151999:uVxZy46uKCsa3WfF@imexcargo.fofmdkp.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
app.use("/api/products", productRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
