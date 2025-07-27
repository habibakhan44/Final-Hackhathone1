import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedbackForm from './pages/FeedbackForm';
import Thankyou from './pages/Thankyou';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Route */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

// THIS IS THE MISSING LINE THAT'S CAUSING THE ERROR
export default App;  // 👈 Add this at the end