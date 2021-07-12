const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
// To fix cors origin error
app.use(cors());

app.use("/user-service/user-details", (req, res) => {
  res.send({
    email: "admin@circles.asia",
    name: "Admin 1",
    origin: "Colombo",
  });
});

app.use("/user-service/login/:email/:password", (req, res) => {
  const email = req.params.email;
  const password = req.params.password;

  console.log(email);
  console.log(password);

  if (
       email === "admin@circles.asia" || password === "circles111"
  ) {
    console.log("Hooray, It's working.");
    res.send({
      token: 'A_guid',
      message: `Hello from server! ${email}`,
    });
  } else {
    res.send({
      status: "fail",
      message: "Oh no, Login is not working.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on  http://localhost:5000 ${PORT}`);
});

// app.listen(5000, () => {
//   console.log("API is running on http://localhost:5000");
// });



// const express = require('express');
// const cors = require('cors')
// const app = express();

// const userData = {
//   email: "admin@circles.asia",
//   password: "circles111",

//   isAdmin: true
// };


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