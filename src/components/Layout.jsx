
import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { VehicleList } from './VehicleList';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Layout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      
      <div className="flex flex-1 pt-[53px]">
        <div className={cn(
          "flex flex-col border-r transition-all duration-300",
          sidebarCollapsed ? "w-0 overflow-hidden" : "w-[340px]"
        )}>
          <VehicleList />
        </div>
        
        <button 
          className="absolute z-10 top-[70px] bg-white border border-gray-300 rounded-r-md p-1 shadow-md hover:bg-gray-100"
          style={{ left: sidebarCollapsed ? '0' : '340px' }}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          {sidebarCollapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
        </button>
        
        <div className="flex-1 relative overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Layout };
