import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { registerUser } from "../authSlice";

const RegisterPage = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e : any) => {
    e.preventDefault();
    dispatch(registerUser({name , email , password} , ))


  }
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-bold">
            Create account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input onChange={ (e) => setName(e.target.value) } id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" onChange={ (e) => setEmail(e.target.value) } type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" onChange={ (e) => setPassword(e.target.value) } type="password" />
            </div>
            <Button type="submit" className="w-full mt-2">
              Sign up
            </Button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
