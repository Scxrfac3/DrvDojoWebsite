import React from "react";

interface LocationMapProps {
  query: string;
  className?: string;
}

// Embeds a Google Maps view for a given area. Used on location landing pages
// to satisfy the "embedded map" local-SEO requirement.
const LocationMap = ({ query, className = "" }: LocationMapProps) => {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query,
  )}&output=embed`;

  return (
    <iframe
      title={`Map of ${query}`}
      src={src}
      className={`w-full h-full min-h-[360px] border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
};

export default LocationMap;
