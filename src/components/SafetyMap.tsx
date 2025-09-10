import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Plus, Heart, Shield, AlertTriangle, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SafetyMap = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const emergencyServices = [
    {
      id: 1,
      name: 'All India Institute of Medical Sciences',
      type: 'hospital',
      distance: '2.3 km',
      rating: 4.8,
      contact: '+91-11-26588500',
      address: 'Ansari Nagar, New Delhi',
      icon: Heart,
      color: 'text-red-400'
    },
    {
      id: 2,
      name: 'Connaught Place Police Station',
      type: 'police',
      distance: '1.1 km',
      rating: 4.2,
      contact: '100',
      address: 'Connaught Place, New Delhi',
      icon: Shield,
      color: 'text-blue-400'
    },
    {
      id: 3,
      name: 'Apollo Pharmacy',
      type: 'pharmacy',
      distance: '0.5 km',
      rating: 4.5,
      contact: '+91-11-41581234',
      address: 'Khan Market, New Delhi',
      icon: Plus,
      color: 'text-green-400'
    },
    {
      id: 4,
      name: 'HDFC Bank ATM',
      type: 'atm',
      distance: '0.3 km',
      rating: 4.0,
      contact: '24/7 Available',
      address: 'Karol Bagh Metro Station',
      icon: MapPin,
      color: 'text-yellow-400'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: MapPin },
    { id: 'hospital', label: 'Hospitals', icon: Heart },
    { id: 'police', label: 'Police', icon: Shield },
    { id: 'pharmacy', label: 'Pharmacy', icon: Plus },
    { id: 'atm', label: 'ATM', icon: MapPin },
  ];

  const filteredServices = emergencyServices.filter(service => 
    (selectedCategory === 'all' || service.type === selectedCategory) &&
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Map Header */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Safety Map</h2>
          <Navigation className="h-6 w-6 text-accent" />
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search nearby services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-modern pl-10"
          />
        </div>

        {/* Category Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`nav-item flex items-center space-x-2 whitespace-nowrap ${
                  selectedCategory === category.id ? 'active' : ''
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{category.label}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Interactive Map Placeholder */}
      <Card className="glass-card p-6">
        <div className="relative h-64 bg-secondary/20 rounded-lg border border-secondary/30 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
              <p className="text-accent font-medium">Interactive Map</p>
              <p className="text-xs text-muted-foreground">Tourist District, New Delhi</p>
            </div>
          </div>
          
          {/* Mock Map Pins */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full pulse-accent"></div>
          <div className="absolute top-16 right-8 w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
          
          {/* Current Location */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-accent rounded-full border-2 border-background"></div>
            <div className="absolute inset-0 w-4 h-4 bg-accent/30 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <Button className="btn-accent w-full mt-4">
          <Navigation className="h-4 w-4 mr-2" />
          Open in Maps App
        </Button>
      </Card>

      {/* Emergency Services List */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Nearby Services ({filteredServices.length})
        </h3>
        
        <div className="space-y-4">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <Icon className={`h-5 w-5 mt-1 ${service.color}`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">{service.address}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs text-accent font-medium">{service.distance}</span>
                        <span className="text-xs text-yellow-400">★ {service.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button size="sm" className="btn-primary">
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                      <Navigation className="h-3 w-3 mr-1" />
                      Route
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Emergency Quick Actions */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Emergency Contacts</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button className="btn-danger flex items-center space-x-2 h-12">
            <Phone className="h-4 w-4" />
            <span>Police: 100</span>
          </Button>
          <Button className="btn-danger flex items-center space-x-2 h-12">
            <Heart className="h-4 w-4" />
            <span>Medical: 108</span>
          </Button>
          <Button className="btn-accent flex items-center space-x-2 h-12">
            <Shield className="h-4 w-4" />
            <span>Tourist Help</span>
          </Button>
          <Button className="btn-accent flex items-center space-x-2 h-12">
            <AlertTriangle className="h-4 w-4" />
            <span>Fire: 101</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SafetyMap;