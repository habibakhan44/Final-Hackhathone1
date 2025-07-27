import { useState } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    rating: 5,
    comments: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
axios.post('https://final-hackhathone1-b.vercel.app/api/feedbacks', formData);
      window.location.href = '/thankyou';
    } catch (error) {
      alert('Error submitting feedback!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/30">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-6 sm:mb-8 drop-shadow">
          Student Feedback Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-white font-medium mb-1">Name</label>
            <input 
              type="text"
              required
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 rounded-xl bg-white/80 border border-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input 
              type="email"
              required
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 rounded-xl bg-white/80 border border-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-white font-medium mb-1">Course</label>
            <input 
              type="text"
              required
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              className="w-full px-4 py-2 rounded-xl bg-white/80 border border-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-white font-medium mb-2">Rating</label>
            <div className="flex justify-between sm:justify-start sm:gap-3 items-center">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: num })}
                  className={`text-yellow-400 transition-all ${
                    formData.rating >= num ? 'scale-110' : 'opacity-40'
                  }`}
                >
                  <Star className="w-6 h-6 fill-current" />
                </button>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-white font-medium mb-1">Comments</label>
            <textarea 
              rows="4"
              placeholder="Share your honest opinion..."
              onChange={(e) => setFormData({...formData, comments: e.target.value})}
              className="w-full px-4 py-2 rounded-xl bg-white/80 border border-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-white text-indigo-700 font-semibold py-2 rounded-xl hover:bg-indigo-100 hover:text-indigo-800 transition-all shadow-md"
          >
            ✉️ Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
