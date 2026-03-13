import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Code, Zap, Shield, Search, ChevronRight } from "lucide-react";

const sections = [
  {
    icon: Book,
    title: "Getting Started",
    items: ["Introduction", "Quick Start", "Installation", "Configuration", "First Project"],
  },
  {
    icon: Code,
    title: "API Reference",
    items: ["Authentication", "Endpoints", "Rate Limits", "Webhooks", "SDKs"],
  },
  {
    icon: Zap,
    title: "Integrations",
    items: ["Slack", "GitHub", "AWS", "Stripe", "Custom"],
  },
  {
    icon: Shield,
    title: "Security",
    items: ["Encryption", "Access Control", "Audit Logs", "Compliance", "SAML/SSO"],
  },
];

const codeExample = `import CloudVault from '@cloudvault/sdk';

const client = new CloudVault({
  apiKey: process.env.CLOUDVAULT_API_KEY,
  region: 'us-east-1',
});

// Create a new project
const project = await client.projects.create({
  name: 'My Project',
  team: 'engineering',
});

console.log(project.id);
`;

export default function Docs() {
  const [activeSection, setActiveSection] = useState("Introduction");

  return (
    <div className="pt-16 min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-[var(--border)] bg-[var(--bg-secondary)] p-6 fixed top-16 bottom-0 overflow-y-auto">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)]"
            />
          </div>
        </div>
        {sections.map((s) => (
          <div key={s.title} className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <s.icon className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">{s.title}</span>
            </div>
            <ul className="space-y-1 ml-6">
              {s.items.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveSection(item)}
                    className={`text-sm w-full text-left px-2 py-1.5 rounded-lg transition-all ${
                      activeSection === item
                        ? "text-[var(--accent)] bg-[var(--accent-soft)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Content */}
      <div className="flex-1 lg:ml-64 p-8">
        <div className="max-w-3xl mx-auto pt-8">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-8">
              <span>Docs</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[var(--text-primary)]">{activeSection}</span>
            </nav>

            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">{activeSection}</h1>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              Welcome to the CloudVault documentation. This guide will help you get up and running quickly
              with all the features and capabilities of the platform.
            </p>

            {activeSection === "Quick Start" || activeSection === "Introduction" ? (
              <div className="card-glass p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[var(--text-muted)] uppercase">Example</span>
                  <button className="text-xs text-[var(--accent)] hover:underline">Copy</button>
                </div>
                <pre className="text-sm text-green-400 overflow-x-auto font-mono leading-relaxed">
                  <code>{codeExample}</code>
                </pre>
              </div>
            ) : null}

            <div className="space-y-6">
              {[
                { title: "Overview", text: "CloudVault provides a comprehensive set of APIs and tools for managing your enterprise data infrastructure. The platform is designed to be simple to integrate yet powerful enough for the most demanding workloads." },
                { title: "Prerequisites", text: "Before getting started, ensure you have Node.js 18+ installed, a CloudVault account, and your API key handy. You can find your API key in the dashboard under Settings > API Keys." },
                { title: "Next Steps", text: "Once you have the basics set up, explore our advanced features including webhooks, real-time sync, and custom analytics dashboards. Check out the API reference for a complete list of available endpoints." },
              ].map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{section.title}</h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
