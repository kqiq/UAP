import React, { useState } from 'react';

const AnalyticsReporting = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('users');

  const analyticsData = {
    users: { current: 12547, previous: 11234, change: '+11.7%' },
    sessions: { current: 45231, previous: 43012, change: '+5.2%' },
    pageViews: { current: 234567, previous: 198432, change: '+18.2%' },
    bounceRate: { current: 23.4, previous: 28.1, change: '-16.7%' },
  };

  const reports = [
    { name: 'User Activity Report', lastGenerated: '2 hours ago', size: '2.3MB', type: 'PDF' },
    { name: 'Financial Summary', lastGenerated: '1 day ago', size: '1.8MB', type: 'Excel' },
    { name: 'Security Audit Log', lastGenerated: '3 hours ago', size: '5.2MB', type: 'CSV' },
    { name: 'Performance Metrics', lastGenerated: '30 min ago', size: '1.1MB', type: 'PDF' },
  ];

  const topPages = [
    { page: '/dashboard', views: 45231, uniqueUsers: 12547, bounceRate: '23%' },
    { page: '/users', views: 23456, uniqueUsers: 8934, bounceRate: '18%' },
    { page: '/settings', views: 15678, uniqueUsers: 6789, bounceRate: '32%' },
    { page: '/analytics', views: 12345, uniqueUsers: 5432, bounceRate: '28%' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Analytics & Reporting</h2>
          <p className="text-gray-400">Track performance and generate detailed reports</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
          >
            <option value="1d">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        {Object.entries(analyticsData).map(([key, data]) => (
          <div key={key} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
            <h3 className="text-gray-400 text-sm font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{data.current.toLocaleString()}</span>
              <span className={`text-sm font-medium ${data.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                {data.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="col-span-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Traffic Analytics</h3>
            <select 
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"
            >
              <option value="users">Users</option>
              <option value="sessions">Sessions</option>
              <option value="pageViews">Page Views</option>
              <option value="revenue">Revenue</option>
            </select>
          </div>
          <div className="h-64 relative bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-white/[0.05]" />
            {/* Simulated Chart */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <path 
                d="M 0 200 Q 50 150 100 160 T 200 120 T 300 140 T 400 100"
                stroke="#3b82f6" 
                strokeWidth="3" 
                fill="none"
                className="animate-pulse"
              />
              <path 
                d="M 0 200 Q 50 150 100 160 T 200 120 T 300 140 T 400 100 L 400 256 L 0 256 Z"
                fill="url(#chartGradient)" 
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Real-time Activity</h3>
          <div className="space-y-4">
            {[
              { metric: 'Active Users', value: '1,247', change: '+23' },
              { metric: 'Page Views/min', value: '89', change: '+12' },
              { metric: 'API Calls/min', value: '456', change: '-8' },
              { metric: 'Server Load', value: '67%', change: '+5%' },
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="font-medium">{stat.metric}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <span className={`text-sm font-medium ${stat.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages & Reports */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Top Pages</h3>
          <div className="space-y-3">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
                <div>
                  <p className="font-medium font-mono">{page.page}</p>
                  <p className="text-sm text-gray-400">{page.views.toLocaleString()} views</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{page.uniqueUsers.toLocaleString()} users</p>
                  <p className="text-sm text-gray-400">{page.bounceRate} bounce</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generated Reports */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Generated Reports</h3>
          <div className="space-y-3">
            {reports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📊</span>
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-gray-400">{report.lastGenerated} • {report.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-500/30">
                    {report.type}
                  </span>
                  <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 hover:bg-green-500/30 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Report Builder */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Custom Report Builder</h3>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Report Type</label>
            <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
              <option>User Analytics</option>
              <option>Financial Report</option>
              <option>Security Audit</option>
              <option>Performance Metrics</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Date Range</label>
            <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Format</label>
            <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
              <option>JSON</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReporting;
