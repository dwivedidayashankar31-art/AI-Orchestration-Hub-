import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Shield, Zap, Globe, BarChart2, Users, Lock,
  Check, Star, ChevronRight, Sparkles, TrendingUp, Database
} from "lucide-react";

const features = [
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and compliance for your data." },
  { icon: Zap, title: "Lightning Fast", desc: "Sub-100ms response times across all global regions." },
  { icon: Globe, title: "Global Scale", desc: "Deploy to 150+ regions with 99.99% uptime SLA." },
  { icon: BarChart2, title: "Advanced Analytics", desc: "Real-time insights and custom reporting dashboards." },
  { icon: Users, title: "Team Collaboration", desc: "Seamlessly collaborate with unlimited team members." },
  { icon: Lock, title: "Access Control", desc: "Fine-grained permissions and role-based access." },
];

const stats = [
  { value: "50K+", label: "Active Teams" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "150+", label: "Countries" },
  { value: "$2B+", label: "Data Managed" },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    text: "CloudVault transformed how we manage our enterprise data. The analytics alone saved us 40 hours per week.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "VP Engineering, DataFlow",
    text: "The security features and compliance tools made our SOC 2 audit a breeze. Highly recommend.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Head of Ops, Nexus",
    text: "Migrated from three different tools to CloudVault in a weekend. Incredible platform.",
    rating: 5,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function LandingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent-glow)] blur-[120px] opacity-30 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Trusted by 50,000+ teams worldwide
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            The Enterprise Platform
            <br />
            <span className="text-gradient-blue">Built for Scale</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            CloudVault gives your team the infrastructure, analytics, and security controls
            to build and scale enterprise software — without the complexity.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/signup"
              className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-xl transition-all glow-blue text-sm"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] hover:border-[var(--accent)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium rounded-xl transition-all text-sm"
            >
              View Demo
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-5xl mx-auto mt-20"
        >
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-[var(--text-muted)]">app.cloudvault.io/dashboard</span>
            </div>
            <div className="p-6 grid grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { label: "Revenue", value: "$124,580", change: "+12.5%", icon: TrendingUp },
                { label: "Users", value: "48,291", change: "+8.2%", icon: Users },
                { label: "Storage", value: "2.4 TB", change: "+3.1%", icon: Database },
                { label: "Uptime", value: "99.99%", change: "SLA", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="card-glass p-4 col-span-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[var(--text-muted)]">{stat.label}</span>
                    <stat.icon className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                  <div className="text-xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                  <div className="text-xs text-green-400 mt-1">{stat.change}</div>
                </div>
              ))}
              <div className="col-span-3 md:col-span-4 card-glass p-4">
                <div className="text-xs text-[var(--text-muted)] mb-3">Revenue Overview</div>
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[var(--accent)] to-[var(--accent)]/40 opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-[var(--accent)] font-semibold tracking-widest uppercase mb-3"
            >
              Everything You Need
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
            >
              Built for modern enterprises
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="card-glass p-6 transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Loved by engineering teams
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-glass p-6"
              >
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm text-[var(--text-primary)]">{t.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Ready to scale your business?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Join 50,000+ teams already using CloudVault. Free 14-day trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-xl transition-all glow-blue text-sm"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 border border-[var(--border)] hover:border-[var(--accent)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium rounded-xl transition-all text-sm"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
