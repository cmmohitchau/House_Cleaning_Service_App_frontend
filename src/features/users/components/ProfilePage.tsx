import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProfilePage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-6 md:py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-bold">
            My Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input value="Mohit" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value="you@example.com" disabled />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input placeholder="+91 XXXXX XXXXX" />
            </div>
            <Button type="submit" className="mt-2">
              Save changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
