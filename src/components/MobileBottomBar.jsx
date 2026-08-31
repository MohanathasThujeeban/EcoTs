import React from 'react';
import PremiumIcon from './PremiumIcon';

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0D1F17]/95 backdrop-blur-lg border-t border-emerald-900/60 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href="tel:0771727099"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0277BD] hover:bg-[#039BE5] text-white text-xs font-extrabold shadow-md active:scale-98 transition-all"
        >
          <PremiumIcon name="phone" size={16} badge="none" />
          <span>Call 077 172 7099</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1B5E20] hover:bg-[#2E7D32] text-white text-xs font-extrabold shadow-md active:scale-98 transition-all"
        >
          <PremiumIcon name="calendar" size={16} badge="none" />
          <span>Book a Viewing</span>
        </button>
      </div>
    </div>
  );
}
