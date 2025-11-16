import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger  } from "@/components/ui/sheet";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        <div className="flex flex-col p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Cleanify</h2>

          <nav className="flex flex-col gap-4 text-lg">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/profile">Profile</Link>
          </nav>

          <div className="flex flex-col gap-3 pt-6">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
