const express = require("express");
const app = express();
const cors = require("cors");

// global variableeeeeeee. Not needed but good practice
const PORT = 5500;

// instantiated routes for the server, yk how it is. right?
const accountsRoutes = require("./routes/accountsRoute");

// These ones are other requirements to make sure that we can use our endpoints as we need them. Like configurations lol
app.use(cors());
app.use(express.json());

// This here is the middleware
app.use("/account", accountsRoutes);


// This is where we make sure that our endpoints are being hosted on... ez stuff
app.listen(PORT, () => {
  console.log(`Server Listening on Port : ${PORT}`);
});
