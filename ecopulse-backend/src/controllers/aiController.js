const Activity = require("../models/Activity");
const User = require("../models/User");
const calcCarbon = require("../utils/calculateCarbon");
const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

exports.getAiTips = async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  const activity = await Activity.findOne({ userId: user._id }).sort({ timestamp: -1 });
  if (!activity) return res.status(404).json({ message: "No activity found" });

  const carbon = calcCarbon(activity);

  // Compose prompt
  const prompt = `
A user has the following weekly digital activity and carbon footprint estimate:
Browsing: ${activity.browsing} min, Streaming: ${activity.streaming} min, Emails: ${activity.emails}, Storage: ${activity.storage} GB, Estimated Carbon: ${carbon} gCO2eq.

Give 3-5 practical, personalized tips to reduce this user's digital carbon footprint. Use a friendly tone.
`;

  try {
    const aiResp = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 180,
      temperature: 0.8
    });
    const aiTips = aiResp.data.choices[0].message.content;
    res.json({ aiTips });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
