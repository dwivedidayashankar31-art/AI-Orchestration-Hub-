import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    desc: "Perfect for small teams getting started.",
    features: [
      "Up to 5 team members",
      "10 GB storage",
      "Basic analytics",
      "Email support",
      "99.9% uptime SLA",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    desc: "For growing teams that need more power.",
    features: [
      "Up to 50 team members",
      "500 GB storage",
      "Advanced analytics",
      "Priority support",
      "99.99% uptime SLA",
      "Custom integrations",
      "SSO / SAML",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organizations with specific needs.",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "99.999% uptime SLA",
      "All integrations",
      "SSO / SAML",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-[var(--accent)] font-semibold tracking-widest uppercase mb-3"
          >
            Simple Pricing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            Choose your plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-secondary)] max-w-xl mx-auto"
          >
            All plans include a 14-day free trial. No credit card required.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative card-glass p-8 flex flex-col ${plan.popular ? "border-[var(--accent)]/50 glow-blue" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-[var(--accent)] text-white rounded-full">
                    <Zap className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1">{plan.name}</h2>
                <p className="text-sm text-[var(--text-secondary)]">{plan.desc}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-[var(--text-primary)]">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-[var(--text-muted)] text-sm">/month</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Check className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white glow-blue"
                    : "border border-[var(--border)] hover:border-[var(--accent)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[var(--text-muted)] text-sm">
            All prices in USD. Billed monthly or annually (save 20%).{" "}
            <Link href="/contact" className="text-[var(--accent)] hover:underline">
              Contact us
            </Link>{" "}
            for volume discounts.
          </p>
        </div>
      </div>
    </div>
  );
}
