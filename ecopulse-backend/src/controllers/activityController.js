const Activity = require("../models/Activity");
const User = require("../models/User");
const calcCarbon = require("../utils/calculateCarbon");

exports.logActivity = async (req, res) => {
  const { browsing, streaming, emails, storage } = req.body;
  const user = await User.findOne({ uid: req.user.uid });
  if (!user) return res.status(404).json({ message: "User not found" });

  const activity = await Activity.create({
    userId: user._id,
    browsing,
    streaming,
    emails,
    storage
  });

  const carbon = calcCarbon({ browsing, streaming, emails, storage });
  res.json({ activity, carbonScore: carbon });
};

exports.getCarbonScore = async (req, res) => {
  const activity = await Activity.findOne({ userId: req.params.userId }).sort({ timestamp: -1 });
  if (!activity) return res.status(404).json({ message: "No activity found" });

  const carbon = calcCarbon(activity);
  res.json({ carbonScore: carbon, activity });
};
