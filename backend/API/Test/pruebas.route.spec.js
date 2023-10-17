const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const Trip = require("../../models/trip.model");

describe("Pruebas sobre la API de rutas", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1/famyliTrips");
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe("GET /api/trips", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/trips").send();
    });

    it("La ruta funciona", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("La petición nos devuelve un array de trips", async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe("POST /api/trips", () => {
    const newTrip = {
      name: "juan",
      destination: "prubas",
      category: "familiar",
      star_date: "2022-06-11",
    };

    afterAll(async () => {
      await Trip.deleteMany({ name: "juan" });
    });

    it("La ruta funciona", async () => {
      const response = await request(app).post("/api/trips").send(newTrip);
      expect(response.status).toBe(200);
      expect(response.header["content-type"]).toContain("json");
    });
    it("se insertaron correctamente", async () => {
      const response = await request(app).post("/api/trips").send(newTrip);

      expect(response.body._id).toBeDefined();
      expect(response.body.name).toBe(newTrip.name);
    });
  });

  describe("PUT /api/trips", () => {
    let trip;
    beforeEach(async () => {
      trip = await Trip.create({
        name: "juan",
        destination: "prubas Put",
        category: "familiar",
        star_date: "2022-06-11",
      });
    });

    afterEach(async () => {
      await Trip.findByIdAndDelete(trip._id);
    });

    it("La ruta funciona", async () => {
      const response = await request(app).put(`/api/trips/${trip._id}`).send({
        name: "trip updated",
      });
      expect(response.status).toBe(200);
      expect(response.header["content-type"]).toContain("json");
    });
    it("Se actualizo", async () => {
      const response = await request(app).put(`/api/trips/${trip._id}`).send({
        name: "trip updated",
      });

      expect(response.body._id).toBeDefined();
      expect(response.body.name).toBe("trip updated");
    });
  });

  describe("DELETE /api/trips", () => {
    let trip;
    let response;
    beforeEach(async () => {
      trip = await Trip.create({
        name: "juan",
        destination: "prubas Put",
        category: "familiar",
        star_date: "2022-06-11",
      });
      response = await request(app).delete(`/api/trips/${trip._id}`).send();
    });
    it("la ruta funciona", () => {
      expect(response.status).toBe(200);
      expect(response.header["content-type"]).toContain("json");
    });
    it("Se borro correctamente", async () => {
      
      expect(response.body._id).toBeDefined();

      const foundTrip = await Trip.findById(trip._id);
      expect(foundTrip).toBeNull();
    });
  });
});
