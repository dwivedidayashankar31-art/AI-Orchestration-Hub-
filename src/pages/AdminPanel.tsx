import { motion } from "framer-motion";
import { Users, Shield, Settings, Activity, MoreVertical, Check, X, AlertTriangle } from "lucide-react";

const users = [
  { name: "Alice Kim", email: "alice@techcorp.com", role: "Admin", status: "Active", joined: "Jan 2025" },
  { name: "Bob Chen", email: "bob@techcorp.com", role: "Developer", status: "Active", joined: "Feb 2025" },
  { name: "Carol Davis", email: "carol@techcorp.com", role: "Viewer", status: "Inactive", joined: "Mar 2025" },
  { name: "David Lee", email: "david@techcorp.com", role: "Developer", status: "Active", joined: "Apr 2025" },
  { name: "Eva Martinez", email: "eva@techcorp.com", role: "Admin", status: "Active", joined: "May 2025" },
];

const systemAlerts = [
  { type: "warning", message: "High API usage detected in Region US-East", time: "10m ago" },
  { type: "info", message: "Database backup completed successfully", time: "1h ago" },
  { type: "error", message: "Failed login attempt from unknown IP", time: "2h ago" },
];

export default function AdminPanel() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Admin Panel</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">Manage users, permissions, and system health</p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Users", value: "2,841", color: "text-blue-400" },
            { icon: Shield, label: "Security Score", value: "98/100", color: "text-green-400" },
            { icon: Activity, label: "System Health", value: "Healthy", color: "text-green-400" },
            { icon: Settings, label: "Active Configs", value: "142", color: "text-purple-400" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="card-glass p-5"
            >
              <item.icon className={`w-5 h-5 ${item.color} mb-3`} />
              <div className="text-xl font-bold text-[var(--text-primary)]">{item.value}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Users Table */}
          <div className="lg:col-span-2 card-glass overflow-hidden">
            <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
              <h2 className="font-semibold text-[var(--text-primary)]">User Management</h2>
              <button className="text-xs text-[var(--accent)] hover:underline">+ Invite User</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    {["Name", "Role", "Status", "Joined", ""].map((h) => (
                      <th key={h} className="text-left px-6 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <motion.tr
                      key={user.email}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.06 }}
                      className="border-b border-[var(--border-subtle)] hover:bg-white/2 transition-colors"
                    >
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-[var(--accent-soft)] flex items-center justify-center text-xs font-bold text-[var(--accent)]">
                            {user.name[0]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[var(--text-primary)]">{user.name}</div>
                            <div className="text-xs text-[var(--text-muted)]">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="text-xs px-2 py-1 rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <span className={`flex items-center gap-1 text-xs font-medium w-fit ${user.status === "Active" ? "text-green-400" : "text-[var(--text-muted)]"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-green-400" : "bg-gray-500"}`} />
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-xs text-[var(--text-muted)]">{user.joined}</td>
                      <td className="px-6 py-3">
                        <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* System Alerts */}
          <div className="card-glass">
            <div className="px-6 py-4 border-b border-[var(--border)]">
              <h2 className="font-semibold text-[var(--text-primary)]">System Alerts</h2>
            </div>
            <div className="p-4 space-y-3">
              {systemAlerts.map((alert, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-secondary)]">
                  {alert.type === "warning" && <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />}
                  {alert.type === "info" && <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />}
                  {alert.type === "error" && <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />}
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">{alert.message}</p>
                    <span className="text-xs text-[var(--text-muted)]">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
