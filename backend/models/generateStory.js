const OpenAI = require("openai");

const generateStory = async (prompt) => {
  const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
  });

  try {
    const { data: chatCompletion, response: raw } =
      await openai.chat.completions
        .create({
          model: "gpt-4-turbo",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          max_tokens: 500,
        })
        .withResponse();

    if (!chatCompletion || !chatCompletion.choices) {
      console.error("Invalid chat completion data:", raw);
      return "Failed to generate story due to invalid chat completion data.";
    }
    const story = chatCompletion.choices[0].message.content.trim();
    return story;
  } catch (error) {
    console.error(
      "Failed to create story:",
      error.response ? error.response.data : error.message
    );
    throw new Error(`Failed to generate story: ${error.message}`);
  }
};

const createPrompt = (patientDetails, patientConditions, patientTreatments) => {
  const conditionList = patientConditions.join(", ");
  const treatmentList = patientTreatments.join(", ");
  return `
  Create a hopeful 2 paragraph narrative about a wild animal currently being treated at our wildlife rehabilitation center, focusing on the patient's resilience and recovery. 
  Do not refer to the center's location. Details:
  - Case Number: ${patientDetails.patient_case}
  - Species: ${patientDetails.species_name}
  - Found at: ${patientDetails.location_found}
  - Admission Date: ${patientDetails.date_admitted}
  - Age Range: ${patientDetails.age_range}
  - Conditions: ${conditionList}
  - Required Treatments: ${treatmentList}
  Emphasize the dedicated care by our rehabilitation staff and volunteers using general terms like "team members". 
  Ensure realistic timelines based on the admission date for treatments immediate and future.
  The story should inspire support through its focus on the animal's recovery process. 
  Avoid using specific names or locations beyond what is listed here
  `;
};

module.exports = {
  generateStory,
  createPrompt,
};
