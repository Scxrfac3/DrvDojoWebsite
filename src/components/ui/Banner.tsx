import React, { useState } from "react";
import { X } from "lucide-react";

interface BannerProps {
  message?: string;
  isVisible?: boolean;
  onClose?: () => void;
}

const Banner = ({
  message = "🎉 Special offer: 10% off all lesson packages for new students! Use code NEWDRIVER10 at checkout.",
  isVisible = true,
  onClose = () => {},
}: BannerProps) => {
  const [visible, setVisible] = useState(isVisible);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 text-center relative">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={handleClose}
          className="absolute right-4 text-white hover:text-blue-200 transition-colors"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
