import express, { json } from "express";

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send("hello from backend to frontend!");
});

app.post("/weather", function (req, res) {
  const { cityName } = req.body;

  if (!cityName) {
    res.send("no city posted!");
    return; // should i add this return for my following console.log not to print "undefined"?
  }

  console.log(cityName);
  res.send(cityName);
});

app.listen(3000);
