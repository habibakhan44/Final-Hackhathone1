import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center px-4 py-12">
      <div className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl ring-1 ring-indigo-300 max-w-md w-full p-10 sm:p-12 text-center transition-all duration-300 ease-in-out hover:scale-[1.015]">

        {/* Floating Check Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-300 rounded-full p-3 shadow-md">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-800 mt-6 mb-2">Thank You!</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
          Your feedback has been received and recorded. We really appreciate your time and input!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition"
          >
            Submit More Feedback
          </Link>
          <Link
            to="/admin/login"
            className="w-full sm:w-auto border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-lg transition"
          >
            Want to login as Admin?
          </Link>
        </div>
      </div>
    </div>
  );
}
