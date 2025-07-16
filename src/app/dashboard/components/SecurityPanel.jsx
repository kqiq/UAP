import React, { useState } from 'react';

const SecurityPanel = () => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: true,
    ipWhitelist: true,
    sessionTimeout: '30',
    passwordComplexity: 'high'
  });

  const threats = [
    { type: 'Brute Force', severity: 'high', count: 12, blocked: 11, time: '2 min ago' },
    { type: 'SQL Injection', severity: 'critical', count: 3, blocked: 3, time: '15 min ago' },
    { type: 'XSS Attempt', severity: 'medium', count: 7, blocked: 6, time: '23 min ago' },
    { type: 'DDoS', severity: 'high', count: 1, blocked: 1, time: '1 hour ago' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'high': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Security Overview */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Threats Blocked', value: '1,247', change: '+23', color: 'from-red-500 to-pink-500' },
          { label: 'Security Score', value: '98%', change: '+2%', color: 'from-green-500 to-emerald-500' },
          { label: 'Active Sessions', value: '342', change: '-12', color: 'from-blue-500 to-cyan-500' },
          { label: 'Failed Logins', value: '89', change: '-45%', color: 'from-orange-500 to-yellow-500' },
        ].map((stat, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.label}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className={`text-sm font-medium ${stat.change.includes('+') && !stat.change.includes('++') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Security Settings */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Security Settings</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-400">Require 2FA for all admin accounts</p>
              </div>
              <button 
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  securitySettings.twoFactor ? 'bg-green-500' : 'bg-gray-600'
                }`}
                onClick={() => setSecuritySettings({...securitySettings, twoFactor: !securitySettings.twoFactor})}
              >
                <div className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                  securitySettings.twoFactor ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">IP Whitelist</h4>
                <p className="text-sm text-gray-400">Restrict access to whitelisted IPs</p>
              </div>
              <button 
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  securitySettings.ipWhitelist ? 'bg-green-500' : 'bg-gray-600'
                }`}
                onClick={() => setSecuritySettings({...securitySettings, ipWhitelist: !securitySettings.ipWhitelist})}
              >
                <div className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                  securitySettings.ipWhitelist ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            <div>
              <h4 className="font-medium mb-2">Session Timeout (minutes)</h4>
              <input 
                type="number" 
                value={securitySettings.sessionTimeout}
                onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: e.target.value})}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Threat Detection */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Recent Threats</h3>
          <div className="space-y-4">
            {threats.map((threat, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getSeverityColor(threat.severity).includes('red') ? 'bg-red-500' : threat.severity === 'high' ? 'bg-orange-500' : 'bg-yellow-500'} animate-pulse`} />
                  <div>
                    <h4 className="font-medium">{threat.type}</h4>
                    <p className="text-sm text-gray-400">{threat.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{threat.blocked}/{threat.count} blocked</p>
                  <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(threat.severity)}`}>
                    {threat.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Logs */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Security Events</h3>
        <div className="space-y-3">
          {[
            { event: 'Admin login from new location', user: 'admin@system.com', ip: '192.168.1.100', time: '2 min ago', status: 'success' },
            { event: 'Failed login attempt', user: 'unknown@attacker.com', ip: '203.0.113.195', time: '5 min ago', status: 'blocked' },
            { event: 'API key generated', user: 'developer@company.com', ip: '10.0.0.50', time: '12 min ago', status: 'success' },
            { event: 'Password changed', user: 'user@example.com', ip: '172.16.0.10', time: '25 min ago', status: 'success' },
          ].map((log, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${log.status === 'success' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                <div>
                  <p className="font-medium">{log.event}</p>
                  <p className="text-sm text-gray-400">{log.user} • {log.ip}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">{log.time}</p>
                <span className={`px-2 py-1 rounded text-xs ${
                  log.status === 'success' 
                    ? 'text-green-400 bg-green-500/20 border border-green-500/30' 
                    : 'text-red-400 bg-red-500/20 border border-red-500/30'
                }`}>
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityPanel;
