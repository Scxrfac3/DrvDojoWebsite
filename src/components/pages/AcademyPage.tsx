import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Lock, Menu, X, BookOpen, LogOut, User } from 'lucide-react';

export default function AcademyPage() {
  const { user, loading, isAuthenticated, signOut } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    setShowMobileMenu(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#ff6b35] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="fixed bottom-6 right-6 z-50 lg:hidden p-4 bg-[#e63946] text-white rounded-full shadow-lg"
      >
        {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 bg-black/80 lg:hidden" onClick={() => setShowMobileMenu(false)}>
          <div className="absolute right-0 top-0 h-full w-72 bg-[#111111] border-l border-white/10 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 tracking-wider">BY</span>
                <span className="text-white font-bold tracking-wider">DRIVE DOJO</span>
              </div>
            </div>

            <nav className="space-y-1">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => scrollToChapter(chapter.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
                >
                  <span className="font-mono text-[#e63946] text-xs">{chapter.num}</span>
                  <span className="text-sm">{chapter.title}</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-white/10">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-4 text-gray-400">
                    <User className="w-4 h-4" />
                    <span className="text-sm truncate">{user.email}</span>
                  </div>
                  <button
                    onClick={signOut}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block text-center py-3 bg-[#ff6b35] text-white rounded-lg font-medium"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-[#111111] border-r border-white/10 flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 tracking-wider">BY</span>
            <span className="text-white font-bold tracking-wider">DRIVE DOJO</span>
          </div>
        </div>

        <div className="p-4 border-b border-white/10">
          <div className="text-xs text-gray-500 mb-2">Progress</div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-0 bg-gradient-to-r from-[#e63946] to-[#ffd700] transition-all duration-300"></div>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 px-4">Chapters</div>
          <div className="space-y-1">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left border-l-2 border-transparent hover:border-[#e63946]"
              >
                <span className="font-mono text-[#e63946] text-xs">{chapter.num}</span>
                <span className="text-sm">{chapter.title}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-white/10">
          {user ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 px-4 text-gray-400">
                <User className="w-4 h-4" />
                <span className="text-sm truncate">{user.email}</span>
              </div>
              <button
                onClick={signOut}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="block text-center py-3 bg-[#ff6b35] text-white rounded-lg font-medium"
            >
              Sign In
            </Link>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-16 lg:pt-0">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e63946]/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-3xl mx-auto px-8 py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-full mb-6">
              <Lock className="w-4 h-4 text-[#ffd700]" />
              <span className="text-[#ffd700] text-sm font-medium">Your Exclusive Access</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
              THE COMPLETE<br />
              <span className="text-[#ffd700]">ADI BLUEPRINT</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              How to Build a Profitable, Independent Driving School in the UK — Without the Franchise Trap
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-10">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#e63946]" /> By Mamunur Rashid, Drive Dojo
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#e63946]" /> 45 min read
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-[#ffd700] mb-4">What You Get:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e63946]/20 flex items-center justify-center">
                    <span className="text-[#e63946]">£</span>
                  </div>
                  <span className="text-white">Income Calculator</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e63946]/20 flex items-center justify-center">
                    <span className="text-[#e63946]">%</span>
                  </div>
                  <span className="text-white">Cost Comparison Tool</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e63946]/20 flex items-center justify-center">
                    <span className="text-[#e63946]">✓</span>
                  </div>
                  <span className="text-white">Progress Tracker</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e63946]/20 flex items-center justify-center">
                    <span className="text-[#e63946]">90</span>
                  </div>
                  <span className="text-white">90-Day Action Plan</span>
                </div>
              </div>
            </div>

            <div className="bg-[#e63946]/10 border border-[#e63946]/30 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">What's Inside:</h3>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="font-mono text-[#e63946] text-xs">01</span>
                  How to avoid the £2,279/month franchise trap
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="font-mono text-[#e63946] text-xs">02</span>
                  Step-by-step ADI qualification guide
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="font-mono text-[#e63946] text-xs">03</span>
                  Real cost breakdown: Independent vs Franchise
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="font-mono text-[#e63946] text-xs">04</span>
                  My exact pupil-getting strategy
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="font-mono text-[#e63946] text-xs">05</span>
                  Pricing strategy that fills your diary
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="font-mono text-[#e63946] text-xs">06</span>
                  90-day action plan with checklist
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder for other sections */}
        <section id="franchise-trap" className="py-20 px-8 bg-[#111111]">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-[#e63946]/20 border border-[#e63946] text-[#e63946] text-xs font-mono tracking-wider mb-4">
              CHAPTER 01
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">How to Avoid the £2,279/Month Franchise Trap</h2>
            
            <p className="text-xl text-white mb-6">
              I know exactly what it takes to build a driving school from the ground up — because I have lived every high and low of it.
            </p>
            
            <p className="text-gray-300 mb-6">
              I became a fully qualified Approved Driving Instructor (ADI) at just <strong className="text-white">21 years old</strong>, managing to complete my training while studying for my Computer Science degree at university. Fast forward 8+ years, and I have seen every side of this industry.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">My Story: The Franchise Trap</h3>
            <p className="text-gray-300 mb-6">
              Like many new instructors, I started out believing the hype. I signed with <strong className="text-[#e63946]">not one but two major national franchises</strong> — specifically <strong>AA Driving School</strong> and <strong>RED Driving School</strong> — because I thought it was the safest way to guarantee a full diary and a stable income.
            </p>

            <div className="bg-[#e63946]/15 border border-[#e63946]/50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚠️</div>
                <div>
                  <strong className="text-[#e63946]">I was wrong.</strong>
                  <p className="text-gray-400 mt-2">The weekly fees were crushing. Even when I was sick, on holiday, or had no pupils — I still owed them money.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">When It Got Really Hard</h3>
            <p className="text-gray-300 mb-6">
              Despite being a fully qualified, experienced ADI, I found myself in a position I never expected:
            </p>

            <div className="bg-white/5 border border-[#e63946]/30 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#e63946]/20 flex items-center justify-center text-2xl">🚚</div>
                <div>
                  <h4 className="text-white font-semibold">Taking on Second Jobs</h4>
                  <p className="text-gray-400">I drove delivery vans for Argos and Sainsbury's. Not because I wanted to — but because the franchise fees left me with no choice.</p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#ffd700] pl-6 py-2 my-8">
              <p className="text-xl text-gray-300 italic">"The irony of a qualified driving instructor doing delivery runs to pay a driving school franchise is not lost on me."</p>
            </blockquote>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">The Turning Point — Going Independent</h3>
            
            <div className="text-center py-12 bg-gradient-to-b from-[#4ade80]/10 to-transparent border-2 border-[#4ade80] rounded-2xl mb-6">
              <div className="text-6xl md:text-8xl font-bold text-[#4ade80]">100%</div>
              <div className="text-xl text-gray-300 tracking-widest mt-2">INDEPENDENT</div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-[#4ade80]/5 rounded-lg">
                <span className="text-[#4ade80]">✓</span>
                <span className="text-white">No weekly fees — ever</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#4ade80]/5 rounded-lg">
                <span className="text-[#4ade80]">✓</span>
                <span className="text-white">No territory restrictions</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#4ade80]/5 rounded-lg">
                <span className="text-[#4ade80]">✓</span>
                <span className="text-white">Keep 100% of my earnings</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#4ade80]/5 rounded-lg">
                <span className="text-[#4ade80]">✓</span>
                <span className="text-white">Build my own brand and reputation</span>
              </div>
            </div>

            <div className="bg-[#4ade80]/10 border border-[#4ade80]/30 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <strong className="text-white">Drive Dojo has been running for over 2 years</strong>
                  <p className="text-gray-400">as a fully independent school — profitable, sustainable, and entirely mine.</p>
                </div>
              </div>
            </div>

            {/* Drive Dojo Tip */}
            <div className="bg-gradient-to-r from-[#ffd700]/10 to-transparent border border-[#ffd700]/30 rounded-xl overflow-hidden mb-6">
              <div className="px-6 py-3 bg-[#ffd700]/10 border-b border-[#ffd700]/20 flex items-center gap-2">
                <span className="text-lg">💡</span>
                <span className="text-[#ffd700] text-xs font-mono tracking-wider">DRIVE DOJO TIP</span>
              </div>
              <div className="p-6">
                <p className="text-gray-300">
                  <strong className="text-white">What I wish I'd known:</strong> The franchise sales pitch focuses on "guaranteed pupils" but never mentions what happens when you're sick, on holiday, or during the quiet January-February period. Those fees don't stop. That's the trap.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">A Career Beyond the Car</h3>
            <p className="text-gray-300 mb-6">
              My career has not just been about traditional driving instruction. I also worked as an <strong className="text-white">Autonomous Vehicle Safety Operator</strong> for Wayve (UK's answer to Waymo), in partnership with Uber.
            </p>
            <p className="text-gray-300">
              This experience has given me unique insight into where the industry is heading — and why building an independent, resilient business today is more important than ever.
            </p>
          </div>
        </section>

        {/* More sections would go here - abbreviated for now */}
        <section id="what-is-adi" className="py-20 px-8">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-[#e63946]/20 border border-[#e63946] text-[#e63946] text-xs font-mono tracking-wider mb-4">
              CHAPTER 02
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">What Is an ADI?</h2>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <p className="text-xl text-white">
                An <strong>Approved Driving Instructor (ADI)</strong> is the <span className="text-[#ffd700]">only legally recognised qualification</span> that allows you to charge money for driving lessons in the UK.
              </p>
              <p className="text-gray-500 mt-2">You cannot legally take payment for teaching someone to drive without it.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🏛️</div>
                <h4 className="text-white font-semibold mb-2">DVSA Regulated</h4>
                <p className="text-gray-400 text-sm">Administered by the Driver and Vehicle Standards Agency</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">📋</div>
                <h4 className="text-white font-semibold mb-2">Three-Part Process</h4>
                <p className="text-gray-400 text-sm">Must pass all three examinations to qualify</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🪪</div>
                <h4 className="text-white font-semibold mb-2">Green Badge</h4>
                <p className="text-gray-400 text-sm">Display your registration in your vehicle at all times</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-6">The Three Parts — Overview</h3>
            <p className="text-gray-300 mb-8">
              Each part tests a different skill set. Most candidates take <strong className="text-white">9–18 months</strong> from start to badge, though it's possible to complete faster with focused effort.
            </p>

            {/* Timeline */}
            <div className="relative pl-8 space-y-8 border-l-2 border-gradient-to-b from-[#ffd700] to-[#e63946]">
              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-[#ffd700] flex items-center justify-center text-black font-bold">1</div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-semibold">Part 1 — Theory & Hazard Awareness</h4>
                  <p className="text-gray-400 mt-2">A knowledge-based computer test covering teaching knowledge, road safety, and hazard perception. Duration: 90 minutes.</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                    <span>⏱️ 90 min</span>
                    <span>💷 ~£100</span>
                    <span>📊 Pass rate: ~50%</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-[#e63946] flex items-center justify-center text-white font-bold">2</div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-semibold">Part 2 — Driving Ability</h4>
                  <p className="text-gray-400 mt-2">Your own driving tested to an advanced standard. Must demonstrate skill significantly above a standard licence holder.</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                    <span>⏱️ ~60 min</span>
                    <span>💷 ~£100</span>
                    <span>📊 Pass rate: ~45%</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-[#4ade80] flex items-center justify-center text-black font-bold">3</div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-semibold">Part 3 — Instructional Ability</h4>
                  <p className="text-gray-400 mt-2">Two 30-minute practical lessons where you teach the examiner (playing the role of a pupil). This is where 70% of candidates fail.</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                    <span>⏱️ 60 min</span>
                    <span>💷 ~£100</span>
                    <span>📊 Pass rate: ~30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xs text-gray-500 tracking-wider">BY</span>
              <span className="text-white font-bold tracking-wider">DRIVE DOJO</span>
            </div>
            <p className="text-gray-500 text-sm">© 2024 Drive Dojo Driving School. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
