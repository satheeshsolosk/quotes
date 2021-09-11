const express = require("express");
const app = express();
const port = 6500;

app.get("/", (req, res) => {
  res.send("This  is quote generator");
});
app.post("/quotes", (request, response) => {
  console.log("request", request.body);
  myInformation = request.body;
  response.send({ response: "data received succesfully" });
});
app.get("/getquotes", (request, response) => {
  response.send(myInformation);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
