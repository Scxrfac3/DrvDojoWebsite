import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Menu, X, BookOpen, LogOut, User, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BlueprintAccess() {
  const { user, loading, isAuthenticated, signOut } = useAuth();
  const [showSidebar, setShowSidebar] = useState(true);
  const [progress, setProgress] = useState(0);

  const chapters = [
    { id: 'hero', num: '00', title: 'Introduction' },
    { id: 'franchise-trap', num: '01', title: 'The Franchise Trap' },
    { id: 'what-is-adi', num: '02', title: 'What Is an ADI?' },
    { id: 'part1', num: '03', title: 'Part 1 - Theory Test' },
    { id: 'part2', num: '04', title: 'Part 2 - Driving Ability' },
    { id: 'part3', num: '05', title: 'Part 3 - Instructional' },
    { id: 'cost-comparison', num: '06', title: 'Cost Comparison' },
    { id: 'business-setup', num: '07', title: 'Business Setup' },
    { id: 'getting-pupils', num: '08', title: 'Getting Pupils' },
    { id: 'pricing', num: '09', title: 'Pricing & Income' },
    { id: 'tech-professional', num: '10', title: 'Tech & Professional' },
    { id: '90-day', num: '11', title: '90-Day Action Plan' },
    { id: 'mistakes', num: '12', title: 'Common Mistakes' },
    { id: 'social-proof', num: '13', title: 'Success Stories' },
    { id: 'services', num: '14', title: 'Services & CTAs' },
  ];

  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#e63946] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed bottom-6 right-6 z-50 lg:hidden p-4 bg-[#e63946] text-white rounded-full shadow-lg"
      >
        {showSidebar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {showSidebar && (
        <div 
          className="fixed inset-0 z-40 bg-black/80 lg:hidden" 
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-72 bg-[#111111] border-r border-white/10 z-50 transform transition-transform duration-300 lg:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 tracking-wider">BY</span>
            <span className="text-white font-bold tracking-wider">DRIVE DOJO</span>
          </div>
          <button 
            onClick={() => setShowSidebar(false)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-4 border-b border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Progress</span>
            <span className="text-xs text-[#e63946] font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#e63946] to-[#ff6b35] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Chapter Navigation */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-180px)]">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2">Chapters</div>
          <ul className="space-y-1">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <button
                  onClick={() => scrollToChapter(chapter.id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left group"
                >
                  <span className="font-mono text-xs text-[#e63946] w-6">{chapter.num}</span>
                  <span className="text-sm group-hover:text-white transition-colors">{chapter.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[#111111]">
          <Link
            to="/adi-blueprint#services"
            className="block w-full py-3 bg-gradient-to-r from-[#e63946] to-[#ff6b35] text-white text-center font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Get 1-on-1 Mentoring
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:ml-72 min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="lg:hidden p-2 text-gray-400 hover:text-white"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#e63946]" />
                <span className="text-white font-semibold">ADI Blueprint</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    <span className="text-sm truncate max-w-[150px]">{user.email}</span>
                  </div>
                  <button
                    onClick={signOut}
                    className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 bg-[#e63946] text-white rounded-lg hover:bg-[#e63946]/90 transition-colors"
                >
                  <span className="text-sm font-medium">Log In</span>
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Course Content - Embedded ADI Blueprint V2 */}
        <div className="adi-blueprint-content">
          <iframe 
            src="/adi-blueprint-v2/index.html" 
            className="w-full h-screen border-0"
            title="ADI Blueprint Course Content"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
