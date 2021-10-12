const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const content = require("./routes/contents");
const view = require("./routes/view");
const app = express();
const port = process.env.PORT || 3001;

dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
  console.log("connected to database");
});

var cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/view", view);
app.use("/api/contents", content);
app.listen(port, () => {
  console.log(`running in ${port}`);
});
