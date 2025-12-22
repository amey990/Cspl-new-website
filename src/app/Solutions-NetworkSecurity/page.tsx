'use client';

import { motion, cubicBezier } from 'framer-motion';
import {
  Shield,
  ShieldCheck,
  Lock,
  Globe2,
  Activity,
  Server,
  RadioTower,
} from 'lucide-react';
import Image from 'next/image';

// TODO: replace with your real high-res security visual
// e.g. '../../../assets/solutions/network-security-hero.png'
import NetworkSecurityHero from '../../../assets/CNMS_dummy.jpg';

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

export default function NetworkSecurityPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at top, rgba(34,197,94,0.18), transparent 55%),
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
              <Pill tone="emerald" label="Network Security · Solution" />

              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
                Security that understands your network.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                Next-generation firewalls, real-time threat detection and
                zero-trust access—designed, deployed and operated as one
                connected security fabric across data centre, campus and cloud.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                <MetricCard
                  label="Threat coverage"
                  value="NGFW + IDS/IPS + AMP"
                  hint="Inline inspection with deep visibility into apps, users and threats."
                />
                <MetricCard
                  label="Reach"
                  value="Campus, branches &amp; cloud edges"
                  hint="Pan-India presence with global rollouts for distributed enterprises."
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
                <Pill
                  tone="sky"
                  label="Next-gen firewalls"
                  icon={<Shield className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="fuchsia"
                  label="IDS / IPS"
                  icon={<Activity className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="amber"
                  label="Zero trust &amp; NAC"
                  icon={<Lock className="h-3.5 w-3.5" />}
                />
              </div>
            </div>

            {/* Hero visual */}
            <motion.div
              {...fadeIn}
              className="relative flex items-center justify-center"
            >
              <div className="pointer-events-none absolute -left-6 top-0 h-40 w-40 rounded-full bg-emerald-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -right-6 bottom-0 h-48 w-48 rounded-full bg-sky-500/25 blur-3xl" />

              <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-black to-black p-5 shadow-[0_26px_100px_rgba(0,0,0,1)]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  {/* Desktop: high-res image */}
                  <div className="hidden aspect-[16/10] items-center justify-center md:flex">
                    <Image
                      src={NetworkSecurityHero}
                      alt="Network security fabric and shield illustration"
                      className="h-full w-full object-cover opacity-95"
                    />
                  </div>

                  {/* Mobile fallback: abstract shield diagram */}
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-emerald-400/60 bg-slate-950">
                      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.55),transparent_60%)]" />
                      <ShieldCheck className="relative h-7 w-7 text-emerald-200" />
                    </div>
                    <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
                      Branches, users and workloads sit behind a shared
                      security fabric: NGFW at the edge, IDS/IPS in the core
                      and zero-trust policies on top.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                    Inline threat prevention
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <Activity className="h-3.5 w-3.5 text-sky-300" />
                    Real-time monitoring
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* CORE CAPABILITIES                                          */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-18 max-w-6xl px-6 md:mt-20 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              Core capabilities across the stack.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              From perimeter firewalls to endpoints and privileged access, we
              design an end-to-end security posture—not isolated boxes.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* NGFW */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <Shield className="h-3.5 w-3.5" />
                NGFW / Perimeter
              </div>
              <p className="text-sm font-medium text-white">
                Next-Generation Firewalls (NGFW).
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Cisco-based NGFWs with application visibility, IPS/IDS,
                URL-filtering and advanced malware protection provide a
                stateful, policy-driven edge for your WAN and internet
                breakouts.
              </p>
            </div>

            {/* IDS / IPS */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                <Activity className="h-3.5 w-3.5" />
                Detection &amp; response
              </div>
              <p className="text-sm font-medium text-white">
                Intrusion Detection &amp; Prevention (IDS/IPS).
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Inline and out-of-band sensors watch east–west and north–south
                traffic, flagging anomalies and blocking exploit attempts before
                they move laterally.
              </p>
            </div>

            {/* Endpoint security */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-200">
                <Server className="h-3.5 w-3.5" />
                Endpoints
              </div>
              <p className="text-sm font-medium text-white">
                Endpoint security and access control.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                AMP, NAC, PAM and VMS bring device posture checks, privileged
                access controls and continuous monitoring together—so compromised
                endpoints can&apos;t roam freely.
              </p>
            </div>

            {/* Zero trust */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                <Lock className="h-3.5 w-3.5" />
                Zero trust
              </div>
              <p className="text-sm font-medium text-white">
                Zero Trust &amp; micro-segmentation.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Identity-based access and micro-segmentation limit lateral
                movement. Users and workloads get the minimum access they need,
                nothing more.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* LAYERED DEFENCE MAP                                        */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-emerald-500/20 bg-gradient-to-b from-slate-950/90 via-slate-950 to-black px-6 py-8 md:px-10 md:py-10 shadow-[0_28px_120px_rgba(0,0,0,1)]"
          >
            <div className="grid gap-10 md:grid-cols-[1.35fr,1fr] md:items-center">
              {/* Visual: layered defence */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-6 py-8">
                {/* centre asset */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-400/70 bg-slate-950 shadow-[0_18px_80px_rgba(0,0,0,1)]">
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.6),transparent_60%)]" />
                  <ShieldCheck className="relative h-8 w-8 text-emerald-100" />
                </div>

                {/* Rings */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/30" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/10" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/5" />

                {/* Labels / layers */}
                <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <RadioTower className="h-3.5 w-3.5 text-sky-300" />
                    <span>Internet &amp; WAN edge (NGFW)</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2">
                    <Server className="h-3.5 w-3.5 text-fuchsia-300" />
                    <span>Data centre &amp; core (IDS/IPS)</span>
                  </div>
                </div>

                <div className="absolute right-4 top-10 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                    <Globe2 className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Cloud workloads &amp; APIs</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">
                    <Lock className="h-3.5 w-3.5 text-amber-300" />
                    <span>Zero trust segments</span>
                  </div>
                </div>

                <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 gap-3 text-xs text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-slate-950/75 px-3 py-2">
                    Endpoints, OT &amp; IoT devices (AMP, NAC, VMS)
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-4 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  Layered defence, one operating model.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  We align controls along the attack path: from initial access
                  at the edge to lateral movement inside the network and
                  privilege escalation at the endpoint.
                </p>
                <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      NGFWs enforce policy at campus, branch and data centre
                      perimeters with deep packet inspection and IPS/IDS.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      IDS/IPS sensors monitor east–west traffic and high-value
                      segments for exploit attempts and anomalous behaviour.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>
                      AMP, NAC, PAM and VMS secure endpoints, verify posture and
                      constrain privileged accounts.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <span>
                      Zero Trust architecture and micro-segmentation limit
                      blast radius when (not if) something gets in.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* ENGAGEMENT MODEL                                           */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              How we engage on network security.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Whether you&apos;re hardening a single DC or rolling out a
              pan-India security refresh, we plug in alongside your IT and
              security teams.
            </p>
          </motion.div>

          <motion.ol
            {...fadeUp}
            className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-4"
          >
            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-200">
                01
              </span>
              <p className="text-sm font-medium text-white">
                Assess &amp; prioritise.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Map current controls, identity gaps, attack surfaces and
                compliance requirements across sites and clouds.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-200">
                02
              </span>
              <p className="text-sm font-medium text-white">
                Design zero-trust architecture.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Align NGFW, IDS/IPS, endpoint security, NAC and PAM into a
                staged roadmap with quick wins and long-term guardrails.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-200">
                03
              </span>
              <p className="text-sm font-medium text-white">
                Deploy &amp; integrate.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Roll out Cisco NGFWs, sensors and endpoint controls with proper
                change windows, testing and handover to your SOC / NOC.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-200">
                04
              </span>
              <p className="text-sm font-medium text-white">
                Operate &amp; evolve.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Ongoing tuning, policy updates and platform upgrades to keep up
                with new threats, new apps and new compliance asks.
              </p>
            </li>
          </motion.ol>
        </section>
      </div>
    </main>
  );
}
