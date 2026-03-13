import { motion } from "framer-motion";
import { Users, Target, Zap, Heart } from "lucide-react";

const team = [
  { name: "Sarah Chen", role: "CEO & Co-Founder", initials: "SC", color: "bg-blue-500" },
  { name: "Marcus Rivera", role: "CTO & Co-Founder", initials: "MR", color: "bg-purple-500" },
  { name: "Emma Thompson", role: "VP of Product", initials: "ET", color: "bg-green-500" },
  { name: "David Lee", role: "Head of Engineering", initials: "DL", color: "bg-orange-500" },
  { name: "Priya Patel", role: "VP of Sales", initials: "PP", color: "bg-pink-500" },
  { name: "James Wilson", role: "Head of Design", initials: "JW", color: "bg-yellow-500" },
];

const values = [
  { icon: Target, title: "Customer First", desc: "Everything we build starts with understanding and solving real customer problems." },
  { icon: Zap, title: "Move Fast", desc: "We ship quickly, learn from feedback, and iterate relentlessly." },
  { icon: Users, title: "Team Trust", desc: "We believe in transparency, ownership, and supporting each other." },
  { icon: Heart, title: "Long-term Thinking", desc: "We optimize for sustainable growth over short-term metrics." },
];

export default function About() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Mission */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-[var(--accent)] font-semibold tracking-widest uppercase mb-3"
          >
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[var(--text-primary)] mb-6"
          >
            Built to power the next generation of enterprise software
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] leading-relaxed"
          >
            CloudVault was founded in 2021 by a team of engineers from Google, Stripe, and Shopify
            who were frustrated with the complexity of enterprise infrastructure. We believed there
            was a better way — and set out to build it.
          </motion.p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-glass p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">{v.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="card-glass p-6 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <div className="font-semibold text-[var(--text-primary)]">{member.name}</div>
                <div className="text-sm text-[var(--text-muted)] mt-1">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
