import React, { useState } from 'react';

const MultiTenantManagement = () => {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const tenants = [
    {
      id: 1,
      name: 'Acme Corporation',
      domain: 'acme.example.com',
      plan: 'Enterprise',
      users: 247,
      storage: '15GB',
      status: 'active',
      created: '2024-01-15',
      lastActivity: '2 hours ago',
      revenue: '$2,450/mo'
    },
    {
      id: 2,
      name: 'Tech Startup Inc',
      domain: 'techstartup.example.com',
      plan: 'Professional',
      users: 89,
      storage: '5GB',
      status: 'active',
      created: '2024-01-10',
      lastActivity: '30 min ago',
      revenue: '$890/mo'
    },
    {
      id: 3,
      name: 'Digital Agency',
      domain: 'agency.example.com',
      plan: 'Basic',
      users: 23,
      storage: '2GB',
      status: 'suspended',
      created: '2024-01-05',
      lastActivity: '3 days ago',
      revenue: '$290/mo'
    }
  ];

  const tenantPlans = [
    { name: 'Basic', price: '$29/mo', users: 25, storage: '5GB', features: ['Basic Support', 'Core Features'] },
    { name: 'Professional', price: '$89/mo', users: 100, storage: '25GB', features: ['Priority Support', 'Advanced Features', 'API Access'] },
    { name: 'Enterprise', price: '$249/mo', users: 500, storage: '100GB', features: ['24/7 Support', 'All Features', 'Custom Integration'] },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'suspended': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'trial': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getPlanColor = (plan) => {
    switch (plan) {
      case 'Enterprise': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      case 'Professional': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'Basic': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Multi-Tenant Management</h2>
          <p className="text-gray-400">Manage organizations and their resources</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
            📊 Global Analytics
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            🏢 Add Tenant
          </button>
        </div>
      </div>

      {/* Tenant Overview Stats */}
      <div className="grid grid-cols-5 gap-6">
        {[
          { label: 'Total Tenants', value: '342', change: '+23', icon: '🏢' },
          { label: 'Active Users', value: '12.5K', change: '+247', icon: '👥' },
          { label: 'Monthly Revenue', value: '$45.2K', change: '+12%', icon: '💰' },
          { label: 'Storage Used', value: '2.3TB', change: '+150GB', icon: '💾' },
          { label: 'Support Tickets', value: '89', change: '-12', icon: '🎫' },
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

      {/* Tenant List */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Tenant Organizations</h3>
          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="Search tenants..."
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
            />
            <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
              <option>All Plans</option>
              <option>Enterprise</option>
              <option>Professional</option>
              <option>Basic</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {tenants.map((tenant) => (
            <div key={tenant.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-lg">
                  {tenant.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-lg">{tenant.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{tenant.domain}</span>
                    <span>{tenant.users} users</span>
                    <span>{tenant.storage} used</span>
                    <span>Created {tenant.created}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPlanColor(tenant.plan)}`}>
                      {tenant.plan}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(tenant.status)}`}>
                      {tenant.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-green-400 font-medium">{tenant.revenue}</span>
                    <span className="text-gray-400">{tenant.lastActivity}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedTenant(tenant)}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  >
                    Manage
                  </button>
                  <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 hover:bg-green-500/30 transition-colors">
                    Impersonate
                  </button>
                  <button className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded border border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                    Suspend
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Subscription Plans</h3>
        <div className="grid grid-cols-3 gap-6">
          {tenantPlans.map((plan, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <p className="text-3xl font-bold golden-text mb-1">{plan.price}</p>
                <p className="text-sm text-gray-400">per organization</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Users</span>
                  <span className="font-medium">{plan.users}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Storage</span>
                  <span className="font-medium">{plan.storage}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Features:</p>
                  {plan.features.map((feature, fIndex) => (
                    <p key={fIndex} className="text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
              
              <button className="w-full px-4 py-2 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                Edit Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Usage Overview */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Resource Usage by Plan</h3>
          <div className="space-y-4">
            {tenantPlans.map((plan, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded">
                <span className="font-medium">{plan.name}</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${(index + 1) * 30}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{(index + 1) * 30}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Recent Tenant Activity</h3>
          <div className="space-y-3">
            {[
              { tenant: 'Acme Corporation', action: 'Upgraded to Enterprise', time: '2 hours ago' },
              { tenant: 'Tech Startup Inc', action: 'Added 15 new users', time: '4 hours ago' },
              { tenant: 'Digital Agency', action: 'Payment failed', time: '1 day ago' },
              { tenant: 'Global Corp', action: 'Created new tenant', time: '2 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-white/5 rounded transition-colors">
                <div>
                  <p className="font-medium">{activity.tenant}</p>
                  <p className="text-sm text-gray-400">{activity.action}</p>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Tenant Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-8 w-full max-w-lg">
            <h3 className="text-xl font-bold mb-6">Create New Tenant</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Organization Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Domain</label>
                <input type="text" placeholder="company.example.com" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subscription Plan</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>Basic - $29/mo</option>
                  <option>Professional - $89/mo</option>
                  <option>Enterprise - $249/mo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Admin Email</label>
                <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
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
                  Create Tenant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiTenantManagement;
