const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { uid, email, name } = req.body;
  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = await User.create({ uid, email, name });
    }
    res.json({ user });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
