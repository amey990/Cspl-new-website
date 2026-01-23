'use client';

import { motion, cubicBezier } from 'framer-motion';
import {
  Satellite,
  RadioTower,
  Network,
  Cloud,
  ShieldCheck,
  Globe2,
  MapPinned,
  Building2,
} from 'lucide-react';
import Image from 'next/image';

// TODO: replace with your actual high-res image asset
// e.g. '../../../assets/solutions/satellite-hero.png'
import SatelliteHero from '../../../assets/Satcommm.png';

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


function ChipCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/85 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/40">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-[12px] leading-relaxed text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
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

export default function SatelliteCommunicationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GLOBAL GRID BACKGROUND – same style as other Solutions pages */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
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
            {/* Left: copy */}
            <div>
              <Pill
                tone="sky"
                label="Satellite Communication · Solution"
                icon={<Satellite className="h-3.5 w-3.5" />}
              />

              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
                Satellite links that feel
                <span className="block text-sky-300">
                  like part of your core network.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                From remote VSAT sites to carrier-grade teleports, we design and
                operate satellite connectivity that behaves predictably—even in
                the most remote, infrastructure-poor locations.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                <MetricCard
                  label="Typical use-cases"
                  value="VSAT · Backhaul · Broadcast"
                  hint="Service providers, enterprises, broadcasters and government networks."
                />
                <MetricCard
                  label="Bands &amp; coverage"
                  value="C · Ku · Ka-band"
                  hint="Optimised per region, rain-fade profile and throughput requirements."
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
                <Pill
                  tone="emerald"
                  label="Reliable VSAT networks"
                  icon={<RadioTower className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="sky"
                  label="High-speed backhaul"
                  icon={<Network className="h-3.5 w-3.5" />}
                />
                <Pill
                  tone="amber"
                  label="Multi-band expertise"
                  icon={<Globe2 className="h-3.5 w-3.5" />}
                />
              </div>
            </div>

            {/* Right: visual */}
            <motion.div
              {...fadeIn}
              className="relative flex items-center justify-center"
            >
              <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-500/18 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-emerald-400/18 blur-3xl" />

              <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950/90 via-slate-950 to-black p-5 shadow-[0_26px_100px_rgba(0,0,0,1)]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  {/* Desktop image */}
                  <div className="hidden aspect-[16/10] items-center justify-center md:flex">
                    <Image
                      src={SatelliteHero}
                      alt="Teleport, satellite and remote sites connectivity"
                      className="h-full w-full object-cover opacity-95"
                    />
                  </div>

                  {/* Mobile schematic fallback */}
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/70 bg-slate-950">
                        <Satellite className="h-6 w-6 text-sky-100" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/70 bg-slate-950">
                        <RadioTower className="h-6 w-6 text-emerald-100" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/70 bg-slate-950">
                        <Building2 className="h-6 w-6 text-amber-100" />
                      </div>
                    </div>
                    <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
                      Satellites, teleports and remote sites engineered as a
                      single, monitored fabric for business and carrier traffic.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                    Redundant paths, diversity &amp; SLAs for 24x7 uptime
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1">
                    <Cloud className="h-3.5 w-3.5 text-sky-300" />
                    Direct cloud / core network integration over satellite
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
              Satellite as an extension of your WAN, not an exception.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              We bring together VSAT design, teleport operations and IP
              networking so your satellite links plug into the same monitoring,
              security and automation that runs the rest of your network.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* VSAT & teleport networks */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-200">
                <RadioTower className="h-3.5 w-3.5" />
                VSAT &amp; Teleport
              </div>
              <p className="text-sm font-medium text-white">
                Reliable VSAT networks and teleport operations.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Design, deployment and operation of hub-and-spoke or mesh VSAT
                topologies, with carrier-grade teleport infrastructure behind
                them.
              </p>
            </div>

            {/* High-speed backhaul */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <Network className="h-3.5 w-3.5" />
                Backhaul
              </div>
              <p className="text-sm font-medium text-white">
                High-speed satellite backhaul for telco &amp; enterprise.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Backhaul for RAN sites, remote branches and POPs, with QoS, VPN
                and traffic engineering aligned to your IP/MPLS or SD-WAN core.
              </p>
            </div>

            {/* Multi-band expertise */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                <Globe2 className="h-3.5 w-3.5" />
                C · Ku · Ka-band
              </div>
              <p className="text-sm font-medium text-white">
                C, Ku and Ka-band design &amp; optimisation.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Link budgets, antenna sizing, rain-fade margins and choice of
                band tailored to your geography, application and cost model.
              </p>
            </div>

            {/* Reach & presence */}
            <div className="rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <MapPinned className="h-3.5 w-3.5" />
                Reach
              </div>
              <p className="text-sm font-medium text-white">
                Pan-India and global presence.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Rollouts across remote and hard-to-reach sites, with localised
                field teams and centralised NOC support to keep links stable.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* SATELLITE TOPOLOGY / FLOW DIAGRAM                         */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-sky-500/25 bg-gradient-to-b from-slate-950/90 via-slate-950 to-black px-6 py-8 shadow-[0_28px_120px_rgba(0,0,0,1)] md:px-10 md:py-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.35fr,1fr] md:items-center">
              {/* Diagram */}
              {/* Diagram (meaningful + responsive, no random floating chips) */}
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/75 px-6 py-8">
  {/* subtle rings behind */}
  <div className="pointer-events-none absolute left-1/2 top-16 h-44 w-44 -translate-x-1/2 rounded-full border border-sky-500/25" />
  <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full border border-sky-500/10" />

  <div className="relative grid gap-8 md:grid-cols-3 md:items-center">
    {/* LEFT: Edge sites */}
   <div className="space-y-3">
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
    Edge sites
  </p>

  <ChipCard
    icon={<Building2 className="h-4 w-4 text-emerald-300" />}
    title="Enterprise branches / plants"
    subtitle="Production sites, offices, depots"
  />

  <ChipCard
    icon={<RadioTower className="h-4 w-4 text-amber-300" />}
    title="Remote towers & POPs"
    subtitle="RAN sites, rural POPs, rigs"
  />
</div>


    {/* CENTER: Satellite + Teleport */}
    <div className="flex flex-col items-center text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/80 bg-slate-950">
        <Satellite className="h-6 w-6 text-sky-100" />
      </div>
      <p className="mt-2 text-[11px] text-slate-300">GEO / HTS Satellite</p>

      <div className="mt-4 flex h-16 w-56 items-center justify-center rounded-2xl border border-sky-400/70 bg-slate-950 shadow-[0_18px_80px_rgba(0,0,0,1)]">
        <RadioTower className="mr-2 h-5 w-5 text-sky-200" />
        <span className="text-sm font-semibold text-sky-50">
          Teleport &amp; Core POP
        </span>
      </div>

      <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-300">
        QoS, WAN optimisation and encryption applied end-to-end over satellite.
      </p>
    </div>

    {/* RIGHT: Core + workloads */}
   <div className="space-y-3">
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
    Core &amp; workloads
  </p>

  <ChipCard
    icon={<Network className="h-4 w-4 text-sky-300" />}
    title="IP/MPLS / SD-WAN core"
    subtitle="Routing, security, policy"
  />

  <ChipCard
    icon={<Cloud className="h-4 w-4 text-emerald-300" />}
    title="Cloud & DC workloads"
    subtitle="Apps, VMs, data platforms"
  />
</div>

  </div>

  {/* Bottom “meaning” */}
  <div className="mt-8 grid gap-3 md:grid-cols-2">
    <div className="rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-xs text-slate-200">
      Central NOC visibility into link health, bandwidth and application performance.
    </div>
    <div className="rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-xs text-slate-200">
      Optional redundancy: multi-satellite, multi-teleport, and 4G/5G backup for critical sites.
    </div>
  </div>
</div>


              {/* Copy */}
              <div className="space-y-4 text-sm text-slate-200">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  One view of your satellite and terrestrial footprint.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  We design satellite topologies to align with your existing WAN
                  and security architecture—so remote sites don&apos;t feel like
                  a separate, &quot;special&quot; network to support.
                </p>
                <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>
                      Link budgets, fade margins and availability targets
                      tuned per region and SLA tier.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      Integration with your firewalls, SD-WAN and monitoring
                      tools for consistent policies.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <span>
                      Optional redundancy (multi-satellite, multi-teleport,
                      4G/5G backup) for critical sites.
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
              How we deliver satellite projects end-to-end.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              From greenfield VSAT rollouts to upgrading legacy satellite
              networks, we combine RF, IP and field expertise in one team.
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
                Assessment &amp; requirements.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Understand coverage gaps, bandwidth needs, SLAs and regulatory
                constraints across regions and sites.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                02
              </span>
              <p className="text-sm font-medium text-white">
                Design &amp; link engineering.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Band selection, link budgets, hub sizing, modem/antenna
                selection and network integration design.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                03
              </span>
              <p className="text-sm font-medium text-white">
                Deployment &amp; commissioning.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Site surveys, antenna installation, pointing, modem
                provisioning and E2E service testing.
              </p>
            </li>

            <li className="relative rounded-2xl border border-white/10 bg-black/70 p-4">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-200">
                04
              </span>
              <p className="text-sm font-medium text-white">
                NOC, monitoring &amp; optimisation.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                24x7 monitoring, incident response, capacity tuning and
                periodic performance reviews across your satellite estate.
              </p>
            </li>
          </motion.ol>
        </section>
      </div>
    </main>
  );
}
