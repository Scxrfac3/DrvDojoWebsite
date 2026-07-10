import { Suspense, lazy } from 'react';
import { useRoutes, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import WhatsAppStickyButton from './components/ui/WhatsAppStickyButton';
import routes from 'tempo-routes';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy loaded page components
const Services = lazy(() => import('./components/pages/Services'));
const About = lazy(() => import('./components/pages/About'));
const Contact = lazy(() => import('./components/pages/Contact'));
const BookingPayg = lazy(() => import('./components/pages/BookingPayg'));
const Booking6Hour = lazy(() => import('./components/pages/Booking6Hour'));
const Booking10Hour = lazy(() => import('./components/pages/Booking10Hour'));
const Booking20Hour = lazy(() => import('./components/pages/Booking20Hour'));
const BookingIntensive = lazy(() => import('./components/pages/BookingIntensive'));
const BookingIntensivePackage = lazy(() => import('./components/pages/BookingIntensivePackage'));
const BookingMockTest = lazy(() => import('./components/pages/BookingMockTest'));
const BookingTestRental = lazy(() => import('./components/pages/BookingTestRental'));
const BlogPage = lazy(() => import('./components/pages/BlogPage'));
const AutomaticDrivingLessons = lazy(() => import('./components/pages/AutomaticDrivingLessons'));
const IntensiveDrivingCoursesIlford = lazy(() => import('./components/pages/IntensiveDrivingCoursesIlford'));
const BlogArticleDetail = lazy(() => import('./components/pages/BlogArticleDetail'));
const GoodmayesLessons = lazy(() => import('./components/pages/GoodmayesLessons'));
const BarkingLessons = lazy(() => import('./components/pages/BarkingLessons'));
const RomfordLessons = lazy(() => import('./components/pages/RomfordLessons'));
const IlfordLessons = lazy(() => import('./components/pages/IlfordLessons'));
const WalthamstowLessons = lazy(() => import('./components/pages/WalthamstowLessons'));
const IsleOfDogsLessons = lazy(() => import('./components/pages/IsleOfDogsLessons'));
const EastHamLessons = lazy(() => import('./components/pages/EastHamLessons'));
const ForestGateLessons = lazy(() => import('./components/pages/ForestGateLessons'));
const CanningTownLessons = lazy(() => import('./components/pages/CanningTownLessons'));
const DocklandsLessons = lazy(() => import('./components/pages/DocklandsLessons'));
const DualControlInstallation = lazy(() => import('./components/pages/DualControlInstallation'));
const Terms = lazy(() => import('./components/pages/Terms'));
const PrivacyPolicyPage = lazy(() => import('./components/pages/PrivacyPolicyPage'));
const Waitlist = lazy(() => import('./components/pages/Waitlist'));
const BookingSuccess = lazy(() => import('./components/pages/BookingSuccess'));
const BookingCancel = lazy(() => import('./components/pages/BookingCancel'));
const EastLondonAutomatic = lazy(() => import('./components/pages/EastLondonAutomatic'));

// ADI Blueprint pages
const ADILandingPage = lazy(() => import('./components/pages/ADILandingPage'));
const AcademyPage = lazy(() => import('./components/pages/AcademyPage'));
const BlueprintAccess = lazy(() => import('./components/pages/BlueprintAccess'));
const LoginPage = lazy(() => import('./components/pages/LoginPage'));
const AccessDeniedPage = lazy(() => import('./components/pages/AccessDeniedPage'));
const FinancePlannerPage = lazy(() => import('./components/pages/FinancePlannerPage'));
const SubscriptionPage = lazy(() => import('./components/pages/SubscriptionPage'));
const DashboardPage = lazy(() => import('./components/pages/DashboardPage'));
const BillingPortalPage = lazy(() => import('./components/pages/BillingPortalPage'));

// Free Resources pages
const TestCentreExplorer = lazy(() => import('./components/pages/TestCentreExplorer'));
const ShowMeTellMe = lazy(() => import('./components/pages/ShowMeTellMe'));
const DL25ReportGenerator = lazy(() => import('./components/pages/DL25ReportGenerator'));

// Hub & Spoke SEO pages
const TestCentrePage = lazy(() => import('./components/pages/TestCentrePage'));
const SkillPage = lazy(() => import('./components/pages/SkillPage'));
const ManoeuvrePage = lazy(() => import('./components/pages/ManoeuvrePage'));
const SpecialtyServicePage = lazy(() => import('./components/pages/SpecialtyServicePage'));
const SitemapPage = lazy(() => import('./components/pages/SitemapPage'));

function App() {
  return (
    <Suspense
      fallback={
        <div className='min-h-screen flex items-center justify-center bg-slate-900'>
          <p className='text-white text-xl'>Loading...</p>
        </div>
      }
    >
      <>
        <Routes>
          {/* Existing routes */}
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booking/payg' element={<BookingPayg />} />
          <Route path='/booking/6hour' element={<Booking6Hour />} />
          <Route path='/booking/10hour' element={<Booking10Hour />} />
          <Route path='/booking/20hour' element={<Booking20Hour />} />
          <Route path='/booking/intensive' element={<BookingIntensive />} />
          <Route path='/booking/intensive-12hr' element={<BookingIntensivePackage packageKey="12hr" />} />
          <Route path='/booking/intensive-16hr' element={<BookingIntensivePackage packageKey="16hr" />} />
          <Route path='/booking/intensive-20hr' element={<BookingIntensivePackage packageKey="20hr" />} />
          <Route path='/booking/intensive-25hr' element={<BookingIntensivePackage packageKey="25hr" />} />
          <Route path='/booking/intensive-30hr' element={<BookingIntensivePackage packageKey="30hr" />} />
          <Route path='/booking/intensive-35hr' element={<BookingIntensivePackage packageKey="35hr" />} />
          <Route path='/booking/intensive-40hr' element={<BookingIntensivePackage packageKey="40hr" />} />
          <Route path='/booking/intensive-45hr' element={<BookingIntensivePackage packageKey="45hr" />} />
          <Route path='/booking/mocktest' element={<BookingMockTest />} />
          <Route path='/booking/testrental' element={<BookingTestRental />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/automatic-driving-lessons' element={<AutomaticDrivingLessons />} />
          <Route path='/intensive-driving-courses-ilford' element={<IntensiveDrivingCoursesIlford />} />
          <Route
            path='/driving-lessons/goodmayes'
            element={<GoodmayesLessons />}
          />
          <Route path='/driving-lessons/ilford' element={<IlfordLessons />} />
          <Route path='/driving-lessons/walthamstow' element={<WalthamstowLessons />} />
          <Route path='/driving-lessons/barking' element={<BarkingLessons />} />
          <Route path='/driving-lessons/romford' element={<RomfordLessons />} />
          <Route
            path='/driving-lessons/isle-of-dogs'
            element={<IsleOfDogsLessons />}
          />
          <Route
            path='/driving-lessons/east-ham'
            element={<EastHamLessons />}
          />
          <Route
            path='/driving-lessons/forest-gate'
            element={<ForestGateLessons />}
          />
          <Route
            path='/driving-lessons/canning-town'
            element={<CanningTownLessons />}
          />
          <Route
            path='/driving-lessons/docklands'
            element={<DocklandsLessons />}
          />
          <Route
            path='/dual-control-installation'
            element={<DualControlInstallation />}
          />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/waitlist' element={<Waitlist />} />
          <Route path='/booking/success' element={<BookingSuccess />} />
          <Route path='/booking/cancel' element={<BookingCancel />} />
          <Route path='/east-london-automatic' element={<EastLondonAutomatic />} />

          {/* ADI Blueprint Routes */}
          <Route path='/adi-blueprint' element={<ADILandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/access-denied' element={<AccessDeniedPage />} />
          <Route
            path='/academy/adi-blueprint'
            element={
              <ProtectedRoute requireAuth={true}>
                <AcademyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/academy/blueprint-access'
            element={
              <ProtectedRoute requireAuth={true}>
                <BlueprintAccess />
              </ProtectedRoute>
            }
          />

          {/* Finance Planner Route */}
          <Route path='/finance-planner' element={<FinancePlannerPage />} />

          {/* Subscription Routes */}
          <Route path='/subscribe' element={<SubscriptionPage />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute requireAuth={true}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/billing-portal'
            element={
              <ProtectedRoute requireAuth={true}>
                <BillingPortalPage />
              </ProtectedRoute>
            }
          />

          {/* Free Resources Routes */}
          <Route path='/test-centres' element={<TestCentreExplorer />} />
          <Route path='/practical-test-prep/show-me-tell-me' element={<ShowMeTellMe />} />
          <Route path='/practical-test-prep/dl25-report' element={<DL25ReportGenerator />} />

          {/* Hub & Spoke SEO Routes — Test Centres */}
          <Route path='/driving-test-centres/:slug' element={<TestCentrePage />} />

          {/* Hub & Spoke SEO Routes — Learn to Drive */}
          <Route path='/learn-to-drive/skills/:slug' element={<SkillPage />} />
          <Route path='/learn-to-drive/driving-manoeuvres/:slug' element={<ManoeuvrePage />} />

          {/* Specialty Service Pages */}
          <Route path='/international-licence-conversion' element={<SpecialtyServicePage />} />
          <Route path='/female-driving-instructors' element={<SpecialtyServicePage />} />
          <Route path='/refresher-driving-lessons' element={<SpecialtyServicePage />} />
          <Route path='/pass-plus-courses' element={<SpecialtyServicePage />} />

          {/* Sitemap */}
          <Route path='/sitemap' element={<SitemapPage />} />

          {/* Blog routes */}
          <Route
            path='/blog/:slug'
            element={
              <Suspense
                fallback={
                  <div className='min-h-screen flex items-center justify-center bg-slate-900'>
                    <p className='text-white text-xl'>Loading...</p>
                  </div>
                }
              >
                <BlogArticleDetail />
              </Suspense>
            }
          />

          {/* Tempo routes */}
          {import.meta.env.VITE_TEMPO && <Route path='/tempobook/*' />}
        </Routes>
        <WhatsAppStickyButton />
        {import.meta.env.VITE_TEMPO === 'true' && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;