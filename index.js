const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/login", (req, res) => {
  res.send({
    token: "This is a secret token",
  });
});
app.listen(8080, () => console.log(`API is active on http://localhost:8080`));
