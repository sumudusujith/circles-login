const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 5000;
// enable CORS - It’s an express middleware for enabling Cross-Origin Resource Sharing requests. Just because of it, We can access the API in different applications.
//app.use(cors());

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
  // await sleep(500);
  res.json({
    emailaddress: "admin@circles.asia",
    name: "Admin 1",
    origin: "Colombo",
  });
});





app.post("/user-service/login",  (req, res) => {
  //await sleep(1000);

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
    // } if (password !== "circles111") {
    //   console.log("Oh no, Login is not working.");
    //   res.json({
    //     status: "fail",
    //     message: "Password required."
    //   });
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










// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
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