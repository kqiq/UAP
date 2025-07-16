import React, { useState } from 'react';

const CustomDashboard = () => {
  const [editMode, setEditMode] = useState(false);
  const [widgets, setWidgets] = useState([
    { id: 1, type: 'metric', title: 'Total Users', value: '12,547', position: { x: 0, y: 0, w: 3, h: 2 } },
    { id: 2, type: 'chart', title: 'Revenue Trend', position: { x: 3, y: 0, w: 6, h: 4 } },
    { id: 3, type: 'activity', title: 'Recent Activity', position: { x: 9, y: 0, w: 3, h: 6 } },
    { id: 4, type: 'metric', title: 'API Calls', value: '2.1M', position: { x: 0, y: 2, w: 3, h: 2 } },
  ]);

  const availableWidgets = [
    { type: 'metric', name: 'Metric Card', icon: '📊', description: 'Display key performance indicators' },
    { type: 'chart', name: 'Chart Widget', icon: '📈', description: 'Interactive charts and graphs' },
    { type: 'table', name: 'Data Table', icon: '📋', description: 'Tabular data display' },
    { type: 'activity', name: 'Activity Feed', icon: '📝', description: 'Real-time activity updates' },
    { type: 'map', name: 'World Map', icon: '🗺️', description: 'Geographic data visualization' },
    { type: 'calendar', name: 'Calendar', icon: '📅', description: 'Schedule and events' },
  ];

  const renderWidget = (widget) => {
    const baseClasses = "bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all";
    
    switch (widget.type) {
      case 'metric':
        return (
          <div className={baseClasses}>
            <h3 className="text-gray-400 text-sm font-medium mb-2">{widget.title}</h3>
            <p className="text-3xl font-bold golden-text">{widget.value}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-400 text-sm">+12.5%</span>
              <span className="text-gray-400 text-sm">vs last month</span>
            </div>
          </div>
        );
      
      case 'chart':
        return (
          <div className={baseClasses}>
            <h3 className="text-xl font-bold mb-4">{widget.title}</h3>
            <div className="h-48 bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full">
                <path 
                  d="M 0 150 Q 50 120 100 130 T 200 100 T 300 110 T 400 80"
                  stroke="#3b82f6" 
                  strokeWidth="3" 
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        );
      
      case 'activity':
        return (
          <div className={baseClasses}>
            <h3 className="text-xl font-bold mb-4">{widget.title}</h3>
            <div className="space-y-3">
              {[
                { action: 'User login', user: 'john@example.com', time: '2 min ago' },
                { action: 'File uploaded', user: 'admin@system.com', time: '5 min ago' },
                { action: 'Payment processed', user: 'billing@service.com', time: '8 min ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div className={baseClasses}>
            <h3 className="text-xl font-bold mb-4">{widget.title}</h3>
            <p className="text-gray-400">Widget content goes here</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Custom Dashboard</h2>
          <p className="text-gray-400">Build your personalized dashboard experience</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setEditMode(!editMode)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              editMode 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {editMode ? '✅ Save Layout' : '✏️ Edit Mode'}
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
            📤 Export Dashboard
          </button>
        </div>
      </div>

      {editMode && (
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Available Widgets</h3>
          <div className="grid grid-cols-6 gap-4">
            {availableWidgets.map((widget, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer border border-white/10">
                <div className="text-center">
                  <div className="text-2xl mb-2">{widget.icon}</div>
                  <h4 className="font-medium text-sm mb-1">{widget.name}</h4>
                  <p className="text-xs text-gray-400">{widget.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6 auto-rows-min">
        {widgets.map((widget) => (
          <div 
            key={widget.id}
            className={`col-span-${widget.position.w} relative ${editMode ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}
            style={{ 
              gridColumn: `span ${widget.position.w}`,
              minHeight: `${widget.position.h * 120}px`
            }}
          >
            {editMode && (
              <div className="absolute top-2 right-2 z-10 flex gap-1">
                <button className="w-6 h-6 bg-blue-500 rounded text-white text-xs hover:bg-blue-600">✏️</button>
                <button className="w-6 h-6 bg-red-500 rounded text-white text-xs hover:bg-red-600">❌</button>
              </div>
            )}
            {renderWidget(widget)}
          </div>
        ))}
      </div>

      {/* Dashboard Templates */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Dashboard Templates</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { name: 'Executive Overview', description: 'High-level metrics and KPIs', icon: '👔' },
            { name: 'Operations Dashboard', description: 'System monitoring and alerts', icon: '⚙️' },
            { name: 'Sales Analytics', description: 'Revenue and conversion tracking', icon: '💰' },
            { name: 'User Insights', description: 'User behavior and engagement', icon: '👥' },
          ].map((template, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div className="text-center">
                <div className="text-3xl mb-3">{template.icon}</div>
                <h4 className="font-medium mb-2">{template.name}</h4>
                <p className="text-sm text-gray-400 mb-4">{template.description}</p>
                <button className="w-full px-3 py-2 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDashboard;
