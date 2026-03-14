import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Box } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4">
      <Link to="/" className="flex items-center gap-2 font-semibold text-xl tracking-tight mb-8">
        <Box className="w-6 h-6" />
        <span>ArchiConcept</span>
      </Link>
      
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your email to sign in to your workspace
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-900">Email</label>
              <Input id="email" type="email" placeholder="arch@studio.com" required defaultValue="demo@archiconcept.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-zinc-900">Password</label>
                <Link to="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">Forgot password?</Link>
              </div>
              <Input id="password" type="password" required defaultValue="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">Sign In</Button>
            <div className="text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link to="#" className="font-medium text-zinc-900 hover:underline">
                Request access
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
