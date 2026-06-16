import { useEffect } from "react";

interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  price?: string;
  priceCurrency?: string;
  areaServed?: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  serviceSchema?: ServiceSchema;
}

/**
 * Synchronously inject the canonical tag into <head> during render phase.
 * This ensures the prerenderer captures the correct canonical URL before
 * taking its HTML snapshot. Using useEffect for this is too late for SEO.
 */
function setCanonicalSync(canonical: string | undefined): void {
  if (typeof document === "undefined") return;
  if (!canonical) return;

  // Target the placeholder tag we added in index.html
  const existing = document.getElementById("canonical-tag");
  if (existing) {
    existing.setAttribute("href", canonical);
  } else {
    // Fallback: find or create
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) {
      link.setAttribute("href", canonical);
    } else {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonical);
      document.head.appendChild(link);
    }
  }
}

const SEO = ({ title, description, keywords, canonical, serviceSchema }: SEOProps) => {
  // SYNC canonical injection — runs during render, NOT in useEffect.
  // This is critical for prerenderer: the canonical tag must be present
  // in the HTML snapshot before JS finishes executing.
  setCanonicalSync(canonical);

  useEffect(() => {
    // Update document title (cannot be done synchronously — must be in effect)
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    } else {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", title);
      document.head.appendChild(ogTitle);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    } else {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      ogDescription.setAttribute("content", description);
      document.head.appendChild(ogDescription);
    }

    // Update Twitter Card tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    } else {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      twitterTitle.setAttribute("content", title);
      document.head.appendChild(twitterTitle);
    }

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    } else {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      twitterDescription.setAttribute("content", description);
      document.head.appendChild(twitterDescription);
    }

    // Add Service Schema markup for rich snippets
    if (serviceSchema) {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceSchema.name,
        "description": serviceSchema.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": serviceSchema.provider.name,
          "url": serviceSchema.provider.url
        },
        ...(serviceSchema.price && {
          "offers": {
            "@type": "Offer",
            "price": serviceSchema.price,
            "priceCurrency": serviceSchema.priceCurrency || "GBP"
          }
        }),
        ...(serviceSchema.areaServed && {
          "areaServed": serviceSchema.areaServed
        })
      };

      let existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.textContent = JSON.stringify(schemaData);
      } else {
        const schemaScript = document.createElement("script");
        schemaScript.type = "application/ld+json";
        schemaScript.textContent = JSON.stringify(schemaData);
        document.head.appendChild(schemaScript);
      }
    }

    // Cleanup function to reset meta tags when component unmounts
    return () => {
      // Reset canonical back to homepage default
      const canonicalTag = document.getElementById("canonical-tag");
      if (canonicalTag) {
        canonicalTag.setAttribute("href", "https://drivedojodrivingschool.com/");
      }
    };
  }, [title, description, keywords, canonical, serviceSchema]);

  return null; // This component doesn't render anything
};

export default SEO;