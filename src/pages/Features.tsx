import { motion } from "framer-motion";
import { Shield, Zap, Globe, BarChart2, Users, Lock, Database, Code, Bell, RefreshCw, GitBranch, Terminal } from "lucide-react";

const categories = [
  {
    title: "Security & Compliance",
    icon: Shield,
    color: "text-blue-400",
    features: [
      "SOC 2 Type II certified",
      "GDPR and HIPAA compliant",
      "AES-256 encryption at rest",
      "TLS 1.3 in transit",
      "SAML / SSO support",
      "Audit logs and trails",
    ],
  },
  {
    title: "Performance",
    icon: Zap,
    color: "text-yellow-400",
    features: [
      "Sub-100ms API responses",
      "Global CDN distribution",
      "Auto-scaling infrastructure",
      "Load balancing",
      "Smart caching layer",
      "Real-time sync",
    ],
  },
  {
    title: "Analytics",
    icon: BarChart2,
    color: "text-green-400",
    features: [
      "Real-time dashboards",
      "Custom metrics builder",
      "Advanced filtering",
      "Data export (CSV/JSON)",
      "Scheduled reports",
      "API analytics",
    ],
  },
  {
    title: "Collaboration",
    icon: Users,
    color: "text-purple-400",
    features: [
      "Unlimited workspaces",
      "Role-based permissions",
      "Comment threads",
      "Version history",
      "Shared dashboards",
      "Guest access",
    ],
  },
  {
    title: "Developer Tools",
    icon: Code,
    color: "text-orange-400",
    features: [
      "RESTful API",
      "GraphQL support",
      "SDKs for 10+ languages",
      "Webhooks",
      "CLI tools",
      "OpenAPI spec",
    ],
  },
  {
    title: "Integrations",
    icon: GitBranch,
    color: "text-pink-400",
    features: [
      "Slack & Teams",
      "GitHub & GitLab",
      "AWS & GCP & Azure",
      "Zapier & Make",
      "Stripe & PayPal",
      "Custom connectors",
    ],
  },
];

export default function Features() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-[var(--accent)] font-semibold tracking-widest uppercase mb-3"
          >
            Features
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            Everything your team needs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            CloudVault is packed with powerful features to help enterprises build, scale, and secure their operations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card-glass p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center">
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h2 className="font-semibold text-[var(--text-primary)]">{cat.title}</h2>
              </div>
              <ul className="space-y-2">
                {cat.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
