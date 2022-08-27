const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

//default route
app.get("/", (req, res) => {
  res.send("Working!");
});

// to show that app is running
app.listen(port, async () => {
  console.log(`listening on local port ${port}`);
});
