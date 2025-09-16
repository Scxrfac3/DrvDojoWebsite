import React from "react";
import BaseBooking from "./BaseBooking";
import { Award } from "lucide-react";

const Booking6Hour = () => {
  return (
    <BaseBooking
      packageName="6-Hour Package"
      packagePrice="£210"
      packageUnit="/package"
      packageDescription="Save money with our starter package"
      packageFeatures={[
        "6 hours of lessons",
        "Structured learning plan",
        "Progress tracking",
      ]}
      packageColor="purple"
      packageIcon={<Award className="h-6 w-6" />}
      calendlyUrl="https://calendly.com/drivedojo-qnua/6-hour-package?background_color=c2e5ff"
      bookingPageTitle="Book Your 6-Hour Package"
    />
  );
};

export default Booking6Hour;