// 'use client';

// import { motion, cubicBezier } from 'framer-motion';
// import dynamic from 'next/dynamic';
// import AiCoreAnimation from '../../assets/lottie/Ai_core.json';

// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// export default function CpalChatbot() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-6 pt-5 pb-24 md:px-8 lg:px-16">
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
//         {/* LEFT: LOTTIE ANIMATION */}
//         <motion.div
//           initial={{ opacity: 0, x: -20, y: 10, scale: 0.96 }}
//           whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//           viewport={{ once: true, amount: 0.45 }}
//           transition={{ duration: 0.8, ease: easeOutExpo }}
//           className="relative flex w-full items-center justify-center"
//         >
//           {/* control animation size with max-w + optional scale */}
//           <Lottie
//             animationData={AiCoreAnimation}
//             loop
//             autoplay
//             className="h-auto w-full max-w-[620px]" // <-- change this to resize
//           />
//         </motion.div>

//         {/* RIGHT: TEXT */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.45 }}
//           transition={{ duration: 0.7, ease: easeOutExpo }}
//           className="w-full space-y-6"
//         >
//           {/* breadcrumb chip */}
//           {/* Original: <div className="mb-2 flex items-center gap-3 text-sm text-slate-200"> */}
//           <div className="mb-2 flex items-center gap-3 text-[14px] text-slate-200">
//             <span className="h-2.5 w-5 rounded-full bg-[#19E28F] shadow-[0_0_12px_rgba(25,226,143,0.85)]" />
//             <span className="text-[17px] text-slate-100">C-pal Chatbot</span>
//             <span className="text-[18px] leading-none text-slate-500">›</span>
//           </div>

//           {/* section label */}
//           {/* Original: <p className="inline-flex items-center rounded-full border border-[#19E28F]/40 bg-[#19E28F]/8 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#BBF7D0]"> */}
//           <p className="inline-flex items-center rounded-full border border-[#19E28F]/40 bg-[#19E28F]/8 px-4 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[#BBF7D0]">
//             CPAL · AI ASSISTANT
//           </p>

//           {/* heading */}
//           {/* Original: <h2 className="text-4xl font-semibold text-white md:text-5xl"> */}
//           <h2 className="text-[32px] font-semibold text-white md:text-[48px] leading-tight">
//             Put an always-on AI assistant at the heart of your operations.
//           </h2>

//           {/* subheading */}
//           {/* Original: <p className="max-w-xl text-lg text-slate-300/85 md:text-lg"> */}
//           <p className="max-w-xl text-[18px] text-slate-300/85 md:text-[20px]">
//             C-pal connects to your tools and channels to answer questions, triage issues
//             and keep every stakeholder in sync  without adding more tabs to your day.
//           </p>

//           {/* bullets */}
//           {/* Original: <div className="mt-4 grid gap-3 text-sm text-slate-100/90 md:grid-cols-2 md:gap-4"> */}
//           <div className="mt-4 grid gap-3 text-[16px] text-slate-100/90 md:grid-cols-2 md:gap-4 md:text-[18px]">
//             <div className="flex items-start gap-3">
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#19E28F]" />
//               <span>Natural language queries over tickets, tasks and documentation.</span>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#19E28F]" />
//               <span>Smart summaries for stand-ups, incident reviews and hand-offs.</span>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#19E28F]" />
//               <span>Works where your teams already are  Slack, email and more.</span>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#19E28F]" />
//               <span>Guardrails and permissions aligned with your existing systems.</span>
//             </div>
//           </div>

//           {/* button */}
//           {/* <div className="mt-6">
//             <button
//               type="button"
//               className="group inline-flex items-center gap-2 rounded-full bg-[#19E28F] px-7 py-3 text-[14px] font-medium text-black shadow-[0_0_40px_rgba(25,226,143,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
//             >
//               Watch demo
//               <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[12px] transition-transform group-hover:translate-x-0.5">
//                 ↗
//               </span>
//             </button>
//           </div> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//p2//
// 'use client';

// import { motion, cubicBezier } from 'framer-motion';
// import dynamic from 'next/dynamic';
// import AiCoreAnimation from '../../assets/lottie/Ai_core.json';

// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// export default function CpalChatbot() {
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

//         {/* LEFT: LOTTIE ANIMATION */}
//         <motion.div
//           initial={{ opacity: 0, x: -20, y: 10, scale: 0.96 }}
//           whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.8, ease: easeOutExpo }}
//           className="relative flex w-full items-center justify-center order-2 md:order-1"
//         >
//           <Lottie
//             animationData={AiCoreAnimation}
//             loop
//             autoplay
//             className="h-auto w-full max-w-[320px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[620px]"
//           />
//         </motion.div>

//         {/* RIGHT: TEXT */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.7, ease: easeOutExpo }}
//           className="w-full space-y-4 sm:space-y-5 order-1 md:order-2"
//         >
//           {/* Breadcrumb chip */}
//           <div className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[14px] text-slate-200">
//             <span className="h-2 w-3.5 sm:h-2.5 sm:w-5 rounded-full bg-[#19E28F] shadow-[0_0_12px_rgba(25,226,143,0.85)]" />
//             <span className="text-[15px] sm:text-[17px] text-slate-100">C-pal Chatbot</span>
//             <span className="text-base leading-none text-slate-500">›</span>
//           </div>

//           {/* Label */}
//           <p className="inline-flex items-center rounded-full border border-[#19E28F]/40 bg-[#19E28F]/5 px-3 sm:px-4 py-1 text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.18em] text-[#BBF7D0]">
//             CPAL · AI ASSISTANT
//           </p>

//           {/* Heading */}
//           <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-semibold text-white leading-tight">
//             Put an always-on AI assistant at the heart of your operations.
//           </h2>

//           {/* Subheading */}
//           <p className="max-w-xl text-[15px] sm:text-[17px] md:text-[18px] text-slate-300/85 leading-relaxed">
//             C-pal connects to your tools and channels to answer questions, triage issues
//             and keep every stakeholder in sync  without adding more tabs to your day.
//           </p>

//           {/* Bullets */}
//           <div className="grid gap-2 sm:gap-3 text-[13px] sm:text-[15px] md:text-[16px] text-slate-100/90 grid-cols-1 sm:grid-cols-2 md:gap-4">
//             {[
//               'Natural language queries over tickets, tasks and documentation.',
//               'Smart summaries for stand-ups, incident reviews and hand-offs.',
//               'Works where your teams already are  Slack, email and more.',
//               'Guardrails and permissions aligned with your existing systems.',
//             ].map((point) => (
//               <div key={point} className="flex items-start gap-2 sm:gap-3">
//                 <span className="mt-[5px] sm:mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#19E28F]" />
//                 <span>{point}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion, cubicBezier } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import AiCoreAnimation from '../../assets/lottie/Ai_core.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function CpalChatbot() {
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

        {/* LEFT: LOTTIE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 10, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative flex w-full items-center justify-center order-2 md:order-1"
        >
          <Lottie
            animationData={AiCoreAnimation}
            loop
            autoplay
            className="h-auto w-full max-w-[320px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[620px]"
          />
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="w-full space-y-4 sm:space-y-5 order-1 md:order-2"
        >
          {/* Breadcrumb chip */}
          <div className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[14px] text-slate-200">
            <span className="h-2 w-3.5 sm:h-2.5 sm:w-5 rounded-full bg-[#19E28F] shadow-[0_0_12px_rgba(25,226,143,0.85)]" />
            <span className="text-[15px] sm:text-[17px] text-slate-100">C-pal Chatbot</span>
            <span className="text-base leading-none text-slate-500">›</span>
          </div>

          {/* Label */}
          <p className="inline-flex items-center rounded-full border border-[#19E28F]/40 bg-[#19E28F]/5 px-3 sm:px-4 py-1 text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.18em] text-[#BBF7D0]">
            CPAL · AI ASSISTANT
          </p>

          {/* Heading */}
          <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-semibold text-white leading-tight">
            Put an always-on AI assistant at the heart of your operations.
          </h2>

          {/* Subheading */}
          <p className="max-w-xl text-[15px] sm:text-[17px] md:text-[18px] text-slate-300/85 leading-relaxed">
            C-pal connects to your tools and channels to answer questions, triage issues
            and keep every stakeholder in sync without adding more tabs to your day.
          </p>

          {/* Bullets */}
          <div className="grid gap-2 sm:gap-3 text-[13px] sm:text-[15px] md:text-[16px] text-slate-100/90 grid-cols-1 sm:grid-cols-2 md:gap-4">
            {[
              'Natural language queries over tickets, tasks and documentation.',
              'Smart summaries for stand-ups, incident reviews and hand-offs.',
              'Works where your teams already are Slack, email and more.',
              'Guardrails and permissions aligned with your existing systems.',
            ].map((point) => (
              <div key={point} className="flex items-start gap-2 sm:gap-3">
                <span className="mt-[5px] sm:mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#19E28F]" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* ── EXPLORE BUTTON ── */}
          <div className="pt-1">
            <Link
              href="/CPAL"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#19E28F]/30 bg-[#19E28F]/8 px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium text-[#BBF7D0] transition-all duration-200 hover:border-[#19E28F]/60 hover:bg-[#19E28F]/18 hover:-translate-y-0.5 active:scale-95"
            >
              Explore C-pal
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#19E28F]/20 text-[11px] transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}