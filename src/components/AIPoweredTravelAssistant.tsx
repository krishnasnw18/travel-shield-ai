import React, { useState } from 'react';
import { Bot, MessageSquare, MapPin, Calendar, Star, Lightbulb, AlertTriangle, Navigation, Clock, Phone, Camera, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const AIPoweredTravelAssistant = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [activeTab, setActiveTab] = useState('chat');

  const chatHistory = [
    {
      id: 1,
      type: 'ai',
      message: 'Hello! I\'m your AI travel assistant. How can I help you today?',
      time: '10:00 AM',
      suggestions: ['Find restaurants', 'Plan route', 'Safety tips', 'Emergency help']
    },
    {
      id: 2,
      type: 'user',
      message: 'What are the best restaurants near India Gate?',
      time: '10:02 AM'
    },
    {
      id: 3,
      type: 'ai',
      message: 'I found 5 highly-rated restaurants near India Gate. Here are my top recommendations based on your preferences and safety ratings:',
      time: '10:02 AM',
      restaurants: [
        { name: 'The Imperial Spice', rating: 4.8, cuisine: 'Indian', distance: '0.2 km', safetyScore: 95 },
        { name: 'Cafe Turtle', rating: 4.6, cuisine: 'Continental', distance: '0.5 km', safetyScore: 92 }
      ]
    }
  ];

  const aiRecommendations = [
    {
      id: 1,
      type: 'safety',
      title: 'Avoid This Area',
      description: 'High crime rate reported in Paharganj after 10 PM',
      priority: 'high',
      action: 'Use alternative route',
      icon: AlertTriangle
    },
    {
      id: 2,
      type: 'cultural',
      title: 'Cultural Tip',
      description: 'Remove shoes before entering temples and mosques',
      priority: 'medium',
      action: 'Learn more',
      icon: Lightbulb
    },
    {
      id: 3,
      type: 'route',
      title: 'Optimal Route',
      description: 'Avoid Ring Road due to heavy traffic. Use Metro instead.',
      priority: 'medium',
      action: 'View route',
      icon: Navigation
    },
    {
      id: 4,
      type: 'weather',
      title: 'Weather Alert',
      description: 'Rain expected this evening. Carry umbrella.',
      priority: 'low',
      action: 'View forecast',
      icon: Cloud
    }
  ];

  const smartSuggestions = [
    {
      id: 1,
      category: 'dining',
      title: 'Lunch Recommendation',
      description: 'Based on your dietary preferences, try Saravana Bhavan for authentic South Indian cuisine',
      rating: 4.7,
      distance: '0.8 km',
      price: '₹₹',
      image: '🍛'
    },
    {
      id: 2,
      category: 'sightseeing',
      title: 'Photography Spot',
      description: 'Golden hour at Lotus Temple (5:30 PM) - perfect lighting for photos',
      rating: 4.9,
      distance: '2.1 km',
      price: 'Free',
      image: '📸'
    },
    {
      id: 3,
      category: 'shopping',
      title: 'Local Market',
      description: 'Khan Market for handicrafts and souvenirs. Bargain-friendly!',
      rating: 4.5,
      distance: '1.2 km',
      price: '₹₹₹',
      image: '🛍️'
    }
  ];

  const travelInsights = [
    {
      id: 1,
      title: 'Peak Hours to Avoid',
      data: 'Metro Rush: 8-10 AM, 6-8 PM',
      type: 'timing',
      icon: Clock
    },
    {
      id: 2,
      title: 'Best Photography Time',
      data: 'Golden Hour: 5:30-6:30 PM',
      type: 'activity',
      icon: Camera
    },
    {
      id: 3,
      title: 'Language Tip',
      data: '90% locals speak Hindi/English',
      type: 'language',
      icon: MessageSquare
    },
    {
      id: 4,
      title: 'Emergency Number',
      data: 'Tourist Helpline: 1363',
      type: 'safety',
      icon: Phone
    }
  ];

  const tabs = [
    { id: 'chat', label: 'AI Chat', icon: Bot },
    { id: 'recommendations', label: 'Smart Tips', icon: Lightbulb },
    { id: 'insights', label: 'Insights', icon: Star }
  ];

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

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    // Add user message to chat
    setChatMessage('');
  };

  const renderChat = () => (
    <div className="space-y-4">
      {/* Chat History */}
      <Card className="glass-card p-4">
        <div className="max-h-96 overflow-y-auto space-y-4">
          {chatHistory.map((chat) => (
            <div key={chat.id} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                chat.type === 'user' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-secondary/20 border border-secondary/30'
              }`}>
                <p className="text-sm text-foreground">{chat.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                
                {/* AI Restaurant Recommendations */}
                {chat.restaurants && (
                  <div className="mt-3 space-y-2">
                    {chat.restaurants.map((restaurant, index) => (
                      <div key={index} className="p-2 rounded bg-background/50 border border-border/30">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-foreground">{restaurant.name}</p>
                            <p className="text-xs text-muted-foreground">{restaurant.cuisine} • {restaurant.distance}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-yellow-400">★ {restaurant.rating}</p>
                            <p className="text-xs text-accent">Safety: {restaurant.safetyScore}%</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Quick Suggestions */}
                {chat.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {chat.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="px-2 py-1 text-xs bg-accent/20 text-accent rounded border border-accent/30 hover:bg-accent/30 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Input */}
      <Card className="glass-card p-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Ask me anything about your travel..."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="input-modern flex-1"
          />
          <Button onClick={handleSendMessage} className="btn-accent">
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2 mt-3">
          {['Find restaurants', 'Plan route', 'Safety check', 'Weather update', 'Emergency help'].map((action, index) => (
            <button
              key={index}
              onClick={() => setChatMessage(action)}
              className="px-3 py-1 text-xs bg-secondary/20 text-foreground rounded border border-secondary/30 hover:bg-secondary/30 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderRecommendations = () => (
    <div className="space-y-4">
      {/* AI Safety Alerts */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">AI Safety Recommendations</h3>
        <div className="space-y-3">
          {aiRecommendations.map((rec) => {
            const Icon = rec.icon;
            return (
              <div key={rec.id} className={`p-4 rounded-lg border ${getPriorityColor(rec.priority)}`}>
                <div className="flex items-start space-x-3">
                  <Icon className="h-5 w-5 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                    <Button size="sm" className="btn-primary mt-2">
                      {rec.action}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Smart Suggestions */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Personalized Suggestions</h3>
        <div className="space-y-4">
          {smartSuggestions.map((suggestion) => (
            <div key={suggestion.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{suggestion.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-foreground">{suggestion.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {suggestion.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{suggestion.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" />
                      {suggestion.rating}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {suggestion.distance}
                    </span>
                    <span>{suggestion.price}</span>
                  </div>
                </div>
                <Button size="sm" className="btn-accent">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-4">
      {/* Travel Insights */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">AI Travel Insights</h3>
        <div className="grid grid-cols-1 gap-4">
          {travelInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.id} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="font-medium text-foreground">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground">{insight.data}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* AI Learning Stats */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">AI Learning Progress</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Your Travel Patterns Analyzed</span>
            <span className="text-sm text-accent">85%</span>
          </div>
          <div className="w-full bg-secondary/30 rounded-full h-2">
            <div className="bg-accent h-2 rounded-full w-[85%]"></div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Safety Preferences Learned</span>
            <span className="text-sm text-accent">92%</span>
          </div>
          <div className="w-full bg-secondary/30 rounded-full h-2">
            <div className="bg-accent h-2 rounded-full w-[92%]"></div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Cultural Sensitivity Training</span>
            <span className="text-sm text-accent">78%</span>
          </div>
          <div className="w-full bg-secondary/30 rounded-full h-2">
            <div className="bg-accent h-2 rounded-full w-[78%]"></div>
          </div>
        </div>
      </Card>

      {/* AI Capabilities */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">AI Assistant Capabilities</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-center">
            <Bot className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">24/7 Assistance</p>
          </div>
          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-center">
            <MapPin className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Real-time Location</p>
          </div>
          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-center">
            <Lightbulb className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Smart Suggestions</p>
          </div>
          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-center">
            <AlertTriangle className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Safety Monitoring</p>
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
          <h2 className="text-xl font-semibold text-foreground">AI Travel Assistant</h2>
          <Bot className="h-6 w-6 text-accent" />
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
      {activeTab === 'chat' && renderChat()}
      {activeTab === 'recommendations' && renderRecommendations()}
      {activeTab === 'insights' && renderInsights()}
    </div>
  );
};

export default AIPoweredTravelAssistant;