
import React, { useState, useEffect } from 'react';
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
  const [rotation, setRotation] = useState(45);
  const navigate = useNavigate();

  // Animation effect for compass
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

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
      {/* Background section with enhanced animations */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Enhanced animation pulses */}
          <div className="absolute top-[10%] left-[20%] w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-indigo-600 rounded-full filter blur-3xl animate-[pulse_6s_ease-in-out_infinite_1s]"></div>
          <div className="absolute bottom-[20%] left-[30%] w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-[pulse_5s_ease-in-out_infinite_0.5s]"></div>
        </div>
        
        {/* Animated map elements with enhanced effects */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Animated map grid */}
            <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-blue-400/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 border border-blue-400/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            {/* Animated vehicles with glowing effect */}
            <div className="absolute top-1/4 right-0 w-6 h-6 bg-green-500 rounded-full transform -translate-y-1/2 animate-[spin_20s_linear_infinite] shadow-[0_0_10px_#10B981]">
              <Car className="text-white w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute top-3/4 left-0 w-6 h-6 bg-red-500 rounded-full transform -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse] shadow-[0_0_10px_#EF4444]">
              <Car className="text-white w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            {/* Location pins that pulse */}
            <div className="absolute top-1/3 left-1/3 animate-[pulse_2s_ease-in-out_infinite]">
              <MapPin className="text-yellow-400 w-5 h-5 shadow-[0_0_10px_#FBBF24]" />
            </div>
            <div className="absolute bottom-1/3 right-1/3 animate-[pulse_2s_ease-in-out_infinite_0.5s]">
              <MapPin className="text-blue-400 w-5 h-5 shadow-[0_0_10px_#60A5FA]" />
            </div>
            
            {/* Dynamic compass */}
            <CompassIcon 
              rotation={rotation} 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 opacity-90 transition-transform duration-100 ease-linear" 
            />
          </div>
        </div>
        
        {/* Animated route lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M100,100 Q200,50 300,200 T500,300" 
            stroke="rgba(96, 165, 250, 0.3)" 
            strokeWidth="2" 
            fill="none" 
            className="animate-[dash_15s_linear_infinite]"
            strokeDasharray="5,5"
          />
          <path 
            d="M150,400 Q300,300 450,350 T600,200" 
            stroke="rgba(251, 191, 36, 0.3)" 
            strokeWidth="2" 
            fill="none"
            className="animate-[dash_20s_linear_infinite_reverse]" 
            strokeDasharray="5,5"
          />
        </svg>
        
        {/* Branding with subtle animation */}
        <div className="absolute bottom-8 left-8 z-20 text-white">
          <h1 className="text-3xl font-bold flex items-center animate-fade-in">
            <MapPin className="mr-2" />
            GeoFleet
          </h1>
          <p className="text-blue-200 mt-2 animate-fade-in opacity-0" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
            Advanced GPS tracking & fleet management
          </p>
        </div>
      </div>
      
      {/* Login form section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-gray-950">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo with animation */}
          <div className="md:hidden text-center">
            <h1 className="text-3xl font-bold flex items-center justify-center text-primary animate-fade-in">
              <MapPin className="mr-2" />
              GeoFleet
            </h1>
            <p className="text-muted-foreground mt-2 animate-fade-in opacity-0" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
              Advanced GPS tracking & fleet management
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold animate-fade-in opacity-0" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>Welcome back</h2>
              <p className="text-muted-foreground animate-fade-in opacity-0" style={{animationDelay: "0.6s", animationFillMode: "forwards"}}>
                Log in to your account to manage your fleet
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 animate-fade-in opacity-0" style={{animationDelay: "0.8s", animationFillMode: "forwards"}}>
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
                className="w-full animate-fade-in opacity-0 hover:scale-[1.02] transition-transform" 
                style={{animationDelay: "1s", animationFillMode: "forwards"}}
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
            
            <div className="text-center animate-fade-in opacity-0" style={{animationDelay: "1.2s", animationFillMode: "forwards"}}>
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
