const express = require("express");
const Feedback = require("../models/Feedback");
// const auth = require("../middlewares/auth"); // Optional: If you want protected access
const router = express.Router();

// POST /api/feedbacks — Save feedback (no auth required)
router.post("/", async (req, res) => {
  try {
    const { name, email, course, rating, comments } = req.body;

    // Validation
    if (!name || !email || !course || !rating) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const feedback = new Feedback({
      name,
      email,
      course,
      rating,
      comments: comments || ""
    });

    await feedback.save();

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedbackId: feedback._id
    });

  } catch (error) {
    console.error("❌ Feedback submission error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/feedbacks — Get all feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: feedbacks.length,
      feedbacks
    });
  } catch (error) {
    console.error("❌ Get feedbacks error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/feedbacks/:id — Delete feedback by ID
router.delete("/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({ success: false, message: "Feedback not found" });
    }

    await feedback.deleteOne();

    res.json({ success: true, message: "Feedback deleted successfully" });
  } catch (error) {
    console.error("❌ Delete feedback error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
