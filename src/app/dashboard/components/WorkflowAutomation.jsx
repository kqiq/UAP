import React, { useState } from 'react';

const WorkflowAutomation = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const workflows = [
    {
      id: 1,
      name: 'User Onboarding',
      description: 'Automate new user registration process',
      status: 'active',
      triggers: 3,
      actions: 7,
      executions: 1247,
      lastRun: '2 hours ago',
      success_rate: 98.5
    },
    {
      id: 2,
      name: 'Invoice Processing',
      description: 'Auto-generate and send invoices',
      status: 'active',
      triggers: 2,
      actions: 5,
      executions: 456,
      lastRun: '30 min ago',
      success_rate: 99.2
    },
    {
      id: 3,
      name: 'Security Alert Response',
      description: 'Immediate response to security threats',
      status: 'paused',
      triggers: 4,
      actions: 12,
      executions: 89,
      lastRun: '1 day ago',
      success_rate: 95.5
    }
  ];

  const workflowTemplates = [
    { name: 'Data Backup', category: 'system', icon: '💾', description: 'Automated data backup workflow' },
    { name: 'Email Campaign', category: 'marketing', icon: '📧', description: 'Automated email marketing sequences' },
    { name: 'Report Generation', category: 'reporting', icon: '📊', description: 'Scheduled report generation and distribution' },
    { name: 'User Notifications', category: 'communication', icon: '🔔', description: 'Smart notification workflows' },
    { name: 'Payment Processing', category: 'finance', icon: '💳', description: 'Automated payment and billing workflows' },
    { name: 'Content Moderation', category: 'content', icon: '🛡️', description: 'Automated content review and moderation' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'paused': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'error': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Workflow Automation</h2>
          <p className="text-gray-400">Create and manage automated business processes</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
            📥 Import Workflow
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            ⚡ Create Workflow
          </button>
        </div>
      </div>

      {/* Workflow Stats */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { label: 'Active Workflows', value: '23', change: '+3', icon: '⚡' },
          { label: 'Total Executions', value: '12.5K', change: '+847', icon: '🔄' },
          { label: 'Success Rate', value: '98.2%', change: '+0.3%', icon: '✅' },
          { label: 'Time Saved', value: '342h', change: '+45h', icon: '⏰' },
        ].map((stat, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Workflows */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Active Workflows</h3>
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-xl">
                  ⚡
                </div>
                <div>
                  <h4 className="font-medium text-lg">{workflow.name}</h4>
                  <p className="text-sm text-gray-400 mb-1">{workflow.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{workflow.triggers} triggers</span>
                    <span>{workflow.actions} actions</span>
                    <span>{workflow.executions} executions</span>
                    <span>Last run: {workflow.lastRun}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                    {workflow.status}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">{workflow.success_rate}% success</p>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedWorkflow(workflow)}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  >
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 hover:bg-green-500/30 transition-colors">
                    Run
                  </button>
                  <button className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded border border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                    Pause
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Templates */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Workflow Templates</h3>
        <div className="grid grid-cols-3 gap-4">
          {workflowTemplates.map((template, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{template.icon}</span>
                <h4 className="font-medium">{template.name}</h4>
              </div>
              <p className="text-sm text-gray-400 mb-4">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 capitalize">{template.category}</span>
                <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Builder Preview */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Workflow Builder</h3>
        <div className="bg-white/5 rounded-lg p-8 border-2 border-dashed border-white/20">
          <div className="text-center">
            <div className="text-6xl mb-4">🔧</div>
            <h4 className="text-xl font-bold mb-2">Visual Workflow Builder</h4>
            <p className="text-gray-400 mb-6">Drag and drop interface for creating complex automation workflows</p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
              Launch Builder
            </button>
          </div>
        </div>
      </div>

      {/* Create Workflow Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-8 w-full max-w-lg">
            <h3 className="text-xl font-bold mb-6">Create New Workflow</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Workflow Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea rows="3" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>System</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Communication</option>
                  <option>Content</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Trigger</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none">
                  <option>User Registration</option>
                  <option>Payment Received</option>
                  <option>File Upload</option>
                  <option>Schedule</option>
                  <option>API Call</option>
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
                  Create Workflow
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowAutomation;
