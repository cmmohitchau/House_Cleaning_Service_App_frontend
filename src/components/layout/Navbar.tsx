import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-blue-600">
          Cleanify
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/booking" className="hover:text-blue-600 transition">Booking</Link>
          <Link to="/profile" className="hover:text-blue-600 transition">Profile</Link>
        </nav>

        {/* Login / Signup */}
        <div className="hidden md:flex gap-3">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
};
