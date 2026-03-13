import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, CreditCard, Lock } from "lucide-react";

export default function Checkout() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-glass p-6 mb-6"
            >
              <h2 className="font-semibold text-[var(--text-primary)] mb-4">Account Information</h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">First Name</label>
                    <input type="text" className="w-full px-4 py-2.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Last Name</label>
                    <input type="text" className="w-full px-4 py-2.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-glass p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-[var(--accent)]" />
                <h2 className="font-semibold text-[var(--text-primary)]">Payment Details</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-2.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Expiry</label>
                    <input type="text" placeholder="MM / YY" className="w-full px-4 py-2.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">CVV</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-2.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card-glass p-6 sticky top-24"
            >
              <h2 className="font-semibold text-[var(--text-primary)] mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Pro Plan</span>
                  <span className="text-[var(--text-primary)]">$99/mo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Annual discount (20%)</span>
                  <span className="text-green-400">-$237.60</span>
                </div>
              </div>
              <div className="border-t border-[var(--border)] pt-3 flex justify-between font-semibold">
                <span className="text-[var(--text-primary)]">Total / year</span>
                <span className="text-[var(--text-primary)]">$950.40</span>
              </div>
              <ul className="mt-4 space-y-2">
                {["50 team members", "500 GB storage", "Priority support", "SSO / SAML"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-xl text-sm transition-all glow-blue flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Complete Purchase
              </button>
              <p className="text-xs text-[var(--text-muted)] text-center mt-3">
                Secured with 256-bit SSL encryption
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
