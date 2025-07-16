import React, { useState } from 'react';

const ComplianceAudit = () => {
  const [selectedFramework, setSelectedFramework] = useState('gdpr');

  const complianceFrameworks = [
    { id: 'gdpr', name: 'GDPR', score: 89, status: 'compliant', requirements: 45, completed: 40 },
    { id: 'sox', name: 'SOX', score: 92, status: 'compliant', requirements: 32, completed: 29 },
    { id: 'hipaa', name: 'HIPAA', score: 76, status: 'partial', requirements: 28, completed: 21 },
    { id: 'pci', name: 'PCI DSS', score: 94, status: 'compliant', requirements: 35, completed: 33 },
  ];

  const auditLogs = [
    { id: 1, action: 'Data Export Request', user: 'john@example.com', timestamp: '2024-01-15 14:30:25', status: 'approved', risk: 'low' },
    { id: 2, action: 'Admin Access Granted', user: 'admin@company.com', timestamp: '2024-01-15 13:45:12', status: 'completed', risk: 'medium' },
    { id: 3, action: 'Data Deletion Request', user: 'user@domain.com', timestamp: '2024-01-15 12:20:08', status: 'pending', risk: 'high' },
    { id: 4, action: 'Security Policy Updated', user: 'security@admin.com', timestamp: '2024-01-15 11:15:33', status: 'completed', risk: 'low' },
  ];

  const complianceChecks = [
    { category: 'Data Protection', items: [
      { name: 'Data Encryption at Rest', status: 'compliant', lastCheck: '2 hours ago' },
      { name: 'Data Encryption in Transit', status: 'compliant', lastCheck: '2 hours ago' },
      { name: 'Access Controls', status: 'non-compliant', lastCheck: '1 day ago' },
      { name: 'Data Retention Policy', status: 'compliant', lastCheck: '3 hours ago' },
    ]},
    { category: 'User Privacy', items: [
      { name: 'Consent Management', status: 'compliant', lastCheck: '1 hour ago' },
      { name: 'Data Subject Rights', status: 'partial', lastCheck: '4 hours ago' },
      { name: 'Privacy Policy Updated', status: 'compliant', lastCheck: '1 week ago' },
      { name: 'Cookie Compliance', status: 'compliant', lastCheck: '6 hours ago' },
    ]},
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'partial': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'non-compliant': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Compliance & Audit</h2>
          <p className="text-gray-400">Monitor compliance status and audit activities</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Run Compliance Check
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
            Generate Audit Report
          </button>
        </div>
      </div>

      {/* Compliance Frameworks Overview */}
      <div className="grid grid-cols-4 gap-6">
        {complianceFrameworks.map((framework) => (
          <div key={framework.id} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">{framework.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(framework.status)}`}>
                {framework.status}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Score</span>
                <span className="font-bold text-2xl">{framework.score}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="h-2 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-1000"
                  style={{ width: `${framework.score}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{framework.completed}/{framework.requirements} requirements</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Checks */}
      <div className="grid grid-cols-2 gap-6">
        {complianceChecks.map((category, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">{category.category}</h3>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.lastCheck}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Audit Trail */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Audit Trail</h3>
          <div className="flex gap-3">
            <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
              <option>All Actions</option>
              <option>Data Access</option>
              <option>Admin Changes</option>
              <option>Security Events</option>
            </select>
            <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              Export Trail
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Action</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">User</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Timestamp</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Risk Level</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-2 font-medium">{log.action}</td>
                  <td className="py-4 px-2 text-gray-300 font-mono text-sm">{log.user}</td>
                  <td className="py-4 px-2 text-gray-300 font-mono text-sm">{log.timestamp}</td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(log.risk)}`}>
                      {log.risk}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Dashboard */}
      <div className="grid grid-cols-3 gap-6">
        {/* Risk Assessment */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Risk Assessment</h3>
          <div className="space-y-4">
            {[
              { risk: 'Data Breach', level: 'medium', probability: '15%' },
              { risk: 'Unauthorized Access', level: 'high', probability: '8%' },
              { risk: 'Compliance Violation', level: 'low', probability: '3%' },
              { risk: 'System Downtime', level: 'medium', probability: '12%' },
            ].map((risk, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="font-medium">{risk.risk}</p>
                  <p className="text-sm text-gray-400">{risk.probability} probability</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(risk.level)}`}>
                  {risk.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Subject Requests */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Data Subject Requests</h3>
          <div className="space-y-4">
            {[
              { type: 'Data Export', count: 23, pending: 5 },
              { type: 'Data Deletion', count: 12, pending: 2 },
              { type: 'Data Correction', count: 8, pending: 1 },
              { type: 'Access Request', count: 34, pending: 7 },
            ].map((request, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="font-medium">{request.type}</p>
                  <p className="text-sm text-gray-400">{request.count} total</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{request.pending}</p>
                  <p className="text-sm text-orange-400">pending</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Calendar */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Upcoming Deadlines</h3>
          <div className="space-y-4">
            {[
              { task: 'Annual Security Review', date: 'Jan 25, 2024', days: 10 },
              { task: 'GDPR Compliance Report', date: 'Feb 1, 2024', days: 17 },
              { task: 'Data Backup Verification', date: 'Jan 20, 2024', days: 5 },
              { task: 'Policy Update Review', date: 'Mar 15, 2024', days: 60 },
            ].map((deadline, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="font-medium">{deadline.task}</p>
                  <p className="text-sm text-gray-400">{deadline.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{deadline.days}</p>
                  <p className="text-sm text-gray-400">days</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceAudit;
