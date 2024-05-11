const express = require("express");
const app = express();
const port = 8080;
const connectDB = require("./config/Database");

app.use(express.json());

app.use("/api", require("./routes/AuthRoute"));
app.use("/api", require("./routes/PetRoute"));
app.use("/api", require("./routes/UserRoute"));

connectDB();

app.listen(port, () => {
  console.log(`gukpus API listening at http://localhost:${port}`);
});
