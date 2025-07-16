import React, { useState } from 'react';

const NotificationCenter = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const notifications = [
    { id: 1, type: 'security', title: 'Security Alert', message: 'Failed login attempts detected', time: '5 min ago', read: false, priority: 'high' },
    { id: 2, type: 'system', title: 'System Update', message: 'Server maintenance scheduled for tonight', time: '1 hour ago', read: true, priority: 'medium' },
    { id: 3, type: 'billing', title: 'Payment Received', message: 'Payment of $299.99 processed successfully', time: '2 hours ago', read: false, priority: 'low' },
    { id: 4, type: 'user', title: 'New User Registration', message: '15 new users registered today', time: '3 hours ago', read: true, priority: 'medium' },
    { id: 5, type: 'integration', title: 'API Rate Limit', message: 'Approaching API rate limit threshold', time: '4 hours ago', read: false, priority: 'high' },
  ];

  const notificationTypes = [
    { id: 'all', label: 'All Notifications', count: notifications.length },
    { id: 'security', label: 'Security', count: notifications.filter(n => n.type === 'security').length },
    { id: 'system', label: 'System', count: notifications.filter(n => n.type === 'system').length },
    { id: 'billing', label: 'Billing', count: notifications.filter(n => n.type === 'billing').length },
    { id: 'user', label: 'Users', count: notifications.filter(n => n.type === 'user').length },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'security': return '🛡️';
      case 'system': return '⚙️';
      case 'billing': return '💰';
      case 'user': return '👥';
      case 'integration': return '🔌';
      default: return '📧';
    }
  };

  const filteredNotifications = selectedType === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === selectedType);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Notification Center</h2>
          <p className="text-gray-400">Manage system notifications and communications</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
            Mark All Read
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            + Create Notification
          </button>
        </div>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-5 gap-6">
        {notificationTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`p-4 rounded-xl transition-all ${
              selectedType === type.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20'
            }`}
          >
            <h3 className="font-medium">{type.label}</h3>
            <p className="text-2xl font-bold mt-1">{type.count}</p>
          </button>
        ))}
      </div>

      {/* Communication Channels */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { channel: 'Email', sent: '2,456', delivered: '98.5%', icon: '📧' },
          { channel: 'SMS', sent: '1,234', delivered: '99.2%', icon: '📱' },
          { channel: 'Push', sent: '3,567', delivered: '85.3%', icon: '🔔' },
          { channel: 'In-App', sent: '4,789', delivered: '100%', icon: '💬' },
        ].map((channel, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{channel.icon}</span>
              <h3 className="font-medium">{channel.channel}</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Sent</span>
                <span className="font-bold">{channel.sent}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Delivered</span>
                <span className="text-green-400 font-bold">{channel.delivered}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Notifications List */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Recent Notifications</h3>
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <div key={notification.id} className={`p-4 rounded-lg border transition-all hover:bg-white/5 ${
              notification.read ? 'border-white/5 bg-white/2' : 'border-blue-500/30 bg-blue-500/5'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{getTypeIcon(notification.type)}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(notification.priority)}`}>
                        {notification.priority}
                      </span>
                      {!notification.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      )}
                    </div>
                    <p className="text-gray-300 mb-2">{notification.message}</p>
                    <p className="text-sm text-gray-400">{notification.time}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    View
                  </button>
                  <button className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded border border-gray-500/30 hover:bg-gray-500/30 transition-colors">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Templates */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Message Templates</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: 'Welcome Email', type: 'email', usage: '234 times' },
            { name: 'Security Alert', type: 'sms', usage: '45 times' },
            { name: 'Payment Reminder', type: 'email', usage: '189 times' },
            { name: 'System Maintenance', type: 'push', usage: '12 times' },
            { name: 'Password Reset', type: 'email', usage: '78 times' },
            { name: 'Account Suspended', type: 'email', usage: '23 times' },
          ].map((template, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="font-medium mb-2">{template.name}</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400 capitalize">{template.type}</span>
                <span className="text-sm text-green-400">{template.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Notification Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-6">Create Notification</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>Security</option>
                  <option>System</option>
                  <option>Billing</option>
                  <option>User</option>
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
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
