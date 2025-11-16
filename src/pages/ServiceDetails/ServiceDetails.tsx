import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  // Later you will fetch from API using `id`
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold capitalize">
            {id?.replace(/-/g, " ") || "Service Details"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm md:text-base text-muted-foreground">
            Here you can show detailed information for the selected cleaning
            service – what's included, duration, recommended frequency, and
            pricing breakdown.
          </p>

          <ul className="list-disc list-inside text-sm space-y-1">
            <li>All rooms dusting and mopping</li>
            <li>Kitchen platform and exterior appliance cleaning</li>
            <li>Bathroom tiles, fittings, and mirror cleaning</li>
            <li>Garbage disposal and basic organising</li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-4">
            <Button asChild size="lg">
              <Link to="/bookings/new">Book this Service</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDetailsPage;
