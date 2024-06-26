// Donations routes
const router = require("express").Router();
const donations = require("../models/donations");
const { authToken } = require("../middleware/authToken");

module.exports = (db) => {
  ///GET REQUESTS///

  //GET ALL DONATIONS BY USER
  router.get("/users/:userId/donations", authToken, async (req, res) => {
    const userId = req.params.userId;
    const userDonations = await donations.getAllDonationsByUser(db, userId);
    if (userDonations.length === 0) {
      return res.status(404).json({ message: "No Donations Found"});
    }
    userDonations.forEach((donation) => {
      donation.image = donation.image.startsWith("http")
        ? donation.image
        : `/stock-photos/${donation.image}`;
    })
    res.json(userDonations);
  });

  //GET ALL DONATIONS BY ORGANIZATION
  router.get("/organizations/:orgId/donations", authToken, async (req, res) => {
    const orgId = req.params.orgId;
    const orgDonations = await donations.getAllDonationsByOrg(db, orgId);
    if (orgDonations.length === 0) {
      return res.status(404).json({ message: "No Donations Found"});
    }
    orgDonations.forEach((donation) => {
      donation.image = donation.image.startsWith("http")
        ? donation.image
        : `/stock-photos/${donation.image}`;
    })
    res.json(orgDonations);
  });

  //GET SINGLE DONATION
  router.get("/donations/:donationId", authToken, async (req, res) => {
    const donationId = req.params.donationId;
    const donation = await donations.getDonationById(db, donationId);
    if (donation.length === 0) {
      return res.status(404).json({ message: "No Donation Found"});
    }
    res.json(donation);
  });

  ///POST REQUESTS///

  //Create Donation
  router.post("/users/:userId/donations/new", authToken, async (req, res) => {
    const userId = req.params.userId;
    const { donation } = req.body
    try {
      await donations.createDonation(db, userId, donation);
      res.status(200).json({ message: "Donation Success"});
    } catch {
      res.status(500).json({ error: "Server Error: unable to process donation"});
    }
  });

  return router;
};