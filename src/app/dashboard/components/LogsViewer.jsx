import React, { useState, useEffect } from 'react';

const LogsViewer = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLive, setIsLive] = useState(true);
  const [logs, setLogs] = useState([
    { id: 1, timestamp: '2024-01-15 14:30:25', level: 'info', service: 'API', message: 'User authentication successful', user: 'john@example.com', ip: '192.168.1.100' },
    { id: 2, timestamp: '2024-01-15 14:29:18', level: 'error', service: 'Database', message: 'Connection timeout after 30 seconds', user: 'system', ip: '10.0.0.1' },
    { id: 3, timestamp: '2024-01-15 14:28:45', level: 'warning', service: 'Cache', message: 'High memory usage detected (89%)', user: 'system', ip: '10.0.0.2' },
    { id: 4, timestamp: '2024-01-15 14:27:32', level: 'info', service: 'API', message: 'New API key generated', user: 'admin@company.com', ip: '172.16.0.10' },
    { id: 5, timestamp: '2024-01-15 14:26:15', level: 'error', service: 'Security', message: 'Failed login attempt detected', user: 'unknown', ip: '203.0.113.195' },
    { id: 6, timestamp: '2024-01-15 14:25:03', level: 'debug', service: 'Queue', message: 'Processing background job #12547', user: 'system', ip: '10.0.0.3' },
    { id: 7, timestamp: '2024-01-15 14:24:18', level: 'info', service: 'Payment', message: 'Payment processed successfully', user: 'customer@domain.com', ip: '198.51.100.42' },
    { id: 8, timestamp: '2024-01-15 14:23:44', level: 'critical', service: 'Storage', message: 'Disk space critically low (95% full)', user: 'system', ip: '10.0.0.4' },
  ]);

  const logLevels = [
    { id: 'all', label: 'All Logs', count: logs.length },
    { id: 'critical', label: 'Critical', count: logs.filter(log => log.level === 'critical').length },
    { id: 'error', label: 'Error', count: logs.filter(log => log.level === 'error').length },
    { id: 'warning', label: 'Warning', count: logs.filter(log => log.level === 'warning').length },
    { id: 'info', label: 'Info', count: logs.filter(log => log.level === 'info').length },
    { id: 'debug', label: 'Debug', count: logs.filter(log => log.level === 'debug').length },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'critical': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'error': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'warning': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'info': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'debug': return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case 'critical': return '🚨';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'debug': return '🔍';
      default: return '📄';
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesLevel = selectedLevel === 'all' || log.level === selectedLevel;
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  // Simulate live log updates
  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        const newLog = {
          id: Date.now(),
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
          level: ['info', 'warning', 'error', 'debug'][Math.floor(Math.random() * 4)],
          service: ['API', 'Database', 'Cache', 'Security'][Math.floor(Math.random() * 4)],
          message: [
            'Request processed successfully',
            'Memory usage threshold exceeded',
            'New user registration',
            'Background task completed'
          ][Math.floor(Math.random() * 4)],
          user: 'system',
          ip: '10.0.0.' + Math.floor(Math.random() * 255)
        };
        setLogs(prev => [newLog, ...prev.slice(0, 99)]); // Keep only latest 100 logs
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">System Logs</h2>
          <p className="text-gray-400">Monitor and analyze system activity</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLive(!isLive)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isLive 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
            {isLive ? 'Live' : 'Paused'}
          </button>
          <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            Export Logs
          </button>
          <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-colors">
            Clear Logs
          </button>
        </div>
      </div>

      {/* Log Level Filters */}
      <div className="grid grid-cols-6 gap-4">
        {logLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id)}
            className={`p-4 rounded-xl transition-all ${
              selectedLevel === level.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20'
            }`}
          >
            <h3 className="font-medium">{level.label}</h3>
            <p className="text-2xl font-bold mt-1">{level.count}</p>
          </button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
            />
          </div>
          <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
            <option>All Services</option>
            <option>API</option>
            <option>Database</option>
            <option>Cache</option>
            <option>Security</option>
          </select>
          <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
            <option>Last Hour</option>
            <option>Last 24 Hours</option>
            <option>Last Week</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Log Entries</h3>
            <p className="text-gray-400">{filteredLogs.length} entries</p>
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-black/60 backdrop-blur-xl">
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Timestamp</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Level</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Service</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Message</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">User</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">IP</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-mono text-sm text-gray-300">{log.timestamp}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getLevelIcon(log.level)}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(log.level)}`}>
                        {log.level.toUpperCase()}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 text-sm">
                      {log.service}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-300 max-w-md truncate">{log.message}</td>
                  <td className="py-4 px-6 text-gray-300 font-mono text-sm">{log.user}</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-sm">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log Statistics */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Total Logs Today', value: '24,567', icon: '📊' },
          { label: 'Error Rate', value: '2.3%', icon: '❌' },
          { label: 'Average Response', value: '145ms', icon: '⚡' },
          { label: 'Storage Used', value: '2.1GB', icon: '💾' },
        ].map((stat, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogsViewer;
