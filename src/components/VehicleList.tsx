
import React, { useState } from 'react';
import { MoreVertical, Wifi, WifiOff, Eye, EyeOff, Edit, Trash, Settings } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  timestamp: string;
  speed: number;
  online: boolean;
  icon: string;
}

export const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: '02-213326', name: '02-213326', timestamp: '2024-07-20 15:08:09', speed: 0, online: false, icon: '🚗' },
    { id: '02-213880', name: '02-213880', timestamp: '2024-12-11 10:59:26', speed: 0, online: false, icon: '🚗' },
    { id: '02-214274', name: '02-214274', timestamp: '2023-09-25 11:56:07', speed: 0, online: false, icon: '🚚' },
    { id: '02-215432', name: '02-215432', timestamp: '2023-04-17 11:25:32', speed: 49, online: true, icon: '🚌' },
    { id: '02-216902', name: '02-216902', timestamp: '2022-12-17 15:32:38', speed: 0, online: false, icon: '🏍️' },
    { id: '02-216905', name: '02-216905', timestamp: '2023-04-17 11:25:05', speed: 17, online: true, icon: '🏍️' },
    { id: '02-218140', name: '02-218140', timestamp: '2021-04-06 08:27:01', speed: 0, online: false, icon: '🚗' },
    { id: '02-218997', name: '02-218997', timestamp: '2023-07-10 09:39:45', speed: 0, online: false, icon: '🚌' },
    { id: '02-219252', name: '02-219252', timestamp: '2023-01-20 07:52:06', speed: 0, online: false, icon: '🚕' },
    { id: '142 TU 7391 RAMZI', name: '142 TU 7391 RAMZI', timestamp: '2023-04-17 11:25:45', speed: 55, online: true, icon: '🚗' },
    { id: 'CASE 02-219467', name: 'CASE 02-219467', timestamp: '2024-01-31 07:57:59', speed: 0, online: false, icon: '🚜' },
    { id: 'FORD 02-217416', name: 'FORD 02-217416', timestamp: '2024-02-09 08:27:27', speed: 0, online: false, icon: '🚗' },
    { id: 'FOTON 02-216538', name: 'FOTON 02-216538', timestamp: '2023-04-15 19:28:17', speed: 0, online: false, icon: '🏍️' },
  ]);

  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelectAll = () => {
    if (selectedVehicles.length === vehicles.length) {
      setSelectedVehicles([]);
    } else {
      setSelectedVehicles(vehicles.map(v => v.id));
    }
  };

  const toggleVehicleSelection = (id: string) => {
    if (selectedVehicles.includes(id)) {
      setSelectedVehicles(selectedVehicles.filter(vid => vid !== id));
    } else {
      setSelectedVehicles([...selectedVehicles, id]);
    }
  };

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const filteredVehicles = vehicles.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isAllSelected = filteredVehicles.length > 0 && 
    filteredVehicles.every(v => selectedVehicles.includes(v.id));

  return (
    <div className="w-full h-full flex flex-col bg-white border-r">
      <div className="p-3 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher"
            className="w-full pl-8 pr-3 py-1.5 border rounded text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={16} className="absolute left-2.5 top-2 text-gray-400" />
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded"
                    checked={isAllSelected}
                    onChange={toggleSelectAll}
                  />
                  <span className="ml-2">Traceur</span>
                </div>
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            <tr className="bg-gray-50">
              <td colSpan={2} className="px-2 py-2 text-sm font-medium">
                Non Regroupés ({filteredVehicles.length})
              </td>
            </tr>

            {filteredVehicles.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-gray-50">
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded"
                      checked={selectedVehicles.includes(vehicle.id)}
                      onChange={() => toggleVehicleSelection(vehicle.id)}
                    />
                    <div className="ml-2">{vehicle.icon}</div>
                    <div className="ml-2">
                      <div className="text-sm font-medium text-gray-900">{vehicle.name}</div>
                      <div className="text-xs text-gray-500">{vehicle.timestamp}</div>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <div className="text-sm">
                      {vehicle.speed > 0 ? `${vehicle.speed} km/h` : '0 km/h'}
                    </div>
                    <div className={vehicle.online ? 'text-green-600' : 'text-gray-400'}>
                      {vehicle.online ? <Wifi size={16} /> : <WifiOff size={16} />}
                    </div>
                    <div className="relative">
                      <button 
                        onClick={() => toggleMenu(vehicle.id)}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        <MoreVertical size={16} />
                      </button>
                      
                      {openMenuId === vehicle.id && (
                        <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                          <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                              <Eye size={16} className="mr-2" />
                              Track this vehicle
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                              <Edit size={16} className="mr-2" />
                              Edit details
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                              <Settings size={16} className="mr-2" />
                              Configure
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center">
                              <Trash size={16} className="mr-2" />
                              Remove
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Search = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
