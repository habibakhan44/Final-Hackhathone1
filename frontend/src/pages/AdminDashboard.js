import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
   const res = await axios.post("https://final-hackhathone1-b.vercel.app/api/feedbacks", feedbackData);

      setFeedbacks(res.data.feedbacks);
    } catch (error) {
      console.error("Failed to fetch feedbacks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/feedbacks/${id}`);
      setFeedbacks(feedbacks.filter((f) => f._id !== id));
    } catch (error) {
      console.error("Failed to delete feedback:", error);
    }
  };

  const filteredFeedbacks = feedbacks.filter((f) =>
    f.course.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fc] to-[#e6edf7] py-8 px-4 sm:px-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📋 All Feedbacks
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by course..."
          className="w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFeedbacks.length > 0 ? (
          filteredFeedbacks.map((feedback) => (
            <div
              key={feedback._id}
              className="bg-white border-l-4 border-blue-400 shadow-md rounded-xl p-5 hover:shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{feedback.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{feedback.email}</p>
              <p className="text-gray-700 font-medium">Course: {feedback.course}</p>
              <p className="text-yellow-500 mb-2">⭐ {feedback.rating}/5</p>
              <p className="text-gray-600 italic mb-4">{feedback.comments || "No comments."}</p>
              <button
                onClick={() => handleDelete(feedback._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded-md shadow-md"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No feedback found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
