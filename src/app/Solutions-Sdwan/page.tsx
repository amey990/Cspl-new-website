'use client';

import { motion, cubicBezier } from 'framer-motion';
import {
  ShieldCheck,
  Cloud,
  Globe2,
  Activity,
  ArrowRight,
  Server,
  RadioTower,
} from 'lucide-react';
import Image from 'next/image';

// TODO: point this to a real SD-WAN diagram / hero visual
// e.g. /src/assets/solutions/sdwan-diagram.png
import SdwanDiagram from '../../../assets/Cloudmanage-3d.png';

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

export default function SdwanPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 55%),
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
            {/* Hero copy */}
            <div>
              <Pill tone="sky" label="SD-WAN · Solution" />
              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
                SD-WAN built for real-world networks.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                Get a software-defined WAN fabric that automatically picks the
                best path for every packet, keeps traffic encrypted from edge to
                cloud, and makes multi-cloud connectivity feel boringly
                reliable.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
                <Pill tone="emerald" label="Zero-trust connectivity" />
                <Pill tone="fuchsia" label="Multi-cloud ready" />
                <Pill tone="amber" label="MPLS cost optimisation" />
              </div>

              <div className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
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

            {/* Hero visual */}
            <motion.div
              {...fadeIn}
              className="relative flex items-center justify-center"
            >
              <div className="pointer-events-none absolute -left-6 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-6 bottom-0 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />

              <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-black to-black p-5 shadow-[0_26px_100px_rgba(0,0,0,1)]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  {/* Replace this Image with a real SD-WAN diagram when ready */}
                  <div className="hidden aspect-[16/10] items-center justify-center md:flex">
                    <Image
                      src={SdwanDiagram}
                      alt="SD-WAN traffic and sites illustration"
                      className="h-full w-full object-cover opacity-90"
                    />
                  </div>

                  {/* Fallback simple diagram for smaller screens */}
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
                    <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                      SD-WAN Fabric
                    </span>
                    <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
                      Branches, DCs and clouds connected over encrypted
                      overlays, with traffic steered in real time based on
                      latency, loss and jitter.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5" />
                    <span>Live path monitoring</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-300">
                    <span>See sample topology</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* VALUE PILLARS                                              */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-16 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold text-white md:text-2xl">
              What SD-WAN with Commedia delivers.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              We don’t just drop an SD-WAN appliance and walk away. We design,
              deploy and run a fabric that matches your applications, sites and
              clouds.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-200">
                <Activity className="h-3.5 w-3.5" />
                Performance
              </div>
              <p className="text-sm font-medium text-white">
                Optimised network performance.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Application-aware routing picks the best path (MPLS, internet,
                LTE, 5G) based on live latency, loss and jitter. Real-time
                failover keeps sessions intact during link events.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <ShieldCheck className="h-3.5 w-3.5" />
                Security
              </div>
              <p className="text-sm font-medium text-white">Secure WAN edge.</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                End-to-end encryption, integrated firewalls and zero-trust
                policies ensure branches, users and workloads are authenticated
                before they’re connected.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                <Cloud className="h-3.5 w-3.5" />
                Multi-cloud
              </div>
              <p className="text-sm font-medium text-white">
                Hybrid &amp; multi-cloud integration.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Direct, policy-driven connectivity into AWS, Azure and private
                clouds. Create fast lanes for SaaS and move workloads without
                re-architecting your WAN every time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                <Globe2 className="h-3.5 w-3.5" />
                Reach &amp; cost
              </div>
              <p className="text-sm font-medium text-white">
                Cost-effective, everywhere.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Use broadband, internet DIA and LTE to reduce heavy MPLS
                dependency—while keeping SLAs intact across pan-India and global
                sites.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* TOPOLOGY / FABRIC VIEW                                     */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-b from-slate-950/90 via-slate-950 to-black px-6 py-8 md:px-10 md:py-10 shadow-[0_28px_120px_rgba(0,0,0,1)]"
          >
            <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
              {/* Simple SD-WAN fabric schematic */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-6 py-8">
                {/* center SD-WAN controller */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/60 bg-slate-950 shadow-[0_18px_80px_rgba(0,0,0,1)]">
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.5),transparent_55%)]" />
                  <div className="relative flex flex-col items-center text-[11px] text-slate-50">
                    <Server className="mb-1 h-4 w-4" />
                    <span>SD-WAN</span>
                    <span>Controller</span>
                  </div>
                </div>

                {/* spoke lines */}
                {/* branch cluster */}
                <div className="pointer-events-none absolute left-[14%] top-[24%] h-px w-[26%] bg-gradient-to-l from-cyan-400/70 to-transparent" />
                <div className="pointer-events-none absolute left-[14%] bottom-[24%] h-px w-[26%] bg-gradient-to-l from-cyan-400/70 to-transparent" />
                {/* cloud & DC */}
                <div className="pointer-events-none absolute right-[14%] top-1/2 h-px w-[26%] -translate-y-1/2 bg-gradient-to-r from-cyan-400/70 to-transparent" />
                {/* remote users */}
                <div className="pointer-events-none absolute left-1/2 top-[82%] h-[18%] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/70 to-transparent" />

                {/* left: branches */}
                <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <RadioTower className="h-3.5 w-3.5 text-cyan-300" />
                    <span>Metro branches</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">
                    <RadioTower className="h-3.5 w-3.5 text-cyan-300" />
                    <span>Remote sites</span>
                  </div>
                </div>

                {/* right: clouds & DCs */}
                <div className="absolute right-4 top-8 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Cloud className="h-3.5 w-3.5 text-sky-300" />
                    <span>AWS / Azure / GCP</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">
                    <Server className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Private DCs</span>
                  </div>
                </div>

                {/* bottom: users */}
                <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 gap-3 text-xs text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2">
                    Remote &amp; hybrid users
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2">
                    Partner networks
                  </div>
                </div>
              </div>

              {/* copy */}
              <div className="space-y-4 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  One fabric from branch to cloud.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  Instead of managing dozens of point-to-point links, we build
                  an overlay fabric that abstracts the transport layer. Traffic
                  is steered by policy, not individual circuits.
                </p>
                <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                    <span>
                      Application-aware policies: collaboration, voice, video
                      and business-critical apps always get the cleanest path.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      Encrypted overlays between every site, data centre and
                      cloud region with unified security policies.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <span>
                      Dynamic path selection across MPLS, internet DIA, broadband
                      and LTE to balance performance and cost.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* ROLLOUT & OPERATIONS                                      */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              From design to day-2 operations.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Our teams bring experience across pan-India and global rollouts—
              from greenfield WANs to brownfield migrations.
            </p>
          </motion.div>

          <motion.ol
            {...fadeUp}
            className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-4"
          >
            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-200">
                01
              </span>
              <p className="text-sm font-medium text-white">
                Network assessment
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Baseline existing WAN, traffic patterns and app dependencies.
                Identify quick wins and high-risk paths.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-200">
                02
              </span>
              <p className="text-sm font-medium text-white">
                SD-WAN design &amp; pilots
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Define overlay topology, security posture and rollout waves.
                Prove performance on a subset of sites before scaling.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-200">
                03
              </span>
              <p className="text-sm font-medium text-white">
                Pan-India &amp; global rollout
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Factory-style deployments, with standardised templates and
                remote turn-ups to minimise on-site disruption.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-200">
                04
              </span>
              <p className="text-sm font-medium text-white">
                Day-2 operations &amp; optimisation
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Continuous monitoring, policy tuning and change management so
                the fabric keeps up with new apps and sites.
              </p>
            </li>
          </motion.ol>
        </section>
      </div>
    </main>
  );
}
