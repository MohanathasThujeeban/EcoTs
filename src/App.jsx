import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import MobileBottomBar from './components/MobileBottomBar';
import Home from './pages/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />

      {/* Branded Splash Screen Loader */}
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      <div className="flex flex-col min-h-screen font-sans selection:bg-[#1B5E20]/20 selection:text-[#1B5E20] pb-16 sm:pb-0">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={() => setIsBookingOpen(true)} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home onOpenBooking={() => setIsBookingOpen(true)} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Mobile Sticky Quick Action Bar */}
        <MobileBottomBar onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Viewing Tour Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </Router>
  );
}
