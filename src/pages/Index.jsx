
import React from 'react';
import { Layout } from '@/components/Layout.jsx';
import { MapDisplay } from '@/components/MapDisplay.jsx';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="flex justify-end p-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate('/login')} 
          className="flex items-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>
      <MapDisplay />
    </Layout>
  );
};

export default Index;
