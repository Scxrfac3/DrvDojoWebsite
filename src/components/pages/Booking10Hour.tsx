import React from "react";
import BaseBooking from "./BaseBooking";
import { Award } from "lucide-react";

const Booking10Hour = () => {
  return (
    <BaseBooking
      packageName="10-Hour Package"
      packagePrice="£340"
      packageUnit="/package"
      packageDescription="Most Popular - Best value for money!"
      packageFeatures={[
        "10 hours of lessons",
        "Progress tracking",
        "Best value for most learners",
      ]}
      packageColor="purple"
      packageIcon={<Award className="h-6 w-6" />}
      calendlyUrl="https://calendly.com/drivedojo-qnua/6-hour-package-clone?background_color=96bdff"
      bookingPageTitle="Book Your 10-Hour Package"
    />
  );
};

export default Booking10Hour;