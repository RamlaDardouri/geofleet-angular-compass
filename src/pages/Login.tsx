
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Car, Lock, User, MapIcon } from 'lucide-react';
import CompassIcon from '@/components/CompassIcon';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Background section with animation */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[10%] left-[20%] w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[20%] left-[30%] w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        {/* Animated map elements */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Map routes visual */}
            <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full"></div>
            <div className="absolute inset-4 border-2 border-blue-400/20 rounded-full"></div>
            <div className="absolute inset-8 border border-blue-400/10 rounded-full"></div>
            
            {/* Animated vehicles */}
            <div className="absolute top-1/4 right-0 w-6 h-6 bg-green-500 rounded-full transform -translate-y-1/2 animate-[spin_20s_linear_infinite]">
              <Car className="text-white w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute top-3/4 left-0 w-6 h-6 bg-red-500 rounded-full transform -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse]">
              <Car className="text-white w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            {/* Compass */}
            <CompassIcon rotation={45} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 opacity-70" />
          </div>
        </div>
        
        {/* Branding */}
        <div className="absolute bottom-8 left-8 z-20 text-white">
          <h1 className="text-3xl font-bold flex items-center">
            <MapPin className="mr-2" />
            GeoFleet
          </h1>
          <p className="text-blue-200 mt-2">Advanced GPS tracking & fleet management</p>
        </div>
      </div>
      
      {/* Login form section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-gray-950">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="md:hidden text-center">
            <h1 className="text-3xl font-bold flex items-center justify-center text-primary">
              <MapPin className="mr-2" />
              GeoFleet
            </h1>
            <p className="text-muted-foreground mt-2">Advanced GPS tracking & fleet management</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Welcome back</h2>
              <p className="text-muted-foreground">
                Log in to your account to manage your fleet
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <User size={16} />
                    </div>
                    <Input 
                      id="username" 
                      type="text" 
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <Lock size={16} />
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="rounded border-gray-300" />
                    <Label htmlFor="remember" className="text-sm cursor-pointer">Remember me</Label>
                  </div>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <MapIcon className="mr-2" size={18} />
                    Sign in
                  </span>
                )}
              </Button>
            </form>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                  Contact administrator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
