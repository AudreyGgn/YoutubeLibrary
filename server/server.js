const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//Import and use routes
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

//Start the server and listen on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
