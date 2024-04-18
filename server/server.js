const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// Import and use routes
const userRoute = require("./routes/userRoute");
app.use("/api", userRoute);

const videosRoutes = require("./routes/videoRoutes");
app.use("/videos", videosRoutes);

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
