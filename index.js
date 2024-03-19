const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/login", (req, res) => {
  res.cookie("token", "this a secret token", {
    httpOnly: true,
    maxAge: 360000,
  });
  res.send({
    authenticated: true,
    message: "Successful Authentication",
  });
});
app.use("/logout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    maxAge: 360000,
  });
  res.send({
    authenticated: false,
    message: "Successful logout",
  });
});
app.use("/auth-status", (req, res) => {
  if (req.cookies?.token === "this a secret token")
    res.send({
      isAuthenticated: true,
    });
  else
    res.send({
      isAuthenticated: false,
    });
});

app.listen(8080, () => console.log(`API is active on http://localhost:8080`));
