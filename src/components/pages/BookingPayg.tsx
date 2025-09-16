import React from "react";
import BaseBooking from "./BaseBooking";
import { Car } from "lucide-react";

const BookingPayg = () => {
  return (
    <BaseBooking
      packageName="Pay As You Go Lesson 2 hours"
      packagePrice="£76"
      packageUnit="/2 hours"
      packageDescription="Perfect for trying us out"
      packageFeatures={[
        "2 hours lesson",
        "Personalized learning",
        "Beginner friendly",
      ]}
      packageColor="blue"
      packageIcon={<Car className="h-6 w-6" />}
      calendlyUrl="https://calendly.com/drivedojo-qnua/120min?background_color=b8c7ff"
      bookingPageTitle="Book Your Pay As You Go Lesson"
    />
  );
};

export default BookingPayg;