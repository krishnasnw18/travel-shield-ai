import React, { useState } from 'react';
import { Car, Bus, Plane, Train, Star, AlertTriangle, Navigation, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SmartTransportation = () => {
  const [selectedTransport, setSelectedTransport] = useState('all');

  const transportOptions = [
    {
      id: 1,
      type: 'taxi',
      name: 'Uber Premium',
      driver: 'Rajesh Kumar',
      rating: 4.8,
      price: '₹280',
      eta: '5 mins',
      safetyScore: 95,
      vehicle: 'Toyota Innova',
      plateNumber: 'DL-1CA-1234',
      features: ['GPS Tracking', 'Emergency Button', 'Driver Verified'],
      icon: Car,
      status: 'available'
    },
    {
      id: 2,
      type: 'metro',
      name: 'Delhi Metro',
      route: 'Red Line - Shahjehan to Kashmere Gate',
      rating: 4.6,
      price: '₹30',
      eta: '3 mins',
      safetyScore: 92,
      crowdLevel: 'Medium',
      features: ['CCTV Monitored', 'Security Guards', 'Emergency Alarm'],
      icon: Train,
      status: 'running'
    },
    {
      id: 3,
      type: 'bus',
      name: 'DTC Bus',
      route: 'Route 620 - India Gate to Red Fort',
      rating: 4.2,
      price: '₹15',
      eta: '8 mins',
      safetyScore: 88,
      crowdLevel: 'High',
      features: ['GPS Tracking', 'CCTV', 'Conductor Present'],
      icon: Bus,
      status: 'delayed'
    }
  ];

  const safetyAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Heavy traffic on NH-1 due to construction work',
      area: 'Outer Ring Road',
      time: '10 mins ago',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'incident',
      message: 'Minor accident reported near India Gate',
      area: 'Rajpath',
      time: '25 mins ago',
      severity: 'low'
    },
    {
      id: 3,
      type: 'security',
      message: 'Increased security checks at Metro stations',
      area: 'All Metro Lines',
      time: '1 hour ago',
      severity: 'info'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Transport', icon: Navigation },
    { id: 'taxi', label: 'Taxi/Cab', icon: Car },
    { id: 'metro', label: 'Metro', icon: Train },
    { id: 'bus', label: 'Bus', icon: Bus },
  ];

  const filteredTransport = transportOptions.filter(option => 
    selectedTransport === 'all' || option.type === selectedTransport
  );

  const getSafetyColor = (score: number) => {
    if (score >= 90) return 'text-accent';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
      case 'running':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'delayed':
        return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      default:
        return 'bg-secondary/20 text-muted-foreground border-secondary/30';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-danger/20 text-danger border-danger/30';
      case 'medium':
        return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      case 'low':
        return 'bg-blue-400/20 text-blue-400 border-blue-400/30';
      default:
        return 'bg-accent/20 text-accent border-accent/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Smart Transportation</h2>
          <Navigation className="h-6 w-6 text-accent" />
        </div>
        
        {/* Category Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedTransport(category.id)}
                className={`nav-item flex items-center space-x-2 whitespace-nowrap ${
                  selectedTransport === category.id ? 'active' : ''
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{category.label}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Real-time Safety Alerts */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Traffic & Safety Alerts</h3>
        <div className="space-y-3">
          {safetyAlerts.map((alert) => (
            <div key={alert.id} className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{alert.message}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-muted-foreground flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {alert.area}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {alert.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Available Transport Options */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Available Transport ({filteredTransport.length})
        </h3>
        
        <div className="space-y-4">
          {filteredTransport.map((option) => {
            const Icon = option.icon;
            return (
              <div key={option.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <Icon className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">{option.name}</h4>
                      {option.driver && (
                        <p className="text-sm text-muted-foreground">Driver: {option.driver}</p>
                      )}
                      {option.route && (
                        <p className="text-sm text-muted-foreground">{option.route}</p>
                      )}
                      {option.vehicle && (
                        <p className="text-sm text-muted-foreground">{option.vehicle} • {option.plateNumber}</p>
                      )}
                    </div>
                  </div>
                  
                  <Badge className={getStatusColor(option.status)}>
                    {option.status}
                  </Badge>
                </div>

                {/* Transport Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-foreground">{option.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className={`h-4 w-4 ${getSafetyColor(option.safetyScore)}`} />
                    <span className="text-sm text-foreground">Safety: {option.safetyScore}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span className="text-sm text-foreground">ETA: {option.eta}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-accent">{option.price}</span>
                  </div>
                </div>

                {/* Safety Features */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Safety Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {option.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent/20 text-accent text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="btn-accent flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Quick Emergency Transport */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Emergency Transport</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button className="btn-danger flex items-center space-x-2 h-14">
            <Car className="h-5 w-5" />
            <span>Emergency Taxi</span>
          </Button>
          <Button className="btn-accent flex items-center space-x-2 h-14">
            <Plane className="h-5 w-5" />
            <span>Airport Express</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SmartTransportation;