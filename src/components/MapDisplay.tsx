
import React, { useState, useEffect } from 'react';
import { Layers, ChevronsUp, ChevronsDown, Maximize2, Locate, ZoomIn, ZoomOut } from 'lucide-react';
import { cn } from '@/lib/utils';

type MapType = 'osm' | 'google' | 'google-hybrid' | 'google-satellite' | 'leaflet';

export const MapDisplay: React.FC = () => {
  const [mapType, setMapType] = useState<MapType>('osm');
  const [showMapSelector, setShowMapSelector] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(5); // Initial zoom level

  // Function to handle zoom in
  const handleZoomIn = () => {
    if (zoomLevel < 10) {
      setZoomLevel(prev => prev + 1);
    }
  };

  // Function to handle zoom out
  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(prev => prev - 1);
    }
  };

  // Mock map component - in a real app, this would integrate with actual map libraries
  const renderMap = () => {
    // Calculate a scale factor for the mock map based on zoom level
    const scaleFactor = 100 + (zoomLevel * 25); // Adjust from 125% to 350% based on zoom level
    
    return (
      <div className="relative w-full h-full bg-gray-100 overflow-hidden">
        {/* Placeholder map content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center relative">
            {mapType === 'osm' && (
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out" 
                   style={{
                     backgroundImage: 'url(https://a.tile.openstreetmap.org/7/63/42.png)', 
                     backgroundSize: `${scaleFactor}% ${scaleFactor}%`
                   }}>
              </div>
            )}
            {mapType === 'google' && (
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out" 
                   style={{
                     backgroundImage: 'url(https://maps.googleapis.com/maps/api/staticmap?center=35.7,10.8&zoom=8&size=600x400&key=DEMO_KEY)', 
                     backgroundSize: `${scaleFactor}% ${scaleFactor}%`
                   }}>
              </div>
            )}
            {mapType === 'google-hybrid' && (
              <div className="absolute inset-0 bg-cover bg-center bg-gray-200 transition-transform duration-300 ease-in-out" 
                   style={{
                     backgroundSize: `${scaleFactor}% ${scaleFactor}%`, 
                     filter: 'saturate(1.2) contrast(1.1)'
                   }}>
              </div>
            )}
            {mapType === 'google-satellite' && (
              <div className="absolute inset-0 bg-cover bg-center bg-gray-800 transition-transform duration-300 ease-in-out" 
                   style={{
                     backgroundSize: `${scaleFactor}% ${scaleFactor}%`, 
                     filter: 'saturate(0.8) contrast(1.2)'
                   }}>
              </div>
            )}
            {mapType === 'leaflet' && (
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out" 
                   style={{
                     backgroundImage: 'url(https://a.tile.openstreetmap.org/7/63/42.png)', 
                     backgroundSize: `${scaleFactor}% ${scaleFactor}%`, 
                     filter: 'hue-rotate(15deg)'
                   }}>
              </div>
            )}
            
            {/* Vehicle markers - positions adjusted based on zoom level */}
            <div className="absolute transition-all duration-300 ease-in-out" 
                 style={{top: `${42 - (zoomLevel - 5) * 2}%`, left: `${58 + (zoomLevel - 5) * 1}%`}}>
              <VehicleMarker id="02-216905" speed={17} direction={45} />
            </div>
            <div className="absolute transition-all duration-300 ease-in-out" 
                 style={{top: `${50 - (zoomLevel - 5) * 2}%`, left: `${65 + (zoomLevel - 5) * 1}%`}}>
              <VehicleMarker id="02-218140" speed={0} direction={90} />
            </div>
            <div className="absolute transition-all duration-300 ease-in-out" 
                 style={{top: `${38 - (zoomLevel - 5) * 2}%`, left: `${70 + (zoomLevel - 5) * 1}%`}}>
              <VehicleMarker id="02-218997" speed={0} direction={180} />
            </div>
            <div className="absolute transition-all duration-300 ease-in-out" 
                 style={{top: `${56 - (zoomLevel - 5) * 2}%`, left: `${54 + (zoomLevel - 5) * 1}%`}}>
              <VehicleMarker id="02-215432" speed={49} direction={270} />
            </div>
            <div className="absolute transition-all duration-300 ease-in-out" 
                 style={{top: `${45 - (zoomLevel - 5) * 2}%`, left: `${63 + (zoomLevel - 5) * 1}%`}}>
              <VehicleMarker id="02-213880" speed={0} direction={0} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-full">
      {renderMap()}
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <div className="relative">
          <button 
            onClick={() => setShowMapSelector(!showMapSelector)}
            className="bg-white p-2 rounded-md shadow hover:bg-gray-100 border border-gray-300"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{mapTypeLabel(mapType)}</span>
              <Layers size={16} />
            </div>
          </button>
          
          {showMapSelector && (
            <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
              <div className="py-1">
                <button 
                  onClick={() => { setMapType('osm'); setShowMapSelector(false); }}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                    mapType === 'osm' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  )}
                >
                  OSM Map
                </button>
                <button 
                  onClick={() => { setMapType('google'); setShowMapSelector(false); }}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                    mapType === 'google' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  )}
                >
                  Google Maps
                </button>
                <button 
                  onClick={() => { setMapType('google-hybrid'); setShowMapSelector(false); }}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                    mapType === 'google-hybrid' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  )}
                >
                  Google Hybrid
                </button>
                <button 
                  onClick={() => { setMapType('google-satellite'); setShowMapSelector(false); }}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                    mapType === 'google-satellite' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  )}
                >
                  Google Satellite
                </button>
                <button 
                  onClick={() => { setMapType('leaflet'); setShowMapSelector(false); }}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                    mapType === 'leaflet' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  )}
                >
                  Leaflet
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-md shadow border border-gray-300">
          <button 
            className="p-2 hover:bg-gray-100 w-full border-b border-gray-200 transition-colors duration-200" 
            onClick={handleZoomIn}
            title="Zoom in"
          >
            <ZoomIn size={16} className="mx-auto" />
          </button>
          <button 
            className="p-2 hover:bg-gray-100 w-full transition-colors duration-200" 
            onClick={handleZoomOut}
            title="Zoom out"
          >
            <ZoomOut size={16} className="mx-auto" />
          </button>
        </div>
        
        <button className="bg-white p-2 rounded-md shadow hover:bg-gray-100 border border-gray-300">
          <Maximize2 size={16} />
        </button>
        
        <button className="bg-white p-2 rounded-md shadow hover:bg-gray-100 border border-gray-300">
          <Locate size={16} />
        </button>
      </div>
      
      {/* Zoom level indicator */}
      <div className="absolute bottom-10 right-4 bg-white bg-opacity-80 px-2 py-1 rounded-md shadow text-xs font-medium">
        Zoom: {zoomLevel}
      </div>
      
      {/* Attribution */}
      <div className="absolute bottom-1 right-1 bg-white bg-opacity-70 text-xs px-1 py-0.5 rounded">
        © OpenStreetMap contributors
      </div>
    </div>
  );
};

const mapTypeLabel = (type: MapType): string => {
  switch (type) {
    case 'osm': return 'OSM Map';
    case 'google': return 'Google Maps';
    case 'google-hybrid': return 'Google Hybrid';
    case 'google-satellite': return 'Google Satellite';
    case 'leaflet': return 'Leaflet';
    default: return 'Map';
  }
};

interface VehicleMarkerProps {
  id: string;
  speed: number;
  direction: number;
}

const VehicleMarker: React.FC<VehicleMarkerProps> = ({ id, speed, direction }) => {
  const isMoving = speed > 0;
  
  return (
    <div className="relative group">
      <div className={cn(
        "w-6 h-6 rounded-full flex items-center justify-center transform",
        isMoving ? "bg-green-500" : "bg-red-500"
      )}
        style={{ transform: `rotate(${direction}deg)` }}
      >
        <div className="w-4 h-4 text-white">
          {isMoving ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
            </svg>
          )}
        </div>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
        {id} ({speed} km/h)
      </div>
    </div>
  );
};
