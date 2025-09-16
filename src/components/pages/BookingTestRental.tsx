import React from "react";
import BaseBooking from "./BaseBooking";
import { Car } from "lucide-react";

const BookingTestRental = () => {
  return (
    <BaseBooking
      packageName="Driving test car rental"
      packagePrice="£150"
      packageUnit="/3 hours"
      packageDescription="3 hours: arrive 15min early, practice maneuvers, home drop-off"
      packageFeatures={[
        "3 hours booking",
        "Arrive 15 minutes before test",
        "Practice maneuvers",
        "Home drop-off after test",
      ]}
      packageColor="green"
      packageIcon={<Car className="h-6 w-6" />}
      calendlyUrl="https://calendly.com/drivedojo-qnua/10-hour-package-clone"
      bookingPageTitle="Book Your Driving Test Car Rental"
    />
  );
};

export default BookingTestRental;