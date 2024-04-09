// organization routes
const router = require("express").Router();
const organizations = require("../models/organizations")

module.exports = (db) => {
  router.get("/organizations", async (req, res) => {
    let allOrganizations = await organizations.getAllOrganizations(db);
    if (allOrganizations) {
      res.json(allOrganizations)
    } else {
      res.status(400).send("No organizations found in database.");
    }
  });

  router.get("/organizations/:id", async (req, res) => {
    const id = req.params.id;
    const organization = await organizations.getOrganizationById(db, id);
    if (organization) {
      res.json(organization)
    } else {
      res.status(400).send("Organization does not exist");
    }
  });

  return router;
};