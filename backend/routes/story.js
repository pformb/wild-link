const router = require("express").Router();
const { generateStory, createPrompt } = require("../models/generateStory");

module.exports = () => {
  router.post("/generate-story", async (req, res) => {
    const { patientDetails, patientConditions, patientTreatments } = req.body;

    try {
      const prompt = createPrompt(
        patientDetails,
        patientConditions,
        patientTreatments
      );
      console.log(prompt);
      const story = await generateStory(prompt);
      console.log(story);
      res.json({ story });
    } catch (error) {
      console.error("Failed to generate story:", error);
      res.status(500).json({ message: "Failed to generate story" });
    }
  });

  return router;
};