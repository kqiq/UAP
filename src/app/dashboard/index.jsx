import React, { useState } from 'react';
import ApiKeyManagement from './components/ApiKeyManagement';
import SecurityPanel from './components/SecurityPanel';
import UserManagement from './components/UserManagement';
import SystemMonitoring from './components/SystemMonitoring';
import StatsOverview from './components/StatsOverview';
import FinancialManagement from './components/FinancialManagement';
import LogsViewer from './components/LogsViewer';
import NotificationCenter from './components/NotificationCenter';
import SystemSettings from './components/SystemSettings';
import AnalyticsReporting from './components/AnalyticsReporting';
import ComplianceAudit from './components/ComplianceAudit';
import IntegrationManagement from './components/IntegrationManagement';
import FileManagement from './components/FileManagement';
import CustomDashboard from './components/CustomDashboard';
import WorkflowAutomation from './components/WorkflowAutomation';
import MultiTenantManagement from './components/MultiTenantManagement';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('stats');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: 'Administrator',
    role: 'Super Admin',
    avatar: 'A',
    permissions: ['*']
  });

  const menuItems = [
    { id: 'stats', label: 'Overview', icon: '📊', category: 'main', badge: null },
    { id: 'custom', label: 'Custom Dashboard', icon: '🎨', category: 'main', badge: 'New' },
    { id: 'users', label: 'User Management', icon: '👥', category: 'main', badge: null },
    { id: 'tenants', label: 'Multi-Tenant', icon: '🏢', category: 'main', badge: 'Pro' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', category: 'communication', badge: '12' },
    { id: 'analytics', label: 'Analytics', icon: '📈', category: 'reporting', badge: null },
    { id: 'api', label: 'API Keys', icon: '🔑', category: 'integration', badge: null },
    { id: 'integrations', label: 'Integrations', icon: '🔌', category: 'integration', badge: null },
    { id: 'workflows', label: 'Automation', icon: '⚡', category: 'automation', badge: 'Beta' },
    { id: 'files', label: 'File Management', icon: '📁', category: 'system', badge: null },
    { id: 'security', label: 'Security', icon: '🛡️', category: 'security', badge: null },
    { id: 'compliance', label: 'Compliance', icon: '📋', category: 'security', badge: null },
    { id: 'monitoring', label: 'System Monitor', icon: '⚙️', category: 'system', badge: null },
    { id: 'settings', label: 'Settings', icon: '🔧', category: 'system', badge: null },
    { id: 'financial', label: 'Billing', icon: '💰', category: 'financial', badge: null },
    { id: 'logs', label: 'Logs', icon: '📝', category: 'system', badge: null },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'api': return <ApiKeyManagement />;
      case 'security': return <SecurityPanel />;
      case 'users': return <UserManagement />;
      case 'monitoring': return <SystemMonitoring />;
      case 'stats': return <StatsOverview />;
      case 'financial': return <FinancialManagement />;
      case 'logs': return <LogsViewer />;
      case 'notifications': return <NotificationCenter />;
      case 'settings': return <SystemSettings />;
      case 'analytics': return <AnalyticsReporting />;
      case 'compliance': return <ComplianceAudit />;
      case 'integrations': return <IntegrationManagement />;
      case 'files': return <FileManagement />;
      case 'custom': return <CustomDashboard />;
      case 'workflows': return <WorkflowAutomation />;
      case 'tenants': return <MultiTenantManagement />;
      default: return <StatsOverview />;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' : 'bg-gradient-to-br from-gray-100 via-white to-gray-100 text-black'}`}>
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-grid-small-white/[0.02] pointer-events-none" />
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full backdrop-blur-xl border-r transition-all duration-300 z-40 ${
        isDarkMode ? 'bg-black/40 border-blue-500/20' : 'bg-white/90 border-blue-300'
      } ${sidebarCollapsed ? 'w-20' : 'w-280'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className={`font-bold text-xl ${sidebarCollapsed ? 'hidden' : 'block'} ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Universal Admin
            </h1>
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className={`p-2 rounded-lg transition-all ${isDarkMode ? 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-400' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'}`}
            >
              {sidebarCollapsed ? '→' : '←'}
            </button>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 relative ${
                  activeTab === item.id 
                    ? isDarkMode 
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg' 
                      : 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                    : isDarkMode 
                      ? 'text-gray-300 hover:bg-blue-600/10 hover:text-blue-400'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
                {!sidebarCollapsed && item.badge && (
                  <span className={`px-2 py-1 text-xs rounded-full ml-auto ${
                    item.badge === 'New' ? 'bg-green-500 text-white' :
                    item.badge === 'Pro' ? 'bg-blue-500 text-white' :
                    item.badge === 'Beta' ? 'bg-blue-400 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-280'}`}>
        {/* Enhanced Header */}
        <header className={`backdrop-blur-xl border-b p-6 ${isDarkMode ? 'bg-black/40 border-blue-500/20' : 'bg-white/90 border-blue-300'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {menuItems.find(item => item.id === activeTab)?.label}
              </h2>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Welcome back, {currentUser.name}
              </p>
            </div>
            <div className="flex items-center gap-6">
              {/* Quick Stats */}
              <div className="flex items-center gap-6">
                <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${isDarkMode ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-100 border border-green-200'}`}>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>All Systems Online</span>
                </div>
                <div className={`px-4 py-3 rounded-lg ${isDarkMode ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-blue-100 border border-blue-200'}`}>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>1,247 Active Users</span>
                </div>
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-lg transition-all ${isDarkMode ? 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-400' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'}`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>

              {/* User Menu */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{currentUser.name}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentUser.role}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center font-bold text-white text-lg">
                  {currentUser.avatar}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-8">
          {renderContent()}
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 z-50">
        ⚡
      </button>
    </div>
  );
};

export default Dashboard;