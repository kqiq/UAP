import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', lastLogin: '2 hours ago', avatar: 'JD' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@company.com', role: 'Editor', status: 'active', lastLogin: '1 day ago', avatar: 'SW' },
    { id: 3, name: 'Mike Johnson', email: 'mike@dev.com', role: 'Developer', status: 'inactive', lastLogin: '1 week ago', avatar: 'MJ' },
    { id: 4, name: 'Emma Davis', email: 'emma@design.com', role: 'Designer', status: 'active', lastLogin: '3 hours ago', avatar: 'ED' },
  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const toggleUserSelection = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">User Management</h2>
          <p className="text-gray-400">Manage user accounts and permissions</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
            Export Users
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            + Add User
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-6">
        {[
          { label: 'Total Users', value: '2,547', color: 'blue' },
          { label: 'Active Users', value: '2,234', color: 'green' },
          { label: 'Inactive Users', value: '313', color: 'gray' },
          { label: 'Admins', value: '12', color: 'purple' },
          { label: 'New Today', value: '45', color: 'orange' },
        ].map((stat, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Search users..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
            />
          </div>
          <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Developer</option>
            <option>Designer</option>
          </select>
          <select className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <div className="flex items-center gap-3 mb-4 p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg">
            <span className="text-sm font-medium">{selectedUsers.length} users selected</span>
            <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
              Activate
            </button>
            <button className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded border border-gray-500/30 hover:bg-gray-500/30 transition-colors">
              Deactivate
            </button>
            <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors">
              Delete
            </button>
          </div>
        )}

        {/* Users Table */}
        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-2">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">User</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Role</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Last Login</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-2">
                    <input 
                      type="checkbox" 
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                      className="rounded" 
                    />
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-gray-300">{user.lastLogin}</td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded border border-red-500/30 hover:bg-red-500/30 transition-colors">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-6">Create New User</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Developer</option>
                  <option>Designer</option>
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

export default UserManagement;
