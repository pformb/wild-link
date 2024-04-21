// organization routes
const router = require("express").Router();
const bcrypt = require("bcrypt");
const organizations = require("../models/organizations")
const { authToken } = require("../middleware/authToken");

const saltRounds = 10;

module.exports = (db) => {
  //GET ALL ORGANIZATIONS
  router.get("/organizations", async (req, res) => {
    let allOrganizations = await organizations.getAllOrganizations(db);
    if (allOrganizations.length === 0) {
      return res.status(404).json({ message: "No Organizations Found"});
    }
    res.json(allOrganizations);
  });

  //GET ORGANIZATION BY ID
  router.get("/organizations/:orgId", async (req, res) => {
    const orgId = req.params.orgId;
    const organization = await organizations.getOrganizationById(db, orgId);
    if (organization.length === 0) {
      return res.status(404).json({ message: "Organization Not Found"}); 
    }
    res.json(organization);
  });

  //GET ORGANIZATION PROFILE
  router.get("/organizations/:orgId/profile", authToken, async (req, res) => {
    const orgId = req.params.orgId;
    const orgProfile = await organizations.getOrganizationProfile(db, orgId);
    if (orgProfile.length === 0) {
      return res.status(404).json({ message: "Organization Not Found"})
    }
    res.json(orgProfile);
  });

  //UPDATE ORGANIZATION PROFILE
  router.patch("/organizations/:orgId/profile", authToken, async (req, res) => {
    const orgId = req.params.orgId;
    let orgData = req.body;
    let password = orgData.password;
    try {
      // If Password is updated
      if (password) {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        orgData.password = hashedPassword;
      }
      await organizations.updateOrganizationProfile(db, orgId, orgData);
      res.status(200).json({ message: "Organization Updated"});
    } catch {
      res.status(500).json({ error: "Server Error: unable to update organization"});
    }
  });
return router;
};