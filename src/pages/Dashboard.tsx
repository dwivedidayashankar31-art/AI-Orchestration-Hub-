import { motion } from "framer-motion";
import {
  TrendingUp, Users, Database, Zap, Activity, Bell,
  Settings, BarChart2, FileText, Shield, ArrowUpRight, ArrowDownRight
} from "lucide-react";

const metrics = [
  { label: "Total Revenue", value: "$124,580", change: "+12.5%", up: true, icon: TrendingUp },
  { label: "Active Users", value: "48,291", change: "+8.2%", up: true, icon: Users },
  { label: "Storage Used", value: "2.4 TB", change: "+3.1%", up: true, icon: Database },
  { label: "API Requests", value: "1.2M", change: "-2.4%", up: false, icon: Activity },
];

const recentActivity = [
  { user: "Alice Kim", action: "Created new project", time: "2m ago", color: "bg-blue-500" },
  { user: "Bob Chen", action: "Updated billing info", time: "15m ago", color: "bg-green-500" },
  { user: "Carol Davis", action: "Invited 3 team members", time: "1h ago", color: "bg-purple-500" },
  { user: "David Lee", action: "Exported analytics report", time: "2h ago", color: "bg-orange-500" },
  { user: "Eva Martinez", action: "Changed access permissions", time: "3h ago", color: "bg-pink-500" },
];

const sidebarItems = [
  { icon: BarChart2, label: "Overview", active: true },
  { icon: Users, label: "Team" },
  { icon: Database, label: "Storage" },
  { icon: Activity, label: "Analytics" },
  { icon: Shield, label: "Security" },
  { icon: FileText, label: "Reports" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

export default function Dashboard() {
  return (
    <div className="pt-16 min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-56 border-r border-[var(--border)] bg-[var(--bg-secondary)] p-4 fixed top-16 bottom-0">
        <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4 px-2">
          Navigation
        </div>
        <nav className="flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                item.active
                  ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-56 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-[var(--text-primary)]">Dashboard</h1>
              <p className="text-sm text-[var(--text-secondary)]">Welcome back, welcome to CloudVault</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-xl hover:bg-[var(--accent-hover)] transition-all">
              <TrendingUp className="w-4 h-4" />
              View Report
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="card-glass p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[var(--text-muted)]">{m.label}</span>
                  <m.icon className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{m.value}</div>
                <div className={`flex items-center gap-1 text-xs font-medium ${m.up ? "text-green-400" : "text-red-400"}`}>
                  {m.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {m.change} this month
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chart */}
            <div className="lg:col-span-2 card-glass p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-[var(--text-primary)]">Revenue Overview</h2>
                <select className="text-xs bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-3 py-1.5 text-[var(--text-secondary)] outline-none">
                  <option>Last 12 months</option>
                  <option>Last 6 months</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="flex items-end gap-2 h-40">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-sm bg-gradient-to-t from-[var(--accent)] to-[var(--accent)]/40"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                  <span key={m} className="text-xs text-[var(--text-muted)]">{m}</span>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="card-glass p-6">
              <h2 className="font-semibold text-[var(--text-primary)] mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 text-white text-xs font-bold`}>
                      {item.user[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[var(--text-primary)] truncate">{item.user}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{item.action}</div>
                    </div>
                    <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
