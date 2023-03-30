// packages imports
const express = require("express");
require("express-async-errors");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
// files imports
const connectDB = require("./config/db.js");
// routes
const testRoutes = require("./routes/testRoute");
const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware.js");

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);

// validation middleware
app.use(errorMiddleware);

// port
const port = process.env.PORT || 8080;

// Listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgGreen.white
  );
});
