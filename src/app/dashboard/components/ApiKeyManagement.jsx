import React, { useState } from 'react';

const ApiKeyManagement = () => {
  const [keys, setKeys] = useState([
    { id: 1, name: 'Production API', key: 'pk_live_**********************', status: 'active', created: '2024-01-15', usage: '1.2M' },
    { id: 2, name: 'Development API', key: 'pk_test_**********************', status: 'active', created: '2024-01-10', usage: '450K' },
    { id: 3, name: 'Mobile App API', key: 'pk_mobile_********************', status: 'inactive', created: '2024-01-05', usage: '23K' },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">API Key Management</h2>
          <p className="text-gray-400">Manage and monitor your API keys</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
        >
          + Create New Key
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Total Keys', value: '12', color: 'blue' },
          { label: 'Active Keys', value: '8', color: 'green' },
          { label: 'Total Requests', value: '2.1M', color: 'purple' },
          { label: 'Rate Limit Hits', value: '234', color: 'orange' },
        ].map((stat, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* API Keys Table */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">API Keys</h3>
        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Name</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Key</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Created</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Usage</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((key) => (
                <tr key={key.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-2 font-medium">{key.name}</td>
                  <td className="py-4 px-2 font-mono text-sm text-gray-300">{key.key}</td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      key.status === 'active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {key.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-gray-300">{key.created}</td>
                  <td className="py-4 px-2 text-gray-300">{key.usage}</td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors">
                        Revoke
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-6">Create New API Key</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Key Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="Enter key name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Permissions</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>Read Only</option>
                  <option>Read/Write</option>
                  <option>Admin</option>
                </select>
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
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiKeyManagement;
