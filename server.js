const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(), express.urlencoded({ extended: false }));
app.use(express.json())

app.get("/app-settings", async (req, res) => {
  await sleep(1000);
  res.json({
    login: {
      login_Header: "Ready to Take a Challenge",
      login_SubHeader: "Login Here",
    },
    dashboard: {
      dashboard_Header: "Hey, I see you got through the login.",
      dashboard_SubHeader: "Information",
    },
  });
});

app.get("/user-service/user-details", (req, res) => {
  res.json({
    emailaddress: "admin@circles.asia",
    name: "Admin 1",
    origin: "Colombo",
  });
});

app.post("/user-service/login", (req, res) => {
  console.log(req.body);

  const email = req.body.email;
  const password = req.body.password;

  console.log("email : ", email, "password: ", password);
  if (
    email === "admin@circles.asia" && password === "circles111"
  ) {
    console.log("Hooray, It's working.");
    res.json({
      token: "123",
      message: `Hello from server! ${email}`,
    });
  }
  else {
    res.status(401).send(
      {
        status: "fail",
        message: "Oh no, Login is not working.",
      }
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on  http://localhost:5000 ${PORT}`);
});

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}








