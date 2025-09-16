import React from "react";
import BaseBooking from "./BaseBooking";
import { Zap } from "lucide-react";

const BookingIntensive = () => {
  return (
    <BaseBooking
      packageName="Intensive Driving Course"
      packagePrice="£600"
      packageUnit="/course"
      packageDescription="Fast-track your learning"
      packageFeatures={[
        "Comprehensive training",
        "Flexible scheduling",
        "Test preparation included",
      ]}
      packageColor="green"
      packageIcon={<Zap className="h-6 w-6" />}
      calendlyUrl="https://calendly.com/drivedojo-qnua/intensive?background_color=ffa5f0"
      bookingPageTitle="Book Your Intensive Driving Course"
    />
  );
};

export default BookingIntensive;