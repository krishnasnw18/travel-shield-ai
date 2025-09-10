import React, { useState } from 'react';
import { Wallet, CreditCard, FileText, Shield, QrCode, Download, Upload, Lock, Eye, EyeOff, Copy, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const DigitalTravelWallet = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [showBalance, setShowBalance] = useState(false);
  const [copied, setCopied] = useState('');

  const documents = [
    {
      id: 1,
      type: 'passport',
      name: 'US Passport',
      number: 'US12345678',
      expiry: '2029-03-15',
      status: 'verified',
      fileSize: '2.3 MB',
      uploadDate: '2024-01-10'
    },
    {
      id: 2,
      type: 'visa',
      name: 'India Tourist Visa',
      number: 'IN987654321',
      expiry: '2024-12-31',
      status: 'verified',
      fileSize: '1.8 MB',
      uploadDate: '2024-01-12'
    },
    {
      id: 3,
      type: 'insurance',
      name: 'Travel Insurance',
      number: 'TRV456789',
      expiry: '2024-01-25',
      status: 'verified',
      fileSize: '1.2 MB',
      uploadDate: '2024-01-15'
    },
    {
      id: 4,
      type: 'medical',
      name: 'Vaccination Certificate',
      number: 'VAX123456',
      expiry: '2025-01-15',
      status: 'pending',
      fileSize: '0.9 MB',
      uploadDate: '2024-01-20'
    }
  ];

  const walletBalance = {
    usd: 1250.00,
    inr: 103750.00,
    emergencyFund: 500.00
  };

  const transactions = [
    {
      id: 1,
      type: 'expense',
      category: 'food',
      amount: -25.50,
      currency: 'USD',
      description: 'Dinner at Local Restaurant',
      date: '2024-01-21',
      location: 'Connaught Place, Delhi'
    },
    {
      id: 2,
      type: 'exchange',
      category: 'currency',
      amount: -100.00,
      currency: 'USD',
      description: 'Currency Exchange to INR',
      date: '2024-01-21',
      location: 'HDFC Bank ATM'
    },
    {
      id: 3,
      type: 'income',
      category: 'refund',
      amount: +15.00,
      currency: 'USD',
      description: 'Hotel Service Refund',
      date: '2024-01-20',
      location: 'The Imperial Hotel'
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      name: 'Chase Sapphire Reserve',
      number: '**** **** **** 1234',
      expiry: '12/26',
      status: 'active',
      primary: true
    },
    {
      id: 2,
      type: 'card',
      name: 'American Express Gold',
      number: '**** **** **** 5678',
      expiry: '08/25',
      status: 'active',
      primary: false
    },
    {
      id: 3,
      type: 'digital',
      name: 'PayPal Account',
      number: 'john.smith@email.com',
      status: 'active',
      primary: false
    }
  ];

  const tabs = [
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'payments', label: 'Payments', icon: CreditCard }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'pending':
        return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      case 'expired':
        return 'bg-danger/20 text-danger border-danger/30';
      default:
        return 'bg-secondary/20 text-muted-foreground border-secondary/30';
    }
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'passport':
        return '🛂';
      case 'visa':
        return '🎫';
      case 'insurance':
        return '🛡️';
      case 'medical':
        return '💉';
      default:
        return '📄';
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  const renderDocuments = () => (
    <div className="space-y-4">
      {/* Upload New Document */}
      <Card className="glass-card p-4 border-dashed border-accent/30">
        <div className="text-center">
          <Upload className="h-8 w-8 text-accent mx-auto mb-2" />
          <p className="text-sm font-medium text-foreground">Upload New Document</p>
          <p className="text-xs text-muted-foreground mb-3">PDF, JPG, PNG up to 10MB</p>
          <Button className="btn-accent" size="sm">
            Choose File
          </Button>
        </div>
      </Card>

      {/* Document List */}
      {documents.map((doc) => (
        <Card key={doc.id} className="glass-card p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{getDocumentIcon(doc.type)}</div>
              <div>
                <h4 className="font-medium text-foreground">{doc.name}</h4>
                <p className="text-sm text-muted-foreground">Number: {doc.number}</p>
                <p className="text-sm text-muted-foreground">Expires: {doc.expiry}</p>
              </div>
            </div>
            <Badge className={getStatusColor(doc.status)}>
              {doc.status}
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>{doc.fileSize}</span>
              <span>Uploaded: {doc.uploadDate}</span>
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                <QrCode className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                <Download className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                <Eye className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderWallet = () => (
    <div className="space-y-4">
      {/* Balance Overview */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Balance Overview</h3>
          <button 
            onClick={() => setShowBalance(!showBalance)}
            className="p-2 rounded-lg hover:bg-secondary/20 transition-colors"
          >
            {showBalance ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30">
            <p className="text-sm text-muted-foreground">Total USD</p>
            <p className="text-2xl font-bold text-accent">
              {showBalance ? `$${walletBalance.usd.toFixed(2)}` : '****'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <p className="text-xs text-muted-foreground">Indian Rupees</p>
              <p className="text-lg font-semibold text-foreground">
                {showBalance ? `₹${walletBalance.inr.toLocaleString()}` : '****'}
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-yellow-400/20 border border-yellow-400/30">
              <p className="text-xs text-muted-foreground">Emergency Fund</p>
              <p className="text-lg font-semibold text-yellow-400">
                {showBalance ? `$${walletBalance.emergencyFund}` : '****'}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button className="btn-accent flex items-center space-x-2 h-12">
            <QrCode className="h-4 w-4" />
            <span>Pay with QR</span>
          </Button>
          <Button className="btn-primary flex items-center space-x-2 h-12">
            <CreditCard className="h-4 w-4" />
            <span>Add Money</span>
          </Button>
          <Button className="btn-primary flex items-center space-x-2 h-12">
            <Wallet className="h-4 w-4" />
            <span>Currency Exchange</span>
          </Button>
          <Button className="btn-danger flex items-center space-x-2 h-12">
            <Shield className="h-4 w-4" />
            <span>Emergency Access</span>
          </Button>
        </div>
      </Card>

      {/* Recent Transactions */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 border border-secondary/30">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  transaction.type === 'income' ? 'bg-accent' : 
                  transaction.type === 'expense' ? 'bg-red-400' : 'bg-yellow-400'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-foreground">{transaction.description}</p>
                  <p className="text-xs text-muted-foreground">{transaction.location}</p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${
                  transaction.amount > 0 ? 'text-accent' : 'text-red-400'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount} {transaction.currency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-4">
      {/* Payment Methods */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Payment Methods</h3>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div key={method.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">{method.name}</p>
                    <p className="text-sm text-muted-foreground">{method.number}</p>
                    {method.expiry && (
                      <p className="text-xs text-muted-foreground">Expires: {method.expiry}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {method.primary && (
                    <Badge className="bg-accent/20 text-accent border-accent/30">Primary</Badge>
                  )}
                  <button
                    onClick={() => handleCopy(method.number, method.id.toString())}
                    className="p-1 rounded hover:bg-secondary/30 transition-colors"
                  >
                    {copied === method.id.toString() ? 
                      <Check className="h-3 w-3 text-accent" /> : 
                      <Copy className="h-3 w-3 text-muted-foreground" />
                    }
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button className="btn-accent w-full mt-4">
          <CreditCard className="h-4 w-4 mr-2" />
          Add Payment Method
        </Button>
      </Card>

      {/* Security Settings */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Security Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
            <div className="flex items-center space-x-3">
              <Lock className="h-4 w-4 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Extra security for transactions</p>
              </div>
            </div>
            <Badge className="bg-accent/20 text-accent border-accent/30">Enabled</Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Biometric Lock</p>
                <p className="text-xs text-muted-foreground">Fingerprint for app access</p>
              </div>
            </div>
            <Badge className="bg-accent/20 text-accent border-accent/30">Active</Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
            <div className="flex items-center space-x-3">
              <QrCode className="h-4 w-4 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">QR Code Payments</p>
                <p className="text-xs text-muted-foreground">Quick and secure payments</p>
              </div>
            </div>
            <Badge className="bg-accent/20 text-accent border-accent/30">Enabled</Badge>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Digital Travel Wallet</h2>
          <Wallet className="h-6 w-6 text-accent" />
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
      {activeTab === 'documents' && renderDocuments()}
      {activeTab === 'wallet' && renderWallet()}
      {activeTab === 'payments' && renderPayments()}
    </div>
  );
};

export default DigitalTravelWallet;