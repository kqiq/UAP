import React, { useState } from 'react';

const IntegrationManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const integrations = [
    { id: 1, name: 'Stripe', category: 'payment', status: 'connected', health: 'healthy', apiCalls: '2.3M', lastSync: '2 min ago', version: 'v3.2.1' },
    { id: 2, name: 'SendGrid', category: 'email', status: 'connected', health: 'healthy', apiCalls: '156K', lastSync: '5 min ago', version: 'v4.1.0' },
    { id: 3, name: 'AWS S3', category: 'storage', status: 'connected', health: 'warning', apiCalls: '890K', lastSync: '1 hour ago', version: 'v2.8.3' },
    { id: 4, name: 'Slack', category: 'communication', status: 'disconnected', health: 'error', apiCalls: '45K', lastSync: '2 days ago', version: 'v1.9.2' },
    { id: 5, name: 'Google Analytics', category: 'analytics', status: 'connected', health: 'healthy', apiCalls: '678K', lastSync: '15 min ago', version: 'v4.0.0' },
    { id: 6, name: 'Twilio', category: 'communication', status: 'connected', health: 'healthy', apiCalls: '23K', lastSync: '30 min ago', version: 'v2.1.5' },
  ];

  const categories = [
    { id: 'all', label: 'All Integrations', count: integrations.length },
    { id: 'payment', label: 'Payment', count: integrations.filter(i => i.category === 'payment').length },
    { id: 'email', label: 'Email', count: integrations.filter(i => i.category === 'email').length },
    { id: 'storage', label: 'Storage', count: integrations.filter(i => i.category === 'storage').length },
    { id: 'communication', label: 'Communication', count: integrations.filter(i => i.category === 'communication').length },
    { id: 'analytics', label: 'Analytics', count: integrations.filter(i => i.category === 'analytics').length },
  ];

  const availableIntegrations = [
    { name: 'PayPal', category: 'payment', description: 'Process payments with PayPal', icon: '💰' },
    { name: 'Mailchimp', category: 'email', description: 'Email marketing automation', icon: '📧' },
    { name: 'Google Drive', category: 'storage', description: 'Cloud file storage', icon: '☁️' },
    { name: 'Discord', category: 'communication', description: 'Team communication', icon: '💬' },
    { name: 'Mixpanel', category: 'analytics', description: 'Advanced analytics', icon: '📊' },
    { name: 'Firebase', category: 'database', description: 'Real-time database', icon: '🔥' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'disconnected': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getHealthColor = (health) => {
    switch (health) {
      case 'healthy': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'warning': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'error': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'payment': return '💳';
      case 'email': return '📧';
      case 'storage': return '🗄️';
      case 'communication': return '💬';
      case 'analytics': return '📊';
      case 'database': return '🗃️';
      default: return '🔌';
    }
  };

  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(i => i.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Integration Management</h2>
          <p className="text-gray-400">Manage third-party APIs and service integrations</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
            Test All Connections
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            + Add Integration
          </button>
        </div>
      </div>

      {/* Integration Categories */}
      <div className="grid grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-4 rounded-xl transition-all ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20'
            }`}
          >
            <h3 className="font-medium">{category.label}</h3>
            <p className="text-2xl font-bold mt-1">{category.count}</p>
          </button>
        ))}
      </div>

      {/* Integration Stats */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Total API Calls', value: '4.2M', change: '+12%', icon: '📡' },
          { label: 'Active Integrations', value: '5', change: '+1', icon: '✅' },
          { label: 'Response Time', value: '145ms', change: '-8ms', icon: '⚡' },
          { label: 'Error Rate', value: '0.03%', change: '-0.01%', icon: '🚨' },
        ].map((stat, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className={`text-sm font-medium ${stat.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Integrations */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Active Integrations</h3>
        <div className="grid gap-4">
          {filteredIntegrations.map((integration) => (
            <div key={integration.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl">
                  {getCategoryIcon(integration.category)}
                </div>
                <div>
                  <h4 className="font-medium text-lg">{integration.name}</h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-400 capitalize">{integration.category}</span>
                    <span className="text-sm text-gray-400">v{integration.version}</span>
                    <span className="text-sm text-gray-400">{integration.apiCalls} calls</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(integration.status)}`}>
                      {integration.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getHealthColor(integration.health)}`}>
                      {integration.health}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Last sync: {integration.lastSync}</p>
                </div>
                
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    Configure
                  </button>
                  <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 hover:bg-green-500/30 transition-colors">
                    Test
                  </button>
                  <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors">
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Integrations */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Available Integrations</h3>
        <div className="grid grid-cols-3 gap-4">
          {availableIntegrations.map((integration, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{integration.icon}</span>
                <h4 className="font-medium">{integration.name}</h4>
              </div>
              <p className="text-sm text-gray-400 mb-4">{integration.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 capitalize">{integration.category}</span>
                <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Logs */}
      <div className="grid grid-cols-2 gap-6">
        {/* API Usage Chart */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">API Usage Trends</h3>
          <div className="h-48 relative bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-white/[0.05]" />
            <svg className="absolute inset-0 w-full h-full">
              <path 
                d="M 0 160 Q 50 140 100 150 T 200 120 T 300 130 T 400 100"
                stroke="#3b82f6" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"
              />
              <path 
                d="M 0 180 Q 50 170 100 175 T 200 160 T 300 165 T 400 140"
                stroke="#10b981" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"
              />
            </svg>
            <div className="absolute bottom-4 left-4 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded" />
                <span className="text-sm text-gray-300">API Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded" />
                <span className="text-sm text-gray-300">Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { action: 'Stripe webhook received', time: '2 min ago', status: 'success' },
              { action: 'SendGrid email sent', time: '5 min ago', status: 'success' },
              { action: 'S3 upload failed', time: '1 hour ago', status: 'error' },
              { action: 'Slack connection restored', time: '2 hours ago', status: 'success' },
              { action: 'Analytics data synced', time: '3 hours ago', status: 'success' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500 animate-pulse' : 'bg-red-500 animate-pulse'
                  }`} />
                  <span className="font-medium">{activity.action}</span>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Integration Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-6">Add New Integration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>Payment</option>
                  <option>Email</option>
                  <option>Storage</option>
                  <option>Communication</option>
                  <option>Analytics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">API Key</label>
                <input type="password" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Webhook URL</label>
                <input type="url" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-3 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationManagement;
