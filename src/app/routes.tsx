import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home/Home"));
const Services = lazy(() => import("../pages/Services/Services"));
const ServiceDetails = lazy(() => import("../pages/ServiceDetails/ServiceDetails"));
const Booking = lazy(() => import("../pages/Booking/Booking"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const AdminDashboard = lazy(() => import("../pages/Admin/AdminDashboard"));

export default function RoutesConfig() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/profile" element={<Profile />} />

        {/* Optional Admin route */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* 404 */}
        <Route
          path="*"
          element={<div className="p-6 text-center text-lg">Page Not Found</div>}
        />
      </Routes>
    </Suspense>
  );
}
