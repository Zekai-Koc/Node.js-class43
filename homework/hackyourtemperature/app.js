import express, { json } from "express";
import { keys } from "./sources/keys.js";
import fetch from "node-fetch";

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
   res.status(200);
   res.send("hello from backend to frontend!");
});

app.post("/weather", async function (req, res) {
   const { cityName } = req.body;

   if (!cityName) {
      res.status(404).send(`Bad request! \n ${JSON.stringify(req.body)}`);
      return;
   }

   const baseUrl = "https://api.openweathermap.org/data/2.5/";
   const queryParams = `weather?q=${cityName}&appid=${keys.API_KEY}&units=metric`;

   const response = await fetch(baseUrl + queryParams);
   const weatherData = await response.json();

   if (response.status === 200) {
      const tempObject = {
         temp: weatherData.main.temp,
         name: weatherData.name,
      };
      res.status(200).send(tempObject);
   } else if (response.status === 404) {
      const tempObject = {
         weatherText: "City not found!",
         city: cityName,
      };
      res.status(404).send(tempObject);
   } else {
      const tempObject = {
         error: `API Error. Please refer: https://openweathermap.org/faq for status ${response.status}`,
         // API calls return an error 401
         // API calls return an error 404
         // API calls return an error 429
         // API calls return errors 500, 502, 503 or 504
      };
      res.status(response.status).send(tempObject);
   }
});

export default app;
