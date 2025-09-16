import React, { useState, useEffect } from 'react';
import { Search, MapPin, CheckCircle, XCircle, ArrowRight, Star } from 'lucide-react';
import { validatePostcode, formatPostcode, PostcodeCheckResult, LESSON_TYPES } from '@/lib/postcodeChecker';

interface PostcodeCheckerProps {
  onPostcodeChecked: (result: PostcodeCheckResult) => void;
  onLessonSelected: (lessonType: string) => void;
  className?: string;
}

export default function PostcodeChecker({ onPostcodeChecked, onLessonSelected, className = '' }: PostcodeCheckerProps) {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState<PostcodeCheckResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [showLessonSelection, setShowLessonSelection] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCheckPostcode = async () => {
    if (!postcode.trim()) return;
    
    setIsChecking(true);
    // Add small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const checkResult = validatePostcode(postcode);
    setResult(checkResult);
    setIsChecking(false);
    
    onPostcodeChecked(checkResult);
    
    if (checkResult.isCovered) {
      // Show success message with CTA button instead of automatic redirect
      setShowSuccessMessage(true);
    }
  };

  const handleLessonSelect = (lessonId: string) => {
    setSelectedLesson(lessonId);
    onLessonSelected(lessonId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCheckPostcode();
    }
  };

  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 ${className}`}>
      {/* Postcode Input Section */}
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center">
          <MapPin className="h-5 w-5 mr-2" />
          Check if we cover your area
        </h3>
        
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your full postcode (e.g., E10 5AJ)"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-3 h-5 w-5 text-white/60" />
          </div>
          
          <button
            onClick={handleCheckPostcode}
            disabled={isChecking || !postcode.trim()}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 disabled:cursor-not-allowed"
          >
            {isChecking ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Checking...
              </>
            ) : (
              <>
                Check
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className={`p-4 rounded-xl mb-6 ${
          result.isCovered 
            ? 'bg-green-500/20 border border-green-400/30' 
            : 'bg-orange-500/20 border border-orange-400/30'
        }`}>
          <div className="flex items-center gap-3">
            {result.isCovered ? (
              <CheckCircle className="h-6 w-6 text-green-400" />
            ) : (
              <XCircle className="h-6 w-6 text-orange-400" />
            )}
            <div>
              <p className={`font-medium ${
                result.isCovered ? 'text-green-300' : 'text-orange-300'
              }`}>
                {result.message}
              </p>
              {result.postcode && (
                <p className="text-sm text-white/70 mt-1">
                  Postcode: {result.postcode}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Success Message with CTA Button */}
      {result?.isCovered && showSuccessMessage && (
        <div className="pt-4">
          <button
            onClick={() => {
              // Navigate to services page
              window.location.href = `/services?postcode=${encodeURIComponent(postcode)}`;
            }}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Book Your Driving Lesson
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Contact Section for uncovered areas */}
      {result && !result.isCovered && (
        <div className="pt-4">
          <button
            onClick={() => {
              // Navigate to contact page
              window.location.href = `/contact`;
            }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-xl font-bold transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}