import app from "./app.js";

app.listen(3000, () => console.log(`Listening on port: 3000`));

// import express, { json } from "express";
// import { keys } from "./sources/keys.js";
// import fetch from "node-fetch";

// const app = express();

// app.use(express.json());

// app.get("/", function (req, res) {
//    res.status(200).send("hello from backend to frontend!");
// });

// app.post("/weather", async function (req, res) {
//    const { cityName } = req.body;

//    if (!cityName) {
//       res.send("no city posted!");
//       return;
//    }

//    const baseUrl = "https://api.openweathermap.org/data/2.5/";
//    const queryParams = `weather?q=${cityName}&appid=${keys.API_KEY}&units=metric`;

//    const response = await fetch(baseUrl + queryParams);
//    const data = await response.json();

//    if (data.cod === "404") {
//       const repToUser = {
//          weatherText: "City is not found!",
//          searchCity: cityName,
//       };
//       console.log(repToUser);
//       res.send(repToUser);
//    } else {
//       const repToUser = {
//          weatherText: data.main.temp,
//          searchCity: data.name,
//       };
//       console.log(repToUser);
//       res.send(repToUser);
//    }
// });

// app.listen(3000, () => console.log(`Listening on port: 3000`));
