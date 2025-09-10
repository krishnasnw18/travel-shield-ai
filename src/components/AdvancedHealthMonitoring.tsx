import React, { useState } from 'react';
import { Heart, Activity, Pill, AlertTriangle, Calendar, Phone, FileText, Shield, Thermometer, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const AdvancedHealthMonitoring = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const healthData = {
    heartRate: 72,
    bloodPressure: '120/80',
    temperature: 98.6,
    oxygenSaturation: 98,
    steps: 8420,
    hydration: 75,
    stress: 25,
    sleep: 7.5
  };

  const medications = [
    {
      id: 1,
      name: 'Aspirin',
      dosage: '100mg',
      frequency: 'Once daily',
      nextDose: '08:00 AM',
      remaining: 15,
      purpose: 'Heart health',
      sideEffects: ['Stomach upset', 'Bleeding']
    },
    {
      id: 2,
      name: 'Vitamin D',
      dosage: '1000 IU',
      frequency: 'Daily with meal',
      nextDose: '12:00 PM',
      remaining: 28,
      purpose: 'Bone health',
      sideEffects: ['None known']
    }
  ];

  const medicalHistory = [
    {
      id: 1,
      condition: 'Hypertension',
      diagnosed: '2020-05-15',
      status: 'controlled',
      severity: 'mild',
      notes: 'Well controlled with medication'
    },
    {
      id: 2,
      condition: 'Type 2 Diabetes',
      diagnosed: '2019-08-20',
      status: 'managed',
      severity: 'moderate',
      notes: 'Diet controlled, regular monitoring'
    }
  ];

  const emergencyContacts = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      type: 'Primary Care',
      phone: '+1-555-123-4567',
      hospital: 'City General Hospital',
      available: '24/7'
    },
    {
      id: 2,
      name: 'Dr. Raj Patel',
      type: 'Cardiologist',
      phone: '+91-98765-43210',
      hospital: 'Apollo Hospital Delhi',
      available: 'Mon-Fri 9AM-6PM'
    }
  ];

  const healthAlerts = [
    {
      id: 1,
      type: 'reminder',
      message: 'Time to take your evening medication',
      time: '2 hours ago',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'warning',
      message: 'Heart rate elevated - consider rest',
      time: '4 hours ago',
      priority: 'high'
    },
    {
      id: 3,
      type: 'info',
      message: 'Hydration goal achieved today!',
      time: '6 hours ago',
      priority: 'low'
    }
  ];

  const nearbyPharmacies = [
    {
      id: 1,
      name: 'Apollo Pharmacy',
      distance: '0.3 km',
      rating: 4.5,
      open24h: true,
      phone: '+91-11-12345678',
      address: 'Khan Market, New Delhi'
    },
    {
      id: 2,
      name: 'MedPlus',
      distance: '0.8 km',
      rating: 4.2,
      open24h: false,
      phone: '+91-11-87654321',
      address: 'Connaught Place, New Delhi'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'medications', label: 'Medications', icon: Pill },
    { id: 'history', label: 'Medical History', icon: FileText },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle }
  ];

  const getHealthStatus = (value: number, type: string) => {
    switch (type) {
      case 'heartRate':
        if (value >= 60 && value <= 80) return 'normal';
        if (value > 80 && value <= 100) return 'elevated';
        return 'concerning';
      case 'hydration':
        if (value >= 80) return 'good';
        if (value >= 60) return 'fair';
        return 'low';
      case 'stress':
        if (value <= 30) return 'low';
        if (value <= 60) return 'moderate';
        return 'high';
      default:
        return 'normal';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
      case 'good':
      case 'low':
        return 'text-accent';
      case 'elevated':
      case 'fair':
      case 'moderate':
        return 'text-yellow-400';
      case 'concerning':
      case 'high':
        return 'text-red-400';
      default:
        return 'text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-danger/20 text-danger border-danger/30';
      case 'medium':
        return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      case 'low':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-secondary/20 text-muted-foreground border-secondary/30';
    }
  };

  const renderOverview = () => (
    <div className="space-y-4">
      {/* Health Vitals */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Current Vitals</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className={`h-4 w-4 ${getStatusColor(getHealthStatus(healthData.heartRate, 'heartRate'))}`} />
              <span className="text-sm text-muted-foreground">Heart Rate</span>
            </div>
            <p className="text-xl font-bold text-foreground">{healthData.heartRate} BPM</p>
          </div>
          
          <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">Blood Pressure</span>
            </div>
            <p className="text-xl font-bold text-foreground">{healthData.bloodPressure}</p>
          </div>
          
          <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
            <div className="flex items-center space-x-2 mb-2">
              <Thermometer className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">Temperature</span>
            </div>
            <p className="text-xl font-bold text-foreground">{healthData.temperature}°F</p>
          </div>
          
          <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">Oxygen Sat</span>
            </div>
            <p className="text-xl font-bold text-foreground">{healthData.oxygenSaturation}%</p>
          </div>
        </div>
      </Card>

      {/* Health Metrics */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Daily Health Metrics</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-foreground">Steps Today</span>
              <span className="text-sm text-accent">{healthData.steps.toLocaleString()} / 10,000</span>
            </div>
            <Progress value={(healthData.steps / 10000) * 100} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-foreground">Hydration</span>
              <span className={`text-sm ${getStatusColor(getHealthStatus(healthData.hydration, 'hydration'))}`}>
                {healthData.hydration}%
              </span>
            </div>
            <Progress value={healthData.hydration} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-foreground">Stress Level</span>
              <span className={`text-sm ${getStatusColor(getHealthStatus(healthData.stress, 'stress'))}`}>
                {healthData.stress}%
              </span>
            </div>
            <Progress value={healthData.stress} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-foreground">Sleep (Last Night)</span>
              <span className="text-sm text-accent">{healthData.sleep} hours</span>
            </div>
            <Progress value={(healthData.sleep / 8) * 100} className="h-2" />
          </div>
        </div>
      </Card>

      {/* Health Alerts */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Health Alerts</h3>
        <div className="space-y-3">
          {healthAlerts.map((alert) => (
            <div key={alert.id} className={`p-3 rounded-lg border ${getPriorityColor(alert.priority)}`}>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-4 w-4 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderMedications = () => (
    <div className="space-y-4">
      {/* Current Medications */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Current Medications</h3>
        <div className="space-y-4">
          {medications.map((med) => (
            <div key={med.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-foreground">{med.name}</h4>
                  <p className="text-sm text-muted-foreground">{med.dosage} • {med.frequency}</p>
                  <p className="text-sm text-accent">Next dose: {med.nextDose}</p>
                </div>
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  {med.remaining} left
                </Badge>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Purpose: {med.purpose}</p>
                <div>
                  <p className="text-xs text-muted-foreground">Side effects:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {med.sideEffects.map((effect, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {effect}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2 mt-3">
                <Button size="sm" className="btn-accent">
                  Mark Taken
                </Button>
                <Button size="sm" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                  Set Reminder
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Nearby Pharmacies */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Nearby Pharmacies</h3>
        <div className="space-y-3">
          {nearbyPharmacies.map((pharmacy) => (
            <div key={pharmacy.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-foreground">{pharmacy.name}</h4>
                  <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-accent">{pharmacy.distance}</span>
                    <span className="text-xs text-yellow-400">★ {pharmacy.rating}</span>
                    {pharmacy.open24h && (
                      <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">24/7</Badge>
                    )}
                  </div>
                </div>
                <Button size="sm" className="btn-primary">
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderHistory = () => (
    <div className="space-y-4">
      {/* Medical Conditions */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Medical History</h3>
        <div className="space-y-4">
          {medicalHistory.map((condition) => (
            <div key={condition.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-foreground">{condition.condition}</h4>
                  <p className="text-sm text-muted-foreground">Diagnosed: {condition.diagnosed}</p>
                  <p className="text-sm text-muted-foreground">{condition.notes}</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <Badge className={`${
                    condition.status === 'controlled' ? 'bg-accent/20 text-accent border-accent/30' :
                    condition.status === 'managed' ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30' :
                    'bg-danger/20 text-danger border-danger/30'
                  } text-xs`}>
                    {condition.status}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {condition.severity}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Health Records Access */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Health Records</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button className="btn-accent flex items-center space-x-2 h-12">
            <FileText className="h-4 w-4" />
            <span>View Records</span>
          </Button>
          <Button className="btn-primary flex items-center space-x-2 h-12">
            <Shield className="h-4 w-4" />
            <span>Share Securely</span>
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderEmergency = () => (
    <div className="space-y-4">
      {/* Emergency Contacts */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Medical Emergency Contacts</h3>
        <div className="space-y-3">
          {emergencyContacts.map((contact) => (
            <div key={contact.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-foreground">{contact.name}</h4>
                  <p className="text-sm text-muted-foreground">{contact.type}</p>
                  <p className="text-sm text-muted-foreground">{contact.hospital}</p>
                  <p className="text-xs text-accent">Available: {contact.available}</p>
                </div>
                <Button size="sm" className="btn-danger">
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Medical ID */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Medical Emergency ID</h3>
        <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 mb-4">
          <p className="text-sm text-accent font-medium">⚠️ Emergency Medical Information</p>
          <p className="text-xs text-muted-foreground mt-1">
            This information is accessible even when your phone is locked
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Blood Type</p>
              <p className="font-medium text-foreground">O+</p>
            </div>
            <div>
              <p className="text-muted-foreground">Allergies</p>
              <p className="font-medium text-foreground">Penicillin, Shellfish</p>
            </div>
            <div>
              <p className="text-muted-foreground">Conditions</p>
              <p className="font-medium text-foreground">Hypertension, Diabetes</p>
            </div>
            <div>
              <p className="text-muted-foreground">Emergency Contact</p>
              <p className="font-medium text-foreground">Jane Smith</p>
            </div>
          </div>
        </div>
        
        <Button className="btn-accent w-full mt-4">
          <Shield className="h-4 w-4 mr-2" />
          Update Medical ID
        </Button>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Health Monitoring</h2>
          <Heart className="h-6 w-6 text-accent" />
        </div>
        
        {/* Tab Navigation */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-item flex items-center space-x-2 whitespace-nowrap ${
                  activeTab === tab.id ? 'active' : ''
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'medications' && renderMedications()}
      {activeTab === 'history' && renderHistory()}
      {activeTab === 'emergency' && renderEmergency()}
    </div>
  );
};

export default AdvancedHealthMonitoring;