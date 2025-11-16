import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockServices = [
  {
    id: "basic-cleaning",
    name: "Basic Cleaning",
    description: "Regular dusting, sweeping, mopping, and bathroom cleaning.",
    startingAt: "₹799",
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    description:
      "Intensive cleaning including hard-to-reach areas, kitchen degreasing, and bathroom descaling.",
    startingAt: "₹1999",
  },
  {
    id: "move-out-cleaning",
    name: "Move-in / Move-out",
    description:
      "Full house cleaning when you are shifting homes or before handing over keys.",
    startingAt: "₹2499",
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-10 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Cleaning Services
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Choose a service that fits your needs. You can customise details
          during booking.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {mockServices.map((service) => (
          <Card key={service.id} className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                <p className="text-sm font-medium">
                  Starting at{" "}
                  <span className="text-primary">{service.startingAt}</span>
                </p>
              </CardContent>
            </div>
            <CardContent className="pt-0 pb-4">
              <Button asChild className="w-full">
                <Link to={`/services/${service.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
