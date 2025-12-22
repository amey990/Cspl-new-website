'use client';

import { motion, cubicBezier } from 'framer-motion';
import {
  Wifi,
  Router,
  RadioTower,
  ShieldCheck,
  Network,
  Smartphone,
  Building2,
  SignalHigh,
} from 'lucide-react';
import Image from 'next/image';

// TODO: replace with your actual high-res wireless visual
// e.g. '../../../assets/solutions/wireless-networking-hero.png'
import WirelessNetworkingHero from '../../../assets/CNMS_dummy.jpg';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

type Tone = 'emerald' | 'sky' | 'fuchsia' | 'amber';

const toneStyles: Record<
  Tone,
  {
    dot: string;
    pill: string;
  }
> = {
  emerald: {
    dot: 'bg-emerald-400',
    pill: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100',
  },
  sky: {
    dot: 'bg-sky-400',
    pill: 'border-sky-400/40 bg-sky-400/10 text-sky-100',
  },
  fuchsia: {
    dot: 'bg-fuchsia-400',
    pill: 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-100',
  },
  amber: {
    dot: 'bg-amber-400',
    pill: 'border-amber-400/40 bg-amber-400/10 text-amber-100',
  },
};

function Pill({
  tone,
  label,
  icon,
}: {
  tone: Tone;
  label: string;
  icon?: React.ReactNode;
}) {
  const styles = toneStyles[tone];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] ${styles.pill}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
      {icon && <span className="text-[13px]">{icon}</span>}
      <span>{label}</span>
    </span>
  );
}

function MetricCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,1)]">
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-[11px] text-slate-500">{hint}</p>
    </div>
  );
}

export default function WirelessNetworkingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at top, rgba(56,189,248,0.24), transparent 55%),
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '900px 900px, 80px 80px, 80px 80px',
          backgroundPosition: 'top center, center, center',
        }}
      />

      <div className="relative z-10 pb-28 pt-24">
        {/* ---------------------------------------------------------- */}
        {/* HERO                                                       */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="grid gap-10 md:grid-cols-[1.25fr,1fr] md:items-center"
          >
            {/* Copy */}
            <div>
              <Pill
                tone="sky"
                label="Wireless Networking · Solution"
                icon={<Wifi className="h-3.5 w-3.5" />}
              />

              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
                Wi-Fi that feels wired,
                <span className="block text-sky-300">
                  even when the site is busy.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                We design and deploy seamless wireless networks for offices,
                campuses, warehouses and outdoor environments—so users, devices
                and critical apps stay connected, securely and consistently.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                <MetricCard
                  label="Typical deployments"
                  value="Offices, plants, campuses"
                  hint="High-density, mixed device environments with roaming traffic."
                />
                <MetricCard
                  label="Radio designs"
                  value="Wi-Fi · P2P · mesh"
                  hint="Coverage for last 5% of dead zones with smart RF planning."
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
                <Pill
                  tone="emerald"
                  label="Seamless wireless connectivity"
                  icon={<SignalHigh className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="fuchsia"
                  label="Point-to-point & mesh"
                  icon={<RadioTower className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="amber"
                  label="Integrated with IT stack"
                  icon={<Router className="h-3.5 w-3.5" />}
                />
              </div>
            </div>

            {/* Visual */}
            <motion.div
              {...fadeIn}
              className="relative flex items-center justify-center"
            >
              <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-emerald-400/30 blur-3xl" />

              <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-black to-black p-5 shadow-[0_26px_100px_rgba(0,0,0,1)]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  {/* Desktop image */}
                  <div className="hidden aspect-[16/10] items-center justify-center md:flex">
                    <Image
                      src={WirelessNetworkingHero}
                      alt="Enterprise wireless networking with access points and devices"
                      className="h-full w-full object-cover opacity-95"
                    />
                  </div>

                  {/* Mobile schematic */}
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
                    <div className="flex gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/70 bg-slate-950">
                        <Router className="h-6 w-6 text-sky-100" />
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/60 bg-slate-950">
                        <Wifi className="h-6 w-6 text-emerald-100" />
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-400/60 bg-slate-950">
                        <Smartphone className="h-6 w-6 text-fuchsia-100" />
                      </div>
                    </div>
                    <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
                      Controllers, access points and clients work together as a
                      single wireless fabric—with roaming and security handled
                      in the background.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                    WPA3, 802.1X &amp; role-based access
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <Network className="h-3.5 w-3.5 text-sky-300" />
                    Integrated with LAN / SD-WAN
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* CORE CAPABILITIES                                         */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              Wireless that keeps up with your users.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              From first site surveys to full rollout, we optimise RF, security
              and backhaul so Wi-Fi becomes a reliable utility—not a daily
              support ticket.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Seamless connectivity */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-200">
                <Wifi className="h-3.5 w-3.5" />
                Seamless coverage
              </div>
              <p className="text-sm font-medium text-white">
                Seamless wireless connectivity.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                High-speed, secure Wi-Fi for employees, guests and IoT devices,
                designed for roaming between APs with minimal drops or jitter.
              </p>
            </div>

            {/* Wi-Fi / P2P / mesh */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                <RadioTower className="h-3.5 w-3.5" />
                RF design
              </div>
              <p className="text-sm font-medium text-white">
                Wi-Fi, point-to-point &amp; mesh.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Outdoor links, multi-building mesh and long-range point-to-point
                bridges for cameras, remote sheds and temporary sites.
              </p>
            </div>

            {/* Security */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <ShieldCheck className="h-3.5 w-3.5" />
                Secure access
              </div>
              <p className="text-sm font-medium text-white">
                Enterprise-grade wireless security.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                802.1X, RADIUS, role-based access and network segmentation to
                keep corporate traffic isolated from guests and unmanaged
                devices.
              </p>
            </div>

            {/* IT integration */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                <Router className="h-3.5 w-3.5" />
                Integrated
              </div>
              <p className="text-sm font-medium text-white">
                Integrated with existing IT stack.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Controllers, switches, firewalls and authentication systems
                working together, with change windows planned to minimise
                downtime.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* WIRELESS FABRIC DIAGRAM                                   */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-sky-500/25 bg-gradient-to-b from-slate-950/90 via-slate-950 to-black px-6 py-8 shadow-[0_28px_120px_rgba(0,0,0,1)] md:px-10 md:py-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.35fr,1fr] md:items-center">
              {/* Diagram card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-6 py-8">
                {/* Centre controller */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/70 bg-slate-950 shadow-[0_18px_80px_rgba(0,0,0,1)]">
                  <Router className="h-7 w-7 text-sky-50" />
                </div>

                {/* Rings */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/35" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/15" />

                {/* Sites / zones */}
                <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/85 px-3 py-2">
                    <Building2 className="h-3.5 w-3.5 text-sky-300" />
                    <span>HQ / data centre</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Building2 className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Branch offices</span>
                  </div>
                </div>

                <div className="absolute right-4 top-8 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/85 px-3 py-2">
                    <RadioTower className="h-3.5 w-3.5 text-fuchsia-300" />
                    <span>Outdoor P2P links</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Smartphone className="h-3.5 w-3.5 text-amber-300" />
                    <span>BYOD &amp; handhelds</span>
                  </div>
                </div>

                <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 flex-wrap justify-center gap-3 text-xs text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    Centralised policy for SSIDs, VLANs, QoS and security
                    profiles.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    Telemetry, heatmaps and client experience dashboards.
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-4 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  One wireless fabric, many device types.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  We treat wireless as a single fabric connecting offices,
                  branches, plants and outdoor links—with a consistent security
                  and operations model throughout.
                </p>
                <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>
                      Site surveys, RF modelling and AP placement plans before
                      the first ceiling mount goes up.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      Role-based SSIDs for staff, guests, contractors and IoT
                      devices with different policies and bandwidth limits.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      Point-to-point and mesh links where fibre or copper is
                      impractical, with redundancy and failover.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <span>
                      Integration with your existing switches, firewalls and
                      SD-WAN so wireless becomes an extension of your core
                      network—not an island.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* ENGAGEMENT MODEL                                          */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              How we roll out wireless projects.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              We aim for &quot;switch-over weekends&quot; instead of
              months-long disruption—especially for live offices and plants.
            </p>
          </motion.div>

          <motion.ol
            {...fadeUp}
            className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-4"
          >
            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                01
              </span>
              <p className="text-sm font-medium text-white">
                Site survey &amp; RF design.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Floor plans, interference checks and heatmaps to understand wall
                materials, user density and coverage targets.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                02
              </span>
              <p className="text-sm font-medium text-white">
                Design security &amp; integration.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Map SSIDs to VLANs, RADIUS, firewalls and SD-WAN, with clear
                policies for staff, guests and IoT clients.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                03
              </span>
              <p className="text-sm font-medium text-white">
                Deploy &amp; test in waves.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Stage-wise rollout with pilot areas, coverage validation,
                throughput tests and failover drills.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                04
              </span>
              <p className="text-sm font-medium text-white">
                Operate &amp; optimise.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Ongoing monitoring, firmware lifecycle and capacity planning,
                so wireless keeps up as devices and sites grow.
              </p>
            </li>
          </motion.ol>
        </section>
      </div>
    </main>
  );
}
