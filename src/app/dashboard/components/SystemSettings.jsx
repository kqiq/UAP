import React, { useState } from 'react';

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Admin Dashboard',
    siteUrl: 'https://admin.example.com',
    maintenanceMode: false,
    autoBackup: true,
    backupFrequency: 'daily',
    maxFileSize: '10',
    sessionTimeout: '30',
    rateLimitEnabled: true,
    rateLimitRequests: '1000',
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">System Settings</h2>
          <p className="text-gray-400">Configure system preferences and maintenance options</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors">
            Restart System
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
            Save Changes
          </button>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Uptime', value: '99.9%', status: 'excellent', icon: '⚡' },
          { label: 'Last Backup', value: '2 hours ago', status: 'good', icon: '💾' },
          { label: 'System Load', value: '45%', status: 'normal', icon: '📊' },
          { label: 'Storage Used', value: '2.1TB / 5TB', status: 'normal', icon: '🗄️' },
        ].map((stat, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            </div>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* General Settings */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">General Settings</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Site Name</label>
              <input 
                type="text" 
                value={settings.siteName}
                onChange={(e) => handleSettingChange('siteName', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Site URL</label>
              <input 
                type="url" 
                value={settings.siteUrl}
                onChange={(e) => handleSettingChange('siteUrl', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Session Timeout (minutes)</label>
              <input 
                type="number" 
                value={settings.sessionTimeout}
                onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Max File Upload Size (MB)</label>
              <input 
                type="number" 
                value={settings.maxFileSize}
                onChange={(e) => handleSettingChange('maxFileSize', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* System Toggles */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">System Controls</h3>
          <div className="space-y-6">
            {[
              { key: 'maintenanceMode', label: 'Maintenance Mode', description: 'Put system in maintenance mode' },
              { key: 'autoBackup', label: 'Auto Backup', description: 'Automatically backup system data' },
              { key: 'rateLimitEnabled', label: 'Rate Limiting', description: 'Enable API rate limiting' },
              { key: 'emailNotifications', label: 'Email Notifications', description: 'Send system notifications via email' },
              { key: 'smsNotifications', label: 'SMS Notifications', description: 'Send critical alerts via SMS' },
            ].map((toggle) => (
              <div key={toggle.key} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{toggle.label}</h4>
                  <p className="text-sm text-gray-400">{toggle.description}</p>
                </div>
                <button 
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    settings[toggle.key] ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                  onClick={() => handleSettingChange(toggle.key, !settings[toggle.key])}
                >
                  <div className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    settings[toggle.key] ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backup & Maintenance */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Backup & Maintenance</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-4">Backup Settings</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Backup Frequency</label>
                <select 
                  value={settings.backupFrequency}
                  onChange={(e) => handleSettingChange('backupFrequency', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                  Create Backup Now
                </button>
                <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded border border-green-500/30 hover:bg-green-500/30 transition-colors">
                  Restore Backup
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Maintenance Actions</h4>
            <div className="space-y-3">
              {[
                { label: 'Clear Cache', action: 'clear-cache', icon: '🗑️' },
                { label: 'Optimize Database', action: 'optimize-db', icon: '⚡' },
                { label: 'Update System', action: 'update-system', icon: '🔄' },
                { label: 'Check Health', action: 'health-check', icon: '🏥' },
              ].map((action, index) => (
                <button key={index} className="w-full flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-xl">{action.icon}</span>
                  <span className="font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Environment Variables */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Environment Configuration</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-4">Database Settings</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                <span className="font-mono text-sm">DB_CONNECTION</span>
                <span className="text-green-400">mysql</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                <span className="font-mono text-sm">DB_POOL_SIZE</span>
                <span className="text-blue-400">10</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                <span className="font-mono text-sm">DB_TIMEOUT</span>
                <span className="text-orange-400">30s</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Cache Settings</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                <span className="font-mono text-sm">CACHE_DRIVER</span>
                <span className="text-green-400">redis</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                <span className="font-mono text-sm">CACHE_TTL</span>
                <span className="text-blue-400">3600s</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                <span className="font-mono text-sm">CACHE_SIZE</span>
                <span className="text-purple-400">256MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
