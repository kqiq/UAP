import React from 'react';

const StatsOverview = () => {
  const stats = [
    { label: 'Total Users', value: '12,543', change: '+12%', color: 'from-blue-500 to-cyan-500' },
    { label: 'Revenue', value: '$45,231', change: '+23%', color: 'from-green-500 to-emerald-500' },
    { label: 'API Calls', value: '1.2M', change: '+8%', color: 'from-purple-500 to-violet-500' },
    { label: 'System Load', value: '67%', change: '-5%', color: 'from-orange-500 to-red-500' },
  ];

  const activities = [
    { action: 'New user registration', user: 'john@example.com', time: '2 min ago' },
    { action: 'API key generated', user: 'admin@company.com', time: '5 min ago' },
    { action: 'Security alert resolved', user: 'security@system.com', time: '12 min ago' },
    { action: 'Payment processed', user: 'billing@service.com', time: '18 min ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" 
                 style={{background: `linear-gradient(to right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`}} />
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${stat.color} animate-pulse`} />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className={`text-sm font-medium ${stat.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="col-span-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Performance Analytics</h3>
          <div className="h-64 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-white/[0.05]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/30 to-transparent" />
            <div className="absolute bottom-10 left-1/4 w-2 h-20 bg-gradient-to-t from-purple-500 to-purple-400 rounded-full" />
            <div className="absolute bottom-10 left-1/2 w-2 h-16 bg-gradient-to-t from-blue-500 to-blue-400 rounded-full" />
            <div className="absolute bottom-10 right-1/4 w-2 h-24 bg-gradient-to-t from-green-500 to-green-400 rounded-full" />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse" />
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-400">{activity.user}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">System Status</h3>
        <div className="grid grid-cols-6 gap-4">
          {['Database', 'API Server', 'CDN', 'Cache', 'Queue', 'Storage'].map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full animate-pulse" />
              </div>
              <p className="text-sm font-medium text-gray-300">{service}</p>
              <p className="text-xs text-green-400">Online</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
