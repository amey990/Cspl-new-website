'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Youtube, Loader2, X } from 'lucide-react';
import { useState } from 'react';
import { fetchApi } from '@/lib/api';
import { toast } from 'sonner';

import NewsletterImage from '../../assets/main.png';

const brand = {
  name: 'Commedia',
  blurb:
    'Empowering teams with reliable, scalable, and elegant product experiences.',
};

// ✅ central place for routes (easy to change later)
const ROUTES = {
  solutions: '/solutions',
  businessAutomation: '/solutions', // change later if you create a dedicated page
  networkSecurity: '/Solutions-NetworkSecurity',
  cloudSolutions: '/Solutions-Cloudsolutions',
  avSolutions: '/Solutions-Audio',
  satcom: '/Solutions-Satcom',
  caseStudies: '/case-studies',
  about: '/Aboutus',
  careers: '/Careers',
  contact: '/contact',
  partners: '/partners',
};

const columns = {
  solutions: [
    { label: 'Business Automation', href: ROUTES.businessAutomation },
    { label: 'Network Security', href: ROUTES.networkSecurity },
    { label: 'Cloud Services', href: ROUTES.cloudSolutions },
    { label: 'A/V Solutions', href: ROUTES.avSolutions },
    { label: 'Satcom', href: ROUTES.satcom },
  ],
  resources: [
    // { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: ROUTES.caseStudies },
    // { label: 'Blog', href: '#' },
  ],
  company: [
    { label: 'About Us', href: ROUTES.about },
    { label: 'Careers', href: ROUTES.careers },
    { label: 'Contact', href: ROUTES.contact },
    { label: 'Partners', href: ROUTES.partners },
  ],
};

const socials = [
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/commedia-solutions-pvt-ltd/', label: 'LinkedIn' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleConnectClick = () => {
    setIsModalOpen(true);
    setError('');
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Name and email are required.');
      return;
    }
    setIsSubmitting(true);
    setError('');
    
    try {
      await fetchApi('/api/contact/sales', {
        method: 'POST',
        body: JSON.stringify({ name, email, source: 'footer_connect' }),
      });
      setIsModalOpen(false);
      toast.success('Thanks for connecting with us. Our sales team will reach out soon.');
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative mt-24 w-full overflow-hidden border-t border-white/10 bg-[#010000]">
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-[45%] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0)_60%)]" />
      </div>

      {/* Newsletter */}
      <div className="relative mx-auto max-w-screen-2xl px-4 pt-14 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              style={{
                fontFamily:
                  '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
              }}
            >
              Stay ahead with {brand.name}.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-zinc-300">
              Join thousands of professionals who trust {brand.name} for innovative business
              solutions.
            </p>

            <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-zinc-400 focus:border-white/20 focus:outline-none sm:flex-1"
              />
              <button 
                type="button"
                onClick={handleConnectClick}
                className="h-12 rounded-xl bg-white px-5 text-sm font-medium text-black hover:bg-zinc-100"
              >
                Connect Now
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="absolute -left-3 -top-5 h-[88%] w-[92%] -rotate-3 rounded-3xl bg-white/10" />
            <div className="absolute -right-2 -bottom-5 h-[88%] w-[92%] rotate-3 rounded-3xl bg-white/10" />
            <Image src={NewsletterImage} alt="Newsletter visual" className="relative z-10 rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Link Columns */}
      <div className="relative mx-auto max-w-screen-2xl px-4 pt-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div
              className="text-xl font-semibold text-white"
              style={{
                fontFamily:
                  '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
              }}
            >
              {brand.name}.
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">{brand.blurb}</p>

            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            {/* ✅ Make the section title clickable too */}
            <Link href={ROUTES.solutions} className="text-lg font-semibold text-white hover:text-white/90">
              Solutions
            </Link>

            <ul className="mt-5 space-y-3 text-sm">
              {columns.solutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {columns.resources.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {columns.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/10">
        <div className="mx-auto max-w-screen-2xl px-4 py-6 text-sm text-zinc-400 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Cookie Settings</Link>

            </div>
          </div>
        </div>
      </div>
      {/* Modal overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl relative">
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="text-xl font-semibold text-white">Connect with Sales</h3>
            
            <form onSubmit={handleModalSubmit} className="mt-5 space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
                    placeholder="you@example.com"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-medium text-black hover:bg-zinc-100 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {isSubmitting ? 'Submitting...' : 'Connect'}
                </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}
