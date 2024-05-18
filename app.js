require('dotenv').config();

const express = require("express");
const app = express();
const connectDB = require("./config/Database");
const port = process.env.PORT;
const cors = require('./middlewares/CorsMiddleware');

app.use(cors);
app.use(express.json());

app.use("/api/auth", require("./routes/AuthRoute"));
app.use("/api/pets", require("./routes/PetRoute"));
app.use("/api/users", require("./routes/UserRoute"));

connectDB();

app.listen(port, () => {
  console.log(`gukpus API listening at http://localhost:${port}`);
});
