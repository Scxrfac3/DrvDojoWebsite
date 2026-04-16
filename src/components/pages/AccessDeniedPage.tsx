import { Link } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[#e63946]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-10 h-10 text-[#e63946]" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Access Required</h1>
        <p className="text-gray-400 mb-8">
          You need to purchase the ADI Blueprint to access this content.
        </p>

        <Link
          to="/adi-blueprint"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6b35] hover:bg-[#ff8555] text-white font-bold rounded-xl transition-all"
        >
          Get Access Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
