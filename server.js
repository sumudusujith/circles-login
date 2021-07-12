const express = require("express");
const cors = require("cors");

const app = express();
// To fix cors origin error
app.use(cors());

app.use("/user-service/user-details", (req, res) => {
  res.json({
    email: "admin@circles.asia",
    name: "Admin 1",
    origin: "Colombo",
  });
});

app.use("/user-service/login/:email/:password", (req, res) => {
  let email = req.params.email;
  let password = req.params.password;

  console.log(email);
  console.log(password);

  if (
       email === "admin@circles.asia" || password === "circles111"
  ) {
    console.log("Hooray, It's working.");
    res.json({
      token: 'A_guid',
      message: `Hello ${email}`,
    });
  } else {
    res.json({
      status: "fail",
      message: "Oh no, Login is not working.",
    });
  }
});

app.listen(5000, () => {
  console.log("API is running on http://localhost:5000");
});



// const express = require('express');
// const cors = require('cors')
// const app = express();

// const userData = {
//   email: "admin@circles.asia",
//   password: "circles111",

//   isAdmin: true
// };

// app.use(cors());

// app.get('/user-service/login', (req, res) => {
//   res.json({
//     email: "admin@circles.asia",
//     name: "test1",
//     origin: "Colombo",
//   });
//   //('test  Node.js  - ' + req.user.name);
// });
// app.get('/', (req, res) => {
//   let email = req.params.email;
//   let password = req.params.password;

//   console.log(email);
//   console.log(password);

//   // if (
//   //   email.trim() === "admin@circles.asia" &&
//   //   password.trim() === "circles111"
//   // ) {
//   //   console.log("Hooray, It's working.");
//   //   res.json({
//   //     status: "success",
//   //     message: `Hello ${email}`,
//   //   });
//   // } 

//   if (!email || !password) {
//     return res.json({
//       error: true,
//       message: "email or Password required."
//     });
//   }

//   if (email !== userData.email || password !== userData.password) {
//     return res.json({
//       status: "success",
//       message: "Oh no, Login is not working.",
//     });
//   }
// });

// app.listen(5000, () => console.log('API is running on http://localhost:5000'));