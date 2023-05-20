const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./server/database/connection");
const middleware = require('./middlewares');
const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// middlewares
middleware.global(app);

// load routers
app.use("/api", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("Sorry can't find that");
});
