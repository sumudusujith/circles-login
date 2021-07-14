const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
// enable CORS - It’s an express middleware for enabling Cross-Origin Resource Sharing requests. Just because of it, We can access the API in different applications.
app.use(cors());

app.get("/user-service/user-details", (req, res) => {
  res.send({
    emailaddress: "admin@circles.asia",
    // password: "circles111",
    name: "Admin 1",
    origin: "Colombo",
  });
});
// validate the user credentials
app.get("/user-service/login/:email/:password", (req, res) => {
  const email = req.params.email;
  const password = req.params.password;

  console.log(email);
  console.log(password);

  if (

    email === "admin@circles.asia" || password === "circles111"
  ) {
    console.log("Hooray, It's working.");
    res.json({
      token: 'A_guid',
      message: `Hello from server! ${email}`,
    });
    } if (password !== "circles111") {
      console.log("Oh no, Login is not working.");
      res.json({
        error: true,
        message: "Password required."
      });
  }

  else  {
    res.json({
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

//   if (email !== userData.email || password !== userData.password)
// email.trim() === "admin@circles.asia" &&
// password.trim() === "circles111"{
//     return res.json({
//       status: "success",
//       message: "Oh no, Login is not working.",
//     });
//   }
// });

// app.listen(5000, () => console.log('API is running on http://localhost:5000'));


//tokentesting
// const express = require('express');
// const cors = require('cors')
// const app = express();

// app.use(cors());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'A_guid'
//   });
// });

// app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));