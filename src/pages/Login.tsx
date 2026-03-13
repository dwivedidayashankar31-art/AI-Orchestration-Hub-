import { motion } from "framer-motion";
import { Link } from "wouter";
import { Cloud, Lock, Mail } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg-primary)]">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--accent-glow)] blur-[100px] opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center">
              <Cloud className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-[var(--text-primary)]">CloudVault</span>
          </Link>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Welcome back</h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Sign in to your account</p>
        </div>

        <div className="card-glass p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[var(--text-secondary)] cursor-pointer">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <a href="#" className="text-[var(--accent)] hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-xl text-sm transition-all glow-blue"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[var(--border)] text-center">
            <p className="text-sm text-[var(--text-secondary)]">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[var(--accent)] hover:underline font-medium">
                Sign up free
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
