import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="max-w-3xl text-center space-y-6">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            House Cleaning Service
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Book professional home cleaning{" "}
            <span className="text-primary">in just a few clicks.</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Trusted, background-verified cleaners. Transparent pricing. Flexible
            schedules that fit your lifestyle.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <Button asChild size="lg">
              <Link to="/bookings/new">Book a Cleaning</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4 text-center space-y-1">
                <p className="text-lg md:text-2xl font-bold">4.8★</p>
                <p className="text-[11px] md:text-xs text-muted-foreground">
                  Average rating
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4 text-center space-y-1">
                <p className="text-lg md:text-2xl font-bold">2k+</p>
                <p className="text-[11px] md:text-xs text-muted-foreground">
                  Homes cleaned
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4 text-center space-y-1">
                <p className="text-lg md:text-2xl font-bold">100%</p>
                <p className="text-[11px] md:text-xs text-muted-foreground">
                  Background-checked
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-3 md:p-4 text-center space-y-1">
                <p className="text-lg md:text-2xl font-bold">24×7</p>
                <p className="text-[11px] md:text-xs text-muted-foreground">
                  Support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
