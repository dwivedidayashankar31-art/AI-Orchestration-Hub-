import { Link } from "wouter";
import { Cloud, Twitter, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Changelog", href: "/blog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs" },
    { label: "Status", href: "/contact" },
    { label: "Support", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Security", href: "/" },
    { label: "Cookies", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                <Cloud className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-[var(--text-primary)]">CloudVault</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
              The enterprise SaaS platform built for teams that move fast.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border)] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 CloudVault. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
