const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const swaggerDocs = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

const authRouter = require("./routes/api/auth");

const transaction = require("./routes/transactions/transactionRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
// app.use(cors());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);

app.use("/api/transaction", transaction);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;
