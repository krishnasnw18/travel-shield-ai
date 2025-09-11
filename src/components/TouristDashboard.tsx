import React, { useState } from 'react';
import { MapPin, Shield, AlertTriangle, Phone, Cloud, Navigation, Heart, Users, Star, User, Calendar, Globe, Settings, Bell, Camera, Edit, Mail, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import WeatherWidget from './WeatherWidget';
import SafetyMap from './SafetyMap';
import EmergencyPanel from './EmergencyPanel';

const TouristDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [safetyScore, setSafetyScore] = useState(95);
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Shield },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return <SafetyMap />;
      case 'emergency':
        return <EmergencyPanel />;
      case 'profile':
        return (
          <div className="space-y-6">
            {/* Profile Header */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">My Profile</h2>
                <Button size="sm" className="btn-accent">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" alt="John Smith" />
                    <AvatarFallback className="bg-accent/20 text-accent text-xl font-bold">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Camera className="h-3 w-3 text-accent-foreground" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">John Smith</h3>
                  <p className="text-muted-foreground">Tourist • Digital Nomad</p>
                  <div className="flex items-center mt-2">
                    <Badge variant="secondary" className="mr-2">
                      <Globe className="h-3 w-3 mr-1" />
                      USA
                    </Badge>
                    <Badge variant="outline">
                      Verified Tourist
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-xs text-muted-foreground">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">12</div>
                  <div className="text-xs text-muted-foreground">Places</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">95%</div>
                  <div className="text-xs text-muted-foreground">Safety</div>
                </div>
              </div>
            </Card>

            {/* Personal Information */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">john.smith@email.com</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Edit</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Emergency Contact</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Edit</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Trip Duration</p>
                      <p className="text-sm text-muted-foreground">Dec 10 - Dec 20, 2024</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Edit</Button>
                </div>
              </div>
            </Card>

            {/* Safety Preferences */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Safety Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Emergency Notifications</p>
                    <p className="text-xs text-muted-foreground">Get alerts about safety incidents</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Location Sharing</p>
                    <p className="text-xs text-muted-foreground">Share location with emergency contacts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Auto Check-in</p>
                    <p className="text-xs text-muted-foreground">Automatic safety check-ins</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Travel History */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Travel History</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">New Delhi, India</p>
                    <p className="text-xs text-muted-foreground">Currently visiting • 5 days</p>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/10">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Mumbai, India</p>
                    <p className="text-xs text-muted-foreground">Dec 5-8, 2024 • 3 days</p>
                  </div>
                  <Badge variant="outline">Completed</Badge>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/10">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Goa, India</p>
                    <p className="text-xs text-muted-foreground">Dec 1-4, 2024 • 4 days</p>
                  </div>
                  <Badge variant="outline">Completed</Badge>
                </div>
              </div>
            </Card>

            {/* Account Settings */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Account Settings</h3>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-3" />
                  App Preferences
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-3" />
                  Notification Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-3" />
                  Privacy & Security
                </Button>
                <Button variant="ghost" className="w-full justify-start text-danger">
                  <AlertTriangle className="h-4 w-4 mr-3" />
                  Emergency Contacts
                </Button>
              </div>
            </Card>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            {/* Emergency SOS Button */}
            <div className="flex justify-center">
              <div className="relative">
                <Button 
                  className="w-24 h-24 rounded-full bg-gradient-to-r from-danger to-danger/80 hover:from-danger/90 hover:to-danger/70 text-white font-bold shadow-2xl border-4 border-white/20 pulse"
                  onClick={() => setActiveTab('emergency')}
                >
                  <div className="flex flex-col items-center">
                    <Phone className="h-7 w-7 animate-pulse" />
                    <span className="text-sm mt-1">SOS</span>
                  </div>
                </Button>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-danger/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    🚨 Emergency
                  </div>
                </div>
              </div>
            </div>
            <Card className="glass-card p-6 border-accent/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Welcome Back!</h2>
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                  Active Trip
                </Badge>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-16 w-16 ring-2 ring-accent/20">
                  <AvatarImage src="/placeholder.svg" alt="Tourist" />
                  <AvatarFallback className="bg-accent/20 text-accent text-lg font-semibold">
                    JS
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">John Smith</h3>
                  <p className="text-muted-foreground">Tourist • USA</p>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 mr-1" />
                    Visiting India • 5 days remaining
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/30">
                <div className="text-center p-2 rounded-lg bg-accent/10">
                  <div className="text-lg font-bold text-accent">3</div>
                  <div className="text-xs text-muted-foreground">Cities Visited</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-accent/10">
                  <div className="text-lg font-bold text-accent">12</div>
                  <div className="text-xs text-muted-foreground">Places Checked</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-accent/10">
                  <div className="text-lg font-bold text-accent">95%</div>
                  <div className="text-xs text-muted-foreground">Safety Score</div>
                </div>
              </div>
            </Card>

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
                  <span>Check Nearby</span>
                </Button>
                <Button className="btn-primary flex items-center space-x-2 h-14">
                  <Users className="h-5 w-5" />
                  <span>Local Guide</span>
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