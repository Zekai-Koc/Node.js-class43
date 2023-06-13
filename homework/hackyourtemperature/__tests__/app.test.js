import app from "../app.js";

import request from "supertest";

describe("Testing weather endpoints.", () => {
   test("GET /", async () => {
      await request(app).get("/").expect(200);
   });

   test("POST /weather - With correct input", async () => {
      const data = { cityName: "Amsterdam" };
      await request(app)
         .post("/weather")
         .send(data)
         .expect(200)
         .then((response) => {
            expect(response.body.name).toEqual(data.cityName);
         });
   });

   test("POST /weather - With incorrect input", async () => {
      const data = { cityName: "AmsterdamQQQ" };
      await request(app).post("/weather").send(data).expect(404);
   });

   test("POST /weather - Incorrect key", async () => {
      const data = { cityNamePPP: "Amsterdam" };
      await request(app).post("/weather").send(data).expect(405);
   });
});
