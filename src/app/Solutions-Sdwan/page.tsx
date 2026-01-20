  // 'use client';

  // import type { ReactNode } from 'react';
  // import { motion, cubicBezier } from 'framer-motion';
  // import {
  //   ShieldCheck,
  //   Cloud,
  //   Globe2,
  //   Activity,
  //   ArrowRight,
  //   Server,
  //   RadioTower,
  //   Network,
  // } from 'lucide-react';
  // import Image from 'next/image';

  // import SdwanDiagram from '../../../assets/Cloudmanage-3d.png';

  // const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

  // const fadeUp = {
  //   initial: { opacity: 0, y: 26 },
  //   whileInView: { opacity: 1, y: 0 },
  //   viewport: { once: true, amount: 0.3 },
  //   transition: { duration: 0.7, ease: easeOutExpo },
  // };

  // const fadeIn = {
  //   initial: { opacity: 0 },
  //   whileInView: { opacity: 1 },
  //   viewport: { once: true, amount: 0.3 },
  //   transition: { duration: 0.7, ease: easeOutExpo },
  // };

  // type Tone = 'emerald' | 'sky' | 'fuchsia' | 'amber';

  // const toneStyles: Record<
  //   Tone,
  //   {
  //     dot: string;
  //     pill: string;
  //     heading: string;
  //   }
  // > = {
  //   emerald: {
  //     dot: 'bg-emerald-400',
  //     pill: 'border-emerald-400/35 text-emerald-100',
  //     heading: 'text-emerald-200',
  //   },
  //   sky: {
  //     dot: 'bg-sky-400',
  //     pill: 'border-sky-400/35 text-sky-100',
  //     heading: 'text-sky-200',
  //   },
  //   fuchsia: {
  //     dot: 'bg-fuchsia-400',
  //     pill: 'border-fuchsia-400/35 text-fuchsia-100',
  //     heading: 'text-fuchsia-200',
  //   },
  //   amber: {
  //     dot: 'bg-amber-400',
  //     pill: 'border-amber-400/35 text-amber-100',
  //     heading: 'text-amber-200',
  //   },
  // };

  // function Pill({
  //   tone,
  //   label,
  //   icon,
  // }: {
  //   tone: Tone;
  //   label: string;
  //   icon?: ReactNode;
  // }) {
  //   const styles = toneStyles[tone];
  //   return (
  //     <span
  //       className={`inline-flex items-center gap-2 rounded-full border bg-black/30 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] ${styles.pill}`}
  //     >
  //       <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
  //       {icon && <span className="text-[13px]">{icon}</span>}
  //       <span>{label}</span>
  //     </span>
  //   );
  // }

  // function MetricCard({
  //   label,
  //   value,
  //   hint,
  // }: {
  //   label: string;
  //   value: string;
  //   hint: string;
  // }) {
  //   return (
  //     <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
  //       <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
  //         {label}
  //       </p>
  //       <p className="mt-1 text-lg font-semibold text-white">{value}</p>
  //       <p className="mt-1 text-[11px] text-slate-500">{hint}</p>
  //     </div>
  //   );
  // }

  // function StandardCard({
  //   tone,
  //   icon,
  //   title,
  //   desc,
  //   kicker,
  // }: {
  //   tone: Tone;
  //   icon: ReactNode;
  //   title: string;
  //   desc: string;
  //   kicker: string;
  // }) {
  //   const styles = toneStyles[tone];

  //   return (
  //     <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
  //       <div
  //         className={`mb-4 inline-flex items-center gap-3 rounded-full border bg-black/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] ${styles.pill}`}
  //       >
  //         <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
  //         <span className={styles.heading}>{kicker}</span>
  //       </div>

  //       <div className="flex items-start gap-3">
  //         <div className="mt-0.5 text-slate-200">{icon}</div>
  //         <div>
  //           <p className="text-sm font-medium text-white">{title}</p>
  //           <p className="mt-2 text-xs leading-relaxed text-slate-300">{desc}</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // export default function SdwanPage() {
  //   return (
  //     <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
  //       {/* GRID BACKGROUND (neutral only, no glow) */}
  //       <div
  //         className="pointer-events-none absolute inset-0 z-0"
  //         style={{
  //           backgroundImage: `
  //             linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
  //             linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
  //           `,
  //           backgroundSize: '80px 80px, 80px 80px',
  //           backgroundPosition: 'center, center',
  //         }}
  //       />

  //       <div className="relative z-10 pb-28 pt-24">
  //         {/* ---------------------------------------------------------- */}
  //         {/* HERO                                                       */}
  //         {/* ---------------------------------------------------------- */}
  //         <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
  //           <motion.div
  //             {...fadeUp}
  //             className="grid gap-10 md:grid-cols-[1.25fr,1fr] md:items-center"
  //           >
  //             {/* Hero copy */}
  //             <div>
  //               <Pill tone="sky" label="SD-WAN · Solution" />

  //               <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
  //                 SD-WAN built for real-world networks.
  //               </h1>

  //               <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
  //                 Get a software-defined WAN fabric that automatically picks the
  //                 best path for every packet, keeps traffic encrypted from edge to
  //                 cloud, and makes multi-cloud connectivity feel boringly
  //                 reliable.
  //               </p>

  //               <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
  //                 <Pill tone="emerald" label="Zero-trust connectivity" />
  //                 <Pill tone="fuchsia" label="Multi-cloud ready" />
  //                 <Pill tone="amber" label="MPLS cost optimisation" />
  //               </div>

  //               <div className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
  //                 <MetricCard
  //                   label="Coverage"
  //                   value="Pan-India & global footprint"
  //                   hint="Designed for distributed branches, DCs and cloud regions."
  //                 />
  //                 <MetricCard
  //                   label="Traffic control"
  //                   value="Per-app, per-link policies"
  //                   hint="Prioritise critical apps, throttle bulk traffic and steer by SLA."
  //                 />
  //               </div>
  //             </div>

  //             {/* Hero visual (standard card, no glow/gradient bg) */}
  //             <motion.div {...fadeIn} className="relative flex items-center justify-center">
  //               <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black/40 p-5">
  //                 <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
  //                   {/* Desktop image */}
  //                   <div className="hidden aspect-[16/10] md:block">
  //                     <Image
  //                       src={SdwanDiagram}
  //                       alt="SD-WAN traffic and sites visual"
  //                       className="h-full w-full object-cover opacity-95"
  //                     />
  //                   </div>

  //                   {/* Mobile fallback */}
  //                   <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
  //                     <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
  //                       SD-WAN Fabric
  //                     </span>
  //                     <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
  //                       Branches, DCs and clouds connected over encrypted overlays,
  //                       with traffic steered in real time based on latency, loss and jitter.
  //                     </p>
  //                   </div>
  //                 </div>

  //                 <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
  //                   <div className="flex items-center gap-2">
  //                     <Activity className="h-3.5 w-3.5" />
  //                     <span>Live path monitoring</span>
  //                   </div>
  //                   <div className="flex items-center gap-1 text-slate-300">
  //                     <span>See sample topology</span>
  //                     <ArrowRight className="h-3.5 w-3.5" />
  //                   </div>
  //                 </div>
  //               </div>
  //             </motion.div>
  //           </motion.div>
  //         </section>

  //         {/* ---------------------------------------------------------- */}
  //         {/* VALUE PILLARS                                              */}
  //         {/* ---------------------------------------------------------- */}
  //         <section className="mx-auto mt-16 max-w-6xl px-6 md:px-10 lg:px-16">
  //           <motion.div {...fadeUp}>
  //             <h2 className="text-xl font-semibold text-white md:text-2xl">
  //               What SD-WAN with Commedia delivers.
  //             </h2>
  //             <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
  //               We don’t just drop an SD-WAN appliance and walk away. We design,
  //               deploy and run a fabric that matches your applications, sites and
  //               clouds.
  //             </p>
  //           </motion.div>

  //           <motion.div
  //             {...fadeUp}
  //             className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
  //           >
  //             <StandardCard
  //               tone="sky"
  //               kicker="Performance"
  //               icon={<Activity className="h-5 w-5" />}
  //               title="Optimised network performance."
  //               desc="Application-aware routing picks the best path (MPLS, internet, LTE, 5G) based on live latency, loss and jitter. Real-time failover keeps sessions intact during link events."
  //             />
  //             <StandardCard
  //               tone="emerald"
  //               kicker="Security"
  //               icon={<ShieldCheck className="h-5 w-5" />}
  //               title="Secure WAN edge."
  //               desc="End-to-end encryption, integrated firewalls and zero-trust policies ensure branches, users and workloads are authenticated before they’re connected."
  //             />
  //             <StandardCard
  //               tone="fuchsia"
  //               kicker="Multi-cloud"
  //               icon={<Cloud className="h-5 w-5" />}
  //               title="Hybrid & multi-cloud integration."
  //               desc="Direct, policy-driven connectivity into AWS, Azure and private clouds. Create fast lanes for SaaS and move workloads without re-architecting your WAN every time."
  //             />
  //             <StandardCard
  //               tone="amber"
  //               kicker="Reach & cost"
  //               icon={<Globe2 className="h-5 w-5" />}
  //               title="Cost-effective, everywhere."
  //               desc="Use broadband, internet DIA and LTE to reduce heavy MPLS dependency—while keeping SLAs intact across pan-India and global sites."
  //             />
  //           </motion.div>
  //         </section>

  //         {/* ---------------------------------------------------------- */}
  //         {/* TOPOLOGY / FABRIC VIEW                                     */}
  //         {/* ---------------------------------------------------------- */}
  //         <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
  //           <motion.div
  //             {...fadeUp}
  //             className="rounded-[32px] border border-white/10 bg-black/40 px-6 py-8 md:px-10 md:py-10"
  //           >
  //             <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
  //               {/* schematic */}
  //               <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 px-6 py-8">
  //                 {/* controller */}
  //                 <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/12 bg-black/55">
  //                   <div className="flex flex-col items-center text-[11px] text-slate-50">
  //                     <Server className="mb-1 h-4 w-4" />
  //                     <span>SD-WAN</span>
  //                     <span>Controller</span>
  //                   </div>
  //                 </div>

  //                 {/* rings (neutral) */}
  //                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
  //                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />

  //                 {/* lines (neutral) */}
  //                 <div className="pointer-events-none absolute left-[14%] top-[24%] h-px w-[26%] bg-white/12" />
  //                 <div className="pointer-events-none absolute left-[14%] bottom-[24%] h-px w-[26%] bg-white/12" />
  //                 <div className="pointer-events-none absolute right-[14%] top-1/2 h-px w-[26%] -translate-y-1/2 bg-white/12" />
  //                 <div className="pointer-events-none absolute left-1/2 top-[82%] h-[18%] w-px -translate-x-1/2 bg-white/12" />

  //                 {/* left: branches */}
  //                 <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
  //                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
  //                     <RadioTower className="h-3.5 w-3.5 text-sky-300" />
  //                     <span>Metro branches</span>
  //                   </div>
  //                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
  //                     <RadioTower className="h-3.5 w-3.5 text-sky-300" />
  //                     <span>Remote sites</span>
  //                   </div>
  //                 </div>

  //                 {/* right: clouds & DCs */}
  //                 <div className="absolute right-4 top-8 space-y-3 text-xs text-slate-200">
  //                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
  //                     <Cloud className="h-3.5 w-3.5 text-sky-300" />
  //                     <span>AWS / Azure / GCP</span>
  //                   </div>
  //                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
  //                     <Server className="h-3.5 w-3.5 text-emerald-300" />
  //                     <span>Private DCs</span>
  //                   </div>
  //                 </div>

  //                 {/* bottom: users */}
  //                 <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 gap-3 text-xs text-slate-200">
  //                   <div className="rounded-xl border border-white/10 bg-black/45 px-3 py-2">
  //                     Remote &amp; hybrid users
  //                   </div>
  //                   <div className="rounded-xl border border-white/10 bg-black/45 px-3 py-2">
  //                     Partner networks
  //                   </div>
  //                 </div>
  //               </div>

  //               {/* copy */}
  //               <div className="space-y-4 text-sm text-slate-200">
  //                 <h3 className="text-lg font-semibold text-white md:text-xl">
  //                   One fabric from branch to cloud.
  //                 </h3>
  //                 <p className="text-sm leading-relaxed text-slate-300 md:text-base">
  //                   Instead of managing dozens of point-to-point links, we build
  //                   an overlay fabric that abstracts the transport layer. Traffic
  //                   is steered by policy, not individual circuits.
  //                 </p>
  //                 <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
  //                   <li className="flex gap-2">
  //                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
  //                     <span>
  //                       Application-aware policies: collaboration, voice, video and
  //                       business-critical apps always get the cleanest path.
  //                     </span>
  //                   </li>
  //                   <li className="flex gap-2">
  //                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
  //                     <span>
  //                       Encrypted overlays between every site, data centre and cloud
  //                       region with unified security policies.
  //                     </span>
  //                   </li>
  //                   <li className="flex gap-2">
  //                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
  //                     <span>
  //                       Dynamic path selection across MPLS, internet DIA, broadband
  //                       and LTE to balance performance and cost.
  //                     </span>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </motion.div>
  //         </section>

  //         {/* ---------------------------------------------------------- */}
  //         {/* ROLLOUT & OPERATIONS                                      */}
  //         {/* ---------------------------------------------------------- */}
  //         <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
  //           <motion.div {...fadeUp}>
  //             <h2 className="text-xl font-semibold md:text-2xl">
  //               From design to day-2 operations.
  //             </h2>
  //             <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
  //               Our teams bring experience across pan-India and global rollouts—
  //               from greenfield WANs to brownfield migrations.
  //             </p>
  //           </motion.div>

  //           <motion.ol
  //             {...fadeUp}
  //             className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-4"
  //           >
  //             {[
  //               {
  //                 n: '01',
  //                 t: 'Network assessment',
  //                 d: 'Baseline existing WAN, traffic patterns and app dependencies. Identify quick wins and high-risk paths.',
  //               },
  //               {
  //                 n: '02',
  //                 t: 'SD-WAN design & pilots',
  //                 d: 'Define overlay topology, security posture and rollout waves. Prove performance on a subset of sites before scaling.',
  //               },
  //               {
  //                 n: '03',
  //                 t: 'Pan-India & global rollout',
  //                 d: 'Factory-style deployments, with standardised templates and remote turn-ups to minimise on-site disruption.',
  //               },
  //               {
  //                 n: '04',
  //                 t: 'Day-2 operations & optimisation',
  //                 d: 'Continuous monitoring, policy tuning and change management so the fabric keeps up with new apps and sites.',
  //               },
  //             ].map((s) => (
  //               <li
  //                 key={s.n}
  //                 className="relative rounded-3xl border border-white/10 bg-black/40 p-5"
  //               >
  //                 <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xs font-semibold text-slate-200">
  //                   {s.n}
  //                 </span>
  //                 <p className="text-sm font-medium text-white">{s.t}</p>
  //                 <p className="mt-2 text-xs leading-relaxed text-slate-300">
  //                   {s.d}
  //                 </p>
  //               </li>
  //             ))}
  //           </motion.ol>
  //         </section>
  //       </div>
  //     </main>
  //   );
  // }


  //pp//
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
                  <span className="block text-sky-300">without drama.</span>
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
                <Image
                  src={SdwanDiagram}
                  alt="SD-WAN fabric spanning branches, data centers and cloud regions"
                  className="h-[260px] w-full object-cover opacity-85 md:h-[340px]"
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
