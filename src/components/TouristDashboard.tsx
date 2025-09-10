import React, { useState } from 'react';
import { MapPin, Shield, AlertTriangle, Phone, Cloud, Navigation, Heart, Users, Star, Car, Wallet, Bot, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import WeatherWidget from './WeatherWidget';
import SafetyMap from './SafetyMap';
import EmergencyPanel from './EmergencyPanel';
import TouristProfile from './TouristProfile';
import SmartTransportation from './SmartTransportation';
import DigitalTravelWallet from './DigitalTravelWallet';
import AdvancedHealthMonitoring from './AdvancedHealthMonitoring';
import AIPoweredTravelAssistant from './AIPoweredTravelAssistant';

const TouristDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [safetyScore, setSafetyScore] = useState(95);
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Shield },
    { id: 'transport', label: 'Transport', icon: Car },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'health', label: 'Health', icon: Activity },
    { id: 'ai', label: 'AI Assistant', icon: Bot },
    { id: 'profile', label: 'Profile', icon: Users },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <TouristProfile />;
      case 'map':
        return <SafetyMap />;
      case 'emergency':
        return <EmergencyPanel />;
      case 'transport':
        return <SmartTransportation />;
      case 'wallet':
        return <DigitalTravelWallet />;
      case 'health':
        return <AdvancedHealthMonitoring />;
      case 'ai':
        return <AIPoweredTravelAssistant />;
      default:
        return (
          <div className="space-y-6">
            {/* Safety Score Card */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Safety Status</h2>
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="hsl(var(--accent))"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - safetyScore / 100)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">{safetyScore}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent">Excellent Safety</h3>
                  <p className="text-muted-foreground">You're in a safe zone</p>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    Tourist District, New Delhi
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <Button className="btn-danger flex items-center space-x-2 h-14">
                  <Phone className="h-5 w-5" />
                  <span>SOS Emergency</span>
                </Button>
                <Button className="btn-accent flex items-center space-x-2 h-14">
                  <Navigation className="h-5 w-5" />
                  <span>Find Help</span>
                </Button>
                <Button className="btn-primary flex items-center space-x-2 h-14" onClick={() => setActiveTab('map')}>
                  <MapPin className="h-5 w-5" />
                  <span>Safety Map</span>
                </Button>
                <Button className="btn-primary flex items-center space-x-2 h-14">
                  <Heart className="h-5 w-5" />
                  <span>Health Check</span>
                </Button>
              </div>
            </Card>

            {/* Weather Widget */}
            <WeatherWidget />

            {/* Recent Alerts */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Recent Safety Alerts</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Shield className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">All Clear</p>
                    <p className="text-xs text-muted-foreground">No safety alerts in your area</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20">
                  <Star className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Tourist Tip</p>
                    <p className="text-xs text-muted-foreground">Visit India Gate for best evening views</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card border-b-[0.5px] border-border/30 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            SafeTour
          </h1>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full pulse-accent"></div>
            <span className="text-sm text-muted-foreground">Protected</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-md mx-auto p-4 pb-20">
        <div className="fade-in">
          {renderContent()}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t-[0.5px] border-border/30 p-4">
        <div className="container max-w-md mx-auto">
          <div className="flex justify-around">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`nav-item flex flex-col items-center space-y-1 min-w-0 ${
                    isActive ? 'active' : ''
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-accent' : 'text-muted-foreground'}`} />
                  <span className={`text-xs ${isActive ? 'text-accent' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TouristDashboard;