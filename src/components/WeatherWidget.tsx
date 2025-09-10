import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    location: 'New Delhi, India',
    temperature: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    forecast: [
      { day: 'Today', high: 28, low: 18, condition: 'Partly Cloudy' },
      { day: 'Tomorrow', high: 30, low: 20, condition: 'Sunny' },
      { day: 'Thursday', high: 26, low: 16, condition: 'Rainy' },
    ]
  });

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-400" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-400" />;
      default:
        return <Cloud className="h-8 w-8 text-gray-400" />;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'text-yellow-400';
      case 'rainy':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Weather Forecast</h2>
        {getWeatherIcon(weather.condition)}
      </div>
      
      {/* Current Weather */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-3xl font-bold text-accent">{weather.temperature}°C</p>
            <p className={`text-sm ${getConditionColor(weather.condition)}`}>{weather.condition}</p>
            <p className="text-xs text-muted-foreground">{weather.location}</p>
          </div>
        </div>
        
        {/* Weather Details */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Humidity</p>
              <p className="text-sm font-medium text-foreground">{weather.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Wind</p>
              <p className="text-sm font-medium text-foreground">{weather.windSpeed} km/h</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Visibility</p>
              <p className="text-sm font-medium text-foreground">{weather.visibility} km</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Day Forecast */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">3-Day Forecast</h3>
        <div className="space-y-3">
          {weather.forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 border border-secondary/30">
              <div className="flex items-center space-x-3">
                <div className="scale-75">
                  {getWeatherIcon(day.condition)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{day.day}</p>
                  <p className={`text-xs ${getConditionColor(day.condition)}`}>{day.condition}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">{day.high}°</p>
                <p className="text-xs text-muted-foreground">{day.low}°</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Alert */}
      <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
        <p className="text-sm text-accent font-medium">⚠️ Weather Advisory</p>
        <p className="text-xs text-muted-foreground mt-1">Perfect weather for outdoor activities. Stay hydrated!</p>
      </div>
    </Card>
  );
};

export default WeatherWidget;