import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookServicePage = () => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: dispatch redux action / call API
    // For now just redirect
    navigate("/bookings");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6 md:py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-bold">
            Book a Cleaning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label>Service</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic-cleaning">Basic Cleaning</SelectItem>
                  <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                  <SelectItem value="move-out-cleaning">
                    Move-in / Move-out
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Date & Time</Label>
              <Input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea
                rows={3}
                placeholder="Flat / House no., Street, Area, City, Pincode"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Additional notes (optional)</Label>
              <Textarea
                rows={3}
                placeholder="Any special instructions for the cleaner..."
              />
            </div>

            <Button type="submit" className="w-full mt-2">
              Confirm Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookServicePage;
