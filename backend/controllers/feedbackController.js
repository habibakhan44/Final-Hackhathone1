const Feedback = require("../models/Feedback");

// Save feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, course, rating, comments } = req.body;
    const feedback = new Feedback({ name, email, course, rating, comments });
    await feedback.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};