const express = require("express");
// require("dotenv").config();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();
const router = express.Router();

const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());
//app.use("/api", router);

app.use("/api/meals", mealsRouter);
app.use("/api/reservations", reservationsRouter);

//router.use("/meals", mealsRouter);
//router.use("/reservations", reservationsRouter);

// if (process.env.API_PATH) {
//   app.use(process.env.API_PATH, router);
// } else {
//   throw "API_PATH is not set. Remember to set it in your .env file";
// }
// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;
