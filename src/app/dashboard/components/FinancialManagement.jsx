import React from 'react';

const FinancialManagement = () => {
  const transactions = [
    {
      id: 1,
      type: 'income',
      description: 'Website Design',
      amount: '+$2,500',
      user: 'John Doe',
      date: '2023-10-01',
      status: 'completed',
    },
    {
      id: 2,
      type: 'expense',
      description: 'Monthly Subscription',
      amount: '-$300',
      user: 'Jane Smith',
      date: '2023-10-05',
      status: 'completed',
    },
    {
      id: 3,
      type: 'refund',
      description: 'Refund for Order #1234',
      amount: '-$150',
      user: 'Mary Johnson',
      date: '2023-10-10',
      status: 'pending',
    },
  ];

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'income':
        return '💰';
      case 'expense':
        return '📉';
      case 'refund':
        return '🔄';
      default:
        return '📦';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Financial Management</h2>

      {/* Recent Transactions */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Recent Transactions</h3>
          <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            Export CSV
          </button>
        </div>
        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Transaction</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Amount</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">User</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Date</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-2 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getTransactionIcon(transaction.type)}</span>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-gray-400 capitalize">{transaction.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <span className={`font-bold ${
                      transaction.amount.includes('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-gray-300">{transaction.user}</td>
                  <td className="py-4 px-2 text-gray-300">{transaction.date}</td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      transaction.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                        View
                      </button>
                      {transaction.type === 'refund' && (
                        <button className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded border border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                          Process
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Insights */}
      <div className="grid grid-cols-2 gap-6">
        {/* Payment Methods */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Payment Methods</h3>
          <div className="space-y-4">
            {[
              { method: 'Credit Card', percentage: 45, amount: '$110,450', color: 'blue' },
              { method: 'PayPal', percentage: 30, amount: '$73,670', color: 'purple' },
              { method: 'Bank Transfer', percentage: 20, amount: '$49,180', color: 'green' },
              { method: 'Crypto', percentage: 5, amount: '$12,295', color: 'orange' },
            ].map((payment, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded bg-${payment.color}-500`} />
                  <span className="font-medium">{payment.method}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold">{payment.amount}</p>
                  <p className="text-sm text-gray-400">{payment.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Goals */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Financial Goals</h3>
          <div className="space-y-6">
            {[
              { goal: 'Monthly Revenue', current: 245890, target: 300000, label: '$245,890 / $300,000' },
              { goal: 'New Subscriptions', current: 1247, target: 1500, label: '1,247 / 1,500' },
              { goal: 'Cost Reduction', current: 15, target: 20, label: '15% / 20%' },
            ].map((goal, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{goal.goal}</span>
                  <span className="text-sm text-gray-400">{goal.label}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-1000"
                    style={{ width: `${(goal.current / goal.target) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {Math.round((goal.current / goal.target) * 100)}% complete
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialManagement;