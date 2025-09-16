import React from "react";
import BaseBooking from "./BaseBooking";
import { CheckCircle } from "lucide-react";

const BookingMockTest = () => {
  return (
    <BaseBooking
      packageName="Mock driving test"
      packagePrice="£90"
      packageUnit="/test"
      packageDescription="Perfect practice before your test"
      packageFeatures={[
        "Real test conditions",
        "45 minutes duration",
        "Detailed feedback",
      ]}
      packageColor="blue"
      packageIcon={<CheckCircle className="h-6 w-6" />}
      calendlyUrl="https://calendly.com/drivedojo-qnua/10-hour-package-clone?background_color=ff87df"
      bookingPageTitle="Book Your Mock Driving Test"
    />
  );
};

export default BookingMockTest;