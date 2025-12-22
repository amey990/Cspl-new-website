'use client';

import { motion, cubicBezier } from 'framer-motion';
import {
  Cloud,
  CloudLightning,
  Server,
  ShieldCheck,
  Video,
  RadioTower,
  Network,
  Cpu,
} from 'lucide-react';
import Image from 'next/image';

// TODO: replace with your real high-res cloud image
// e.g. '../../../assets/solutions/cloud-solutions-hero.png'
import CloudSolutionsHero from '../../../assets/CNMS_dummy.jpg';

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

export default function CloudSolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at top, rgba(56,189,248,0.22), transparent 55%),
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
                label="Cloud Solutions · Solution"
                icon={<Cloud className="h-3.5 w-3.5" />}
              />

              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
                Cloud built around workloads,
                <span className="block text-sky-300">
                  not the other way round.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                From data centre extension to OTT streaming and IoT telemetry,
                we design, migrate and operate cloud platforms on AWS and other
                hyperscalers—with security and performance baked in.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                <MetricCard
                  label="Cloud footprint"
                  value="AWS, Azure + private"
                  hint="Hybrid architectures spanning on-prem DCs and multi-cloud."
                />
                <MetricCard
                  label="Primary workloads"
                  value="Apps · Media · IoT"
                  hint="Line-of-business apps, video pipelines and sensor data at scale."
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
                <Pill
                  tone="emerald"
                  label="Cloud infra & migration"
                  icon={<Server className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="amber"
                  label="Cloud security & CASB"
                  icon={<ShieldCheck className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="fuchsia"
                  label="Streaming & transcoding"
                  icon={<Video className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="sky"
                  label="IoT & real-time data"
                  icon={<RadioTower className="h-3.5 w-3.5" />}
                />
              </div>
            </div>

            {/* Visual */}
            <motion.div
              {...fadeIn}
              className="relative flex items-center justify-center"
            >
              <div className="pointer-events-none absolute -left-8 top-0 h-40 w-40 rounded-full bg-sky-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-emerald-400/25 blur-3xl" />

              <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-black to-black p-5 shadow-[0_26px_100px_rgba(0,0,0,1)]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  {/* Desktop: use provided image */}
                  <div className="hidden aspect-[16/10] items-center justify-center md:flex">
                    <Image
                      src={CloudSolutionsHero}
                      alt="Hybrid cloud architecture and workloads illustration"
                      className="h-full w-full object-cover opacity-95"
                    />
                  </div>

                  {/* Mobile fallback: abstract diagram */}
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-sky-400/60 bg-slate-950">
                      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.65),transparent_60%)]" />
                      <CloudLightning className="relative h-7 w-7 text-sky-100" />
                    </div>
                    <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
                      Apps, media pipelines and IoT fleets connect to a single,
                      policy-driven cloud fabric across AWS and other platforms.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <Network className="h-3.5 w-3.5 text-sky-300" />
                    Hybrid &amp; multi-cloud ready
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <Cpu className="h-3.5 w-3.5 text-emerald-300" />
                    Optimised for real-time workloads
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* CORE CAPABILITIES (4 tiles)                               */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              What we deliver with cloud.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              We don&apos;t just lift-and-shift. We align infrastructure,
              security and workload pipelines so your cloud footprint is fast,
              compliant and cost-aware.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* 1. Cloud infra + migration */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-200">
                <Server className="h-3.5 w-3.5" />
                Cloud infrastructure
              </div>
              <p className="text-sm font-medium text-white">
                Cloud Infrastructure &amp; Migration.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Deploy, manage and migrate workloads to AWS and other cloud
                platforms using reference architectures for apps, databases,
                networking and storage.
              </p>
            </div>

            {/* 2. Cloud security & CASB */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <ShieldCheck className="h-3.5 w-3.5" />
                Security &amp; compliance
              </div>
              <p className="text-sm font-medium text-white">
                Cloud Security &amp; Compliance.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                CASB (Cloud Access Security Broker) and native cloud controls
                provide governed access to SaaS, IaaS and PaaS while meeting
                enterprise security and regulatory requirements.
              </p>
            </div>

            {/* 3. Media streaming & transcoding */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                <Video className="h-3.5 w-3.5" />
                Media pipelines
              </div>
              <p className="text-sm font-medium text-white">
                Media Streaming &amp; Transcoding.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                AWS-based cloud video processing chains for OTT and broadcast:
                ingest, transcode, package and deliver with adaptive bitrate and
                content protection.
              </p>
            </div>

            {/* 4. IoT cloud services */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                <RadioTower className="h-3.5 w-3.5" />
                IoT &amp; telemetry
              </div>
              <p className="text-sm font-medium text-white">IoT Cloud Services.</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                AWS IoT Core implementations that bring real-time sensor data,
                device management and analytics into a single, scalable
                platform.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* CLOUD FABRIC DIAGRAM                                      */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-sky-500/25 bg-gradient-to-b from-slate-950/90 via-slate-950 to-black px-6 py-8 shadow-[0_28px_120px_rgba(0,0,0,1)] md:px-10 md:py-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.35fr,1fr] md:items-center">
              {/* Diagram */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-6 py-8">
                {/* Center cloud */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-sky-400/70 bg-slate-950 shadow-[0_18px_80px_rgba(0,0,0,1)]">
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.6),transparent_60%)]" />
                  <CloudLightning className="relative h-8 w-8 text-sky-50" />
                </div>

                {/* Rings */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/35" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/15" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-500/8" />

                {/* Nodes */}
                <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Server className="h-3.5 w-3.5 text-sky-300" />
                    <span>On-prem data centres</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2">
                    <Network className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Branches &amp; campuses</span>
                  </div>
                </div>

                <div className="absolute right-4 top-8 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Video className="h-3.5 w-3.5 text-fuchsia-300" />
                    <span>OTT / broadcast pipelines</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/65 px-3 py-2">
                    <RadioTower className="h-3.5 w-3.5 text-amber-300" />
                    <span>IoT &amp; edge sensors</span>
                  </div>
                </div>

                <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 flex-wrap justify-center gap-3 text-xs text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-slate-950/75 px-3 py-2">
                    CASB, identity and policy engine for secure cloud access
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/75 px-3 py-2">
                    Observability, cost and performance dashboards
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-4 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  One cloud fabric for apps, media and machines.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  We connect your data centres, users, media workflows and IoT
                  fleets into a single cloud operating model—so teams don&apos;t
                  have to juggle silos.
                </p>
                <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>
                      Hybrid architectures that stretch existing DC investments
                      into AWS and other clouds instead of replacing them
                      overnight.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      CASB and cloud security guardrails for safe SaaS and IaaS
                      adoption across teams and locations.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      Media streaming and transcoding chains designed for
                      quality of experience and cost per stream.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <span>
                      IoT cloud services that bring real-time telemetry into
                      analytics platforms and operational dashboards.
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
              How we work with you on cloud.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Whether it&apos;s a single streaming workload or a full
              data-centre migration, we phase the journey to minimise risk and
              maximise value.
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
                Discover workloads &amp; dependencies.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Audit applications, databases, media chains and IoT endpoints to
                understand dependencies and performance baselines.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                02
              </span>
              <p className="text-sm font-medium text-white">
                Design hybrid / multi-cloud.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Map which workloads live on-prem, which move to AWS/Azure and
                how they connect securely via SD-WAN and CASB.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                03
              </span>
              <p className="text-sm font-medium text-white">
                Implement &amp; modernise.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Build landing zones, media pipelines and IoT stacks with
                automation, IaC and observability from day one.
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
                Continuous cost, performance and security tuning—so your cloud
                stays efficient as usage grows across India and beyond.
              </p>
            </li>
          </motion.ol>
        </section>
      </div>
    </main>
  );
}
