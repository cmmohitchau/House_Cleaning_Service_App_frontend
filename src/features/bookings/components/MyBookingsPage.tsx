import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockBookings = [
  {
    id: "BK001",
    service: "Deep Cleaning",
    dateTime: "2025-11-20 10:00 AM",
    status: "confirmed",
  },
  {
    id: "BK002",
    service: "Basic Cleaning",
    dateTime: "2025-11-25 04:30 PM",
    status: "pending",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "confirmed":
      return "default";
    case "pending":
      return "outline";
    case "cancelled":
      return "destructive";
    default:
      return "outline";
  }
};

const MyBookingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Bookings</h1>
          <p className="text-sm text-muted-foreground">
            Track all your upcoming and past cleaning appointments.
          </p>
        </div>
        <Button asChild>
          <a href="/bookings/new">New Booking</a>
        </Button>
      </div>

      {mockBookings.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          You don&apos;t have any bookings yet.{" "}
          <a className="text-primary underline" href="/bookings/new">
            Book your first cleaning.
          </a>
        </p>
      ) : (
        <div className="space-y-4">
          {mockBookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base md:text-lg">
                  {booking.service}
                </CardTitle>
                <Badge variant={getStatusVariant(booking.status)}>
                  {booking.status}
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
                <div className="space-y-1">
                  <p>
                    <span className="font-medium">Booking ID:</span>{" "}
                    {booking.id}
                  </p>
                  <p className="text-muted-foreground">{booking.dateTime}</p>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" size="sm">
                    View details
                  </Button>
                  <Button variant="ghost" size="sm">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
