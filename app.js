const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const authRouter = require("./routes/api/auth");

const incomeTransaction = require("./routes/transactions/incomeRoute");

const expenseTransaction = require("./routes/transactions/expenseRoute");


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

app.use("/transaction", incomeTransaction);
app.use("/api/transaction", incomeTransaction);
app.use("/api/transaction", expenseTransaction);


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
