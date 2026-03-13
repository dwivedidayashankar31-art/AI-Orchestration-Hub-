import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Introducing CloudVault 3.0: The Future of Enterprise SaaS",
    excerpt: "Today we're excited to announce CloudVault 3.0, our biggest release yet with real-time collaboration, AI-powered analytics, and 50% faster performance.",
    author: "Sarah Chen",
    date: "March 10, 2026",
    read: "5 min read",
    tag: "Product",
    tagColor: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "How We Achieved 99.999% Uptime Across 150 Regions",
    excerpt: "A deep dive into our infrastructure architecture and the engineering decisions that enable us to deliver industry-leading reliability at scale.",
    author: "Marcus Rivera",
    date: "February 28, 2026",
    read: "8 min read",
    tag: "Engineering",
    tagColor: "bg-green-500/20 text-green-400",
  },
  {
    title: "Security Best Practices for Enterprise SaaS in 2026",
    excerpt: "As cyber threats evolve, so must our defenses. We share the security frameworks and practices we use to protect customer data.",
    author: "Emma Thompson",
    date: "February 15, 2026",
    read: "6 min read",
    tag: "Security",
    tagColor: "bg-red-500/20 text-red-400",
  },
  {
    title: "Customer Story: How TechCorp Saved $2M with CloudVault",
    excerpt: "TechCorp's journey from managing 12 different tools to a unified CloudVault platform — and the remarkable ROI they achieved.",
    author: "David Lee",
    date: "January 30, 2026",
    read: "4 min read",
    tag: "Customer Story",
    tagColor: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Building Real-Time Dashboards with the CloudVault API",
    excerpt: "A step-by-step tutorial on using our WebSocket API and analytics endpoints to build stunning real-time dashboards.",
    author: "Sarah Chen",
    date: "January 15, 2026",
    read: "10 min read",
    tag: "Tutorial",
    tagColor: "bg-orange-500/20 text-orange-400",
  },
  {
    title: "The State of Enterprise SaaS: 2026 Report",
    excerpt: "We surveyed 500 enterprise CTOs and VPs of Engineering to understand the key trends shaping the industry this year.",
    author: "Emma Thompson",
    date: "January 5, 2026",
    read: "12 min read",
    tag: "Research",
    tagColor: "bg-yellow-500/20 text-yellow-400",
  },
];

export default function Blog() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            CloudVault Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-secondary)]"
          >
            Engineering insights, product updates, and customer stories
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card-glass p-6 flex flex-col hover:border-[var(--accent)]/30 transition-all cursor-pointer group"
            >
              <div className="mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${post.tagColor}`}>
                  {post.tag}
                </span>
              </div>
              <h2 className="font-semibold text-[var(--text-primary)] mb-2 leading-snug group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <div>
                  <div className="text-xs font-medium text-[var(--text-primary)]">{post.author}</div>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mt-0.5">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.read}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
