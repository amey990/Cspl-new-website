// 'use client';

// import Image from 'next/image';
// import { motion, cubicBezier } from 'framer-motion';

// import OpsAdvisorImage from '../../assets/Ops_advisor.jpg';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// export default function OperationsAdvisor() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-6 pt-10 pb-24 md:px-8 lg:px-16">
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

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 md:grid md:grid-cols-2 md:items-center">
//         {/* LEFT: TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.45 }}
//           transition={{ duration: 0.7, ease: easeOutExpo }}
//           className="w-full space-y-6"
//         >
//           {/* breadcrumb chip */}
//           {/* Original: <div className="mb-2 flex items-center gap-3 text-sm text-slate-200"> */}
//           <div className="mb-2 flex items-center gap-3 text-[14px] text-slate-200">
//             <span className="h-2.5 w-5 rounded-full bg-[#FF5906] shadow-[0_0_12px_rgba(255,89,6,0.9)]" />
//             {/* Original: <span className="text-[15px] text-slate-100">Operations Advisor</span> */}
//             <span className="text-[17px] text-slate-100">Operations Advisor</span>
//             {/* Original: <span className="text-lg leading-none text-slate-500">›</span> */}
//             <span className="text-[18px] leading-none text-slate-500">›</span>
//           </div>

//           {/* label chip */}
//           {/* Original: <p className="inline-flex items-center rounded-full border border-[#FF5906]/40 bg-[#FF5906]/8 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#FD935E]"> */}
//           <p className="inline-flex items-center rounded-full border border-[#FF5906]/40 bg-[#FF5906]/8 px-4 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#FD935E]">
//             OPERATIONS ADVISOR · AGENTIC SOLUTION
//           </p>

//           {/* heading */}
//           {/* Original: <h2 className="text-5xl font-semibold text-white md:text-7xl"> */}
//           <h2 className="text-[32px] font-semibold text-white md:text-[48px] leading-tight">
//             Give every operator an AI partner for real-time decisions.
//           </h2>

//           {/* subheading */}
//           {/* Original: <p className="max-w-xl text-lg text-slate-300/85 md:text-base"> */}
//           <p className="max-w-xl text-[18px] text-slate-300/85 md:text-[20px]">
//             Ops Advisor watches your live operations, surfaces the right signals, and recommends
//             next best actions  so teams can respond faster and with more confidence.
//           </p>

//           {/* bullets */}
//           {/* Original: <div className="mt-2 grid gap-3 text-base text-slate-100/90 md:grid-cols-2 md:gap-4"> */}
//           <div className="mt-2 grid gap-3 text-[16px] text-slate-100/90 md:grid-cols-2 md:gap-4 md:text-[18px]">
//             <div className="flex items-start gap-3">
//               {/* Original: <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5906]" /> */}
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF5906]" />
//               <span>Agentic workflows that triage, route and recommend actions automatically.</span>
//             </div>
//             <div className="flex items-start gap-3">
//               {/* Original: <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5906]" /> */}
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF5906]" />
//               <span>Live health scores across sites, assets and customer-facing services.</span>
//             </div>
//             <div className="flex items-start gap-3">
//               {/* Original: <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5906]" /> */}
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF5906]" />
//               <span>Root-cause hints pulled from tickets, logs and historical incidents.</span>
//             </div>
//             <div className="flex items-start gap-3">
//               {/* Original: <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF5906]" /> */}
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF5906]" />
//               <span>Playbooks that adapt as conditions change  not static runbooks.</span>
//             </div>
//           </div>

//           {/* button */}
//          {/* <div className="mt-6">
//             <button
//               type="button"
//               className="group inline-flex items-center gap-2 rounded-full bg-[#FF5906] px-7 py-3 text-[14px] font-medium text-black shadow-[0_0_40px_rgba(255,89,6,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
//             >
//               Watch demo
//               <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[12px] transition-transform group-hover:translate-x-0.5">
//                 ↗
//               </span>
//             </button>
//           </div> */}
//         </motion.div>

//         {/* RIGHT: IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 20, y: 10, scale: 0.98 }}
//           whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//           viewport={{ once: true, amount: 0.45 }}
//           transition={{ duration: 0.8, ease: easeOutExpo }}
//           className="relative flex w-full items-center justify-center"
//         >
//           <div className="relative w-full max-w-[520px] rounded-[18px] border border-white/10 bg-gradient-to-b from-white/5 via-white/3 to-black/70 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
//             <div className="overflow-hidden rounded-[16px]">
//               <Image
//                 src={OpsAdvisorImage}
//                 alt="Operations Advisor dashboard"
//                 className="h-auto w-full"
//                 quality={100}
//                 priority={false}
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//p2//
// 'use client';

// import Image from 'next/image';
// import { motion, cubicBezier } from 'framer-motion';

// import OpsAdvisorImage from '../../assets/Ops_advisor.jpg';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// export default function OperationsAdvisor() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 md:px-8 md:pt-14 md:pb-24 lg:px-16">
//       {/* GRID BACKGROUND */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
//           `,
//           backgroundSize: '60px 60px',
//           backgroundPosition: 'center',
//         }}
//       />

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 md:grid md:grid-cols-2 md:items-center md:gap-12">

//         {/* LEFT: TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.7, ease: easeOutExpo }}
//           className="w-full space-y-4 sm:space-y-5 order-1"
//         >
//           {/* Breadcrumb chip */}
//           <div className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[14px] text-slate-200">
//             <span className="h-2 w-3.5 sm:h-2.5 sm:w-5 rounded-full bg-[#FF5906] shadow-[0_0_12px_rgba(255,89,6,0.9)]" />
//             <span className="text-[15px] sm:text-[17px] text-slate-100">Operations Advisor</span>
//             <span className="text-base leading-none text-slate-500">›</span>
//           </div>

//           {/* Label chip */}
//           <p className="inline-flex items-center rounded-full border border-[#FF5906]/40 bg-[#FF5906]/5 px-3 sm:px-4 py-1 text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.18em] text-[#FD935E]">
//             OPERATIONS ADVISOR · AGENTIC SOLUTION
//           </p>

//           {/* Heading */}
//           <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-semibold text-white leading-tight">
//             Give every operator an AI partner for real-time decisions.
//           </h2>

//           {/* Subheading */}
//           <p className="max-w-xl text-[15px] sm:text-[17px] md:text-[18px] text-slate-300/85 leading-relaxed">
//             Ops Advisor watches your live operations, surfaces the right signals, and recommends
//             next best actions  so teams can respond faster and with more confidence.
//           </p>

//           {/* Bullets */}
//           <div className="grid gap-2 sm:gap-3 text-[13px] sm:text-[15px] md:text-[16px] text-slate-100/90 grid-cols-1 sm:grid-cols-2 md:gap-4">
//             {[
//               'Agentic workflows that triage, route and recommend actions automatically.',
//               'Live health scores across sites, assets and customer-facing services.',
//               'Root-cause hints pulled from tickets, logs and historical incidents.',
//               'Playbooks that adapt as conditions change  not static runbooks.',
//             ].map((point) => (
//               <div key={point} className="flex items-start gap-2 sm:gap-3">
//                 <span className="mt-[5px] sm:mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF5906]" />
//                 <span>{point}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT: IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 20, y: 10, scale: 0.98 }}
//           whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.8, ease: easeOutExpo }}
//           className="relative flex w-full items-center justify-center order-2"
//         >
//           <div className="relative w-full max-w-[480px] sm:max-w-[520px] md:max-w-none rounded-[14px] sm:rounded-[18px] border border-white/10 bg-gradient-to-b from-white/5 via-white/3 to-black/70 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
//             <Image
//               src={OpsAdvisorImage}
//               alt="Operations Advisor dashboard"
//               className="h-auto w-full"
//               quality={100}
//               priority={false}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';

import OpsAdvisorImage from '../../assets/ops-adv.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function OperationsAdvisor() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101] px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 md:px-8 md:pt-14 md:pb-24 lg:px-16">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 md:grid md:grid-cols-2 md:items-center md:gap-12">

        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="w-full space-y-4 sm:space-y-5 order-1"
        >
          {/* Breadcrumb chip */}
          <div className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[14px] text-slate-200">
            <span className="h-2 w-3.5 sm:h-2.5 sm:w-5 rounded-full bg-[#FF5906] shadow-[0_0_12px_rgba(255,89,6,0.9)]" />
            <span className="text-[15px] sm:text-[17px] text-slate-100">Operations Advisor</span>
            <span className="text-base leading-none text-slate-500">›</span>
          </div>

          {/* Label chip */}
          <p className="inline-flex items-center rounded-full border border-[#FF5906]/40 bg-[#FF5906]/5 px-3 sm:px-4 py-1 text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.18em] text-[#FD935E]">
            OPERATIONS ADVISOR · AGENTIC SOLUTION
          </p>

          {/* Heading */}
          <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-semibold text-white leading-tight">
            Give every operator an AI partner for real-time decisions.
          </h2>

          {/* Subheading */}
          <p className="max-w-xl text-[15px] sm:text-[17px] md:text-[18px] text-slate-300/85 leading-relaxed">
            Ops Advisor watches your live operations, surfaces the right signals, and recommends
            next best actions  so teams can respond faster and with more confidence.
          </p>

          {/* Bullets */}
          <div className="grid gap-2 sm:gap-3 text-[13px] sm:text-[15px] md:text-[16px] text-slate-100/90 grid-cols-1 sm:grid-cols-2 md:gap-4">
            {[
              'Agentic workflows that triage, route and recommend actions automatically.',
              'Live health scores across sites, assets and customer-facing services.',
              'Root-cause hints pulled from tickets, logs and historical incidents.',
              'Playbooks that adapt as conditions change  not static runbooks.',
            ].map((point) => (
              <div key={point} className="flex items-start gap-2 sm:gap-3">
                <span className="mt-[5px] sm:mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF5906]" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* ── EXPLORE BUTTON ── */}
          <div className="pt-1">
            <Link
              href="/Ops_advisor"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#FF5906]/30 bg-[#FF5906]/8 px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium text-[#FD935E] transition-all duration-200 hover:border-[#FF5906]/60 hover:bg-[#FF5906]/18 hover:-translate-y-0.5 active:scale-95"
            >
              Explore Operations Advisor
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF5906]/20 text-[11px] transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 10, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative flex w-full items-center justify-center order-2"
        >
          <div className="relative w-full max-w-[480px] sm:max-w-[520px] md:max-w-none rounded-[14px] sm:rounded-[18px] border border-white/10 bg-gradient-to-b from-white/5 via-white/3 to-black/70 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
            <Image
              src={OpsAdvisorImage}
              alt="Operations Advisor dashboard"
              className="h-auto w-full"
              quality={100}
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}