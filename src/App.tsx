import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import WhatsAppStickyButton from "./components/ui/WhatsAppStickyButton";
import routes from "tempo-routes";
// Use lazy loading for page components
const Services = lazy(() => import("./components/pages/Services"));
const About = lazy(() => import("./components/pages/About"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Booking = lazy(() => import("./components/pages/Booking"));
const BookingPayg = lazy(() => import("./components/pages/BookingPayg"));
const Booking6Hour = lazy(() => import("./components/pages/Booking6Hour"));
const Booking10Hour = lazy(() => import("./components/pages/Booking10Hour"));
const BookingIntensive = lazy(() => import("./components/pages/BookingIntensive"));
const BookingMockTest = lazy(() => import("./components/pages/BookingMockTest"));
const BookingTestRental = lazy(() => import("./components/pages/BookingTestRental"));
const BlogPage = lazy(() => import("./components/pages/BlogPage"));
const BlogArticleDetail = lazy(
  () => import("./components/pages/BlogArticleDetail"),
);
const GoodmayesLessons = lazy(
  () => import("./components/pages/GoodmayesLessons"),
);
const BarkingLessons = lazy(() => import("./components/pages/BarkingLessons"));
const RomfordLessons = lazy(() => import("./components/pages/RomfordLessons"));
const IsleOfDogsLessons = lazy(
  () => import("./components/pages/IsleOfDogsLessons"),
);
const EastHamLessons = lazy(() => import("./components/pages/EastHamLessons"));
const ForestGateLessons = lazy(
  () => import("./components/pages/ForestGateLessons"),
);
const CanningTownLessons = lazy(
  () => import("./components/pages/CanningTownLessons"),
);
const DocklandsLessons = lazy(
  () => import("./components/pages/DocklandsLessons"),
);
const DualControlInstallation = lazy(
  () => import("./components/pages/DualControlInstallation"),
);
const Terms = lazy(() => import("./components/pages/Terms"));
const Waitlist = lazy(() => import("./components/pages/Waitlist"));
const BookingSuccess = lazy(() => import("./components/pages/BookingSuccess"));
const BookingCancel = lazy(() => import("./components/pages/BookingCancel"));
// import Portal from "./components/pages/Portal"; // Coming soon

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <p className="text-white text-xl">Loading...</p>
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/payg" element={<BookingPayg />} />
          <Route path="/booking/6hour" element={<Booking6Hour />} />
          <Route path="/booking/10hour" element={<Booking10Hour />} />
          <Route path="/booking/intensive" element={<BookingIntensive />} />
          <Route path="/booking/mocktest" element={<BookingMockTest />} />
          <Route path="/booking/testrental" element={<BookingTestRental />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/driving-lessons/goodmayes"
            element={<GoodmayesLessons />}
          />
          <Route path="/driving-lessons/barking" element={<BarkingLessons />} />
          <Route path="/driving-lessons/romford" element={<RomfordLessons />} />
          <Route
            path="/driving-lessons/isle-of-dogs"
            element={<IsleOfDogsLessons />}
          />
          <Route
            path="/driving-lessons/east-ham"
            element={<EastHamLessons />}
          />
          <Route
            path="/driving-lessons/forest-gate"
            element={<ForestGateLessons />}
          />
          <Route
            path="/driving-lessons/canning-town"
            element={<CanningTownLessons />}
          />
          <Route
            path="/driving-lessons/docklands"
            element={<DocklandsLessons />}
          />
          <Route
            path="/dual-control-installation"
            element={<DualControlInstallation />}
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/booking/success" element={<BookingSuccess />} />
          <Route path="/booking/cancel" element={<BookingCancel />} />
          <Route
            path="/blog/:slug"
            element={
              <Suspense
                fallback={
                  <div className="min-h-screen flex items-center justify-center bg-slate-900">
                    <p className="text-white text-xl">Loading...</p>
                  </div>
                }
              >
                <BlogArticleDetail />
              </Suspense>
            }
          />
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
        </Routes>
        <WhatsAppStickyButton />
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
