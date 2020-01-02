const express = require("express");
const app = express();
const quotesRoutes = require("./lib/routes/quotes.js");
var parser = require("body-parser");
let port = 8081;

// URL ENCODER
app.use(parser.urlencoded({ extended: true }));

// MUST PARSE BEFORE USING THE ROUTE
app.use(parser.json());

// When user requests at the root / of our application, .use
app.use("/", quotesRoutes);

app.listen(port, () =>
  console.log(`Listening on port ${port}, reporting for duty sir.`)
);
