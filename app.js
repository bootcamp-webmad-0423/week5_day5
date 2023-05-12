require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

app.locals.appTitle = `Movierecord_`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const moviesRoutes = require("./routes/movies.routes.js");
app.use("/peliculas", moviesRoutes);

require("./error-handling")(app);

module.exports = app