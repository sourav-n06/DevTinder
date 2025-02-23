 const express = require("express");

 const app = express();

 // This will only Handle GET API Calls of User
 app.get("/user", (req, res) => {
      res.send({firstname : "Sourav", lastname : "Hazra"});
 })

// This will only Handle POST API Calls of User
 app.post("/user", (req, res) => {
   res.send("Data Successfully Saved to the DataBase...");
})

 // This will match all the HTTP method API calls (GET and POST)
 app.use("/", (req, res) => {
    res.send("Hello from Server Side first time...");
 })

 app.listen(3000, () => {
    console.log("Server is listening on port 3000... ");
 });