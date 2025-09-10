import React, { useState } from 'react';
import { AlertTriangle, Phone, Users, MapPin, Clock, Shield, Zap, Heart, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EmergencyPanel = () => {
  const [sosActive, setSosActive] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const emergencyContacts = [
    { name: 'Police Emergency', number: '100', icon: Shield, color: 'text-blue-400' },
    { name: 'Medical Emergency', number: '108', icon: Heart, color: 'text-red-400' },
    { name: 'Fire Emergency', number: '101', icon: Zap, color: 'text-orange-400' },
    { name: 'Tourist Helpline', number: '1363', icon: Phone, color: 'text-green-400' },
  ];

  const emergencyChecklist = [
    'Stay calm and assess the situation',
    'Find a safe location if possible',
    'Contact emergency services',
    'Share your location with contacts',
    'Follow local authority instructions',
  ];

  const handleSOSPress = () => {
    setSosActive(true);
    // Mock SOS activation
    setTimeout(() => {
      setSosActive(false);
    }, 5000);
  };

  return (
    <div className="space-y-6">
      {/* SOS Emergency Button */}
      <Card className="glass-card p-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">Emergency SOS</h2>
          <div className="relative">
            <button
              onClick={handleSOSPress}
              disabled={sosActive}
              className={`w-40 h-40 rounded-full border-4 transition-all duration-300 ${
                sosActive 
                  ? 'bg-danger border-danger shadow-[var(--shadow-danger)] pulse-accent' 
                  : 'bg-danger/80 border-danger/50 hover:bg-danger hover:border-danger hover:shadow-[var(--shadow-danger)]'
              }`}
            >
              <div className="flex flex-col items-center justify-center text-white">
                <AlertTriangle className="h-12 w-12 mb-2" />
                <span className="text-lg font-bold">
                  {sosActive ? 'SENDING...' : 'SOS'}
                </span>
              </div>
            </button>
            {sosActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-4 border-danger rounded-full animate-ping opacity-30"></div>
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {sosActive 
              ? 'Emergency alert sent to authorities and your emergency contacts'
              : 'Press and hold to send emergency alert'
            }
          </p>
        </div>
      </Card>

      {/* Emergency Contacts */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Emergency Contacts</h3>
        <div className="grid grid-cols-1 gap-3">
          {emergencyContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 border border-secondary/30">
                <div className="flex items-center space-x-3">
                  <Icon className={`h-5 w-5 ${contact.color}`} />
                  <div>
                    <p className="font-medium text-foreground">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.number}</p>
                  </div>
                </div>
                <Button size="sm" className="btn-primary">
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Personal Emergency Contacts */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Personal Contacts</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-lg bg-accent/10 border border-accent/20">
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium text-foreground">Family Contact</p>
                <p className="text-sm text-muted-foreground">+91-98765-43210</p>
              </div>
            </div>
            <Button size="sm" className="btn-accent">
              <Phone className="h-3 w-3 mr-1" />
              Call
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 border border-secondary/30">
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-foreground">Hotel Concierge</p>
                <p className="text-sm text-muted-foreground">+91-11-12345678</p>
              </div>
            </div>
            <Button size="sm" className="btn-primary">
              <Phone className="h-3 w-3 mr-1" />
              Call
            </Button>
          </div>
        </div>
      </Card>

      {/* Location Sharing */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Location Sharing</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 border border-secondary/30">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium text-foreground">Current Location</p>
                <p className="text-sm text-muted-foreground">Tourist District, New Delhi</p>
              </div>
            </div>
            <Button size="sm" className="btn-accent">
              <Navigation className="h-3 w-3 mr-1" />
              Share
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button className="btn-primary flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Live Tracking</span>
            </Button>
            <Button className="btn-accent flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Notify Family</span>
            </Button>
          </div>
        </div>
      </Card>

      {/* Emergency Checklist */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Emergency Checklist</h3>
        <div className="space-y-3">
          {emergencyChecklist.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/20">
              <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-xs font-bold text-accent">{index + 1}</span>
              </div>
              <p className="text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Safety Status */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-accent" />
            <div>
              <p className="font-medium text-foreground">Safety Status: Active</p>
              <p className="text-sm text-muted-foreground">All systems operational</p>
            </div>
          </div>
          <div className="w-3 h-3 bg-accent rounded-full pulse-accent"></div>
        </div>
      </Card>
    </div>
  );
};

export default EmergencyPanel;