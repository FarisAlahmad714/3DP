const DPController = require("../controllers/3DP.controller");

module.exports = (app) => {
  // in python: path("api/cities", views.allCities)
  app.get("/api/3dreamprints", DPController.getAll);
  app.get("/api/3dreamprints/:id", DPController.getOne);
  app.post("/api/3dreamprints", DPController.create);
  app.put("/api/3dreamprints/:id", DPController.update);
  app.put("/api/3dreamprints/:id/dislike", DPController.dislike);
  app.delete("/api/3dreamprints/:id", DPController.delete);
};
