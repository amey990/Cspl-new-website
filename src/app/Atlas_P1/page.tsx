// 'use client';

// import Image from 'next/image';
// import { motion, cubicBezier } from 'framer-motion';

// import AtlasImage from '../../../assets/Atlas.png';
// import SitesImage from '../../../assets/Sites.png';
// import SitesImage2 from '../../../assets/Sites2.png';

// import ProjectSuppliesImage from '../../../assets/Project_Supplies.png';
// import SuppliesAnimation from '../../../assets/lottie/Forklift.json';
// import Lottie from 'lottie-react';

// import InventoryImage from '../../../assets/Inventory.png';
// import InventoryImageDetail from '../../../assets/Inventory1.png';
// import InventoryAnimation from '../../../assets/lottie/Inventory.json';

// import AnalyticsImage from '../../../assets/analytics.png';
// import AnalyticsImageDetail from '../../../assets/analytics.1.png';
// import AnalyticsAnimation from '../../../assets/lottie/analytics.json';

// import Link from 'next/link';




// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// export default function AtlasProjectManagementPage() {
//   return (
//     <main className="relative w-full overflow-hidden bg-[#010101]">
//       {/* GRID BACKGROUND (same style as products page) */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px',
//           backgroundPosition: 'center',
//         }}
//       />

//       <div className="relative z-10 pt-20 pb-24">
//         {/* ------------------------------------------------------------------ */}
//         {/* 1. TITLE BLOCK (shifted left using max-w + padding) */}
//         {/* ------------------------------------------------------------------ */}
//         <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
//           <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
//             Product · Program Management
//           </p>

//           <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
//             Atlas Project Management
//           </h1>

//           <p className="mt-4 max-w-2xl text-lg text-zinc-300">
//             Streamline project workflows and team collaboration
//           </p>
//         </div>

//         {/* ------------------------------------------------------------------ */}
//         {/* 2. ATLAS HERO SECTION (copied from Products page component)       */}
//         {/* ------------------------------------------------------------------ */}
//         <section className="mt-16 mx-auto flex max-w-6xl flex-col px-6 md:px-8 lg:px-12">
//           {/* ---------- TOP: HERO CHIP + BIG IMAGE + ATLAS TEXT ---------- */}

//           {/* Chip – same pattern as products page chip */}
//           <motion.div
//             initial={{ opacity: 0, y: 6 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.6, ease: easeOutExpo }}
//             className="mb-5 flex items-center gap-2 self-start pl-5 text-sm text-slate-200"
//           >
//             <span className="h-2.5 w-4 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(190,242,100,0.9)]" />
//             <span className="text-[15px] text-slate-100">Project management</span>
//             <span className="text-lg leading-none text-slate-500">›</span>
//           </motion.div>

//           {/* Big hero image – fade / slide / scale / blur */}
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(8px)' }}
//             whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.8, ease: easeOutExpo }}
//             className="relative mx-auto w-full max-w-5xl"
//           >
//             <Image
//               src={AtlasImage}
//               alt="Atlas project management dashboard"
//               className="w-full rounded-[12px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.9)]"
//               priority
//             />
//           </motion.div>

//           {/* Giant “Atlas” text */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
//             className="-mt-19 pointer-events-none relative z-10 text-center"
//           >
//             <h2
//               className="text-[152px] leading-none font-semibold tracking-tight text-transparent md:text-[150px]"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(to bottom, #f9fafb 0%, #d1d5db 35%, #9ca3af 55%, #020617 100%)',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//               }}
//             >
//               Atlas
//             </h2>
//           </motion.div>

//           {/* ---------- BOTTOM: IMAGE + TEXT SECTION ---------- */}
//           <div className="mt-25 grid items-center gap-12 md:grid-cols-2">
//             {/* LEFT: Image – slide in from left */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.35 }}
//               transition={{ duration: 0.7, ease: easeOutExpo }}
//               className="relative flex items-center justify-center"
//             >
//               <div className="relative w-full max-w-xl">
//                 <div className="relative mx-auto w-full rounded-[5px] border border-white/12 bg-gradient-to-b from-white/8 via-white/3 to-black/60 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
//                   <div className="overflow-hidden rounded-[5px]">
//                     <Image
//                       src={AtlasImage}
//                       alt="Atlas project grid view"
//                       className="w-full"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* RIGHT: Text – slide in from right */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.35 }}
//               transition={{ duration: 0.7, ease: easeOutExpo }}
//               className="space-y-6 text-left md:pl-4"
//             >
//               <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
//                 Atlas · Activities Dashboard
//               </p>

//               <h3 className="text-3xl font-semibold text-white md:text-4xl">
//                 Keep every media project on the same timeline.
//               </h3>

//               <p className="max-w-xl text-sm text-slate-300/80 md:text-base">
//                 Atlas gives broadcast and streaming teams a single live grid to plan, assign and
//                 track every activity across shows, channels and locations.
//               </p>

//               <div className="mt-4 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
//                 <div className="flex items-start gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//                   <span>Grid-level visibility across all productions and venues.</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//                   <span>
//                     Real-time status for every role, from studio ops to field teams.
//                   </span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//                   <span>Templates for recurring shows, events and channel grids.</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//                   <span>
//                     Built for high-volume media operations that can’t miss a go-live.
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//               {/* SITES & ANALYTICS SECTION */}
//       <section className="mt-24 mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
//         {/* SITES & ANALYTICS SECTION */}
// <div className="mt-28 grid items-center gap-12 md:grid-cols-2">
//   {/* LEFT: Text */}
//   <div className="order-2 md:order-1 max-w-xl">
//     <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
//       Sites &amp; Analytics
//     </p>

//     <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
//       Site management and <br />
//       analytics in a single view.
//     </h2>

//     <p className="mt-4 text-sm text-slate-300/80 md:text-base">
//       Atlas Sites brings every rollout location, task list and SLA into one live workspace,
//       while Analytics turns that data into trends and performance insights for operations
//       and leadership.
//     </p>

//     <div className="mt-6 grid gap-4 text-sm text-slate-100/90 md:grid-cols-2 md:gap-5">
//       <div className="space-y-3">
//         <div className="flex items-start gap-2">
//           <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//           <span>Single view of all sites, phases and owners.</span>
//         </div>
//         <div className="flex items-start gap-2">
//           <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//           <span>Drill-down analytics by region, customer or vendor.</span>
//         </div>
//       </div>

//       <div className="space-y-3">
//         <div className="flex items-start gap-2">
//           <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//           <span>Health indicators for risk, SLAs and dependencies.</span>
//         </div>
//         <div className="flex items-start gap-2">
//           <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//           <span>Export-ready views for reviews and governance.</span>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* RIGHT: Stacked images */}
//   <div className="order-1 md:order-2 flex justify-center">
//     <div className="relative w-full max-w-xl">
//       {/* Back image */}
//       <div className="relative mx-auto w-full rounded-[5px] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-black/60 shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
//         <div className="overflow-hidden rounded-[5px]">
//           <Image
//             src={SitesImage}
//             alt="Atlas Sites overview"
//             className="w-full"
//           />
//         </div>
//       </div>

//       {/* Front image – slightly offset */}
//       <div className="absolute -bottom-10 -right-10 w-[90%] rounded-[5px] border border-white/10 bg-gradient-to-b from-white/8 via-white/3 to-black/70 shadow-[0_30px_100px_rgba(0,0,0,1)]">
//         <div className="overflow-hidden rounded-[5px]">
//           <Image
//             src={SitesImage2}
//             alt="Atlas Sites analytics view"
//             className="w-full"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//       </section>

//       {/* MANAGE SUPPLIES SECTION */}
// <section className="mx-auto mt-28 max-w-6xl grid grid-cols-1 items-center gap-12 md:grid-cols-2">
//   {/* LEFT: Image with Lottie overlay */}
//  <div className="relative flex justify-center">
//   {/* Wrapper that controls card + floating Lottie */}
//   <div className="relative w-full max-w-xl">
//     {/* Card / image itself */}
//     <div className="overflow-hidden rounded-[5px] border border-white/12 bg-black/40 shadow-[0_32px_90px_rgba(0,0,0,0.95)]">
//       <Image
//         src={ProjectSuppliesImage}
//         alt="Atlas project supplies workspace"
//         className="w-full h-auto"
//       />
//     </div>

//     {/* Lottie bubble floating over the card (not clipped) */}
//     <div className="pointer-events-none absolute -bottom-17 -right-12 w-32 md:w-40">
//       <Lottie
//         animationData={SuppliesAnimation}
//         loop
//         autoplay
//       />
//     </div>
//   </div>
// </div>


//   {/* RIGHT: Text */}
//   <div className="space-y-6 md:pl-6">
//     <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
//       Manage Project Supplies
//     </p>

//     <h3 className="text-3xl font-semibold text-white md:text-4xl">
//       Keep every project supplied and on schedule.
//     </h3>

//     <p className="max-w-xl text-sm text-slate-300/80 md:text-base">
//       Atlas centralises material requests, approvals and dispatch so field teams
//       get what they need without chasing spreadsheets, emails or phone calls.
//     </p>

//     <div className="mt-4 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Track inventory by project, site and vendor in real time.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>See pending, dispatched and delivered supplies at a glance.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Full audit trail from request to delivery at each site.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Export-ready views for finance, vendors and governance.</span>
//       </div>
//     </div>
//   </div>
// </section>


// {/* INVENTORY SECTION */}
// <section className="mx-auto max-w-6xl px-6 lg:px-0 pt-24 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//   {/* LEFT: Text */}
//   <div>
//     <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
//       manage Inventory
//     </p>

//     <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
//       Inventory that stays ahead
//       <br className="hidden md:block" /> of the field teams.
//     </h2>

//     <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
//       Atlas Inventory gives operations and finance a live view of every material
//       request, transfer and dispatch. See what&apos;s on hand, what&apos;s reserved and
//       what&apos;s already on the road — all in one place.
//     </p>

//     <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Real-time stock by project, region and warehouse.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Automatic reservations as activities are scheduled.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Low-stock alerts before work gets blocked on site.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Export-ready views for finance and vendor reconciliation.</span>
//       </div>
//     </div>
//   </div>

//   {/* RIGHT: Stacked inventory images + lottie badge */}
//   <div className="relative flex items-center justify-center">
//     {/* Image cluster */}
//     <div className="relative w-full max-w-xl">
//       {/* Back image */}
//       <div className="relative w-full rounded-[5px] border border-white/12 bg-black/40 shadow-[0_40px_120px_rgba(0,0,0,0.85)] overflow-hidden">
//         <Image
//           src={InventoryImage}
//           alt="Atlas inventory overview"
//           className="w-full"
//         />
//       </div>

//       {/* Front overlay image */}
//       <div className="absolute -left-5 bottom-[-20%] w-[88%] rounded-[5px] border border-white/10 bg-black/80 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden">
//         <Image
//           src={InventoryImageDetail}
//           alt="Atlas detailed inventory table"
//           className="w-full"
//         />
//       </div>
//     </div>

//     {/* Lottie badge pinned to bottom-right of the image cluster (outside image div) */}
//     <Lottie
//       animationData={InventoryAnimation}
//       loop
//       autoplay
//       className="pointer-events-none absolute -bottom-25 -right-10 h-30 w-30 md:h-40 md:w-40"
//     />
//   </div>
// </section>

// {/* ANALYTICS SECTION */}
// <section className="mx-auto max-w-6xl px-6 lg:px-0 pt-20 pb-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//   {/* LEFT: Stacked analytics images + lottie badge */}
//   <div className="relative flex items-center justify-center order-2 md:order-1">
//     <div className="relative w-full max-w-xl">
//       {/* Back image */}
//       <div className="relative w-full rounded-[5px] border border-white/12 bg-black/40 shadow-[0_40px_120px_rgba(0,0,0,0.85)] overflow-hidden">
//         <Image
//           src={AnalyticsImageDetail}
//           alt="Atlas analytics overview"
//           className="w-full"
//         />
//       </div>

//       {/* Front overlay image */}
//       <div className="absolute -right-5 bottom-[-20%] w-[88%] rounded-[5px] border border-white/10 bg-black/80 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden">
//         <Image
//           src={AnalyticsImage}
//           alt="Atlas detailed analytics dashboard"
//           className="w-full"
//         />
//       </div>
//     </div>

//     {/* Lottie badge OUTSIDE the image cluster */}
//     <Lottie
//       animationData={AnalyticsAnimation}
//       loop
//       autoplay
//       className="pointer-events-none absolute -bottom-12 -left-5 h-24 w-24 md:h-28 md:w-28"
//     />
//   </div>

//   {/* RIGHT: Text */}
//   <div className="order-1 md:order-2">
//     <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
//       Detailed Analytics
//     </p>

//     <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
//       Turn Atlas activity into<br className="hidden md:block" /> live performance insight.
//     </h2>

//     <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
//       Analytics connects every ticket, site and supply update into a single
//       performance layer. Track rollouts, risk and SLAs in real time without
//       building custom reports or spreadsheets.
//     </p>

//     <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Live dashboards across projects, regions and delivery phases.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>SLA and risk indicators that surface issues before they escalate.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Drill-downs by customer, vendor or delivery squad in one click.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Export-ready views for reviews, governance and board reporting.</span>
//       </div>
//     </div>
//   </div>
// </section>


// {/* CUSTOMISATION SECTION */}
// <section className="mx-auto max-w-6xl px-6 lg:px-0 pt-20 -pb-5 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//   {/* LEFT: Text */}
//   <div>
//     <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
//       Fully customisable
//     </p>

//     <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
//       Build Atlas the way<br className="hidden md:block" /> your teams actually work.
//     </h2>

//     <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
//       Every rollout, organisation and workflow is different. Atlas can be tailored to your
//       fields, layouts, roles and approvals so it feels like a dedicated system for your
//       operations — without starting from scratch.
//     </p>

//     <div className="mt-6 space-y-3 text-sm text-slate-100/90">
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Custom fields, board views and grids tuned to your project language.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Role-based views for leadership, coordinators and field teams.</span>
//       </div>
//       <div className="flex items-start gap-2">
//         <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
//         <span>Integration options for your existing ERPs, finance and ticketing tools.</span>
//       </div>
//     </div>

//     <div className="mt-8">
//       <Link
//         href="/contact"
//         className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 text-sm font-medium text-black shadow-[0_0_35px_rgba(190,242,100,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
//       >
//         Connect now
//         <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
//           ↗
//         </span>
//       </Link>
//     </div>
//   </div>

//   {/* RIGHT: “Custom dashboard” grey-scale mock */}
//   <div className="relative flex items-center justify-center">
//     <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#171717] via-[#050505] to-black shadow-[0_40px_120px_rgba(0,0,0,0.9)] p-4 md:p-5">
//       {/* top bar */}
//       <div className="mb-4 flex items-center justify-between">
//         <div className="flex gap-1.5">
//           <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
//           <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
//           <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
//         </div>
//         <div className="h-5 w-32 rounded-full bg-zinc-800/80" />
//       </div>

//       {/* main layout */}
//       <div className="grid grid-cols-12 gap-3">
//         {/* left sidebar */}
//         <div className="col-span-3 space-y-2.5">
//           <div className="h-7 rounded-md bg-zinc-900/80" />
//           <div className="h-7 rounded-md bg-zinc-900/70" />
//           <div className="h-7 rounded-md bg-zinc-900/60" />
//           <div className="h-7 rounded-md bg-zinc-900/40" />
//         </div>

//         {/* centre board */}
//         <div className="col-span-5 space-y-2">
//           <div className="flex items-center justify-between">
//             <div className="h-4 w-24 rounded-md bg-zinc-800/80" />
//             <div className="h-4 w-14 rounded-md bg-zinc-800/60" />
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div className="h-20 rounded-lg bg-zinc-900/80" />
//             <div className="h-20 rounded-lg bg-zinc-900/60" />
//             <div className="h-20 rounded-lg bg-zinc-900/60" />
//             <div className="h-20 rounded-lg bg-zinc-900/40" />
//           </div>
//         </div>

//         {/* right config column */}
//         <div className="col-span-4 space-y-2">
//           <div className="h-4 w-24 rounded-md bg-zinc-800/80" />
//           <div className="h-16 rounded-lg bg-zinc-900/80" />
//           <div className="h-16 rounded-lg bg-zinc-900/60" />
//           <div className="flex gap-2 pt-1">
//             <div className="h-8 flex-1 rounded-md bg-zinc-900/70" />
//             <div className="h-8 flex-1 rounded-md bg-zinc-900/40" />
//           </div>
//         </div>
//       </div>

   
//       <div className="mt-4 flex items-center justify-between">
//         <div className="flex gap-1.5">
//           <div className="h-3 w-10 rounded-md bg-zinc-800/80" />
//           <div className="h-3 w-10 rounded-md bg-zinc-800/60" />
//           <div className="h-3 w-10 rounded-md bg-zinc-800/40" />
//         </div>
//         <div className="h-3 w-20 rounded-md bg-zinc-800/70" />
//       </div>

//       {/* tiny badge: “drag handles” to suggest customisation */}
//       <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex flex-col gap-1">
//         <span className="h-1 w-4 rounded-full bg-zinc-700" />
//         <span className="h-1 w-4 rounded-full bg-zinc-700" />
//         <span className="h-1 w-4 rounded-full bg-zinc-700" />
//       </div>
//     </div>
//   </div>
// </section>


//       </div>
//     </main>
//   );
// }



'use client';

import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';
import Link from 'next/link';

import AtlasImage from '../../../assets/Atlas.png';
import SitesImage from '../../../assets/Sites.png';
import SitesImage2 from '../../../assets/Sites2.png';

import ProjectSuppliesImage from '../../../assets/Project_Supplies.png';
import SuppliesAnimation from '../../../assets/lottie/Forklift.json';
import Lottie from 'lottie-react';

import InventoryImage from '../../../assets/Inventory.png';
import InventoryImageDetail from '../../../assets/Inventory1.png';
import InventoryAnimation from '../../../assets/lottie/Inventory.json';

import AnalyticsImage from '../../../assets/analytics.png';
import AnalyticsImageDetail from '../../../assets/analytics.1.png';
import AnalyticsAnimation from '../../../assets/lottie/analytics.json';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

/* ------------------------------ ANIM HELPERS ------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
} as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
} as const;

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
} as const;

const stackBack = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
} as const;

const stackFront = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeOutExpo, delay: 0.08 },
  },
} as const;

export default function AtlasProjectManagementPage() {
  return (
    <main className="relative w-full overflow-hidden bg-[#010101]">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 pt-20 pb-24">
        {/* ------------------------------------------------------------------ */}
        {/* 1. TITLE BLOCK                                                     */}
        {/* ------------------------------------------------------------------ */}
        <motion.div
          className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Product · Program Management
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Atlas Project Management
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Streamline project workflows and team collaboration
          </p>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* 2. ATLAS HERO SECTION                                              */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-16 mx-auto flex max-w-6xl flex-col px-6 md:px-8 lg:px-12">
          {/* Chip */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="mb-5 flex items-center gap-2 self-start pl-5 text-sm text-slate-200"
          >
            <span className="h-2.5 w-4 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(190,242,100,0.9)]" />
            <span className="text-[15px] text-slate-100">Project management</span>
            <span className="text-lg leading-none text-slate-500">›</span>
          </motion.div>

          {/* Big hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="relative mx-auto w-full max-w-5xl"
          >
            <Image
              src={AtlasImage}
              alt="Atlas project management dashboard"
              className="w-full rounded-[12px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.9)]"
              priority
            />
          </motion.div>

          {/* Giant “Atlas” text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
            className="-mt-19 pointer-events-none relative z-10 text-center"
          >
            <h2
              className="text-[152px] leading-none font-semibold tracking-tight text-transparent md:text-[150px]"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, #f9fafb 0%, #d1d5db 35%, #9ca3af 55%, #020617 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Atlas
            </h2>
          </motion.div>

          {/* Bottom row */}
          <div className="mt-25 grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: Image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-xl">
                <div className="relative mx-auto w-full rounded-[5px] border border-white/12 bg-gradient-to-b from-white/8 via-white/3 to-black/60 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
                  <div className="overflow-hidden rounded-[5px]">
                    <Image
                      src={AtlasImage}
                      alt="Atlas project grid view"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Text */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="space-y-6 text-left md:pl-4"
            >
              <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
                Atlas · Activities Dashboard
              </p>

              <h3 className="text-3xl font-semibold text-white md:text-4xl">
                Keep every media project on the same timeline.
              </h3>

              <p className="max-w-xl text-sm text-slate-300/80 md:text-base">
                Atlas gives broadcast and streaming teams a single live grid to plan, assign and
                track every activity across shows, channels and locations.
              </p>

              <div className="mt-4 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                  <span>Grid-level visibility across all productions and venues.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                  <span>Real-time status for every role, from studio ops to field teams.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                  <span>Templates for recurring shows, events and channel grids.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                  <span>Built for high-volume media operations that can’t miss a go-live.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 3. SITES & ANALYTICS                                              */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-24 mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
          <div className="mt-28 grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: Text */}
            <motion.div
              className="order-2 md:order-1 max-w-xl"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
                Sites &amp; Analytics
              </p>

              <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
                Site management and <br />
                analytics in a single view.
              </h2>

              <p className="mt-4 text-sm text-slate-300/80 md:text-base">
                Atlas Sites brings every rollout location, task list and SLA into one live workspace,
                while Analytics turns that data into trends and performance insights for operations
                and leadership.
              </p>

              <div className="mt-6 grid gap-4 text-sm text-slate-100/90 md:grid-cols-2 md:gap-5">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                    <span>Single view of all sites, phases and owners.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                    <span>Drill-down analytics by region, customer or vendor.</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                    <span>Health indicators for risk, SLAs and dependencies.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                    <span>Export-ready views for reviews and governance.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Stacked images */}
            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="relative w-full max-w-xl">
                {/* Back image */}
                <motion.div
                  className="relative mx-auto w-full rounded-[5px] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-black/60 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden"
                  variants={stackBack}
                >
                  <div className="overflow-hidden rounded-[5px]">
                    <Image
                      src={SitesImage}
                      alt="Atlas Sites overview"
                      className="w-full"
                    />
                  </div>
                </motion.div>

                {/* Front image */}
                <motion.div
                  className="absolute -bottom-10 -right-10 w-[90%] rounded-[5px] border border-white/10 bg-gradient-to-b from-white/8 via-white/3 to-black/70 shadow-[0_30px_100px_rgba(0,0,0,1)] overflow-hidden"
                  variants={stackFront}
                >
                  <div className="overflow-hidden rounded-[5px]">
                    <Image
                      src={SitesImage2}
                      alt="Atlas Sites analytics view"
                      className="w-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 4. MANAGE SUPPLIES                                                */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto mt-28 max-w-6xl grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* LEFT: Image with Lottie overlay */}
          <motion.div
            className="relative flex justify-center"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="relative w-full max-w-xl">
              <motion.div
                className="overflow-hidden rounded-[5px] border border-white/12 bg-black/40 shadow-[0_32px_90px_rgba(0,0,0,0.95)]"
                variants={stackBack}
              >
                <Image
                  src={ProjectSuppliesImage}
                  alt="Atlas project supplies workspace"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Lottie */}
              <motion.div
                className="pointer-events-none absolute -bottom-17 -right-12 w-32 md:w-40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
              >
                <Lottie animationData={SuppliesAnimation} loop autoplay />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            className="space-y-6 md:pl-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
              Manage Project Supplies
            </p>

            <h3 className="text-3xl font-semibold text-white md:text-4xl">
              Keep every project supplied and on schedule.
            </h3>

            <p className="max-w-xl text-sm text-slate-300/80 md:text-base">
              Atlas centralises material requests, approvals and dispatch so field teams
              get what they need without chasing spreadsheets, emails or phone calls.
            </p>

            <div className="mt-4 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Track inventory by project, site and vendor in real time.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>See pending, dispatched and delivered supplies at a glance.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Full audit trail from request to delivery at each site.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Export-ready views for finance, vendors and governance.</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 5. INVENTORY                                                       */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto max-w-6xl px-6 lg:px-0 pt-24 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
              manage Inventory
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
              Inventory that stays ahead
              <br className="hidden md:block" /> of the field teams.
            </h2>

            <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
              Atlas Inventory gives operations and finance a live view of every material
              request, transfer and dispatch. See what&apos;s on hand, what&apos;s reserved and
              what&apos;s already on the road — all in one place.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Real-time stock by project, region and warehouse.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Automatic reservations as activities are scheduled.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Low-stock alerts before work gets blocked on site.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Export-ready views for finance and vendor reconciliation.</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Stacked inventory images + lottie */}
          <motion.div
            className="relative flex items-center justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="relative w-full max-w-xl">
              {/* Back image */}
              <motion.div
                className="relative w-full rounded-[5px] border border-white/12 bg-black/40 shadow-[0_40px_120px_rgba(0,0,0,0.85)] overflow-hidden"
                variants={stackBack}
              >
                <Image
                  src={InventoryImage}
                  alt="Atlas inventory overview"
                  className="w-full"
                />
              </motion.div>

              {/* Front overlay image */}
              <motion.div
                className="absolute -left-5 bottom-[-20%] w-[88%] rounded-[5px] border border-white/10 bg-black/80 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden"
                variants={stackFront}
              >
                <Image
                  src={InventoryImageDetail}
                  alt="Atlas detailed inventory table"
                  className="w-full"
                />
              </motion.div>
            </div>

            {/* Lottie badge */}
            <motion.div
              className="pointer-events-none absolute -bottom-25 -right-10 h-30 w-30 md:h-40 md:w-40"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
            >
              <Lottie animationData={InventoryAnimation} loop autoplay />
            </motion.div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 6. ANALYTICS                                                       */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto max-w-6xl px-6 lg:px-0 pt-20 pb-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Stacked analytics images + lottie */}
          <motion.div
            className="relative flex items-center justify-center order-2 md:order-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="relative w-full max-w-xl">
              {/* Back image */}
              <motion.div
                className="relative w-full rounded-[5px] border border-white/12 bg-black/40 shadow-[0_40px_120px_rgba(0,0,0,0.85)] overflow-hidden"
                variants={stackBack}
              >
                <Image
                  src={AnalyticsImageDetail}
                  alt="Atlas analytics overview"
                  className="w-full"
                />
              </motion.div>

              {/* Front overlay image */}
              <motion.div
                className="absolute -right-5 bottom-[-20%] w-[88%] rounded-[5px] border border-white/10 bg-black/80 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden"
                variants={stackFront}
              >
                <Image
                  src={AnalyticsImage}
                  alt="Atlas detailed analytics dashboard"
                  className="w-full"
                />
              </motion.div>
            </div>

            {/* Lottie badge */}
            <motion.div
              className="pointer-events-none absolute -bottom-12 -left-5 h-24 w-24 md:h-28 md:w-28"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
            >
              <Lottie animationData={AnalyticsAnimation} loop autoplay />
            </motion.div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            className="order-1 md:order-2"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
              Detailed Analytics
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
              Turn Atlas activity into
              <br className="hidden md:block" /> live performance insight.
            </h2>

            <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
              Analytics connects every ticket, site and supply update into a single
              performance layer. Track rollouts, risk and SLAs in real time without
              building custom reports or spreadsheets.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Live dashboards across projects, regions and delivery phases.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>SLA and risk indicators that surface issues before they escalate.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Drill-downs by customer, vendor or delivery squad in one click.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Export-ready views for reviews, governance and board reporting.</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 7. CUSTOMISATION                                                   */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto max-w-6xl px-6 lg:px-0 pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime-300">
              Fully customisable
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
              Build Atlas the way
              <br className="hidden md:block" /> your teams actually work.
            </h2>

            <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
              Every rollout, organisation and workflow is different. Atlas can be tailored to your
              fields, layouts, roles and approvals so it feels like a dedicated system for your
              operations — without starting from scratch.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-100/90">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Custom fields, board views and grids tuned to your project language.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Role-based views for leadership, coordinators and field teams.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400" />
                <span>Integration options for your existing ERPs, finance and ticketing tools.</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 text-sm font-medium text-black shadow-[0_0_35px_rgba(190,242,100,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Connect now
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                  ↗
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Custom dashboard mock */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#171717] via-[#050505] to-black shadow-[0_40px_120px_rgba(0,0,0,0.9)] p-4 md:p-5">
              {/* top bar */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                </div>
                <div className="h-5 w-32 rounded-full bg-zinc-800/80" />
              </div>

              {/* main layout */}
              <div className="grid grid-cols-12 gap-3">
                {/* left sidebar */}
                <div className="col-span-3 space-y-2.5">
                  <div className="h-7 rounded-md bg-zinc-900/80" />
                  <div className="h-7 rounded-md bg-zinc-900/70" />
                  <div className="h-7 rounded-md bg-zinc-900/60" />
                  <div className="h-7 rounded-md bg-zinc-900/40" />
                </div>

                {/* centre board */}
                <div className="col-span-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 rounded-md bg-zinc-800/80" />
                    <div className="h-4 w-14 rounded-md bg-zinc-800/60" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 rounded-lg bg-zinc-900/80" />
                    <div className="h-20 rounded-lg bg-zinc-900/60" />
                    <div className="h-20 rounded-lg bg-zinc-900/60" />
                    <div className="h-20 rounded-lg bg-zinc-900/40" />
                  </div>
                </div>

                {/* right config column */}
                <div className="col-span-4 space-y-2">
                  <div className="h-4 w-24 rounded-md bg-zinc-800/80" />
                  <div className="h-16 rounded-lg bg-zinc-900/80" />
                  <div className="h-16 rounded-lg bg-zinc-900/60" />
                  <div className="flex gap-2 pt-1">
                    <div className="h-8 flex-1 rounded-md bg-zinc-900/70" />
                    <div className="h-8 flex-1 rounded-md bg-zinc-900/40" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="h-3 w-10 rounded-md bg-zinc-800/80" />
                  <div className="h-3 w-10 rounded-md bg-zinc-800/60" />
                  <div className="h-3 w-10 rounded-md bg-zinc-800/40" />
                </div>
                <div className="h-3 w-20 rounded-md bg-zinc-800/70" />
              </div>

              {/* drag handles */}
              <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex flex-col gap-1">
                <span className="h-1 w-4 rounded-full bg-zinc-700" />
                <span className="h-1 w-4 rounded-full bg-zinc-700" />
                <span className="h-1 w-4 rounded-full bg-zinc-700" />
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

