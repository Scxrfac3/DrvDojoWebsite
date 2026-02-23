import React, { useEffect, useRef } from "react";

interface CalendlyWidgetProps {
  url: string;
  height?: number;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  url, 
  height = 700 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly CSS if not already loaded
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        // Initialize the widget after script loads
        if ((window as any).Calendly && containerRef.current) {
          (window as any).Calendly.initInlineWidget({
            url: url,
            parentElement: containerRef.current,
          });
        }
      };
      document.body.appendChild(script);
    } else {
      // If script already loaded, initialize immediately
      if ((window as any).Calendly && containerRef.current) {
        (window as any).Calendly.initInlineWidget({
          url: url,
          parentElement: containerRef.current,
        });
      }
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
};

export default CalendlyWidget;
