// 'use client';

// import type { ReactNode } from 'react';
// import { motion, cubicBezier } from 'framer-motion';
// import {
//   Wifi,
//   Router,
//   RadioTower,
//   ShieldCheck,
//   Network,
//   Smartphone,
//   Building2,
//   SignalHigh,
// } from 'lucide-react';
// import Image from 'next/image';

// import WirelessNetworkingHero from '../../../assets/CNMS_dummy.jpg';

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

// export default function WirelessNetworkingPage() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
//       {/* GRID BACKGROUND (neutral only) */}
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
//             {/* Copy */}
//             <div>
//               <Pill
//                 tone="sky"
//                 label="Wireless Networking · Solution"
//                 icon={<Wifi className="h-3.5 w-3.5" />}
//               />

//               <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
//                 Wi-Fi that feels wired,
//                 <span className="block text-sky-300">
//                   even when the site is busy.
//                 </span>
//               </h1>

//               <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
//                 We design and deploy seamless wireless networks for offices,
//                 campuses, warehouses and outdoor environments—so users, devices
//                 and critical apps stay connected, securely and consistently.
//               </p>

//               <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
//                 <MetricCard
//                   label="Typical deployments"
//                   value="Offices, plants, campuses"
//                   hint="High-density, mixed device environments with roaming traffic."
//                 />
//                 <MetricCard
//                   label="Radio designs"
//                   value="Wi-Fi · P2P · Mesh"
//                   hint="Coverage for the last 5% of dead zones with smart RF planning."
//                 />
//               </div>

//               <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
//                 <Pill
//                   tone="emerald"
//                   label="Seamless connectivity"
//                   icon={<SignalHigh className="h-3.5 w-3.5" />}
//                 />
//                 <Pill
//                   tone="fuchsia"
//                   label="Point-to-point & mesh"
//                   icon={<RadioTower className="h-3.5 w-3.5" />}
//                 />
//                 <Pill
//                   tone="amber"
//                   label="Integrated with IT stack"
//                   icon={<Router className="h-3.5 w-3.5" />}
//                 />
//               </div>
//             </div>

//             {/* Visual (standard card, no glow/gradient) */}
//             <motion.div {...fadeIn} className="relative flex items-center justify-center">
//               <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black/40 p-5">
//                 <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
//                   {/* Desktop image */}
//                   <div className="hidden aspect-[16/10] md:block">
//                     <Image
//                       src={WirelessNetworkingHero}
//                       alt="Enterprise wireless networking with access points and devices"
//                       className="h-full w-full object-cover opacity-95"
//                     />
//                   </div>

//                   {/* Mobile schematic (neutral) */}
//                   <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
//                     <div className="flex gap-6">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50">
//                         <Router className="h-6 w-6 text-slate-200" />
//                       </div>
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50">
//                         <Wifi className="h-6 w-6 text-slate-200" />
//                       </div>
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50">
//                         <Smartphone className="h-6 w-6 text-slate-200" />
//                       </div>
//                     </div>
//                     <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
//                       Controllers, access points and clients work together as a
//                       single wireless fabric—with roaming and security handled
//                       in the background.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
//                   <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
//                     <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
//                     WPA3, 802.1X &amp; role-based access
//                   </span>
//                   <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
//                     <Network className="h-3.5 w-3.5 text-sky-300" />
//                     Integrated with LAN / SD-WAN
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* ---------------------------------------------------------- */}
//         {/* CORE CAPABILITIES                                          */}
//         {/* ---------------------------------------------------------- */}
//         <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
//           <motion.div {...fadeUp}>
//             <h2 className="text-xl font-semibold md:text-2xl">
//               Wireless that keeps up with your users.
//             </h2>
//             <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
//               From first site surveys to full rollout, we optimise RF, security
//               and backhaul so Wi-Fi becomes a reliable utility—not a daily
//               support ticket.
//             </p>
//           </motion.div>

//           <motion.div
//             {...fadeUp}
//             className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
//           >
//             <StandardCard
//               tone="sky"
//               kicker="Seamless coverage"
//               icon={<Wifi className="h-5 w-5" />}
//               title="Seamless wireless connectivity."
//               desc="High-speed, secure Wi-Fi for employees, guests and IoT devices, designed for roaming between APs with minimal drops or jitter."
//             />

//             <StandardCard
//               tone="fuchsia"
//               kicker="RF design"
//               icon={<RadioTower className="h-5 w-5" />}
//               title="Wi-Fi, point-to-point & mesh."
//               desc="Outdoor links, multi-building mesh and long-range point-to-point bridges for cameras, remote sheds and temporary sites."
//             />

//             <StandardCard
//               tone="emerald"
//               kicker="Secure access"
//               icon={<ShieldCheck className="h-5 w-5" />}
//               title="Enterprise-grade wireless security."
//               desc="802.1X, RADIUS, role-based access and segmentation to keep corporate traffic isolated from guests and unmanaged devices."
//             />

//             <StandardCard
//               tone="amber"
//               kicker="Integrated"
//               icon={<Router className="h-5 w-5" />}
//               title="Integrated with existing IT stack."
//               desc="Controllers, switches, firewalls and authentication systems working together, with change windows planned to minimise downtime."
//             />
//           </motion.div>
//         </section>

//         {/* ---------------------------------------------------------- */}
//         {/* WIRELESS FABRIC                                            */}
//         {/* ---------------------------------------------------------- */}
//         <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
//           <motion.div
//             {...fadeUp}
//             className="rounded-[32px] border border-white/10 bg-black/40 px-6 py-8 md:px-10 md:py-10"
//           >
//             <div className="grid gap-10 md:grid-cols-[1.35fr,1fr] md:items-center">
//               {/* Diagram card */}
//               <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 px-6 py-8">
//                 {/* Centre controller */}
//                 <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-black/55">
//                   <Router className="h-7 w-7 text-slate-200" />
//                 </div>

//                 {/* Rings (neutral) */}
//                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
//                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />

//                 {/* Zones */}
//                 <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <Building2 className="h-3.5 w-3.5 text-sky-300" />
//                     <span>HQ / data centre</span>
//                   </div>
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <Building2 className="h-3.5 w-3.5 text-emerald-300" />
//                     <span>Branch offices</span>
//                   </div>
//                 </div>

//                 <div className="absolute right-4 top-8 space-y-3 text-xs text-slate-200">
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <RadioTower className="h-3.5 w-3.5 text-fuchsia-300" />
//                     <span>Outdoor P2P links</span>
//                   </div>
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <Smartphone className="h-3.5 w-3.5 text-amber-300" />
//                     <span>BYOD &amp; handhelds</span>
//                   </div>
//                 </div>

//                 <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 flex-wrap justify-center gap-3 text-xs text-slate-200">
//                   <div className="rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     Centralised policy for SSIDs, VLANs, QoS and security profiles.
//                   </div>
//                   <div className="rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     Telemetry, heatmaps and client experience dashboards.
//                   </div>
//                 </div>
//               </div>

//               {/* Copy */}
//               <div className="space-y-4 text-sm text-slate-200">
//                 <h3 className="text-lg font-semibold text-white md:text-xl">
//                   One wireless fabric, many device types.
//                 </h3>
//                 <p className="text-sm leading-relaxed text-slate-300 md:text-base">
//                   We treat wireless as a single fabric connecting offices,
//                   branches, plants and outdoor links—with a consistent security
//                   and operations model throughout.
//                 </p>
//                 <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
//                   <li className="flex gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
//                     <span>
//                       Site surveys, RF modelling and AP placement plans before
//                       the first ceiling mount goes up.
//                     </span>
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                     <span>
//                       Role-based SSIDs for staff, guests, contractors and IoT
//                       devices with different policies and bandwidth limits.
//                     </span>
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                     <span>
//                       Point-to-point and mesh links where fibre or copper is
//                       impractical, with redundancy and failover.
//                     </span>
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
//                     <span>
//                       Integration with your existing switches, firewalls and
//                       SD-WAN so wireless becomes an extension of your core network.
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* ---------------------------------------------------------- */}
//         {/* ENGAGEMENT MODEL                                           */}
//         {/* ---------------------------------------------------------- */}
//         <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
//           <motion.div {...fadeUp}>
//             <h2 className="text-xl font-semibold md:text-2xl">
//               How we roll out wireless projects.
//             </h2>
//             <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
//               We aim for “switch-over weekends” instead of months-long disruption—
//               especially for live offices and plants.
//             </p>
//           </motion.div>

//           <motion.ol
//             {...fadeUp}
//             className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-4"
//           >
//             {[
//               {
//                 n: '01',
//                 t: 'Site survey & RF design.',
//                 d: 'Floor plans, interference checks and heatmaps to understand wall materials, user density and coverage targets.',
//               },
//               {
//                 n: '02',
//                 t: 'Design security & integration.',
//                 d: 'Map SSIDs to VLANs, RADIUS, firewalls and SD-WAN, with policies for staff, guests and IoT clients.',
//               },
//               {
//                 n: '03',
//                 t: 'Deploy & test in waves.',
//                 d: 'Stage-wise rollout with pilot areas, coverage validation, throughput tests and failover drills.',
//               },
//               {
//                 n: '04',
//                 t: 'Operate & optimise.',
//                 d: 'Ongoing monitoring, firmware lifecycle and capacity planning, so wireless keeps up as devices and sites grow.',
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
// src/app/solutions/wireless-networking/page.tsx
'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
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
  Map,
  Layers,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

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

function ScenarioCard({
  tone,
  icon,
  title,
  desc,
  bullets,
}: {
  tone: Tone;
  icon: ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}) {
  const tint: Record<Tone, string> = {
    emerald: 'border-emerald-400/25 from-emerald-500/10',
    sky: 'border-sky-400/25 from-sky-500/10',
    fuchsia: 'border-fuchsia-400/25 from-fuchsia-500/10',
    amber: 'border-amber-300/25 from-amber-300/10',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-b ${tint[tone]} via-black to-black p-5 shadow-[0_18px_70px_rgba(0,0,0,0.9)]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.22),transparent_55%)] opacity-70" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
            {icon}
            {title}
          </span>
          <SignalHigh className="h-4 w-4 text-slate-300" />
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-300">{desc}</p>

        <ul className="mt-4 space-y-2 text-xs text-slate-200">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/25" />
              <span className="leading-relaxed text-slate-300">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepCard({
  n,
  title,
  desc,
  icon,
}: {
  n: string;
  title: string;
  desc: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/55 p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xs font-semibold text-slate-200">
          {n}
        </span>
        <span className="text-slate-200">{icon}</span>
      </div>
      <p className="mt-3 text-sm font-medium text-white">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-300">{desc}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BG (same system) */}
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
        {/* HERO (different rhythm) */}
        <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="grid gap-10 md:grid-cols-[1.05fr,0.95fr] md:items-center">
            {/* LEFT: RF visual console */}
            <motion.div {...fadeIn} className="relative">
              <div className="rounded-[32px] border border-white/10 bg-black/50 p-5 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                    RF snapshot
                  </span>
                  <span className="inline-flex items-center gap-2 text-slate-500">
                    <Map className="h-3.5 w-3.5" />
                    Heatmap view
                  </span>
                </div>

                <div className="mt-4 relative overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={WirelessNetworkingHero}
                    alt="Wireless networking"
                    className="h-[260px] w-full object-cover opacity-85 md:h-[360px]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  {/* Overlay chips */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-slate-200">
                      Roaming stable
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-slate-200">
                      High-density tuned
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 grid gap-2 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/60 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Coverage
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Dead zones removed
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/60 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Capacity
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Busy floors OK
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/60 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Security
                      </p>
                      <p className="text-sm font-semibold text-white">
                        WPA3 + 802.1X
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                    Role-based access
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
                    <Network className="h-3.5 w-3.5 text-sky-300" />
                    LAN / SD-WAN integration
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: copy */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <BadgePill
                  icon={<Wifi className="h-3.5 w-3.5" />}
                  label="Solutions · Wireless Networking"
                  tone="sky"
                />
                <BadgePill
                  icon={<RadioTower className="h-3.5 w-3.5" />}
                  label="Wi-Fi · P2P · Mesh"
                  tone="fuchsia"
                />
                <BadgePill
                  icon={<Router className="h-3.5 w-3.5" />}
                  label="Controller-led ops"
                  tone="amber"
                />
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Wi-Fi that feels wired
                <span className="block text-sky-300">even when the site is busy.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                We design and deploy seamless wireless networks for offices, campuses,
                warehouses and outdoor environments—so users, devices and critical apps
                stay connected, securely and consistently.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <MetricCard
                  label="Typical deployments"
                  value="Offices, plants, campuses"
                  hint="High-density, mixed device environments with roaming traffic."
                />
                <MetricCard
                  label="Radio designs"
                  value="Wi-Fi · P2P · Mesh"
                  hint="Coverage for hard areas with smart RF planning + backhaul."
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* DEPLOYMENT SCENARIOS (unique vs other pages) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              Built for the places Wi-Fi usually breaks.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Different environments need different RF strategies. We design for
              density, roaming, interference and backhaul—not just “signal bars”.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <ScenarioCard
                tone="sky"
                icon={<Building2 className="h-4 w-4" />}
                title="Office & campus"
                desc="High user density, meeting rooms, roaming traffic and guest access at scale."
                bullets={[
                  'Fast roaming tuned for voice/video and collaboration apps.',
                  'Guest + employee segregation with role-based policies.',
                  'Controller templates to keep multi-site consistent.',
                ]}
              />
              <ScenarioCard
                tone="emerald"
                icon={<Smartphone className="h-4 w-4" />}
                title="Plant & warehouse"
                desc="Handheld scanners, forklifts, metal racks and RF reflections that kill throughput."
                bullets={[
                  'RF modelling for aisles, high ceilings and reflective zones.',
                  'Coverage validation per critical workflow (scan, pick, move).',
                  'Backhaul planning to avoid bottlenecks on uplinks.',
                ]}
              />
              <ScenarioCard
                tone="fuchsia"
                icon={<RadioTower className="h-4 w-4" />}
                title="Outdoor links"
                desc="Last-mile connectivity where fibre is impractical—yards, sheds, gates and remote blocks."
                bullets={[
                  'Point-to-point bridges for cameras and remote units.',
                  'Mesh where line-of-sight is not guaranteed.',
                  'Redundant paths for critical outdoor operations.',
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/* RF PLANNING WORKFLOW BAND (different from ring maps) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-900/60 via-black to-black px-6 py-8 md:px-10 md:py-10 shadow-[0_28px_110px_rgba(0,0,0,1)]"
          >
            <div className="grid gap-10 md:grid-cols-[1.05fr,0.95fr] md:items-center">
              {/* Left: “console” */}
              <div className="rounded-3xl border border-white/10 bg-black/55 p-6">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                    RF planning workflow
                  </span>
                  <span className="inline-flex items-center gap-2 text-slate-500">
                    <Layers className="h-3.5 w-3.5" />
                    Survey → optimise
                  </span>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Design target
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Coverage + capacity
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Roaming
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Voice/video ready
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Interference
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Channel plan tuned
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Backhaul
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      No uplink choke
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/55 p-4 text-xs text-slate-200">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Output
                  </p>
                  <p className="mt-2 leading-relaxed text-slate-300">
                    Heatmaps, AP placement, channel + power plan, SSID roles, VLAN mapping,
                    and a rollout checklist your ops team can live with.
                  </p>
                </div>
              </div>

              {/* Right: steps */}
              <div className="grid gap-4 md:grid-cols-2">
                <StepCard
                  n="01"
                  title="Survey & baseline"
                  desc="Floor plans, spectrum checks, user density mapping, and critical app journeys."
                  icon={<Map className="h-4 w-4" />}
                />
                <StepCard
                  n="02"
                  title="RF model & AP plan"
                  desc="Placement, antenna choices, channel/power plan, and roaming parameters."
                  icon={<RadioTower className="h-4 w-4" />}
                />
                <StepCard
                  n="03"
                  title="Secure SSIDs & roles"
                  desc="802.1X, guest access, IoT SSIDs, segmentation and bandwidth policies."
                  icon={<ShieldCheck className="h-4 w-4" />}
                />
                <StepCard
                  n="04"
                  title="Validate & tune"
                  desc="Walk tests, throughput checks, roaming validation and interference fixes."
                  icon={<Wrench className="h-4 w-4" />}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECURITY + INTEGRATION (split board, unique) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-[1fr,1fr] md:items-start">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Wireless security that doesn’t annoy users.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
                We make access predictable: correct role, correct VLAN, correct policy—
                with visibility for IT when something goes wrong.
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-black/55 p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Policy board
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    'WPA3 + 802.1X for staff networks',
                    'Guest captive portal with rate limiting',
                    'IoT SSIDs isolated with micro-segmentation',
                    'Controller templates to prevent config drift',
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/50 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                      <p className="text-xs leading-relaxed text-slate-300">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/55 p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Role-based SSIDs
              </p>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Staff</span>
                    <BadgePill icon={<ShieldCheck className="h-3.5 w-3.5" />} label="802.1X" tone="emerald" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Full access based on identity + posture, with QoS for voice/video.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Guest</span>
                    <BadgePill icon={<Wifi className="h-3.5 w-3.5" />} label="Portal" tone="sky" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Internet-only with rate limits and clean logging for compliance.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">IoT / Devices</span>
                    <BadgePill icon={<Network className="h-3.5 w-3.5" />} label="Isolated" tone="amber" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Segmented VLANs with strict east–west restrictions and monitoring hooks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ROLLOUT MODEL (kept but styled consistently) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              How we roll out wireless projects.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              We aim for “switch-over weekends” instead of months-long disruption—
              especially for live offices and plants.
            </p>
          </motion.div>

          <motion.ol
            {...fadeUp}
            className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-4"
          >
            {[
              {
                n: '01',
                t: 'Site survey & RF design',
                d: 'Floor plans, interference checks and heatmaps for wall materials, density and coverage targets.',
              },
              {
                n: '02',
                t: 'Design security & integration',
                d: 'Map SSIDs to VLANs, RADIUS, firewalls and SD-WAN with policies for staff, guests and IoT clients.',
              },
              {
                n: '03',
                t: 'Deploy & test in waves',
                d: 'Pilot areas first. Validate roaming, throughput, failover and “busy hour” performance.',
              },
              {
                n: '04',
                t: 'Operate & optimise',
                d: 'Monitoring, firmware lifecycle and capacity planning so Wi-Fi keeps up as sites grow.',
              },
            ].map((s) => (
              <li
                key={s.n}
                className="relative rounded-3xl border border-white/10 bg-black/55 p-5"
              >
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xs font-semibold text-slate-200">
                  {s.n}
                </span>
                <p className="text-sm font-medium text-white">{s.t}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{s.d}</p>
              </li>
            ))}
          </motion.ol>
        </section>
      </div>
    </main>
  );
}
