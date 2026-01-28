// 'use client';

// import Link from 'next/link';
// import { motion, cubicBezier } from 'framer-motion';
// import dynamic from 'next/dynamic';
// import AiCoreAnimation from '../../../assets/lottie/Ai_core.json';

// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);
// const ACCENT = '#19E28F';

// const fadeUp = {
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.4 },
//   transition: { duration: 0.7, ease: easeOutExpo },
// };

// const fadeIn = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   viewport: { once: true, amount: 0.4 },
//   transition: { duration: 0.7, ease: easeOutExpo },
// };

// export default function CpalChatbotPage() {
//   return (
//     <main className="relative w-full overflow-hidden bg-[#010101]">
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

//       <div className="relative z-10 pt-20 pb-24">
//         {/* ------------------------------------------------------------------ */}
//         {/* 0. TITLE BLOCK                                                     */}
//         {/* ------------------------------------------------------------------ */}
//         <motion.div
//           {...fadeUp}
//           className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16"
//         >
//           <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
//             Product · AI assistant
//           </p>
//           <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
//             C-pal Chatbot
//           </h1>
//           <p className="mt-4 max-w-2xl text-lg text-zinc-300">
//             Put an always-on AI assistant at the heart of your operations.
//           </p>
//         </motion.div>

//         {/* ------------------------------------------------------------------ */}
//         {/* 1. HERO SECTION                                                    */}
//         {/* ------------------------------------------------------------------ */}
//         <section className="mt-16 mx-auto flex max-w-6xl flex-col-reverse gap-12 px-6 md:flex-row md:px-10 lg:px-16">
//           {/* LEFT: Lottie / AI core visual */}
//           <motion.div
//             initial={{ opacity: 0, x: -24, y: 10, scale: 0.95 }}
//             whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//             viewport={{ once: true, amount: 0.45 }}
//             transition={{ duration: 0.8, ease: easeOutExpo }}
//             className="relative flex flex-1 items-center justify-center"
//           >
//             {/* glow */}
//             <div className="pointer-events-none absolute inset-0 -z-10">
//               <div
//                 className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
//                 style={{
//                   background:
//                     'radial-gradient(circle, rgba(25,226,143,0.35) 0%, transparent 65%)',
//                 }}
//               />
//             </div>

//             <div className="relative w-full max-w-[540px]">
//               <Lottie
//                 animationData={AiCoreAnimation}
//                 loop
//                 autoplay
//                 className="h-auto w-full"
//               />
//             </div>
//           </motion.div>

//           {/* RIGHT: Text */}
//           <motion.div
//             {...fadeUp}
//             className="flex-1 space-y-6 md:max-w-md"
//           >
//             {/* breadcrumb chip */}
//             <div className="mb-2 flex items-center gap-3 text-sm text-slate-200">
//               <span
//                 className="h-2.5 w-5 rounded-full shadow-[0_0_12px_rgba(25,226,143,0.85)]"
//                 style={{ backgroundColor: ACCENT }}
//               />
//               <span className="text-[15px] text-slate-100">C-pal Chatbot</span>
//               <span className="text-lg leading-none text-slate-500">›</span>
//             </div>

//             {/* section label */}
//             <p
//               className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
//               style={{
//                 borderColor: `${ACCENT}66`,
//                 backgroundColor: `${ACCENT}14`,
//                 color: '#BBF7D0',
//               }}
//             >
//               CPAL · AI ASSISTANT
//             </p>

//             {/* heading */}
//             <h2 className="text-3xl md:text-4xl font-semibold text-white">
//               Put an always-on AI assistant at the heart of your operations.
//             </h2>

//             {/* subheading */}
//             <p className="max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
//               C-pal connects to your tools and channels to answer questions, triage issues
//               and keep every stakeholder in sync — without adding more tabs to your day.
//             </p>

//             {/* bullets */}
//             <div className="mt-2 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
//               <div className="flex items-start gap-3">
//                 <span
//                   className="mt-1 h-1.5 w-1.5 rounded-full"
//                   style={{ backgroundColor: ACCENT }}
//                 />
//                 <span>Natural language queries over tickets, tasks and documentation.</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span
//                   className="mt-1 h-1.5 w-1.5 rounded-full"
//                   style={{ backgroundColor: ACCENT }}
//                 />
//                 <span>Smart summaries for stand-ups, incident reviews and hand-offs.</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span
//                   className="mt-1 h-1.5 w-1.5 rounded-full"
//                   style={{ backgroundColor: ACCENT }}
//                 />
//                 <span>Works where your teams already are — Slack, email and more.</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span
//                   className="mt-1 h-1.5 w-1.5 rounded-full"
//                   style={{ backgroundColor: ACCENT }}
//                 />
//                 <span>Guardrails and permissions aligned with your existing systems.</span>
//               </div>
//             </div>

//             {/* button */}
//             <div className="pt-4">
//               <button
//                 type="button"
//                 className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(25,226,143,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
//                 style={{ backgroundColor: ACCENT }}
//               >
//                 Watch demo
//                 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
//                   ↗
//                 </span>
//               </button>
//             </div>
//           </motion.div>
//         </section>

//         {/* ------------------------------------------------------------------ */}
//         {/* 2. HOW CPAL WORKS                                                  */}
//         {/* ------------------------------------------------------------------ */}
//         <section className="mt-28 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
//           <div className="grid items-center gap-12 md:grid-cols-2">
//             {/* LEFT: Text */}
//             <motion.div {...fadeUp}>
//               <p
//                 className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
//                 style={{
//                   borderColor: `${ACCENT}66`,
//                   backgroundColor: `${ACCENT}14`,
//                   color: '#BBF7D0',
//                 }}
//               >
//                 How C-pal works
//               </p>

//               <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
//                 Connects to your tools, understands your work, then answers in natural
//                 language.
//               </h2>

//               <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
//                 C-pal ingests data from tickets, chat and documentation, builds a semantic
//                 layer over it, and uses operations-tuned prompts to answer questions and
//                 suggest first-step actions.
//               </p>

//               <div className="mt-6 space-y-4 text-sm text-slate-100/90">
//                 <div className="flex gap-3">
//                   <span
//                     className="mt-2 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <div>
//                     <div className="font-medium text-white">Connectors to your stack</div>
//                     <div className="text-slate-300/80">
//                       Jira, ServiceNow, Slack, email, wikis and logs — so answers are grounded
//                       in your live data.
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <span
//                     className="mt-2 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <div>
//                     <div className="font-medium text-white">Knowledge &amp; memory</div>
//                     <div className="text-slate-300/80">
//                       Ticket history, known issues and runbooks turned into a searchable,
//                       safe knowledge base.
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <span
//                     className="mt-2 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <div>
//                     <div className="font-medium text-white">Conversation engine</div>
//                     <div className="text-slate-300/80">
//                       Operations-tuned prompts that keep context across follow-ups and
//                       different tools.
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <span
//                     className="mt-2 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <div>
//                     <div className="font-medium text-white">Safe actions</div>
//                     <div className="text-slate-300/80">
//                       Configurable guardrails for creating tickets, posting updates and
//                       sending summaries.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* RIGHT: Flow diagram card */}
//             <motion.div
//               {...fadeIn}
//               className="flex justify-center"
//             >
//               <div className="relative w-full max-w-xl rounded-2xl border border-white/12 bg-gradient-to-b from-[#031515] via-[#02070A] to-black p-6 shadow-[0_36px_120px_rgba(0,0,0,0.95)]">
//                 {/* TOP ROW: tools */}
//                 <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-200">
//                   {['Tickets', 'Chat', 'Docs & Wikis'].map((label) => (
//                     <div
//                       key={label}
//                       className="rounded-xl border border-white/10 bg-black/70 p-3"
//                     >
//                       <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
//                         {label}
//                       </div>
//                       <div className="mt-1 h-3 w-20 rounded bg-zinc-700" />
//                       <div className="mt-2 flex gap-1">
//                         <div className="h-2 w-6 rounded bg-zinc-800" />
//                         <div className="h-2 w-6 rounded bg-zinc-800/80" />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* arrow */}
//                 <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
//                   <div className="h-px flex-1 bg-gradient-to-r from-white via-[rgba(25,226,143,0.9)] to-transparent" />
//                   <span className="text-[10px] tracking-wide text-slate-300/90">
//                     APIs · Webhooks · Connectors
//                   </span>
//                 </div>

//                 {/* CPAL CORE */}
//                 <div className="mt-3 rounded-2xl border border-[rgba(25,226,143,0.85)] bg-[radial-gradient(circle_at_10%_0%,rgba(25,226,143,0.32),transparent_60%),rgba(6,24,22,0.95)] px-4 py-4 shadow-[0_0_32px_rgba(25,226,143,0.6)]">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#CFFAFE]">
//                         C-PAL AI CORE
//                       </div>
//                       <div className="mt-1 h-3 w-28 rounded bg-zinc-700/80" />
//                     </div>
//                     <div className="flex gap-1.5">
//                       <span className="h-2 w-2 rounded-full bg-emerald-400" />
//                       <span className="h-2 w-2 rounded-full bg-amber-300" />
//                       <span className="h-2 w-2 rounded-full bg-sky-400" />
//                     </div>
//                   </div>

//                   <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-100">
//                     {['Search', 'Summarise', 'Suggest'].map((cap) => (
//                       <div
//                         key={cap}
//                         className="rounded-lg bg-black/75 p-2"
//                       >
//                         <div className="mb-1 h-3 w-16 rounded bg-zinc-700" />
//                         <div className="h-2 w-12 rounded bg-zinc-800" />
//                         <div className="mt-1 text-[9px] text-slate-400">{cap}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* arrow */}
//                 <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
//                   <div className="h-px flex-1 bg-gradient-to-r from-[rgba(25,226,143,0.9)] via-[rgba(148,163,184,0.9)] to-transparent" />
//                   <span className="text-[10px] tracking-wide text-slate-300/90">
//                     Responses · Actions · Summaries
//                   </span>
//                 </div>

//                 {/* OUTPUT CHANNELS */}
//                 <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-200">
//                   <div className="rounded-lg border border-white/15 bg-black/70 p-3">
//                     <div className="mb-1 h-3 w-18 rounded bg-zinc-700" />
//                     <div className="h-9 rounded bg-[radial-gradient(circle_at_20%_10%,rgba(25,226,143,0.55),transparent_60%)]" />
//                     <div className="mt-1 text-[10px] text-slate-400">Slack &amp; chat</div>
//                   </div>
//                   <div className="rounded-lg border border-white/15 bg-black/70 p-3">
//                     <div className="mb-1 h-3 w-18 rounded bg-zinc-700" />
//                     <div className="space-y-1">
//                       <div className="h-2 w-full rounded bg-zinc-800" />
//                       <div className="h-2 w-4/5 rounded bg-zinc-800" />
//                       <div className="h-2 w-3/5 rounded bg-zinc-800" />
//                     </div>
//                     <div className="mt-1 text-[10px] text-slate-400">Email &amp; reports</div>
//                   </div>
//                   <div className="rounded-lg border border-white/15 bg-black/70 p-3">
//                     <div className="mb-1 h-3 w-18 rounded bg-zinc-700" />
//                     <div className="h-9 rounded bg-zinc-900/90" />
//                     <div className="mt-1 text-[10px] text-slate-400">Portals &amp; apps</div>
//                   </div>
//                 </div>

//                 <div className="mt-4 text-[11px] text-slate-400">
//                   End-to-end flow from your tools, through C-pal, back into the channels your
//                   teams already live in.
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* ------------------------------------------------------------------ */}
//         {/* 3. LIVE COPILOT / DASHBOARD                                        */}
//         {/* ------------------------------------------------------------------ */}
//         <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
//           <div className="grid items-center gap-12 md:grid-cols-2">
//             {/* LEFT: dashboard / chat mock */}
//             <motion.div
//               {...fadeIn}
//               className="flex justify-center"
//             >
//               <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#07120f] via-[#020814] to-black p-4 md:p-5 shadow-[0_40px_130px_rgba(0,0,0,1)]">
//                 {/* header */}
//                 <div className="mb-4 flex items-center justify-between">
//                   <div className="flex gap-1.5">
//                     <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
//                     <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
//                     <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
//                   </div>
//                   <div className="h-5 w-28 rounded-full bg-zinc-800/80" />
//                 </div>

//                 <div className="grid grid-cols-12 gap-3">
//                   {/* chat pane */}
//                   <div className="col-span-8 rounded-xl bg-zinc-950/90 p-3">
//                     <div className="mb-2 flex items-center justify-between">
//                       <div className="h-3 w-20 rounded bg-zinc-700" />
//                       <div className="h-3 w-12 rounded bg-zinc-800" />
//                     </div>

//                     <div className="space-y-2">
//                       {/* user bubble */}
//                       <div className="flex justify-end">
//                         <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-zinc-800 px-3 py-2 text-[10px] text-zinc-100">
//                           What happened with incident INC-4321 overnight?
//                         </div>
//                       </div>
//                       {/* bot bubble */}
//                       <div className="flex justify-start">
//                         <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-[rgba(25,226,143,0.08)] px-3 py-2 text-[10px] text-zinc-100">
//                           C-pal: 3 alerts correlated, linked to WAN link
//                           <span className="inline-block w-8" /> &quot;MUM-EDGE-02&quot;. Impact:
//                           5 branches. Summary and recommended first steps below.
//                         </div>
//                       </div>
//                       <div className="flex justify-start">
//                         <div className="mt-1 h-16 w-full rounded-xl bg-[linear-gradient(to_bottom,rgba(12,148,136,0.25),transparent),rgba(9,9,11,0.9)]" />
//                       </div>
//                     </div>

//                     {/* input bar */}
//                     <div className="mt-3 flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5">
//                       <div className="h-3 w-full rounded bg-zinc-800" />
//                       <div
//                         className="h-6 w-6 rounded-full"
//                         style={{ backgroundColor: ACCENT }}
//                       />
//                     </div>
//                   </div>

//                   {/* right: snippets */}
//                   <div className="col-span-4 space-y-3">
//                     <div className="rounded-xl bg-zinc-950/90 p-3 text-[10px] text-zinc-200">
//                       <div className="mb-2 h-3 w-20 rounded bg-zinc-700" />
//                       <div className="space-y-1.5">
//                         <div className="h-2 w-full rounded bg-zinc-800" />
//                         <div className="h-2 w-4/5 rounded bg-zinc-800" />
//                         <div className="h-2 w-3/5 rounded bg-zinc-800/90" />
//                       </div>
//                     </div>
//                     <div className="rounded-xl bg-zinc-950/90 p-3 text-[10px] text-zinc-200">
//                       <div className="mb-2 h-3 w-20 rounded bg-zinc-700" />
//                       <div className="h-14 rounded bg-[radial-gradient(circle_at_10%_10%,rgba(25,226,143,0.4),transparent_60%),radial-gradient(circle_at_90%_80%,rgba(59,130,246,0.4),transparent_60%)]" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-400">
//                   <span>C-pal live copilot view</span>
//                   <span>Synced with tickets &amp; chat</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* RIGHT: Text */}
//             <motion.div {...fadeUp}>
//               <p
//                 className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
//                 style={{
//                   borderColor: `${ACCENT}66`,
//                   backgroundColor: `${ACCENT}14`,
//                   color: '#BBF7D0',
//                 }}
//               >
//                 Operations copilot
//               </p>

//               <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
//                 A single place to ask, understand and act across your tools.
//               </h2>

//               <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
//                 Instead of bouncing between dashboards, C-pal lets teams ask questions in plain
//                 language and get answers that already include context, history and next steps.
//               </p>

//               <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
//                 <div className="flex items-start gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Fast answers over incidents, tickets, SLOs and deployments.</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Instant summaries for stand-ups, hand-offs and incident reviews.</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Suggested first-step runbooks for level 1 and level 2 teams.</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Exports to email, wiki pages and chat threads in one click.</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* ------------------------------------------------------------------ */}
//         {/* 4. GUARDRAILS & PERMISSIONS                                        */}
//         {/* ------------------------------------------------------------------ */}
//         <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
//           <div className="grid items-center gap-12 md:grid-cols-2">
//             {/* LEFT: Text */}
//             <motion.div {...fadeUp}>
//               <p
//                 className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
//                 style={{
//                   borderColor: `${ACCENT}66`,
//                   backgroundColor: `${ACCENT}14`,
//                   color: '#BBF7D0',
//                 }}
//               >
//                 Guardrails &amp; trust
//               </p>

//               <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
//                 AI that stays inside your permissions and workflows.
//               </h2>

//               <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
//                 C-pal respects the same roles and permissions you already use, and every action
//                 it takes can be logged, reviewed and tuned — so operations teams stay in control.
//               </p>

//               <div className="mt-6 space-y-3 text-sm text-slate-100/90">
//                 <div className="flex gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Per-source and per-team access controls for data and actions.</span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Review and approval flows for sensitive updates and broadcasts.</span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Full logging of prompts, answers and actions for audits.</span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Choice of cloud region and data residency controls.</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* RIGHT: guardrails diagram */}
//             <motion.div
//               {...fadeIn}
//               className="flex justify-center"
//             >
//               <div className="relative w-full max-w-xl rounded-2xl border border-emerald-400/40 bg-gradient-to-b from-[#031814] via-[#020910] to-black p-5 shadow-[0_32px_110px_rgba(0,0,0,1)]">
//                 <div className="mb-4 flex items-center justify-between">
//                   <div className="h-4 w-28 rounded bg-emerald-500/60" />
//                   <div className="h-4 w-12 rounded bg-zinc-800" />
//                 </div>

//                 <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-200">
//                   <div className="rounded-xl border border-white/12 bg-black/70 p-3">
//                     <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200">
//                       RBAC
//                     </div>
//                     <div className="h-3 w-20 rounded bg-zinc-700" />
//                     <div className="mt-2 h-2 w-16 rounded bg-zinc-800" />
//                   </div>
//                   <div className="rounded-xl border border-white/12 bg-black/70 p-3">
//                     <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200">
//                       Guardrails
//                     </div>
//                     <div className="h-3 w-20 rounded bg-zinc-700" />
//                     <div className="mt-2 h-2 w-16 rounded bg-zinc-800" />
//                   </div>
//                   <div className="rounded-xl border border-white/12 bg-black/70 p-3">
//                     <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200">
//                       Audit log
//                     </div>
//                     <div className="h-3 w-20 rounded bg-zinc-700" />
//                     <div className="mt-2 h-2 w-16 rounded bg-zinc-800" />
//                   </div>
//                 </div>

//                 <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400">
//                   <span className="h-px flex-1 bg-gradient-to-r from-white via-emerald-400 to-transparent" />
//                   <span>All prompts &amp; actions pass through policy layer</span>
//                 </div>

//                 <div className="mt-3 rounded-2xl border border-[rgba(25,226,143,0.85)] bg-black/80 p-4">
//                   <div className="mb-2 flex items-center justify-between">
//                     <div className="h-3 w-24 rounded bg-zinc-700" />
//                     <div className="flex gap-1.5">
//                       <span className="h-2 w-2 rounded-full bg-emerald-400" />
//                       <span className="h-2 w-2 rounded-full bg-amber-300" />
//                     </div>
//                   </div>
//                   <div className="space-y-1.5 text-[10px] text-zinc-200">
//                     <div className="flex items-center justify-between">
//                       <span className="h-2 w-24 rounded bg-zinc-800" />
//                       <span className="h-2 w-10 rounded bg-zinc-900" />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="h-2 w-28 rounded bg-zinc-800" />
//                       <span className="h-2 w-8 rounded bg-zinc-900" />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="h-2 w-24 rounded bg-zinc-800" />
//                       <span className="h-2 w-6 rounded bg-zinc-900" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4 text-[11px] text-slate-400">
//                   Every action is checked against roles, guardrails and audit policies before it
//                   leaves C-pal.
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* ------------------------------------------------------------------ */}
//         {/* 5. USE CASES                                                       */}
//         {/* ------------------------------------------------------------------ */}
//         <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
//           <motion.div
//             {...fadeUp}
//             className="text-center"
//           >
//             <p
//               className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
//               style={{
//                 borderColor: `${ACCENT}66`,
//                 backgroundColor: `${ACCENT}14`,
//                 color: '#BBF7D0',
//               }}
//             >
//               Teams C-pal supports
//             </p>
//             <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
//               Built for operations, support and leadership.
//             </h2>
//           </motion.div>

//           <motion.div
//             {...fadeIn}
//             className="mt-8 grid gap-6 md:grid-cols-3"
//           >
//             {[
//               {
//                 title: 'Operations & NOC',
//                 body: 'Speed up incident triage, reduce MTTR and keep on-call teams in the loop.',
//               },
//               {
//                 title: 'Support & CS',
//                 body: 'Answer repetitive questions faster and suggest next best actions for agents.',
//               },
//               {
//                 title: 'Leadership & PMO',
//                 body: 'Roll-up views, trends and summaries across incidents, projects and teams.',
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/80 p-5 text-left shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
//               >
//                 <h3 className="text-sm font-semibold text-white">{item.title}</h3>
//                 <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
//               </div>
//             ))}
//           </motion.div>
//         </section>

//         {/* ------------------------------------------------------------------ */}
//         {/* 6. FINAL CTA                                                       */}
//         {/* ------------------------------------------------------------------ */}
//         <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
//           <motion.div
//             {...fadeIn}
//             className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#020b08] via-[#020815] to-black px-6 py-10 md:grid-cols-2 md:px-10"
//           >
//             {/* Text */}
//             <div>
//               <p
//                 className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
//                 style={{
//                   borderColor: `${ACCENT}66`,
//                   backgroundColor: `${ACCENT}14`,
//                   color: '#BBF7D0',
//                 }}
//               >
//                 Next steps
//               </p>
//               <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
//                 Ready to see C-pal working on your data?
//               </h2>
//               <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
//                 Bring C-pal into a small slice of your stack — a single team, queue or
//                 incident type — and see how quickly it becomes the default way to ask questions
//                 and share context.
//               </p>

//               <ul className="mt-5 space-y-2 text-sm text-slate-100/90">
//                 <li className="flex gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Tailored demos using your own tools, tickets and workflows.</span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span
//                     className="mt-1 h-1.5 w-1.5 rounded-full"
//                     style={{ backgroundColor: ACCENT }}
//                   />
//                   <span>Clear rollout plan across teams, channels and integrations.</span>
//                 </li>
//               </ul>

//               <div className="mt-7 flex flex-wrap items-center gap-4">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(25,226,143,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
//                   style={{ backgroundColor: ACCENT }}
//                 >
//                   Connect now
//                   <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
//                     ↗
//                   </span>
//                 </Link>

//                 <button
//                   type="button"
//                   className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60"
//                 >
//                   Watch demo
//                 </button>
//               </div>
//             </div>

//             {/* Right: small configuration mock */}
//             <div className="relative flex justify-center md:justify-end">
//               <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-4 shadow-[0_32px_110px_rgba(0,0,0,1)]">
//                 <div className="mb-4 flex items-center justify-between">
//                   <div className="flex gap-1.5">
//                     <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
//                     <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
//                     <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
//                   </div>
//                   <div className="h-4 w-24 rounded-full bg-zinc-800/80" />
//                 </div>

//                 <div className="grid grid-cols-5 gap-3">
//                   <div className="col-span-2 space-y-2">
//                     <div className="h-4 w-20 rounded-md bg-zinc-800/90" />
//                     <div className="space-y-1.5">
//                       <div className="h-3 w-full rounded bg-zinc-900" />
//                       <div className="h-3 w-4/5 rounded bg-zinc-800" />
//                       <div className="h-3 w-3/5 rounded bg-zinc-800/80" />
//                     </div>
//                   </div>

//                   <div className="col-span-3 space-y-2">
//                     <div className="flex items-center justify-between">
//                       <div className="h-4 w-24 rounded-md bg-zinc-800/90" />
//                       <div className="h-4 w-10 rounded-md bg-zinc-900" />
//                     </div>
//                     <div className="h-24 rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(25,226,143,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.25),transparent_55%)]" />
//                     <div className="flex gap-2">
//                       <div className="h-6 flex-1 rounded-md bg-zinc-900/80" />
//                       <div className="h-6 flex-1 rounded-md bg-zinc-900/60" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="h-3 w-16 rounded-md bg-zinc-800/80" />
//                   <div className="flex gap-2">
//                     <div
//                       className="h-7 w-16 rounded-full"
//                       style={{ backgroundColor: `${ACCENT}D9` }}
//                     />
//                     <div className="h-7 w-16 rounded-full bg-zinc-800/80" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       </div>
//     </main>
//   );
// }


'use client';

import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';
import dynamic from 'next/dynamic';
import AiCoreAnimation from '../../../assets/lottie/Ai_core.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);
const ACCENT = '#19E28F';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export default function CpalChatbotPage() {
  // ✅ Same demo modal event pattern as CNMS
  const openDemo = () => {
    window.dispatchEvent(
      new CustomEvent('commedia:open-demo', {
        detail: {
          url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE', // placeholder for now
          title: 'C-pal — AI Assistant',
        },
      })
    );
  };

  return (
    <main className="relative w-full overflow-hidden bg-[#010101]">
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

      <div className="relative z-10 pt-20 pb-24">
        {/* ------------------------------------------------------------------ */}
        {/* 0. TITLE BLOCK                                                     */}
        {/* ------------------------------------------------------------------ */}
        <motion.div {...fadeUp} className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Product · AI assistant
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            C-pal Chatbot
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Put an always-on AI assistant at the heart of your operations.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* 1. HERO SECTION                                                    */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-16 mx-auto flex max-w-6xl flex-col-reverse gap-12 px-6 md:flex-row md:px-10 lg:px-16">
          {/* LEFT: Lottie / AI core visual */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="relative flex flex-1 items-center justify-center"
          >
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(25,226,143,0.35) 0%, transparent 65%)',
                }}
              />
            </div>

            <div className="relative w-full max-w-[540px]">
              <Lottie animationData={AiCoreAnimation} loop autoplay className="h-auto w-full" />
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div {...fadeUp} className="flex-1 space-y-6 md:max-w-md">
            {/* breadcrumb chip */}
            <div className="mb-2 flex items-center gap-3 text-sm text-slate-200">
              <span
                className="h-2.5 w-5 rounded-full shadow-[0_0_12px_rgba(25,226,143,0.85)]"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="text-[15px] text-slate-100">C-pal Chatbot</span>
              <span className="text-lg leading-none text-slate-500">›</span>
            </div>

            {/* section label */}
            <p
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                borderColor: `${ACCENT}66`,
                backgroundColor: `${ACCENT}14`,
                color: '#BBF7D0',
              }}
            >
              CPAL · AI ASSISTANT
            </p>

            {/* heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Put an always-on AI assistant at the heart of your operations.
            </h2>

            {/* subheading */}
            <p className="max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
              C-pal connects to your tools and channels to answer questions, triage issues
              and keep every stakeholder in sync — without adding more tabs to your day.
            </p>

            {/* bullets */}
            <div className="mt-2 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
              {[
                'Natural language queries over tickets, tasks and documentation.',
                'Smart summaries for stand-ups, incident reviews and hand-offs.',
                'Works where your teams already are — Slack, email and more.',
                'Guardrails and permissions aligned with your existing systems.',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={openDemo}
                aria-label="Watch C-pal demo"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(25,226,143,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                Watch demo
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </button>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 2. HOW CPAL WORKS                                                  */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-28 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: Text */}
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}14`,
                  color: '#BBF7D0',
                }}
              >
                How C-pal works
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                Connects to your tools, understands your work, then answers in natural
                language.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                C-pal ingests data from tickets, chat and documentation, builds a semantic
                layer over it, and uses operations-tuned prompts to answer questions and
                suggest first-step actions.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-100/90">
                {[
                  {
                    title: 'Connectors to your stack',
                    body: 'Jira, ServiceNow, Slack, email, wikis and logs — so answers are grounded in your live data.',
                  },
                  {
                    title: 'Knowledge & memory',
                    body: 'Ticket history, known issues and runbooks turned into a searchable, safe knowledge base.',
                  },
                  {
                    title: 'Conversation engine',
                    body: 'Operations-tuned prompts that keep context across follow-ups and different tools.',
                  },
                  {
                    title: 'Safe actions',
                    body: 'Configurable guardrails for creating tickets, posting updates and sending summaries.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="text-slate-300/80">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: Flow diagram card */}
            <motion.div {...fadeIn} className="flex justify-center">
              <div className="relative w-full max-w-xl rounded-2xl border border-white/12 bg-gradient-to-b from-[#031515] via-[#02070A] to-black p-6 shadow-[0_36px_120px_rgba(0,0,0,0.95)]">
                {/* TOP ROW: tools */}
                <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-200">
                  {['Tickets', 'Chat', 'Docs & Wikis'].map((label) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-black/70 p-3">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                        {label}
                      </div>
                      <div className="mt-1 h-3 w-20 rounded bg-zinc-700" />
                      <div className="mt-2 flex gap-1">
                        <div className="h-2 w-6 rounded bg-zinc-800" />
                        <div className="h-2 w-6 rounded bg-zinc-800/80" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* arrow */}
                <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
                  <div className="h-px flex-1 bg-gradient-to-r from-white via-[rgba(25,226,143,0.9)] to-transparent" />
                  <span className="text-[10px] tracking-wide text-slate-300/90">
                    APIs · Webhooks · Connectors
                  </span>
                </div>

                {/* CPAL CORE */}
                <div className="mt-3 rounded-2xl border border-[rgba(25,226,143,0.85)] bg-[radial-gradient(circle_at_10%_0%,rgba(25,226,143,0.32),transparent_60%),rgba(6,24,22,0.95)] px-4 py-4 shadow-[0_0_32px_rgba(25,226,143,0.6)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#CFFAFE]">
                        C-PAL AI CORE
                      </div>
                      <div className="mt-1 h-3 w-28 rounded bg-zinc-700/80" />
                    </div>
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-100">
                    {['Search', 'Summarise', 'Suggest'].map((cap) => (
                      <div key={cap} className="rounded-lg bg-black/75 p-2">
                        <div className="mb-1 h-3 w-16 rounded bg-zinc-700" />
                        <div className="h-2 w-12 rounded bg-zinc-800" />
                        <div className="mt-1 text-[9px] text-slate-400">{cap}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* arrow */}
                <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-300">
                  <div className="h-px flex-1 bg-gradient-to-r from-[rgba(25,226,143,0.9)] via-[rgba(148,163,184,0.9)] to-transparent" />
                  <span className="text-[10px] tracking-wide text-slate-300/90">
                    Responses · Actions · Summaries
                  </span>
                </div>

                {/* OUTPUT CHANNELS */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-200">
                  <div className="rounded-lg border border-white/15 bg-black/70 p-3">
                    <div className="mb-1 h-3 w-18 rounded bg-zinc-700" />
                    <div className="h-9 rounded bg-[radial-gradient(circle_at_20%_10%,rgba(25,226,143,0.55),transparent_60%)]" />
                    <div className="mt-1 text-[10px] text-slate-400">Slack &amp; chat</div>
                  </div>
                  <div className="rounded-lg border border-white/15 bg-black/70 p-3">
                    <div className="mb-1 h-3 w-18 rounded bg-zinc-700" />
                    <div className="space-y-1">
                      <div className="h-2 w-full rounded bg-zinc-800" />
                      <div className="h-2 w-4/5 rounded bg-zinc-800" />
                      <div className="h-2 w-3/5 rounded bg-zinc-800" />
                    </div>
                    <div className="mt-1 text-[10px] text-slate-400">Email &amp; reports</div>
                  </div>
                  <div className="rounded-lg border border-white/15 bg-black/70 p-3">
                    <div className="mb-1 h-3 w-18 rounded bg-zinc-700" />
                    <div className="h-9 rounded bg-zinc-900/90" />
                    <div className="mt-1 text-[10px] text-slate-400">Portals &amp; apps</div>
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-400">
                  End-to-end flow from your tools, through C-pal, back into the channels your
                  teams already live in.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 3. LIVE COPILOT / DASHBOARD                                        */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: dashboard / chat mock */}
            <motion.div {...fadeIn} className="flex justify-center">
              <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#07120f] via-[#020814] to-black p-4 md:p-5 shadow-[0_40px_130px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="h-5 w-28 rounded-full bg-zinc-800/80" />
                </div>

                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-8 rounded-xl bg-zinc-950/90 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="h-3 w-20 rounded bg-zinc-700" />
                      <div className="h-3 w-12 rounded bg-zinc-800" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-end">
                        <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-zinc-800 px-3 py-2 text-[10px] text-zinc-100">
                          What happened with incident INC-4321 overnight?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-[rgba(25,226,143,0.08)] px-3 py-2 text-[10px] text-zinc-100">
                          C-pal: 3 alerts correlated, linked to WAN link
                          <span className="inline-block w-8" /> &quot;MUM-EDGE-02&quot;. Impact:
                          5 branches. Summary and recommended first steps below.
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="mt-1 h-16 w-full rounded-xl bg-[linear-gradient(to_bottom,rgba(12,148,136,0.25),transparent),rgba(9,9,11,0.9)]" />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5">
                      <div className="h-3 w-full rounded bg-zinc-800" />
                      <div className="h-6 w-6 rounded-full" style={{ backgroundColor: ACCENT }} />
                    </div>
                  </div>

                  <div className="col-span-4 space-y-3">
                    <div className="rounded-xl bg-zinc-950/90 p-3 text-[10px] text-zinc-200">
                      <div className="mb-2 h-3 w-20 rounded bg-zinc-700" />
                      <div className="space-y-1.5">
                        <div className="h-2 w-full rounded bg-zinc-800" />
                        <div className="h-2 w-4/5 rounded bg-zinc-800" />
                        <div className="h-2 w-3/5 rounded bg-zinc-800/90" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-950/90 p-3 text-[10px] text-zinc-200">
                      <div className="mb-2 h-3 w-20 rounded bg-zinc-700" />
                      <div className="h-14 rounded bg-[radial-gradient(circle_at_10%_10%,rgba(25,226,143,0.4),transparent_60%),radial-gradient(circle_at_90%_80%,rgba(59,130,246,0.4),transparent_60%)]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>C-pal live copilot view</span>
                  <span>Synced with tickets &amp; chat</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Text */}
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}14`,
                  color: '#BBF7D0',
                }}
              >
                Operations copilot
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                A single place to ask, understand and act across your tools.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300/85 leading-relaxed">
                Instead of bouncing between dashboards, C-pal lets teams ask questions in plain
                language and get answers that already include context, history and next steps.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4">
                {[
                  'Fast answers over incidents, tickets, SLOs and deployments.',
                  'Instant summaries for stand-ups, hand-offs and incident reviews.',
                  'Suggested first-step runbooks for level 1 and level 2 teams.',
                  'Exports to email, wiki pages and chat threads in one click.',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 4. GUARDRAILS & PERMISSIONS                                        */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}14`,
                  color: '#BBF7D0',
                }}
              >
                Guardrails &amp; trust
              </p>

              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                AI that stays inside your permissions and workflows.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
                C-pal respects the same roles and permissions you already use, and every action
                it takes can be logged, reviewed and tuned — so operations teams stay in control.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-100/90">
                {[
                  'Per-source and per-team access controls for data and actions.',
                  'Review and approval flows for sensitive updates and broadcasts.',
                  'Full logging of prompts, answers and actions for audits.',
                  'Choice of cloud region and data residency controls.',
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="flex justify-center">
              <div className="relative w-full max-w-xl rounded-2xl border border-emerald-400/40 bg-gradient-to-b from-[#031814] via-[#020910] to-black p-5 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-4 w-28 rounded bg-emerald-500/60" />
                  <div className="h-4 w-12 rounded bg-zinc-800" />
                </div>

                <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-200">
                  {['RBAC', 'Guardrails', 'Audit log'].map((label) => (
                    <div key={label} className="rounded-xl border border-white/12 bg-black/70 p-3">
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200">
                        {label}
                      </div>
                      <div className="h-3 w-20 rounded bg-zinc-700" />
                      <div className="mt-2 h-2 w-16 rounded bg-zinc-800" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="h-px flex-1 bg-gradient-to-r from-white via-emerald-400 to-transparent" />
                  <span>All prompts &amp; actions pass through policy layer</span>
                </div>

                <div className="mt-3 rounded-2xl border border-[rgba(25,226,143,0.85)] bg-black/80 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="h-3 w-24 rounded bg-zinc-700" />
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-[10px] text-zinc-200">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="h-2 w-24 rounded bg-zinc-800" />
                        <span className="h-2 w-10 rounded bg-zinc-900" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-400">
                  Every action is checked against roles, guardrails and audit policies before it
                  leaves C-pal.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 5. USE CASES                                                       */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div {...fadeUp} className="text-center">
            <p
              className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                borderColor: `${ACCENT}66`,
                backgroundColor: `${ACCENT}14`,
                color: '#BBF7D0',
              }}
            >
              Teams C-pal supports
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white">
              Built for operations, support and leadership.
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Operations & NOC',
                body: 'Speed up incident triage, reduce MTTR and keep on-call teams in the loop.',
              },
              {
                title: 'Support & CS',
                body: 'Answer repetitive questions faster and suggest next best actions for agents.',
              },
              {
                title: 'Leadership & PMO',
                body: 'Roll-up views, trends and summaries across incidents, projects and teams.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-black/40 to-black/80 p-5 text-left shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
              >
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 6. FINAL CTA                                                       */}
        {/* ------------------------------------------------------------------ */}
        <section className="mt-32 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <motion.div
            {...fadeIn}
            className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#020b08] via-[#020815] to-black px-6 py-10 md:grid-cols-2 md:px-10"
          >
            <div>
              <p
                className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${ACCENT}66`,
                  backgroundColor: `${ACCENT}14`,
                  color: '#BBF7D0',
                }}
              >
                Next steps
              </p>
              <h2 className="mt-5 max-w-xl text-3xl md:text-4xl font-semibold leading-tight text-white">
                Ready to see C-pal working on your data?
              </h2>
              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/85">
                Bring C-pal into a small slice of your stack — a single team, queue or
                incident type — and see how quickly it becomes the default way to ask questions
                and share context.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-100/90">
                {[
                  'Tailored demos using your own tools, tickets and workflows.',
                  'Clear rollout plan across teams, channels and integrations.',
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-black shadow-[0_0_40px_rgba(25,226,143,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: ACCENT }}
                >
                  Connect now
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                    ↗
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={openDemo}
                  aria-label="Watch C-pal demo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/60"
                >
                  Watch demo
                </button>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] via-[#020617] to-black p-4 shadow-[0_32px_110px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                  </div>
                  <div className="h-4 w-24 rounded-full bg-zinc-800/80" />
                </div>

                <div className="grid grid-cols-5 gap-3">
                  <div className="col-span-2 space-y-2">
                    <div className="h-4 w-20 rounded-md bg-zinc-800/90" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-full rounded bg-zinc-900" />
                      <div className="h-3 w-4/5 rounded bg-zinc-800" />
                      <div className="h-3 w-3/5 rounded bg-zinc-800/80" />
                    </div>
                  </div>

                  <div className="col-span-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-24 rounded-md bg-zinc-800/90" />
                      <div className="h-4 w-10 rounded-md bg-zinc-900" />
                    </div>
                    <div className="h-24 rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(25,226,143,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.25),transparent_55%)]" />
                    <div className="flex gap-2">
                      <div className="h-6 flex-1 rounded-md bg-zinc-900/80" />
                      <div className="h-6 flex-1 rounded-md bg-zinc-900/60" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="h-3 w-16 rounded-md bg-zinc-800/80" />
                  <div className="flex gap-2">
                    <div className="h-7 w-16 rounded-full" style={{ backgroundColor: `${ACCENT}D9` }} />
                    <div className="h-7 w-16 rounded-full bg-zinc-800/80" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
