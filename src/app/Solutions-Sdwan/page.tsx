'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';
import {
  ShieldCheck,
  Cloud,
  Globe2,
  Activity,
  ArrowRight,
  Server,
  RadioTower,
  Network,
} from 'lucide-react';

import SdwanDiagram from '../../../assets/Sdwaan.png';

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

type Tone = 'sky' | 'emerald' | 'fuchsia' | 'amber';

function BadgePill({
  icon,
  label,
  tone,
}: {
  icon: ReactNode;
  label: string;
  tone: Tone;
}) {
  const tones: Record<Tone, string> = {
    emerald: 'border-emerald-400/50 bg-emerald-400/10 text-emerald-100',
    sky: 'border-sky-400/50 bg-sky-400/10 text-sky-100',
    fuchsia: 'border-fuchsia-400/50 bg-fuchsia-400/10 text-fuchsia-100',
    amber: 'border-amber-300/50 bg-amber-300/10 text-amber-100',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em] ${tones[tone]}`}
    >
      {icon}
      {label}
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
    <div className="rounded-2xl border border-white/10 bg-black/55 px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-[11px] text-slate-500">{hint}</p>
    </div>
  );
}

function FeatureCard({
  tone,
  title,
  icon,
  desc,
  bullets,
}: {
  tone: Tone;
  title: string;
  icon: ReactNode;
  desc: string;
  bullets: string[];
}) {
  const border: Record<Tone, string> = {
    emerald: 'border-emerald-400/25 from-emerald-500/10',
    sky: 'border-sky-400/25 from-sky-500/10',
    fuchsia: 'border-fuchsia-400/25 from-fuchsia-500/10',
    amber: 'border-amber-300/25 from-amber-300/10',
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b ${border[tone]} via-black to-black p-5 shadow-[0_18px_70px_rgba(0,0,0,0.9)]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.22),transparent_55%)] opacity-70" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-100">
          {icon}
          {title}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-300">{desc}</p>
        <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BG */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 pb-24 pt-24">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="grid gap-10">
            <div className="grid gap-8 md:grid-cols-[1.25fr,0.9fr] md:items-start">
              {/* Copy */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <BadgePill
                    icon={<Network className="h-3.5 w-3.5" />}
                    label="Solutions · SD-WAN"
                    tone="sky"
                  />
                  <BadgePill
                    icon={<ShieldCheck className="h-3.5 w-3.5" />}
                    label="Encrypted overlays"
                    tone="emerald"
                  />
                  <BadgePill
                    icon={<Cloud className="h-3.5 w-3.5" />}
                    label="Cloud on-ramps"
                    tone="fuchsia"
                  />
                </div>

                <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
  SD-WAN that chooses the best path—
  <span className="block text-fuchsia-300">without drama.</span>
</h1>


                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                  We build a WAN fabric that’s application-aware, continuously
                  measured, and designed to scale from a handful of branches to
                  pan-India and global footprints.
                </p>

                <div className="mt-6 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
                  <MetricCard
                    label="Coverage"
                    value="Pan-India & global footprint"
                    hint="Designed for distributed branches, DCs and cloud regions."
                  />
                  <MetricCard
                    label="Traffic control"
                    value="Per-app, per-link policies"
                    hint="Prioritise critical apps, throttle bulk traffic and steer by SLA."
                  />
                </div>
              </div>

              {/* Compact right card */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 via-black to-black p-5 shadow-[0_26px_100px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                    Path health
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <Activity className="h-3.5 w-3.5" />
                    Live
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-black/55 px-3 py-2">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Best path right now
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      MPLS → Voice/Video
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/55 px-3 py-2">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      SaaS breakout
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      DIA → M365 / CRM
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/55 px-3 py-2">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Resilience
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      LTE failover armed
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5" />
                    Live monitoring
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-300">
                    See policy flow <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Full-width visual */}
            <motion.div {...fadeIn} className="relative">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/40 shadow-[0_26px_80px_rgba(0,0,0,1)]">
                {/* <Image
                  src={SdwanDiagram}
                  alt="SD-WAN fabric spanning branches, data centers and cloud regions"
                  className="h-[260px] w-full object-cover opacity-85 md:h-[340px]"
                  priority
                /> */}
                <Image
  src={SdwanDiagram}
  alt="SD-WAN fabric spanning branches, data centers and cloud regions"
  className="h-[260px] w-full object-cover opacity-85 md:h-[340px]"
  style={{ objectPosition: "center 78%" }} // 👈 lower = show more of bottom/device
  priority
/>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-200">
                    Branch · DC · Cloud overlay
                  </span>
                  <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] text-slate-200">
                    Steer by latency / loss / jitter
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FEATURES (different layout) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
              What SD-WAN with Commedia delivers
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Built for reliability, designed for operations, and tuned to your
              app reality—voice, video, ERP, SaaS and bulk traffic.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <FeatureCard
                tone="sky"
                title="Performance"
                icon={<Activity className="h-4 w-4" />}
                desc="App-aware routing that keeps collaboration smooth and business apps predictable."
                bullets={[
                  'Steer by latency/loss/jitter, not guesswork.',
                  'Fast failover for real user experience.',
                  'Detect brownouts and reroute proactively.',
                ]}
              />
              <FeatureCard
                tone="emerald"
                title="Security"
                icon={<ShieldCheck className="h-4 w-4" />}
                desc="A WAN fabric that’s encrypted by default and structured for least-privilege."
                bullets={[
                  'Encrypted overlays site-to-site.',
                  'Segmentation by role / app class.',
                  'Unified policy templates for audits.',
                ]}
              />
              <FeatureCard
                tone="fuchsia"
                title="Cloud reach"
                icon={<Cloud className="h-4 w-4" />}
                desc="Optimized paths to cloud regions and SaaS apps without rebuilding your WAN."
                bullets={[
                  'Direct breakouts with policy control.',
                  'Cloud on-ramps to AWS/Azure/GCP.',
                  'Better SaaS experience at branches.',
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/* TOPOLOGY BAND (kept 50% similar system feel, different content) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-white/10 bg-black/40 px-6 py-8 md:px-10 md:py-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.25fr,1fr] md:items-center">
              {/* Schematic */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 px-6 py-8">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/12 bg-black/55">
                  <div className="flex flex-col items-center text-[11px] text-slate-50">
                    <Server className="mb-1 h-4 w-4" />
                    <span>SD-WAN</span>
                    <span>Policy</span>
                  </div>
                </div>

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />

                <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
                    <RadioTower className="h-3.5 w-3.5 text-sky-300" />
                    <span>Branches &amp; plants</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
                    <RadioTower className="h-3.5 w-3.5 text-sky-300" />
                    <span>Remote sites</span>
                  </div>
                </div>

                <div className="absolute right-4 top-8 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
                    <Cloud className="h-3.5 w-3.5 text-fuchsia-300" />
                    <span>SaaS &amp; cloud</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
                    <Network className="h-3.5 w-3.5 text-emerald-300" />
                    <span>HQ / DC</span>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-4 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  One fabric, many transports.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  Instead of managing point-to-point links, we build an overlay
                  fabric that abstracts the transport layer. Traffic is steered
                  by policy, not individual circuits.
                </p>
                <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>App-aware policies for collaboration, ERP and SaaS.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>Encrypted overlays with unified security posture.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <span>Use MPLS + DIA + LTE to balance cost and SLAs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
