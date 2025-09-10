import React, { useState } from 'react';
import { User, MapPin, Calendar, Phone, Mail, Shield, Star, QrCode, Camera, Edit } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TouristProfile = () => {
  const [verificationStatus] = useState({
    kyc: true,
    passport: true,
    medical: false,
    insurance: true
  });

  const profileData = {
    name: 'John Smith',
    dob: '1985-03-15',
    nationality: 'United States',
    passportNumber: 'US12345678',
    arrivalDate: '2024-01-15',
    departureDate: '2024-01-25',
    purpose: 'Tourism',
    email: 'john.smith@email.com',
    phone: '+1-555-123-4567',
    emergencyContact: {
      name: 'Jane Smith',
      relation: 'Spouse',
      phone: '+1-555-987-6543'
    },
    hotel: {
      name: 'The Imperial Hotel',
      address: 'Janpath, New Delhi',
      checkin: '2024-01-15',
      checkout: '2024-01-25'
    },
    safetyScore: 95,
    visitCount: 3,
    rating: 4.8
  };

  const itinerary = [
    { date: '2024-01-16', activity: 'Red Fort Visit', time: '10:00 AM', status: 'completed' },
    { date: '2024-01-17', activity: 'India Gate & Rajpath', time: '9:00 AM', status: 'upcoming' },
    { date: '2024-01-18', activity: 'Qutub Minar', time: '11:00 AM', status: 'upcoming' },
    { date: '2024-01-19', activity: 'Lotus Temple', time: '2:00 PM', status: 'upcoming' },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="glass-card p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-white" />
            </div>
            <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center border-2 border-background">
              <Camera className="h-3 w-3 text-background" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">{profileData.name}</h2>
              <Button size="sm" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                <Edit className="h-3 w-3 mr-1" />
                Edit
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{profileData.nationality} • Tourist</p>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                <Star className="h-3 w-3 mr-1" />
                {profileData.rating}
              </Badge>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Visit #{profileData.visitCount}
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Digital ID Card */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Digital Tourist ID</h3>
          <QrCode className="h-6 w-6 text-accent" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Passport No.</p>
            <p className="text-sm font-medium text-foreground">{profileData.passportNumber}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Date of Birth</p>
            <p className="text-sm font-medium text-foreground">{profileData.dob}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Arrival Date</p>
            <p className="text-sm font-medium text-foreground">{profileData.arrivalDate}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Departure Date</p>
            <p className="text-sm font-medium text-foreground">{profileData.departureDate}</p>
          </div>
        </div>

        {/* QR Code Display */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <Button className="btn-accent w-full">
          <QrCode className="h-4 w-4 mr-2" />
          Show QR Code for Verification
        </Button>
      </Card>

      {/* Verification Status */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Verification Status</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-3 rounded-lg border ${verificationStatus.kyc ? 'bg-accent/10 border-accent/20' : 'bg-secondary/20 border-secondary/30'}`}>
            <div className="flex items-center space-x-2">
              <Shield className={`h-4 w-4 ${verificationStatus.kyc ? 'text-accent' : 'text-muted-foreground'}`} />
              <span className="text-sm font-medium text-foreground">KYC Verified</span>
            </div>
            <p className={`text-xs mt-1 ${verificationStatus.kyc ? 'text-accent' : 'text-muted-foreground'}`}>
              {verificationStatus.kyc ? '✓ Completed' : '⚠ Pending'}
            </p>
          </div>
          
          <div className={`p-3 rounded-lg border ${verificationStatus.passport ? 'bg-accent/10 border-accent/20' : 'bg-secondary/20 border-secondary/30'}`}>
            <div className="flex items-center space-x-2">
              <Shield className={`h-4 w-4 ${verificationStatus.passport ? 'text-accent' : 'text-muted-foreground'}`} />
              <span className="text-sm font-medium text-foreground">Passport</span>
            </div>
            <p className={`text-xs mt-1 ${verificationStatus.passport ? 'text-accent' : 'text-muted-foreground'}`}>
              {verificationStatus.passport ? '✓ Verified' : '⚠ Pending'}
            </p>
          </div>
          
          <div className={`p-3 rounded-lg border ${verificationStatus.medical ? 'bg-accent/10 border-accent/20' : 'bg-secondary/20 border-secondary/30'}`}>
            <div className="flex items-center space-x-2">
              <Shield className={`h-4 w-4 ${verificationStatus.medical ? 'text-accent' : 'text-muted-foreground'}`} />
              <span className="text-sm font-medium text-foreground">Medical</span>
            </div>
            <p className={`text-xs mt-1 ${verificationStatus.medical ? 'text-accent' : 'text-muted-foreground'}`}>
              {verificationStatus.medical ? '✓ Updated' : '⚠ Update Required'}
            </p>
          </div>
          
          <div className={`p-3 rounded-lg border ${verificationStatus.insurance ? 'bg-accent/10 border-accent/20' : 'bg-secondary/20 border-secondary/30'}`}>
            <div className="flex items-center space-x-2">
              <Shield className={`h-4 w-4 ${verificationStatus.insurance ? 'text-accent' : 'text-muted-foreground'}`} />
              <span className="text-sm font-medium text-foreground">Insurance</span>
            </div>
            <p className={`text-xs mt-1 ${verificationStatus.insurance ? 'text-accent' : 'text-muted-foreground'}`}>
              {verificationStatus.insurance ? '✓ Active' : '⚠ Expired'}
            </p>
          </div>
        </div>
      </Card>

      {/* Contact Information */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Mail className="h-4 w-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">{profileData.email}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="h-4 w-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium text-foreground">{profileData.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <User className="h-4 w-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Emergency Contact</p>
              <p className="text-sm font-medium text-foreground">{profileData.emergencyContact.name} ({profileData.emergencyContact.relation})</p>
              <p className="text-xs text-muted-foreground">{profileData.emergencyContact.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Accommodation</p>
              <p className="text-sm font-medium text-foreground">{profileData.hotel.name}</p>
              <p className="text-xs text-muted-foreground">{profileData.hotel.address}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Travel Itinerary */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Travel Itinerary</h3>
        <div className="space-y-3">
          {itinerary.map((item, index) => (
            <div key={index} className={`p-3 rounded-lg border ${
              item.status === 'completed' 
                ? 'bg-accent/10 border-accent/20' 
                : 'bg-secondary/20 border-secondary/30'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar className={`h-4 w-4 ${item.status === 'completed' ? 'text-accent' : 'text-muted-foreground'}`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.activity}</p>
                    <p className="text-xs text-muted-foreground">{item.date} • {item.time}</p>
                  </div>
                </div>
                <Badge variant={item.status === 'completed' ? 'default' : 'secondary'} 
                       className={item.status === 'completed' ? 'bg-accent/20 text-accent' : ''}>
                  {item.status === 'completed' ? '✓ Done' : 'Upcoming'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TouristProfile;