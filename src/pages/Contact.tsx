import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            Get in touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-secondary)] max-w-xl mx-auto"
          >
            Have a question or want to learn more? Our team is here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2.5 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Work Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-2.5 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Subject</label>
                <select className="w-full px-4 py-2.5 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text-secondary)] outline-none focus:border-[var(--accent)] transition-colors">
                  <option>Sales inquiry</option>
                  <option>Technical support</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-2.5 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-xl text-sm transition-all w-full justify-center glow-blue"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">Other ways to reach us</h2>
            {[
              { icon: Mail, label: "Email", value: "hello@cloudvault.io", sub: "We reply within 24 hours" },
              { icon: MessageSquare, label: "Live Chat", value: "Chat with support", sub: "Mon–Fri, 9am–6pm EST" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", sub: "Enterprise customers only" },
              { icon: MapPin, label: "Office", value: "San Francisco, CA", sub: "415 Mission Street" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 card-glass rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">{item.value}</div>
                  <div className="text-xs text-[var(--text-muted)]">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
