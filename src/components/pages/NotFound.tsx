import { Link } from 'react-router-dom';
import SEO from "@/components/ui/SEO";

export default function NotFound() {
  return (
    <>
      <SEO noindex title="Page Not Found | Drive Dojo" description="This page could not be found." />
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">
            Sorry, we couldn't find that page.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-white text-[#0d0d0d] rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
