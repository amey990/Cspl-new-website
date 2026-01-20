// 'use client';

// import type { ReactNode } from 'react';
// import { motion, cubicBezier } from 'framer-motion';
// import {
//   Video,
//   Mic2,
//   Tv,
//   Presentation,
//   Users,
//   RadioTower,
//   SlidersHorizontal,
//   Cast,
// } from 'lucide-react';
// import Image from 'next/image';

// import AudioVideoHero from '../../../assets/CNMS_dummy.jpg';

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

// export default function AudioVideoServicesPage() {
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
//             {/* Left: copy */}
//             <div>
//               <Pill
//                 tone="fuchsia"
//                 label="Audio & Video Services · Solution"
//                 icon={<Video className="h-3.5 w-3.5" />}
//               />

//               <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
//                 Spaces that sound clear
//                 <span className="block text-fuchsia-300">
//                   and look broadcast-ready.
//                 </span>
//               </h1>

//               <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
//                 We deliver end-to-end AV solutions—from concept and acoustics to
//                 control systems and streaming—so every meeting, town hall or
//                 live event feels professional, in-room and online.
//               </p>

//               <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
//                 <MetricCard
//                   label="Typical environments"
//                   value="Boardrooms · Studios · Auditoriums"
//                   hint="Corporate, broadcast and education spaces with hybrid audiences."
//                 />
//                 <MetricCard
//                   label="Delivery formats"
//                   value="In-room · Hybrid · Live streaming"
//                   hint="Designed around your platforms: Teams, Zoom, Webex, custom OTT."
//                 />
//               </div>

//               <div className="mt-6 flex flex-wrap gap-3 text-[11px]">
//                 <Pill
//                   tone="sky"
//                   label="High-quality conferencing"
//                   icon={<Users className="h-3.5 w-3.5" />}
//                 />
//                 <Pill
//                   tone="emerald"
//                   label="Boardrooms & auditoriums"
//                   icon={<Presentation className="h-3.5 w-3.5" />}
//                 />
//                 <Pill
//                   tone="amber"
//                   label="Live streaming & events"
//                   icon={<RadioTower className="h-3.5 w-3.5" />}
//                 />
//               </div>
//             </div>

//             {/* Right: visual (standard card, no glow/gradient) */}
//             <motion.div {...fadeIn} className="relative flex items-center justify-center">
//               <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black/40 p-5">
//                 <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
//                   {/* Desktop image */}
//                   <div className="hidden aspect-[16/10] md:block">
//                     <Image
//                       src={AudioVideoHero}
//                       alt="Modern boardroom and auditorium AV setup"
//                       className="h-full w-full object-cover opacity-95"
//                     />
//                   </div>

//                   {/* Mobile schematic (neutral) */}
//                   <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 px-4 text-center text-xs text-slate-300 md:hidden">
//                     <div className="flex gap-6">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50">
//                         <Mic2 className="h-6 w-6 text-slate-200" />
//                       </div>
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50">
//                         <Video className="h-6 w-6 text-slate-200" />
//                       </div>
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50">
//                         <Tv className="h-6 w-6 text-slate-200" />
//                       </div>
//                     </div>
//                     <p className="max-w-[16rem] text-[12px] leading-relaxed text-slate-400">
//                       Microphones, cameras and displays tuned as one system—so
//                       participants focus on the content, not the setup.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
//                   <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
//                     <SlidersHorizontal className="h-3.5 w-3.5 text-fuchsia-300" />
//                     DSP-based audio processing &amp; echo cancellation
//                   </span>
//                   <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
//                     <Cast className="h-3.5 w-3.5 text-sky-300" />
//                     Multi-screen, multi-camera presentation workflows
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
//               AV that matches how your teams actually communicate.
//             </h2>
//             <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
//               Whether it&apos;s a quick stand-up, a board review or a pan-India
//               town hall, we design AV to be reliable, intuitive and repeatable—no
//               “can you hear me now?” moments.
//             </p>
//           </motion.div>

//           <motion.div
//             {...fadeUp}
//             className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
//           >
//             <StandardCard
//               tone="fuchsia"
//               kicker="End-to-end AV"
//               icon={<Tv className="h-5 w-5" />}
//               title="Complete AV stacks for corporate, broadcast and education."
//               desc="From displays, cameras and microphones to control processors, cabling and racks, we design systems as a single integrated experience."
//             />

//             <StandardCard
//               tone="sky"
//               kicker="Conferencing"
//               icon={<Users className="h-5 w-5" />}
//               title="High-quality audio & video conferencing."
//               desc="Room kits, ceiling microphones, tracking cameras and acoustic treatment for collaboration that feels natural and fatigue-free."
//             />

//             <StandardCard
//               tone="emerald"
//               kicker="Spaces"
//               icon={<Presentation className="h-5 w-5" />}
//               title="Boardrooms, auditoriums & classrooms."
//               desc="Custom AV for CXO rooms, lecture halls and training spaces with flexible layouts and simple touch-panel control."
//             />

//             <StandardCard
//               tone="amber"
//               kicker="Live streaming"
//               icon={<RadioTower className="h-5 w-5" />}
//               title="Production & streaming workflows."
//               desc="Multi-camera switching, graphics, recording and streaming chains for internal town halls, events and public broadcasts."
//             />
//           </motion.div>
//         </section>

//         {/* ---------------------------------------------------------- */}
//         {/* AV SIGNAL FLOW                                             */}
//         {/* ---------------------------------------------------------- */}
//         <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
//           <motion.div
//             {...fadeUp}
//             className="rounded-[32px] border border-white/10 bg-black/40 px-6 py-8 md:px-10 md:py-10"
//           >
//             <div className="grid gap-10 md:grid-cols-[1.35fr,1fr] md:items-center">
//               {/* Diagram */}
//               <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 px-6 py-8">
//                 {/* Centre: AV brain */}
//                 <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-black/55">
//                   <SlidersHorizontal className="h-7 w-7 text-slate-200" />
//                 </div>

//                 {/* Rings (neutral) */}
//                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
//                 <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />

//                 {/* Sources */}
//                 <div className="absolute left-4 top-6 space-y-3 text-xs text-slate-200">
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <Mic2 className="h-3.5 w-3.5 text-emerald-300" />
//                     <span>Ceiling &amp; table microphones</span>
//                   </div>
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <Video className="h-3.5 w-3.5 text-sky-300" />
//                     <span>PTZ &amp; fixed cameras</span>
//                   </div>
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <Cast className="h-3.5 w-3.5 text-amber-300" />
//                     <span>Laptops &amp; content inputs</span>
//                   </div>
//                 </div>

//                 {/* Outputs */}
//                 <div className="absolute right-4 top-8 space-y-3 text-xs text-slate-200">
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <Tv className="h-3.5 w-3.5 text-fuchsia-300" />
//                     <span>LED walls &amp; projectors</span>
//                   </div>
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <Users className="h-3.5 w-3.5 text-sky-300" />
//                     <span>Remote participants</span>
//                   </div>
//                   <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     <RadioTower className="h-3.5 w-3.5 text-emerald-300" />
//                     <span>Recording &amp; live streams</span>
//                   </div>
//                 </div>

//                 {/* Bottom notes */}
//                 <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 flex-wrap justify-center gap-3 text-xs text-slate-200">
//                   <div className="rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     Unified control for audio levels, camera presets, lighting and inputs.
//                   </div>
//                   <div className="rounded-xl border border-white/10 bg-black/45 px-3 py-2">
//                     Echo cancellation, noise reduction and room tuning for consistent clarity.
//                   </div>
//                 </div>
//               </div>

//               {/* Copy */}
//               <div className="space-y-4 text-sm text-slate-200">
//                 <h3 className="text-lg font-semibold text-white md:text-xl">
//                   One AV signal path, many experiences.
//                 </h3>
//                 <p className="text-sm leading-relaxed text-slate-300 md:text-base">
//                   We design the full signal chain—from the first microphone to the
//                   final recording—so every hop is predictable, monitored and easy to support.
//                 </p>
//                 <ul className="space-y-2 text-xs leading-relaxed text-slate-300 md:text-sm">
//                   <li className="flex gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                     <span>
//                       Clear mapping of sources, processing and outputs to avoid “mystery cables”
//                       and undocumented patchwork.
//                     </span>
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                     <span>
//                       DSP-based processing for echo cancellation, automatic mic mixing and room equalisation.
//                     </span>
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
//                     <span>
//                       Integration with UC platforms (Teams, Zoom, Webex) and broadcast / streaming tools.
//                     </span>
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
//                     <span>
//                       Simple control surfaces—touch panels or keypads—so presenters don&apos;t wrestle with remotes.
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
//               How we deliver AV projects that age well.
//             </h2>
//             <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
//               From a single boardroom to a campus-wide AV refresh, we focus on
//               standardisation, documentation and ease of use.
//             </p>
//           </motion.div>

//           <motion.ol
//             {...fadeUp}
//             className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-4"
//           >
//             {[
//               {
//                 n: '01',
//                 t: 'Discovery & room audits.',
//                 d: 'Understand how rooms are used today—audience sizes, content types, existing gear, acoustics and pain points.',
//               },
//               {
//                 n: '02',
//                 t: 'Design & simulation.',
//                 d: 'AV schematics, equipment schedules, cable layouts and control flows, tuned to budgets and standards.',
//               },
//               {
//                 n: '03',
//                 t: 'Implementation & commissioning.',
//                 d: 'Rack build, wiring, programming and end-to-end testing, with acceptance criteria agreed upfront.',
//               },
//               {
//                 n: '04',
//                 t: 'Training & ongoing support.',
//                 d: 'Playbooks, quick-reference guides and remote/onsite support so facilities and IT teams can keep rooms running smoothly.',
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
// src/app/solutions/audio-video-services/page.tsx
'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';
import {
  Video,
  Mic2,
  Tv,
  Presentation,
  Users,
  RadioTower,
  SlidersHorizontal,
  Cast,
  CheckCircle2,
  Wrench,
  ClipboardList,
  Sparkles,
} from 'lucide-react';

import AudioVideoHero from '../../../assets/CNMS_dummy.jpg';

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

function StripCard({
  tone,
  title,
  icon,
  desc,
  chips,
}: {
  tone: Tone;
  title: string;
  icon: ReactNode;
  desc: string;
  chips: string[];
}) {
  const edge: Record<Tone, string> = {
    emerald: 'border-emerald-400/25',
    sky: 'border-sky-400/25',
    fuchsia: 'border-fuchsia-400/25',
    amber: 'border-amber-300/25',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border ${edge[tone]} bg-gradient-to-b from-white/5 via-black to-black p-6 shadow-[0_18px_70px_rgba(0,0,0,0.9)]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_55%)] opacity-70" />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
            {icon}
            {title}
          </div>
          <Sparkles className="h-4 w-4 text-slate-400" />
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-300">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] text-slate-300"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PipelineStage({
  tone,
  title,
  icon,
  bullets,
}: {
  tone: Tone;
  title: string;
  icon: ReactNode;
  bullets: string[];
}) {
  const dot: Record<Tone, string> = {
    emerald: 'bg-emerald-400',
    sky: 'bg-sky-400',
    fuchsia: 'bg-fuchsia-400',
    amber: 'bg-amber-400',
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-black/55 p-5">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
          <span className={`h-1.5 w-1.5 rounded-full ${dot[tone]}`} />
          {title}
        </div>
        <span className="text-slate-200">{icon}</span>
      </div>

      <ul className="mt-4 space-y-2 text-xs text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/25" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BG (system-consistent) */}
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
        {/* HERO (different from other pages) */}
        <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="grid gap-10 md:grid-cols-[0.95fr,1.05fr] md:items-center"
          >
            {/* Left: copy */}
            <div>
              <div className="flex flex-wrap gap-3">
                <BadgePill
                  icon={<Video className="h-3.5 w-3.5" />}
                  label="Solutions · Audio & Video"
                  tone="fuchsia"
                />
                <BadgePill
                  icon={<Users className="h-3.5 w-3.5" />}
                  label="Hybrid-first rooms"
                  tone="sky"
                />
                <BadgePill
                  icon={<RadioTower className="h-3.5 w-3.5" />}
                  label="Streaming workflows"
                  tone="amber"
                />
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Spaces that sound clear
                <span className="block text-fuchsia-300">
                  and look broadcast-ready.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                We deliver end-to-end AV—from concept and acoustics to control,
                conferencing and streaming—so every meeting, town hall or live
                event feels professional, in-room and online.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <MetricCard
                  label="Typical environments"
                  value="Boardrooms · Studios · Auditoriums"
                  hint="Corporate, broadcast and education spaces with hybrid audiences."
                />
                <MetricCard
                  label="Delivery formats"
                  value="In-room · Hybrid · Live"
                  hint="Teams, Zoom, Webex, or custom streaming/OTT."
                />
              </div>
            </div>

            {/* Right: “control room” console */}
            <motion.div {...fadeIn} className="relative">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-900/60 via-black to-black p-5 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                {/* header row */}
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                    Room control
                  </span>
                  <span className="inline-flex items-center gap-2 text-slate-500">
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    Presets ready
                  </span>
                </div>

                {/* main visual */}
                <div className="mt-4 relative overflow-hidden rounded-3xl border border-white/10 bg-black/60">
                  <Image
                    src={AudioVideoHero}
                    alt="Audio video solution"
                    className="h-[240px] w-full object-cover opacity-85 md:h-[320px]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* overlay toggles */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-slate-200">
                      Echo cancel: ON
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-slate-200">
                      Auto-framing: ON
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-slate-200">
                      Stream: READY
                    </span>
                  </div>

                  {/* bottom stats */}
                  <div className="absolute bottom-4 left-4 right-4 grid gap-2 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/60 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Audio
                      </p>
                      <p className="text-sm font-semibold text-white">
                        DSP tuned
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/60 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Video
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Multi-cam
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/60 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Control
                      </p>
                      <p className="text-sm font-semibold text-white">
                        One touch
                      </p>
                    </div>
                  </div>
                </div>

                {/* preset chips */}
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {[
                    { t: 'Meeting', i: <Users className="h-4 w-4" /> },
                    { t: 'Presentation', i: <Presentation className="h-4 w-4" /> },
                    { t: 'Town hall', i: <RadioTower className="h-4 w-4" /> },
                  ].map((p) => (
                    <div
                      key={p.t}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-4 py-3"
                    >
                      <div className="text-xs">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                          Preset
                        </p>
                        <p className="text-sm font-semibold text-white">{p.t}</p>
                      </div>
                      <span className="text-slate-200">{p.i}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
                    <Mic2 className="h-3.5 w-3.5 text-emerald-300" />
                    AEC + auto mic mixing
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
                    <Cast className="h-3.5 w-3.5 text-sky-300" />
                    Multi-screen workflows
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SPACES STRIP (unique section style) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-semibold md:text-2xl">
              The spaces we build most often.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              We standardise where it helps (support, spares, training) and customise
              where it matters (acoustics, sight-lines, content flow).
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <StripCard
                tone="sky"
                title="Boardrooms"
                icon={<Tv className="h-4 w-4" />}
                desc="CXO-grade meeting rooms with predictable mic pickup, clean camera angles and simple “start meeting” workflows."
                chips={['Tracking camera', 'Ceiling mics', 'Dual displays']}
              />
              <StripCard
                tone="emerald"
                title="Auditoriums"
                icon={<Presentation className="h-4 w-4" />}
                desc="Large-room audio intelligibility and presentation confidence—without needing a dedicated technician for every session."
                chips={['Wireless mics', 'DSP tuning', 'Projection/LED']}
              />
              <StripCard
                tone="amber"
                title="Studios & town halls"
                icon={<RadioTower className="h-4 w-4" />}
                desc="Production chains for internal broadcasts: switching, graphics, recording and live distribution across sites."
                chips={['Switcher', 'Recording', 'Streaming']}
              />
            </div>
          </motion.div>
        </section>

        {/* SIGNAL CHAIN PIPELINE (not the ring map) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            className="rounded-[32px] border border-white/10 bg-black/50 px-6 py-8 md:px-10 md:py-10"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  AV signal flow that’s documented and supportable.
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
                  We design the full pipeline—so you don’t end up with mystery patching
                  and “only this one person knows how it works”.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <BadgePill
                  icon={<ClipboardList className="h-3.5 w-3.5" />}
                  label="As-built diagrams"
                  tone="fuchsia"
                />
                <BadgePill
                  icon={<Wrench className="h-3.5 w-3.5" />}
                  label="Commissioned"
                  tone="emerald"
                />
              </div>
            </div>

            {/* pipeline */}
            <div className="mt-8 relative">
              <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-white/10 via-white/15 to-white/10 md:block" />
              <div className="grid gap-4 md:grid-cols-4">
                <PipelineStage
                  tone="emerald"
                  title="Capture"
                  icon={<Mic2 className="h-5 w-5" />}
                  bullets={[
                    'Ceiling/table mics with coverage planning.',
                    'PTZ + fixed cameras with clean sight-lines.',
                    'Inputs for laptops, content and signage.',
                  ]}
                />
                <PipelineStage
                  tone="fuchsia"
                  title="Process"
                  icon={<SlidersHorizontal className="h-5 w-5" />}
                  bullets={[
                    'AEC, noise reduction and auto-mixing.',
                    'Room EQ + dynamics for intelligibility.',
                    'Video switching + scene presets.',
                  ]}
                />
                <PipelineStage
                  tone="sky"
                  title="Distribute"
                  icon={<Tv className="h-5 w-5" />}
                  bullets={[
                    'Displays, LED walls, projectors and monitors.',
                    'Confidence screens and presenter views.',
                    'Audio zones + assistive listening options.',
                  ]}
                />
                <PipelineStage
                  tone="amber"
                  title="Stream"
                  icon={<Cast className="h-5 w-5" />}
                  bullets={[
                    'Teams/Zoom/Webex integration.',
                    'Recording, captions and archiving.',
                    'Live streaming for town halls/events.',
                  ]}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* DELIVERY MODEL (kept, but presented differently: split board) */}
        <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/55 p-6">
              <h2 className="text-xl font-semibold md:text-2xl">
                How we deliver AV that ages well.
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Standardisation, documentation and training—so rooms don’t degrade
                into support tickets after the first quarter.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  'Room audits: usage patterns, acoustics and sight-lines',
                  'Design packs: equipment schedules, cable routes and control flows',
                  'Commissioning: acceptance tests for audio/video + fail cases',
                  'Training: quick guides for presenters + handover to IT/facilities',
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

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/50 via-black to-black p-6 shadow-[0_18px_70px_rgba(0,0,0,0.9)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Handover pack
              </p>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    Documentation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    As-built diagrams + IP plan
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Signal flow, rack elevations, device inventory and control logic notes.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    Support model
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Remote triage + onsite
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Preventive checks, firmware lifecycle and “event day” readiness runs.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    User training
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Presenter-friendly quick guides
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    “Start meeting”, “Share content”, “Switch preset” — no rummaging for remotes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
