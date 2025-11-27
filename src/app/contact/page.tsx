
// 'use client';

// import { Mail, MessageCircle } from 'lucide-react';

// export default function ContactPage() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-6 py-24 md:px-8 lg:px-16">
//       {/* GRID BACKGROUND */}
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

//       <div className="relative z-10 mx-auto max-w-5xl">
//         {/* Heading + subheading */}
//         <div className="text-center">
//           <h1 className="text-[40px] leading-tight font-semibold text-white sm:text-[52px] md:text-[60px]">
//             How can we help?
//           </h1>
//           <p className="mt-4 text-base text-zinc-300 sm:text-lg max-w-2xl mx-auto">
//             Get in touch with our sales and support teams for demos, onboarding support,
//             or product questions.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mt-12 grid gap-8 md:grid-cols-2">
//           {/* Sales card */}
//           <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
//             <div>
//               <div className="flex items-center gap-3 text-white">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
//                   <Mail className="h-5 w-5 text-white" />
//                 </div>
//                 <h2 className="text-lg font-semibold">Sales</h2>
//               </div>

//               <p className="mt-4 text-sm leading-6 text-zinc-300">
//                 Speak to our sales team about plans, pricing, enterprise contracts,
//                 or to request a product demo.
//               </p>
//             </div>

//             <button
//               type="button"
//               className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform duration-150 hover:-translate-y-0.5 hover:bg-zinc-100"
//             >
//               Talk to sales
//               <span className="text-base">↗</span>
//             </button>
//           </div>

//           {/* Help & support card */}
//           <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
//             <div>
//               <div className="flex items-center gap-3 text-white">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
//                   <MessageCircle className="h-5 w-5 text-white" />
//                 </div>
//                 <h2 className="text-lg font-semibold">Help &amp; support</h2>
//               </div>

//               <p className="mt-4 text-sm leading-6 text-zinc-300">
//                 Ask product questions, report problems, or leave feedback for our
//                 support team.
//               </p>
//             </div>

//             <button
//               type="button"
//               className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform duration-150 hover:-translate-y-0.5 hover:bg-zinc-100"
//             >
//               Contact support
//               <span className="text-base">↗</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import {
//   Mail,
//   MessageCircle,
//   CheckCircle2,
//   ArrowRight,
// } from 'lucide-react';

// export default function ContactPage() {
//   const [activePanel, setActivePanel] = useState<'sales' | 'support' | null>(
//     null
//   );

//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-6 py-24 md:px-8 lg:px-16">
//       {/* GRID BACKGROUND */}
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

//       <div className="relative z-10 mx-auto max-w-5xl">
//         {/* Heading + subheading */}
//         <div className="text-center">
//           <h1 className="text-[40px] leading-tight font-semibold text-white sm:text-[52px] md:text-[60px]">
//             How can we help?
//           </h1>
//           <p className="mt-4 mx-auto max-w-2xl text-base text-zinc-300 sm:text-lg">
//             Get in touch with our sales and support teams for demos, onboarding
//             support, or product questions.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mt-12 grid gap-8 md:grid-cols-2">
//           {/* Sales card */}
//           <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
//             <div>
//               <div className="flex items-center gap-3 text-white">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
//                   <Mail className="h-5 w-5 text-white" />
//                 </div>
//                 <h2 className="text-lg font-semibold">Sales</h2>
//               </div>

//               <p className="mt-4 text-sm leading-6 text-zinc-300">
//                 Speak to our sales team about plans, pricing, enterprise
//                 contracts, or to request a product demo.
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={() => setActivePanel('sales')}
//               className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform duration-150 hover:-translate-y-0.5 hover:bg-zinc-100"
//             >
//               Talk to sales
//               <span className="text-base">↗</span>
//             </button>
//           </div>

//           {/* Help & support card */}
//           <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
//             <div>
//               <div className="flex items-center gap-3 text-white">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
//                   <MessageCircle className="h-5 w-5 text-white" />
//                 </div>
//                 <h2 className="text-lg font-semibold">Help &amp; support</h2>
//               </div>

//               <p className="mt-4 text-sm leading-6 text-zinc-300">
//                 Ask product questions, report problems, or leave feedback for
//                 our support team.
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={() => setActivePanel('support')}
//               className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform duration-150 hover:-translate-y-0.5 hover:bg-zinc-100"
//             >
//               Contact support
//               <span className="text-base">↗</span>
//             </button>
//           </div>
//         </div>

//         {/* DETAIL PANELS */}
//         {activePanel === 'sales' && (
//           <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
//             {/* LEFT: Contact sales copy */}
//             <div>
//               <h2 className="text-3xl font-semibold text-white">
//                 Contact sales
//               </h2>
//               <p className="mt-3 text-sm text-zinc-300">
//                 Request a demo, learn which plan is right for your team, or get
//                 onboarding help.
//               </p>

//               <ul className="mt-6 space-y-3 text-sm text-zinc-200">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
//                   <span>Request a personalized product demo.</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
//                   <span>
//                     Learn which plan and deployment option is right for your
//                     team.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
//                   <span>Get help with onboarding your organization.</span>
//                 </li>
//               </ul>

//               <div className="mt-8 text-sm text-zinc-400">
//                 Technical issues or product questions?{' '}
//                 <button
//                   type="button"
//                   onClick={() => setActivePanel('support')}
//                   className="inline-flex items-center gap-1 text-zinc-100 underline-offset-2 hover:underline"
//                 >
//                   Contact support
//                   <ArrowRight className="h-3 w-3" />
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT: Sales form */}
//             <div className="rounded-3xl border border-white/10 bg-black/60 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
//               <h3 className="text-sm font-medium text-zinc-100">
//                 Tell us how we can help
//               </h3>

//               <form className="mt-5 space-y-5">
//                 <div className="space-y-1.5">
//                   <label className="text-xs font-medium text-zinc-400">
//                     Full name
//                   </label>
//                   <input
//                     type="text"
//                     className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div className="space-y-1.5">
//                   <label className="text-xs font-medium text-zinc-400">
//                     Work email
//                   </label>
//                   <input
//                     type="email"
//                     className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
//                     placeholder="you@company.com"
//                   />
//                 </div>

//                 <div className="space-y-1.5">
//                   <label className="text-xs font-medium text-zinc-400">
//                     Company size
//                   </label>
//                   <select className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30">
//                     <option>1–20</option>
//                     <option>21–50</option>
//                     <option>51–200</option>
//                     <option>201–1000</option>
//                     <option>1000+ </option>
//                   </select>
//                 </div>

//                 <div className="space-y-1.5">
//                   <label className="text-xs font-medium text-zinc-400">
//                     Tell us about your requirements
//                   </label>
//                   <textarea
//                     rows={4}
//                     className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-sm text-white outline-none ring-0 focus:border-white/30"
//                     placeholder="Share a bit about your use case..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-100"
//                 >
//                   Send message
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}

//         {activePanel === 'support' && (
//           <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] items-start">
//             {/* LEFT: Contact support copy */}
//             <div>
//               <h2 className="text-3xl font-semibold text-white">
//                 Contact support
//               </h2>
//               <p className="mt-3 text-sm text-zinc-300">
//                 We&apos;re here to help. Ask product questions, report problems,
//                 or leave feedback.
//               </p>

//               <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
//                 <CheckCircle2 className="h-3.5 w-3.5" />
//                 All systems operational
//               </div>

//               <div className="mt-8 space-y-4 text-sm text-zinc-200">
//                 <p>
//                   Questions about plans, pricing, or demos?{' '}
//                   <button
//                     type="button"
//                     onClick={() => setActivePanel('sales')}
//                     className="inline-flex items-center gap-1 text-zinc-100 underline-offset-2 hover:underline"
//                   >
//                     Talk to sales
//                     <ArrowRight className="h-3 w-3" />
//                   </button>
//                 </p>

//                 <p>
//                   For documentation on integrations and features, visit our
//                   docs or knowledge base.
//                 </p>
//               </div>
//             </div>

//             {/* RIGHT: Support form (same fields idea) */}
//             <div className="rounded-3xl border border-white/10 bg-black/60 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
//               <h3 className="text-sm font-medium text-zinc-100">
//                 Tell us how we can help
//               </h3>

//               <form className="mt-5 space-y-5">
//                 <div className="space-y-1.5">
//                   <label className="text-xs font-medium text-zinc-400">
//                     Full name
//                   </label>
//                   <input
//                     type="text"
//                     className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div className="space-y-1.5">
//                   <label className="text-xs font-medium text-zinc-400">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div className="space-y-1.5">
//                   <label className="text-xs font-medium text-zinc-400">
//                     Question or feedback
//                   </label>
//                   <textarea
//                     rows={5}
//                     className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-sm text-white outline-none ring-0 focus:border-white/30"
//                     placeholder="Share details about your issue or feedback..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-100"
//                 >
//                   Send message
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }




//
'use client';

import { useState } from 'react';
import { Mail, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [activePanel, setActivePanel] = useState<'sales' | 'support' | null>(
    null
  );

  const panelAnimation = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 24 },
    // keep transition simple so TS is happy
    transition: { duration: 0.35 },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#010101] px-6 py-24 md:px-8 lg:px-16">
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

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading + subheading */}
        <div className="text-center">
          <h1 className="text-[40px] leading-tight font-semibold text-white sm:text-[52px] md:text-[60px]">
            How can we help?
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base text-zinc-300 sm:text-lg">
            Get in touch with our sales and support teams for demos, onboarding
            support, or product questions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Sales card */}
          <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
            <div>
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-lg font-semibold">Sales</h2>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                Speak to our sales team about plans, pricing, enterprise
                contracts, or to request a product demo.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActivePanel('sales')}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform duration-150 hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              Talk to sales
              <span className="text-base">↗</span>
            </button>
          </div>

          {/* Help & support card */}
          <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
            <div>
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-lg font-semibold">Help &amp; support</h2>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                Ask product questions, report problems, or leave feedback for
                our support team.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActivePanel('support')}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform duration-150 hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              Contact support
              <span className="text-base">↗</span>
            </button>
          </div>
        </div>

        {/* DETAIL PANELS WITH ANIMATION */}
        <AnimatePresence mode="wait">
          {activePanel === 'sales' && (
            <motion.div
              key="sales-panel"
              {...panelAnimation}
              className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]"
            >
              {/* LEFT: Contact sales copy */}
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  Contact sales
                </h2>
                <p className="mt-3 text-sm text-zinc-300">
                  Request a demo, learn which plan is right for your team, or
                  get onboarding help.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-zinc-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>Request a personalized product demo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>
                      Learn which plan and deployment option is right for your
                      team.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>Get help with onboarding your organization.</span>
                  </li>
                </ul>

                <div className="mt-8 text-sm text-zinc-400">
                  Technical issues or product questions?{' '}
                  <button
                    type="button"
                    onClick={() => setActivePanel('support')}
                    className="inline-flex items-center gap-1 text-zinc-100 underline-offset-2 hover:underline"
                  >
                    Contact support
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* RIGHT: Sales form */}
              <div className="rounded-3xl border border-white/10 bg-black/60 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
                <h3 className="text-sm font-medium text-zinc-100">
                  Tell us how we can help
                </h3>

                <form className="mt-5 space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Work email
                    </label>
                    <input
                      type="email"
                      className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Company size
                    </label>
                    <select className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30">
                      <option>1–20</option>
                      <option>21–50</option>
                      <option>51–200</option>
                      <option>201–1000</option>
                      <option>1000+</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Tell us about your requirements
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-sm text-white outline-none ring-0 focus:border-white/30"
                      placeholder="Share a bit about your use case..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-100"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activePanel === 'support' && (
            <motion.div
              key="support-panel"
              {...panelAnimation}
              className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)]"
            >
              {/* LEFT: Contact support copy */}
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  Contact support
                </h2>
                <p className="mt-3 text-sm text-zinc-300">
                  We&apos;re here to help. Ask product questions, report
                  problems, or leave feedback.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  All systems operational
                </div>

                <div className="mt-8 space-y-4 text-sm text-zinc-200">
                  <p>
                    Questions about plans, pricing, or demos?{' '}
                    <button
                      type="button"
                      onClick={() => setActivePanel('sales')}
                      className="inline-flex items-center gap-1 text-zinc-100 underline-offset-2 hover:underline"
                    >
                      Talk to sales
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </p>

                  <p>
                    For documentation on integrations and features, visit our
                    docs or knowledge base.
                  </p>
                </div>
              </div>

              {/* RIGHT: Support form */}
              <div className="rounded-3xl border border-white/10 bg-black/60 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
                <h3 className="text-sm font-medium text-zinc-100">
                  Tell us how we can help
                </h3>

                <form className="mt-5 space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Email
                    </label>
                    <input
                      type="email"
                      className="h-10 w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-sm text-white outline-none ring-0 focus:border-white/30"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400">
                      Question or feedback
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-sm text-white outline-none ring-0 focus:border-white/30"
                      placeholder="Share details about your issue or feedback..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-100"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
