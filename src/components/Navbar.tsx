
import React, { useState } from 'react';
import { 
  Menu, MapPin, Clock, List, Search, CheckCheck, 
  Settings, Map, Layers, Database, User, LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  items?: { label: string; href: string }[];
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded">
        {icon}
        <span className="mx-1">{label}</span>
      </button>
      
      {items && isOpen && (
        <div className="absolute left-0 z-10 mt-1 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const navItems = [
    { 
      icon: <Menu size={18} />, 
      label: "Menu",
      items: [
        { label: "Dashboard", href: "#" },
        { label: "Reports", href: "#" },
        { label: "Analytics", href: "#" },
        { label: "Administration", href: "#" },
      ]
    },
    { 
      icon: <MapPin size={18} />, 
      label: "Traceurs", 
      items: [
        { label: "Vehicles", href: "#" },
        { label: "Devices", href: "#" },
        { label: "Groups", href: "#" },
      ]
    },
    { 
      icon: <Clock size={18} />, 
      label: "Événements",
      items: [
        { label: "Alerts", href: "#" },
        { label: "Events", href: "#" },
        { label: "Notifications", href: "#" },
      ]
    },
    { 
      icon: <List size={18} />, 
      label: "Adresses",
      items: [
        { label: "Points of Interest", href: "#" },
        { label: "Geofences", href: "#" },
        { label: "Routes", href: "#" },
      ]
    },
    { 
      icon: <Clock size={18} />, 
      label: "Historique",
      items: [
        { label: "Trip History", href: "#" },
        { label: "Reports", href: "#" },
        { label: "Activity Log", href: "#" },
      ]
    },
  ];

  const toolItems = [
    { icon: <Search size={18} />, label: "Search" },
    { icon: <List size={18} />, label: "List" },
    { icon: <CheckCheck size={18} />, label: "Tasks" },
    { icon: <Settings size={18} />, label: "Settings" },
    { icon: <Database size={18} />, label: "Data" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-1.5 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center mr-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white mr-2">
              <Map size={18} />
            </div>
            <span className="text-lg font-semibold">GeoFleet</span>
          </div>
          
          <div className="hidden md:flex md:items-center">
            {navItems.map((item, index) => (
              <NavItem 
                key={index} 
                icon={item.icon} 
                label={item.label} 
                items={item.items}
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex md:items-center border-r pr-3 mr-3">
            {toolItems.map((item, index) => (
              <button 
                key={index}
                className="p-2 rounded-full hover:bg-gray-100"
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>
          
          <div className="flex items-center">
            <div className="relative">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 p-2">
                <span className="mr-2">French</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            
            <div className="ml-3 relative">
              <div>
                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 p-2">
                  <User size={18} className="mr-1" />
                  <span className="mr-1">nadhemtfm</span>
                </button>
              </div>
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100 ml-2">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
