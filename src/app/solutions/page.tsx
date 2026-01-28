// //pp//
// 'use client';

// import { motion, cubicBezier } from 'framer-motion';
// import SolutionsCubesField from '../../components/SolutionsCubesField'; // hero for Solutions

// import Image from 'next/image';
// import Datacenter from '../../../assets/Datacenter.png'; 
// import Sdwan from '../../../assets/SDWAN.png'; 
// import NetworkSecurity from '../../../assets/NetworkSec.png'; 
// import CloudSol from '../../../assets/Cloudsolu.png'; 
// import AVsolution from '../../../assets/AudioVideo.png';
// import Satcom from '../../../assets/Satcom.png';
// import WirelessNet from '../../../assets/WirelessNetworking.png';
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

// const solutionSummary = [
//   {
//     id: 'data-center-networking',
//     label: 'Data Center & Networking',
//     blurb:
//       'Policy-driven fabric for DC, campus, WAN and edge – designed to run 24×7.',
//     accent: 'text-sky-300',
//     badgeBg: 'bg-sky-400/10 border-sky-400/40',
//   },
//   {
//     id: 'sd-wan',
//     label: 'SD-WAN',
//     blurb:
//       'Application-aware WAN that always picks the best path for every flow.',
//     accent: 'text-emerald-300',
//     badgeBg: 'bg-emerald-400/10 border-emerald-400/40',
//   },
//   {
//     id: 'network-security',
//     label: 'Network Security',
//     blurb:
//       'Zero-trust security stack built around Cisco NGFW, IDS/IPS and endpoints.',
//     accent: 'text-fuchsia-300',
//     badgeBg: 'bg-fuchsia-400/10 border-fuchsia-400/40',
//   },
//   {
//     id: 'cloud-solutions',
//     label: 'Cloud Solutions',
//     blurb:
//       'Migrations, hybrid architectures and media workflows on AWS and others.',
//     accent: 'text-amber-300',
//     badgeBg: 'bg-amber-400/10 border-amber-400/40',
//   },
//   {
//     id: 'wireless-networking',
//     label: 'Wireless Networking',
//     blurb:
//       'High-density Wi-Fi, PtP and mesh networks that feel like part of your core LAN.',
//     accent: 'text-cyan-300',
//     badgeBg: 'bg-cyan-400/10 border-cyan-400/40',
//   },
//   {
//     id: 'audio-video-services',
//     label: 'Audio / Video Services',
//     blurb:
//       'Boardrooms, studios and streaming setups for broadcast-grade collaboration.',
//     accent: 'text-rose-300',
//     badgeBg: 'bg-rose-400/10 border-rose-400/40',
//   },
//   {
//     id: 'satellite-communication',
//     label: 'Satellite Communication',
//     blurb:
//       'VSAT, teleports and satellite backhaul that behaves like part of your core network.',
//     accent: 'text-indigo-300',
//     badgeBg: 'bg-indigo-400/10 border-indigo-400/40',
//   },
// ];

// export default function SolutionsPage() {
//   const handleScroll = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
//       {/* GRID BACKGROUND */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px',
//           backgroundPosition: 'center',
//         }}
//       />

//       {/* HERO – cubes + big heading, now for SOLUTIONS */}
//       <section className="relative z-10">
//         <SolutionsCubesField />
//       </section>

//       <div className="relative z-10 pb-28 pt-10">
//         {/* SUMMARY STRIP */}
//         <section className="mx-auto mt-16 max-w-6xl px-6 md:px-10 lg:px-16">
//           <motion.div
//             {...fadeUp}
//             className="grid gap-4 md:grid-cols-3 xl:grid-cols-4"
//           >
//             {solutionSummary.map((s) => (
//               <button
//                 key={s.id}
//                 type="button"
//                 onClick={() => handleScroll(s.id)}
//                 className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-transform duration-200 hover:-translate-y-1 hover:border-white/25"
//               >
//                 <span
//                   className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${s.badgeBg} ${s.accent}`}
//                 >
//                   {s.label}
//                 </span>
//                 <p className="mt-3 text-xs leading-relaxed text-slate-300">
//                   {s.blurb}
//                 </p>
//                 <span className="mt-4 text-[11px] text-slate-500 group-hover:text-slate-300">
//                   Scroll to details ↘
//                 </span>
//               </button>
//             ))}
//           </motion.div>
//         </section>

//         {/* =============================================================== */}
//         {/* DATA CENTER & NETWORKING – TEXT THEN CARD RIGHT                 */}
//         {/* =============================================================== */}
//         <section
//           id="data-center-networking"
//           className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16"
//         >
//           <motion.div {...fadeUp} className="space-y-10">
//             {/* TEXT BLOCK */}
//             <div>
//               <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
//                 Data Center &amp; Networking · Solution
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
//                 Treat DC, campus, WAN and edge as one network fabric.
//               </h2>

//               <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//                 We design and deploy policy-driven networks that span data
//                 centers, campuses, branches and edge locations. The same
//                 intent, security posture and automation flows through the
//                 entire fabric, so operations teams get a single mental model
//                 instead of silos.
//               </p>

//               <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
//                 From greenfield builds to brownfield upgrades, we combine
//                 design, rollout and managed services – so you&apos;re never
//                 left with a half-finished project or an unsupported stack.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
//                   What this solution covers
//                 </p>
//                 <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
//                   <ul className="space-y-2">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                       <span>
//                         Data center design and deployment – switching, routing
//                         and compute fabrics.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                       <span>
//                         Network infrastructure planning and optimization for
//                         LAN, WAN and edge.
//                       </span>
//                     </li>
//                   </ul>

//                   <ul className="mt-3 space-y-2 md:mt-0">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                       <span>
//                         Managed network services for monitoring, upgrades and
//                         day-2 operations.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                       <span>
//                         Observability, automation and runbooks wired into your
//                         NOC workflows.
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* CARD BELOW, ALIGNED RIGHT */}
//             <motion.div {...fadeIn} className="flex justify-end">
//               <div className="relative w-full max-w-md">
//                 <div className="pointer-events-none absolute -left-6 top-0 h-24 w-24 rounded-full bg-sky-500/15 blur-2xl" />
//                 <div className="pointer-events-none absolute -right-10 bottom-4 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" />

//                 <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
//                   <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/80">
//                     <div className="flex aspect-[16/10] items-center justify-center px-4 text-center text-[11px] text-zinc-500">
//                           <Image
//                           src={Datacenter}
//                           alt="Datacenter Operations"
//                           className="h-full w-full object-contain"
//                           priority
//                         />
//                     </div>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
//                     <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-emerald-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>Policy-driven fabric</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/5 px-3 py-1 text-sky-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//                       <span>End-to-end visibility</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
//                       <span>Automated rollouts</span>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between rounded-xl bg-black/50 px-3 py-2 text-[11px] text-zinc-300">
//                     <div>
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Typical engagement
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Multi-site DC + campus · 6–18 months
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Focus
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Uptime, consistency &amp; scale
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* =============================================================== */}
//         {/* SD-WAN – TEXT THEN CARD LEFT                                     */}
//         {/* =============================================================== */}
//         <section
//           id="sd-wan"
//           className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16"
//         >
//           <motion.div {...fadeUp} className="space-y-10">
//             <div>
//               <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
//                 SD-WAN · Solution
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
//                 Optimised WAN that automatically picks the best path.
//               </h2>

//               <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//                 SD-WAN lets you treat MPLS, broadband and LTE as a single,
//                 intelligent pool. Traffic is steered per-application based on
//                 latency, loss and jitter – not just static routes – so user
//                 experience stays consistent even as links flap.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
//                   What you get
//                 </p>

//                 <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
//                   <ul className="space-y-2">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                       <span>
//                         Optimised network performance – dynamic path selection
//                         per flow for minimal latency.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                       <span>
//                         Secure connectivity with end-to-end encryption, zero-trust
//                         access and integrated firewalls.
//                       </span>
//                     </li>
//                   </ul>

//                   <ul className="mt-3 space-y-2 md:mt-0">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                       <span>
//                         Multi-cloud &amp; hybrid-cloud integration – on-ramps to
//                         AWS, Azure and private clouds.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
//                       <span>
//                         Cost-effective WAN – reduced dependency on pure MPLS by
//                         leveraging broadband and LTE.
//                       </span>
//                     </li>
//                   </ul>
//                 </div>

//                 <p className="mt-3 text-xs text-zinc-400">
//                   Deployments span pan-India and global networks, with central
//                   templates and localised rollouts.
//                 </p>
//               </div>
//             </div>

//             <motion.div {...fadeIn} className="flex justify-start">
//               <div className="relative w-full max-w-md">
//                 <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-emerald-500/18 blur-2xl" />
//                 <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

//                 <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
//                   <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
//                     <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-500">
//                       <Image
//                           src={Sdwan}
//                           alt="Datacenter Operations"
//                           className="h-full w-full object-contain"
//                           priority
//                         />
//                     </div>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
//                     <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>Dynamic path selection</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//                       <span>Multi-cloud on-ramps</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
//                       <span>Zero-trust overlays</span>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
//                     <div>
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Typical footprint
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         50–500+ branches across regions
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Outcomes
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Lower WAN cost, better UX
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* =============================================================== */}
//         {/* NETWORK SECURITY – TEXT THEN CARD RIGHT                          */}
//         {/* =============================================================== */}
//         <section
//           id="network-security"
//           className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16"
//         >
//           <motion.div {...fadeUp} className="space-y-10">
//             <div>
//               <p className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fuchsia-200">
//                 Network Security · Solution
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
//                 Zero-trust security layered across users, sites and apps.
//               </h2>

//               <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//                 We design security architectures that assume compromise by
//                 default. Every user, device and workload is continuously
//                 verified using Cisco NGFWs, IDS/IPS and modern endpoint
//                 controls – stitched together into one policy.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
//                   What’s included
//                 </p>

//                 <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
//                   <ul className="space-y-2">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                       <span>
//                         Next-Generation Firewalls (NGFWs) with IPS/IDS for
//                         threat protection.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                       <span>
//                         Intrusion Detection &amp; Prevention (IDS/IPS) for real-time
//                         monitoring &amp; blocking.
//                       </span>
//                     </li>
//                   </ul>

//                   <ul className="mt-3 space-y-2 md:mt-0">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                       <span>
//                         Endpoint security – AMP, NAC, PAM and VMS integrated
//                         with identity and logging.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                       <span>
//                         Zero Trust Architecture – segmentation and access
//                         policies mapped to business roles.
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <motion.div {...fadeIn} className="flex justify-end">
//               <div className="relative w-full max-w-md">
//                 <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-fuchsia-500/18 blur-2xl" />
//                 <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

//                 <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
//                   <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
//                     <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-500">
//                       <Image
//                           src={NetworkSecurity}
//                           alt="Datacenter Operations"
//                           className="h-full w-full object-contain"
//                           priority
//                         />
//                     </div>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
//                     <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
//                       <span>Zero-trust posture</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>Threat visibility</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//                       <span>Compliance reporting</span>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
//                     <div>
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Typical footprint
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         DC, branches, remote users, cloud workloads
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Outcomes
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Reduced risk, faster response
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* =============================================================== */}
//         {/* CLOUD SOLUTIONS – TEXT THEN CARD LEFT                            */}
//         {/* =============================================================== */}
//         <section
//           id="cloud-solutions"
//           className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16"
//         >
//           <motion.div {...fadeUp} className="space-y-10">
//             <div>
//               <p className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-200">
//                 Cloud Solutions · Solution
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
//                 Hybrid and media cloud built on AWS and beyond.
//               </h2>

//               <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//                 We help you migrate, modernise and operate workloads on AWS and
//                 other clouds – from core business apps to demanding media and
//                 video pipelines.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
//                   What’s inside this solution
//                 </p>

//                 <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
//                   <ul className="space-y-2">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
//                       <span>
//                         Cloud infrastructure and migration – planning, landing
//                         zones and workload moves.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
//                       <span>
//                         Cloud security and compliance using CASB and native
//                         controls.
//                       </span>
//                     </li>
//                   </ul>

//                   <ul className="mt-3 space-y-2 md:mt-0">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
//                       <span>
//                         Media streaming &amp; transcoding – OTT, broadcast and
//                         live workflows on AWS.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
//                       <span>
//                         IoT cloud services – AWS IoT Core and analytics for
//                         sensor fleets.
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <motion.div {...fadeIn} className="flex justify-start">
//               <div className="relative w-full max-w-md">
//                 <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-amber-500/18 blur-2xl" />
//                 <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

//                 <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
//                   <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
//                     <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-500">
//                        <Image
//                           src={CloudSol}
//                           alt="Datacenter Operations"
//                           className="h-full w-full object-contain"
//                           priority
//                         />
//                     </div>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
//                     <div className="flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/5 px-3 py-1 text-amber-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
//                       <span>Cloud migrations</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>Security &amp; CASB</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//                       <span>Media &amp; IoT on AWS</span>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
//                     <div>
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Typical footprint
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Hybrid DC + cloud, media &amp; app workloads
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Outcomes
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Faster launches, lower infra cost
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* =============================================================== */}
//         {/* WIRELESS NETWORKING – TEXT THEN CARD RIGHT                       */}
//         {/* =============================================================== */}
//         <section
//           id="wireless-networking"
//           className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16"
//         >
//           <motion.div {...fadeUp} className="space-y-10">
//             <div>
//               <p className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
//                 Wireless Networking · Solution
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
//                 High-density Wi-Fi and outdoor links that just behave.
//               </h2>

//               <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//                 We design and deploy enterprise Wi-Fi, point-to-point and mesh
//                 networks tuned for capacity, coverage and roaming. The wireless
//                 layer plugs cleanly into your wired, security and identity
//                 stack so users don&apos;t think about where they&apos;re
//                 connected from.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//                   Key capabilities
//                 </p>

//                 <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
//                   <ul className="space-y-2">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
//                       <span>
//                         Seamless wireless connectivity for campuses, plants and
//                         offices.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
//                       <span>
//                         Deployment of Wi-Fi, point-to-point and mesh networks
//                         for optimal coverage.
//                       </span>
//                     </li>
//                   </ul>

//                   <ul className="mt-3 space-y-2 md:mt-0">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
//                       <span>
//                         Integration with existing IT infrastructure and
//                         security.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
//                       <span>
//                         Designs focused on scale, minimal downtime and RF
//                         hygiene.
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <motion.div {...fadeIn} className="flex justify-end">
//               <div className="relative w-full max-w-md">
//                 <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-cyan-500/18 blur-2xl" />
//                 <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

//                 <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
//                   <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
//                     <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-500">
//                      <Image
//                           src={WirelessNet}
//                           alt="Datacenter Operations"
//                           className="h-full w-full object-contain"
//                           priority
//                         />
//                     </div>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
//                     <div className="flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1 text-cyan-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
//                       <span>High-density Wi-Fi</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>PtP / mesh outdoors</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//                       <span>Identity-aware access</span>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
//                     <div>
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Typical footprint
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Campuses, warehouses, plants, outdoor yards
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Outcomes
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Fewer tickets, better roaming
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* =============================================================== */}
//         {/* AUDIO / VIDEO SERVICES – TEXT THEN CARD LEFT                     */}
//         {/* =============================================================== */}
//         <section
//           id="audio-video-services"
//           className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16"
//         >
//           <motion.div {...fadeUp} className="space-y-10">
//             <div>
//               <p className="inline-flex items-center rounded-full border border-rose-400/40 bg-rose-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-rose-200">
//                 Audio / Video Services · Solution
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
//                 AV environments that make remote feel in-room.
//               </h2>

//               <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//                 We deliver end-to-end AV solutions for corporates, broadcasters
//                 and educational institutions – from room acoustics and display
//                 choices to control systems and streaming.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
//                   Where this fits
//                 </p>

//                 <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
//                   <ul className="space-y-2">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
//                       <span>
//                         End-to-end AV solutions for corporate, broadcast and
//                         education.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
//                       <span>
//                         High-quality audio &amp; video conferencing setups for
//                         seamless remote collaboration.
//                       </span>
//                     </li>
//                   </ul>

//                   <ul className="mt-3 space-y-2 md:mt-0">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
//                       <span>
//                         Custom-designed AV systems for boardrooms, classrooms,
//                         auditoriums and studios.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
//                       <span>
//                         Live streaming chains – capture, encoding, CDN and
//                         monitoring.
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <motion.div {...fadeIn} className="flex justify-start">
//               <div className="relative w-full max-w-md">
//                 <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-rose-500/18 blur-2xl" />
//                 <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

//                 <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
//                   <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
//                     <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-500">
//                       <Image
//                           src={AVsolution}
//                           alt="Datacenter Operations"
//                           className="h-full w-full object-contain"
//                           priority
//                         />
//                     </div>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
//                     <div className="flex items-center gap-2 rounded-full border border-rose-400/40 bg-rose-400/5 px-3 py-1 text-rose-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
//                       <span>Immersive rooms</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>Broadcast-grade chains</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//                       <span>Managed streaming</span>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
//                     <div>
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Typical footprint
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Boardrooms, classrooms, studios, town-hall spaces
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Outcomes
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Better collaboration &amp; reach
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* =============================================================== */}
//         {/* SATELLITE COMMUNICATION – TEXT THEN CARD RIGHT                   */}
//         {/* =============================================================== */}
//         <section
//           id="satellite-communication"
//           className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16"
//         >
//           <motion.div {...fadeUp} className="space-y-10">
//             <div>
//               <p className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-indigo-200">
//                 Satellite Communication · Solution
//               </p>

//               <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
//                 Satellite links that feel like part of your core network.
//               </h2>

//               <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//                 From remote VSAT sites to carrier-grade teleports, we build
//                 satellite networks that behave predictably even in
//                 infrastructure-poor locations.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
//                   What’s in scope
//                 </p>

//                 <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
//                   <ul className="space-y-2">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
//                       <span>
//                         Reliable VSAT networks and teleport operations for
//                         remote connectivity.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
//                       <span>
//                         High-speed satellite backhaul for telecom and
//                         enterprise.
//                       </span>
//                     </li>
//                   </ul>

//                   <ul className="mt-3 space-y-2 md:mt-0">
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
//                       <span>
//                         Expertise across C, Ku and Ka-band for the right mix
//                         of reach and throughput.
//                       </span>
//                     </li>
//                     <li className="flex gap-2">
//                       <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
//                       <span>
//                         Integrated management and monitoring tied to your NOC
//                         and SLAs.
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <motion.div {...fadeIn} className="flex justify-end">
//               <div className="relative w-full max-w-md">
//                 <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-indigo-500/18 blur-2xl" />
//                 <div className="pointer-events-none absolute -right-8 top-10 h-20 w-20 rounded-full bg-sky-400/18 blur-2xl" />
//                 <div className="pointer-events-none absolute -right-12 bottom-4 h-24 w-24 rounded-full bg-emerald-500/18 blur-3xl" />

//                 <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
//                   <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
//                     <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-4 text-center text-[11px] text-zinc-500">
//                       <Image
//                           src={Satcom}
//                           alt="Datacenter Operations"
//                           className="h-full w-full object-contain"
//                           priority
//                         />
//                     </div>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
//                     <div className="flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-400/5 px-3 py-1 text-indigo-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
//                       <span>Remote VSAT sites</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>Carrier-grade teleports</span>
//                     </div>
//                     <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
//                       <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//                       <span>Integrated backhaul</span>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
//                     <div>
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Typical engagements
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Nationwide VSAT networks, media &amp; telco backhaul
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                         Focus
//                       </p>
//                       <p className="text-xs text-zinc-100">
//                         Reach, predictability, SLA
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>
//       </div>
//     </main>
//   );
// }



'use client';

import { motion, cubicBezier } from 'framer-motion';
import SolutionsCubesField from '../../components/SolutionsCubesField';

import Image from 'next/image';
import Datacenter from '../../../assets/Datacenter.png';
import Sdwan from '../../../assets/SDWAN.png';
import NetworkSecurity from '../../../assets/NetworkSec.png';
import CloudSol from '../../../assets/Cloudsolu.png';
import AVsolution from '../../../assets/AudioVideo.png';
import Satcom from '../../../assets/Satcom.png';
import WirelessNet from '../../../assets/WirelessNetworking.png';

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

const solutionSummary = [
  {
    id: 'data-center-networking',
    label: 'Data Center & Networking',
    blurb: 'Policy-driven fabric for DC, campus, WAN and edge – designed to run 24×7.',
    accent: 'text-sky-300',
    badgeBg: 'bg-sky-400/10 border-sky-400/40',
  },
  {
    id: 'sd-wan',
    label: 'SD-WAN',
    blurb: 'Application-aware WAN that always picks the best path for every flow.',
    accent: 'text-emerald-300',
    badgeBg: 'bg-emerald-400/10 border-emerald-400/40',
  },
  {
    id: 'network-security',
    label: 'Network Security',
    blurb: 'Zero-trust security stack built around Cisco NGFW, IDS/IPS and endpoints.',
    accent: 'text-fuchsia-300',
    badgeBg: 'bg-fuchsia-400/10 border-fuchsia-400/40',
  },
  {
    id: 'cloud-solutions',
    label: 'Cloud Solutions',
    blurb: 'Migrations, hybrid architectures and media workflows on AWS and others.',
    accent: 'text-amber-300',
    badgeBg: 'bg-amber-400/10 border-amber-400/40',
  },
  {
    id: 'wireless-networking',
    label: 'Wireless Networking',
    blurb: 'High-density Wi-Fi, PtP and mesh networks that feel like part of your core LAN.',
    accent: 'text-cyan-300',
    badgeBg: 'bg-cyan-400/10 border-cyan-400/40',
  },
  {
    id: 'audio-video-services',
    label: 'Audio / Video Services',
    blurb: 'Boardrooms, studios and streaming setups for broadcast-grade collaboration.',
    accent: 'text-rose-300',
    badgeBg: 'bg-rose-400/10 border-rose-400/40',
  },
  {
    id: 'satellite-communication',
    label: 'Satellite Communication',
    blurb: 'VSAT, teleports and satellite backhaul that behaves like part of your core network.',
    accent: 'text-indigo-300',
    badgeBg: 'bg-indigo-400/10 border-indigo-400/40',
  },
];

export default function SolutionsPage() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      {/* GRID BACKGROUND */}
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

      {/* HERO */}
      <section className="relative z-10">
        <SolutionsCubesField />
      </section>

      <div className="relative z-10 pb-28 pt-10">
        {/* SUMMARY STRIP */}
        <section className="mx-auto mt-16 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
            {solutionSummary.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleScroll(s.id)}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-transform duration-200 hover:-translate-y-1 hover:border-white/25"
              >
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${s.badgeBg} ${s.accent}`}
                >
                  {s.label}
                </span>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">{s.blurb}</p>
                <span className="mt-4 text-[11px] text-slate-500 group-hover:text-slate-300">
                  Scroll to details ↘
                </span>
              </button>
            ))}
          </motion.div>
        </section>

        {/* ============================ DATA CENTER & NETWORKING ============================ */}
        <section id="data-center-networking" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            {/* TEXT BLOCK */}
            <div>
              <p className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
                Data Center &amp; Networking · Solution
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Treat DC, campus, WAN and edge as one network fabric.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                We design and deploy policy-driven networks that span data centers, campuses, branches and edge locations.
                The same intent, security posture and automation flows through the entire fabric, so operations teams get a
                single mental model instead of silos.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                From greenfield builds to brownfield upgrades, we combine design, rollout and managed services – so you&apos;re
                never left with a half-finished project or an unsupported stack.
              </p>
            </div>

            {/* ROW: bullet card (left) + image card (right) */}
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* BULLETS */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    What this solution covers
                  </p>
                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Data center design and deployment – switching, routing and compute fabrics.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Network infrastructure planning and optimization for LAN, WAN and edge.</span>
                      </li>
                    </ul>
                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Managed network services for monitoring, upgrades and day-2 operations.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Observability, automation and runbooks wired into your NOC workflows.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* IMAGE CARD */}
              <div className="lg:col-span-7">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-6 top-0 h-24 w-24 rounded-full bg-sky-500/15 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-4 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/60 p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/40">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={Datacenter}
                          alt="Data center and networking"
                          className="h-full w-full object-contain"
                          priority
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Policy-driven fabric</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>End-to-end visibility</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                        <span>Automated rollouts</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical engagement</p>
                        <p className="text-xs text-zinc-100">Multi-site DC + campus · 6–18 months</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Focus</p>
                        <p className="text-xs text-zinc-100">Uptime, consistency &amp; scale</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ SD-WAN (image left, bullets right) ============================ */}
        <section id="sd-wan" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            {/* TEXT BLOCK */}
            <div>
              <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
                SD-WAN · Solution
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Optimised WAN that automatically picks the best path.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                SD-WAN lets you treat MPLS, broadband and LTE as a single, intelligent pool. Traffic is steered per-application
                based on latency, loss and jitter – not just static routes – so user experience stays consistent even as links flap.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* IMAGE (left) */}
              <div className="lg:col-span-7 lg:order-1">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-emerald-500/18 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/60 p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/40">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <Image src={Sdwan} alt="SD-WAN" className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Dynamic path selection</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Multi-cloud on-ramps</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                        <span>Zero-trust overlays</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical footprint</p>
                        <p className="text-xs text-zinc-100">50–500+ branches across regions</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Outcomes</p>
                        <p className="text-xs text-zinc-100">Lower WAN cost, better UX</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* BULLETS (right) */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">What you get</p>

                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Optimised performance – dynamic path selection per flow for minimal latency.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Secure connectivity – encryption, zero-trust access and integrated firewalls.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Multi-cloud &amp; hybrid integration – on-ramps to AWS, Azure and private clouds.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Cost-effective WAN – reduce MPLS dependency using broadband and LTE.</span>
                      </li>
                    </ul>
                  </div>

                  <p className="mt-3 text-xs text-zinc-400">
                    Deployments span pan-India and global networks, with central templates and localised rollouts.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ NETWORK SECURITY ============================ */}
        <section id="network-security" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            <div>
              <p className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fuchsia-200">
                Network Security · Solution
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Zero-trust security layered across users, sites and apps.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                We design security architectures that assume compromise by default. Every user, device and workload is continuously
                verified using Cisco NGFWs, IDS/IPS and modern endpoint controls – stitched together into one policy.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* BULLETS */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">What’s included</p>

                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>Next-Generation Firewalls (NGFWs) with IPS/IDS for threat protection.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>IDS/IPS for real-time monitoring &amp; blocking.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>Endpoint security – AMP, NAC, PAM and VMS integrated with identity and logging.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                        <span>Zero Trust Architecture – segmentation and access policies mapped to business roles.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="lg:col-span-7">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-fuchsia-500/18 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/60 p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/40">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <Image src={NetworkSecurity} alt="Network security" className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                        <span>Zero-trust posture</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Threat visibility</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Compliance reporting</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical footprint</p>
                        <p className="text-xs text-zinc-100">DC, branches, remote users, cloud workloads</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Outcomes</p>
                        <p className="text-xs text-zinc-100">Reduced risk, faster response</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ CLOUD SOLUTIONS (image left, bullets right) ============================ */}
        <section id="cloud-solutions" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            <div>
              <p className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-200">
                Cloud Solutions · Solution
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Hybrid and media cloud built on AWS and beyond.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                We help you migrate, modernise and operate workloads on AWS and other clouds – from core business apps to demanding
                media and video pipelines.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* IMAGE */}
              <div className="lg:col-span-7 lg:order-1">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-amber-500/18 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/60 p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/40">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <Image src={CloudSol} alt="Cloud solutions" className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/5 px-3 py-1 text-amber-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>Cloud migrations</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Security &amp; CASB</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Media &amp; IoT on AWS</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical footprint</p>
                        <p className="text-xs text-zinc-100">Hybrid DC + cloud, media &amp; app workloads</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Outcomes</p>
                        <p className="text-xs text-zinc-100">Faster launches, lower infra cost</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* BULLETS */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">What’s inside this solution</p>

                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>Cloud infrastructure &amp; migration – planning, landing zones and workload moves.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>Cloud security and compliance using CASB and native controls.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>Media streaming &amp; transcoding – OTT, broadcast and live workflows on AWS.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        <span>IoT cloud services – AWS IoT Core and analytics for sensor fleets.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ WIRELESS NETWORKING ============================ */}
        <section id="wireless-networking" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            <div>
              <p className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                Wireless Networking · Solution
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                High-density Wi-Fi and outdoor links that just behave.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                We design and deploy enterprise Wi-Fi, point-to-point and mesh networks tuned for capacity, coverage and roaming.
                The wireless layer plugs cleanly into your wired, security and identity stack so users don&apos;t think about where they&apos;re connected from.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* BULLETS */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Key capabilities</p>

                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span>Seamless wireless connectivity for campuses, plants and offices.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span>Deployment of Wi-Fi, point-to-point and mesh networks for optimal coverage.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span>Integration with existing IT infrastructure and security.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span>Designs focused on scale, minimal downtime and RF hygiene.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="lg:col-span-7">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-cyan-500/18 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/60 p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/40">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <Image src={WirelessNet} alt="Wireless networking" className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1 text-cyan-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>High-density Wi-Fi</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>PtP / mesh outdoors</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Identity-aware access</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical footprint</p>
                        <p className="text-xs text-zinc-100">Campuses, warehouses, plants, outdoor yards</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Outcomes</p>
                        <p className="text-xs text-zinc-100">Fewer tickets, better roaming</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ AUDIO / VIDEO (image left, bullets right) ============================ */}
        <section id="audio-video-services" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            <div>
              <p className="inline-flex items-center rounded-full border border-rose-400/40 bg-rose-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-rose-200">
                Audio / Video Services · Solution
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                AV environments that make remote feel in-room.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                We deliver end-to-end AV solutions for corporates, broadcasters and educational institutions – from room acoustics
                and display choices to control systems and streaming.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* IMAGE */}
              <div className="lg:col-span-7 lg:order-1">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-rose-500/18 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/60 p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/40">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <Image src={AVsolution} alt="Audio video solutions" className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-rose-400/40 bg-rose-400/5 px-3 py-1 text-rose-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                        <span>Immersive rooms</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Broadcast-grade chains</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Managed streaming</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical footprint</p>
                        <p className="text-xs text-zinc-100">Boardrooms, classrooms, studios, town-hall spaces</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Outcomes</p>
                        <p className="text-xs text-zinc-100">Better collaboration &amp; reach</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* BULLETS */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">Where this fits</p>

                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                        <span>End-to-end AV solutions for corporate, broadcast and education.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                        <span>High-quality conferencing setups for seamless remote collaboration.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                        <span>Custom AV systems for boardrooms, classrooms, auditoriums and studios.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                        <span>Live streaming chains – capture, encoding, CDN and monitoring.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================ SATELLITE COMMUNICATION ============================ */}
        <section id="satellite-communication" className="mx-auto mt-24 max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="space-y-10">
            <div>
              <p className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-indigo-200">
                Satellite Communication · Solution
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
                Satellite links that feel like part of your core network.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                From remote VSAT sites to carrier-grade teleports, we build satellite networks that behave predictably even in
                infrastructure-poor locations.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* BULLETS */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">What’s in scope</p>

                  <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                        <span>Reliable VSAT networks and teleport operations for remote connectivity.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                        <span>High-speed satellite backhaul for telecom and enterprise.</span>
                      </li>
                    </ul>

                    <ul className="mt-3 space-y-2 md:mt-0">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                        <span>Expertise across C, Ku and Ka-band for the right mix of reach and throughput.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                        <span>Integrated management and monitoring tied to your NOC and SLAs.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="lg:col-span-7">
                <motion.div {...fadeIn} className="relative">
                  <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-indigo-500/18 blur-2xl" />
                  <div className="pointer-events-none absolute -right-12 bottom-4 h-24 w-24 rounded-full bg-emerald-500/18 blur-3xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-zinc-950/60 p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black/40">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <Image src={Satcom} alt="Satellite communication" className="h-full w-full object-contain" />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                      <div className="flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-400/5 px-3 py-1 text-indigo-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                        <span>Remote VSAT sites</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Carrier-grade teleports</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Integrated backhaul</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-xl bg-black/60 px-3 py-2 text-[11px] text-zinc-300">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Typical engagements</p>
                        <p className="text-xs text-zinc-100">Nationwide VSAT networks, media &amp; telco backhaul</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Focus</p>
                        <p className="text-xs text-zinc-100">Reach, predictability, SLA</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
