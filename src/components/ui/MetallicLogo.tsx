import React, { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';

const MetallicLogo = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        setIsLoading(true);
        const response = await fetch('/images/certifications/DDojo.png');
        const blob = await response.blob();
        const file = new File([blob], "DDojo.png", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading default image:", err);
        setIsLoading(false);
      }
    }

    loadDefaultImage();
  }, []);

  if (isLoading) {
    return (
      <div style={{ width: '48px', height: '48px' }} className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div style={{ width: '96px', height: '48px', position: 'relative', overflow: 'hidden' }}>
      {/* Original image as background */}
      <img
        src="/images/certifications/DDojo.png"
        alt="Drive Dojo Logo"
        style={{ width: '200%', height: '100%', position: 'absolute', top: 0, left: '-50%', objectFit: 'contain' }}
      />
      {/* Metallic effect overlay */}
      <div style={{ width: '200%', height: '100%', position: 'absolute', top: 0, left: '-50%', mixBlendMode: 'overlay' }}>
        <MetallicPaint
          imageData={imageData ?? new ImageData(1, 1)}
          params={{ edge: 2, patternBlur: 0.005, patternScale: 2, refraction: 0.015, speed: 0.3, liquid: 0.07 }}
        />
      </div>
    </div>
  );
};

export default MetallicLogo;