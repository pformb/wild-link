// Donations routes

const router = require("express").Router();
const donations = require("../models/donations");

module.exports = (db) => {
  ///GET REQUESTS///

  //GET ALL DONATIONS BY USER
  router.get("/users/:userId/donations", async (req, res) => {
    console.log("In request");
    const userId = req.params.userId;
    const userDonations = await donations.getAllDonationsByUser(db, userId);
    if (userDonations.length === 0) {
      return res.status(404).send("No Donations Found");
    }
    res.json(userDonations);
  });

  //GET ALL DONATIONS BY ORGANIZATION
  router.get("/organizations/:orgId/donations", async (req, res) => {
    const orgId = req.params.orgId;
    const orgDonations = await donations.getAllDonationsByOrg(db, orgId);
    if (orgDonations.length === 0) {
      return res.status(404).send("No Donations Found");
    }
    res.json(orgDonations);
  });

  //GET SINGLE DONATION
  router.get("/donations/:donationId", async (req, res) => {
    const donationId = req.params.donationId;
    const donation = await donations.getDonationById(db, donationId);
    if (donation.length === 0) {
      return res.status(404).send("No Donation Found");
    }
    res.json(donation);
  });

  ///POST REQUESTS///

  //Create Donation
  router.post("/users/:userId/donations/new", async (req, res) => {
    const userId = req.params.userId;
    const { donation } = req.body
    try {
      await donations.createDonation(db, userId, donation);
      res.status(200).send("Donation Success");
    } catch (error) {
      res.status(500).send("Server Error: unable to archive Patient", error);
    }
  });

  return router;
};