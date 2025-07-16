import React, { useState, useEffect } from 'react';

const SystemMonitoring = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const systemMetrics = [
    { name: 'CPU Usage', value: 67, unit: '%', status: 'normal', color: 'blue' },
    { name: 'Memory', value: 78, unit: '%', status: 'warning', color: 'orange' },
    { name: 'Disk Space', value: 45, unit: '%', status: 'normal', color: 'green' },
    { name: 'Network I/O', value: 23, unit: 'MB/s', status: 'normal', color: 'purple' },
  ];

  const services = [
    { name: 'API Server', status: 'running', uptime: '99.9%', responseTime: '45ms' },
    { name: 'Database', status: 'running', uptime: '99.8%', responseTime: '12ms' },
    { name: 'Redis Cache', status: 'running', uptime: '100%', responseTime: '3ms' },
    { name: 'File Storage', status: 'running', uptime: '99.7%', responseTime: '89ms' },
    { name: 'CDN', status: 'warning', uptime: '98.2%', responseTime: '156ms' },
    { name: 'Queue Worker', status: 'running', uptime: '99.9%', responseTime: '22ms' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'warning': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'error': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getMetricColor = (status) => {
    switch (status) {
      case 'normal': return 'from-green-500 to-emerald-500';
      case 'warning': return 'from-orange-500 to-yellow-500';
      case 'critical': return 'from-red-500 to-pink-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-time Clock */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center">
        <h3 className="text-lg font-medium text-gray-400 mb-2">System Time</h3>
        <div className="text-4xl font-bold golden-text animate-time-pulse">
          {currentTime.toLocaleTimeString()}
        </div>
        <p className="text-gray-400 mt-2">{currentTime.toLocaleDateString()}</p>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-4 gap-6">
        {systemMetrics.map((metric, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 text-sm font-medium">{metric.name}</h3>
              <span className={`px-2 py-1 rounded text-xs ${getStatusColor(metric.status)}`}>
                {metric.status}
              </span>
            </div>
            <div className="flex items-end justify-between mb-3">
              <span className="text-2xl font-bold">{metric.value}</span>
              <span className="text-gray-400 text-sm">{metric.unit}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 bg-gradient-to-r ${getMetricColor(metric.status)} rounded-full transition-all duration-1000`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Services Status */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Services Status</h3>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  service.status === 'running' ? 'bg-green-500 animate-pulse' : 
                  service.status === 'warning' ? 'bg-orange-500 animate-pulse' : 'bg-red-500 animate-pulse'
                }`} />
                <div>
                  <h4 className="font-medium">{service.name}</h4>
                  <p className="text-sm text-gray-400">Uptime: {service.uptime}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
                <p className="text-xs text-gray-400 mt-1">{service.responseTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Graph */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Performance Overview</h3>
        <div className="h-64 relative bg-gradient-to-t from-purple-500/10 to-transparent rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-white/[0.05]" />
          
          {/* Simulated Performance Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="cpuGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            
            <path 
              d="M 0 180 Q 50 160 100 170 T 200 150 T 300 160 T 400 140"
              stroke="#3b82f6" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M 0 200 Q 50 190 100 185 T 200 180 T 300 175 T 400 170"
              stroke="#10b981" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
          </svg>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded" />
              <span className="text-sm text-gray-300">CPU</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded" />
              <span className="text-sm text-gray-300">Memory</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Restart Services', icon: '🔄', color: 'blue' },
          { label: 'Clear Cache', icon: '🗑️', color: 'orange' },
          { label: 'Backup System', icon: '💾', color: 'green' },
          { label: 'View Logs', icon: '📋', color: 'purple' },
        ].map((action, index) => (
          <button key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-200 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{action.icon}</div>
            <p className="font-medium">{action.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SystemMonitoring;
