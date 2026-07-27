import React from "react";
import { Link } from "react-router-dom";
import { Zap, CreditCard } from "lucide-react";

// Site-wide USP bar: surfaces our two key differentiators — instant online
// booking and Klarna pay-later — on every page (rendered from the Navbar).
const UspBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-gradient-to-r from-primary to-orange-600 text-white text-xs sm:text-sm font-semibold flex items-center justify-center px-3 text-center">
      <span className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center leading-tight">
        <Zap className="h-4 w-4" />
        <span>Book driving lessons instantly online</span>
        <CreditCard className="h-4 w-4 ml-1 sm:ml-2" />
        <span>Pay with Klarna — Buy Now, Pay Later</span>
        <Link
          to="/booking/payg"
          className="underline underline-offset-2 hover:text-white/80 ml-1 sm:ml-2"
        >
          Book now →
        </Link>
      </span>
    </div>
  );
};

export default UspBar;
