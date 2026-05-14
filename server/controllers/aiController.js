const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


// AI CHAT CONTROLLER
const chatWithAI = async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    // GROQ RESPONSE
    const completion =
      await groq.chat.completions.create({

        messages: [

          {
            role: "system",
            content: `
You are Protein Princess AI,
a wellness and fitness assistant.

You ONLY answer questions related to:
- gym
- fitness
- muscle gain
- fat loss
- healthy eating
- protein intake
- calories
- workouts
- hydration
- sleep
- motivation
- wellness
- recovery

If the user asks unrelated questions
like coding, politics, hacking,
math, etc:
politely refuse and redirect them
to wellness or fitness topics.

Keep answers:
- friendly
- motivating
- concise
- beginner-friendly
            `,
          },

          {
            role: "user",
            content: message,
          },

        ],

        model: "llama-3.3-70b-versatile",

      });

    const reply =
      completion.choices[0].message.content;

    res.status(200).json({
      reply,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "AI failed",
    });

  }

};


module.exports = {
  chatWithAI,
};