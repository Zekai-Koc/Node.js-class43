import app from "../app.js";
// import supertest from "supertest";
// const request = supertest(app);

import request from "supertest";

describe("Testing for root url", () => {
   test("GET /", async () => {
      await request(app).get("/").expect(200);
      // .then((response) => {
      //    expect(response.text).toEqual("hello from backend to frontend!");
      // });
   });

   test("POST /weather - With correct input", async () => {
      const data = { cityName: "Amsterdam" };
      await request(app)
         .post("/weather")
         .send(data)
         .expect(200)
         .then((response) => {
            // console.log("----------", response.body.name);
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
      // .then((response) => {
      //    console.log("----------", response.body.name);
      //    expect(response.body.name).toEqual(data.cityName);
      // });
   });

   // test("POST /weather", async () => {
   //    const data = { cityName: "AmsterdamQQQ" };
   //    await request(app).post("/weather").send(data).expect(404);
   // });
});
