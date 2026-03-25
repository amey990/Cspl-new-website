// 'use client';

// import Image from 'next/image';
// import { motion, cubicBezier } from 'framer-motion';
// import SmartHelmetImage from '../../assets/Smart_H.png';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// export default function SmartHelmetGrid() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-6 pt-15 pb-24 md:px-8 lg:px-16">
//       {/* GLOBAL BACKGROUND GRID */}
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

//       {/* CONTENT + HELMET */}
//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center">
//         {/* LEFT: TEXT CONTENT */}
//         <div className="w-full md:w-[40%]">
//           {/* chip */}
//           <motion.div
//             initial={{ opacity: 0, y: 6 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.6, ease: easeOutExpo }}
//             // Original: className="mb-4 flex items-center gap-3 text-sm text-slate-200"
//             className="mb-4 flex items-center gap-3 text-[14px] text-slate-200"
//           >
//             <span className="h-2.5 w-5 rounded-full bg-[#ECE105] shadow-[0_0_12px_rgba(236,225,5,0.9)]" />
//             <span className="text-slate-100">Smart Helmet</span>
//             <span className="text-[18px] leading-none text-slate-500">›</span>
//           </motion.div>

//           {/* body copy */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
//             // Original: className="mb-8 max-w-md text-xl text-slate-300/85 md:text-[18px]"
//             className="mb-8 max-w-md text-[18px] text-slate-300/85 md:text-[20px]"
//           >
//             Streamline product operations with AI-assisted labeling, root-cause hints, and
//             suggested actions across your backlog  while keeping workers safer on site.
//           </motion.p>

//           {/* bullet list with yellow bars */}
//           <motion.ul
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.1 }}
//             // Original: className="space-y-4 text-sm text-slate-100/90 md:text-[17px]"
//             className="space-y-4 text-[16px] text-slate-100/90 md:text-[18px]"
//           >
//             <li className="flex items-center gap-4">
//               <span className="h-8 w-[2px] bg-[#ECE105]" />
//               <span>Worker safety.</span>
//             </li>
//             <li className="flex items-center gap-4">
//               <span className="h-8 w-[2px] bg-[#ECE105]" />
//               <span>Real-time monitoring.</span>
//             </li>
//             <li className="flex items-center gap-4">
//               <span className="h-8 w-[2px] bg-[#ECE105]" />
//               <span>Instant alerts.</span>
//             </li>
//             <li className="flex items-center gap-4">
//               <span className="h-8 w-[2px] bg-[#ECE105]" />
//               <span>Fast issue tracking.</span>
//             </li>
//           </motion.ul>

//           {/* watch demo button */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.15 }}
//             className="mt-8"
//           >
//             <button
//               type="button"
//               className="group inline-flex items-center gap-2 rounded-full bg-[#ECE105] px-7 py-3 text-[14px] font-medium text-black shadow-[0_0_45px_rgba(236,225,5,0.65)] transition-transform duration-200 hover:-translate-y-0.5"
//             >
//               Watch demo
//               <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[12px] transition-transform group-hover:translate-x-0.5">
//                 ↗
//               </span>
//             </button>
//           </motion.div> 
//           */}
//         </div>

//         {/* RIGHT: HELMET + FLOOR GRID */}
//         <motion.div
//           initial={{ opacity: 0, x: 24, y: 12, scale: 0.98, filter: 'blur(8px)' }}
//           whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
//           viewport={{ once: true, amount: 0.45 }}
//           transition={{ duration: 0.8, ease: easeOutExpo }}
//           className="relative mx-auto w-full max-w-[720px] md:w-[60%] md:-mt-4"
//         >
//           {/* 3D FLOOR GRID UNDER HELMET */}
//           <div
//             className="pointer-events-none absolute inset-x-[-20%] -bottom-44 flex justify-center"
//             style={{ perspective: '1400px' }}
//           >
//             <div
//               style={{
//                 width: '160%',
//                 height: '320px',
//                 backgroundImage:
//                   'repeating-linear-gradient(0deg, rgba(148,163,184,0.3) 0px, rgba(148,163,184,0.55) 2px, transparent 2px, transparent 28px), ' +
//                   'repeating-linear-gradient(90deg, rgba(148,163,184,0.3) 0px, rgba(148,163,184,0.55) 2px, transparent 2px, transparent 28px)',
//                 transform: 'rotateX(68deg)',
//                 transformOrigin: 'center top',
//                 WebkitMaskImage:
//                   'linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)',
//                 maskImage:
//                   'linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)',
//               }}
//             />
//           </div>

//           {/* HELMET IMAGE */}
//           <Image
//             src={SmartHelmetImage}
//             alt="Smart Helmet"
//             className="relative z-10 h-auto w-full scale-110"
//             quality={100}
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//p2//
// 'use client';

// import Image from 'next/image';
// import { motion, cubicBezier } from 'framer-motion';
// import SmartHelmetImage from '../../assets/Smart_H.png';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// export default function SmartHelmetGrid() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-4 pt-12 pb-16 sm:px-6 sm:pt-14 sm:pb-20 md:px-8 md:pt-16 md:pb-24 lg:px-16">
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

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:gap-12">

//         {/* LEFT: TEXT CONTENT */}
//         <div className="w-full md:w-[45%]">
//           {/* Chip */}
//           <motion.div
//             initial={{ opacity: 0, y: 6 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.6, ease: easeOutExpo }}
//             className="mb-4 flex items-center gap-2 text-[13px] sm:text-[14px] text-slate-200"
//           >
//             <span className="h-2 w-3.5 sm:h-2.5 sm:w-5 rounded-full bg-[#ECE105] shadow-[0_0_12px_rgba(236,225,5,0.9)]" />
//             <span className="text-slate-100">Smart Helmet</span>
//             <span className="text-base leading-none text-slate-500">›</span>
//           </motion.div>

//           {/* Body copy */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
//             className="mb-6 sm:mb-8 max-w-md text-[15px] sm:text-[17px] md:text-[18px] text-slate-300/85 leading-relaxed"
//           >
//             Streamline product operations with AI-assisted labeling, root-cause hints, and
//             suggested actions across your backlog  while keeping workers safer on site.
//           </motion.p>

//           {/* Bullet list with yellow bars */}
//           <motion.ul
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.1 }}
//             className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] text-slate-100/90"
//           >
//             {['Worker safety.', 'Real-time monitoring.', 'Instant alerts.', 'Fast issue tracking.'].map((item) => (
//               <li key={item} className="flex items-center gap-3 sm:gap-4">
//                 <span className="h-6 sm:h-8 w-[2px] flex-shrink-0 bg-[#ECE105]" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </motion.ul>
//         </div>

//         {/* RIGHT: HELMET + FLOOR GRID */}
//         <motion.div
//           initial={{ opacity: 0, x: 24, y: 12, scale: 0.98, filter: 'blur(8px)' }}
//           whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.8, ease: easeOutExpo }}
//           className="relative mx-auto w-full max-w-[480px] sm:max-w-[560px] md:max-w-none md:w-[55%]"
//         >
//           {/* 3D FLOOR GRID */}
//           <div
//             className="pointer-events-none absolute inset-x-[-10%] -bottom-28 sm:-bottom-36 md:-bottom-44 flex justify-center overflow-hidden"
//             style={{ perspective: '1400px' }}
//           >
//             <div
//               style={{
//                 width: '140%',
//                 height: '260px',
//                 backgroundImage:
//                   'repeating-linear-gradient(0deg, rgba(148,163,184,0.3) 0px, rgba(148,163,184,0.55) 2px, transparent 2px, transparent 28px), ' +
//                   'repeating-linear-gradient(90deg, rgba(148,163,184,0.3) 0px, rgba(148,163,184,0.55) 2px, transparent 2px, transparent 28px)',
//                 transform: 'rotateX(68deg)',
//                 transformOrigin: 'center top',
//                 WebkitMaskImage:
//                   'linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)',
//                 maskImage:
//                   'linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)',
//               }}
//             />
//           </div>

//           {/* HELMET IMAGE */}
//           <Image
//             src={SmartHelmetImage}
//             alt="Smart Helmet"
//             className="relative z-10 h-auto w-full"
//             style={{ transform: 'scale(1.05)' }}
//             quality={100}
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';
import SmartHelmetImage from '../../assets/Smart_H.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function SmartHelmetGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101] px-4 pt-12 pb-16 sm:px-6 sm:pt-14 sm:pb-20 md:px-8 md:pt-16 md:pb-24 lg:px-16">
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

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:gap-12">

        {/* LEFT: TEXT CONTENT */}
        <div className="w-full md:w-[45%]">
          {/* Chip */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="mb-4 flex items-center gap-2 text-[13px] sm:text-[14px] text-slate-200"
          >
            <span className="h-2 w-3.5 sm:h-2.5 sm:w-5 rounded-full bg-[#ECE105] shadow-[0_0_12px_rgba(236,225,5,0.9)]" />
            <span className="text-slate-100">Smart Helmet</span>
            <span className="text-base leading-none text-slate-500">›</span>
          </motion.div>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
            className="mb-6 sm:mb-8 max-w-md text-[15px] sm:text-[17px] md:text-[18px] text-slate-300/85 leading-relaxed"
          >
            Streamline product operations with AI-assisted labeling, root-cause hints, and
            suggested actions across your backlog  while keeping workers safer on site.
          </motion.p>

          {/* Bullet list with yellow bars */}
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.1 }}
            className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16px] text-slate-100/90"
          >
            {['Worker safety.', 'Real-time monitoring.', 'Instant alerts.', 'Fast issue tracking.'].map((item) => (
              <li key={item} className="flex items-center gap-3 sm:gap-4">
                <span className="h-6 sm:h-8 w-[2px] flex-shrink-0 bg-[#ECE105]" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          {/* ── EXPLORE BUTTON ── */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.18 }}
            className="mt-6 sm:mt-8"
          >
            <Link
              href="/Smart_Helmet"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#ECE105]/30 bg-[#ECE105]/8 px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium text-[#ECE105] transition-all duration-200 hover:border-[#ECE105]/60 hover:bg-[#ECE105]/15 hover:-translate-y-0.5 active:scale-95"
            >
              Explore Smart Helmet
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ECE105]/15 text-[11px] transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: HELMET + FLOOR GRID */}
        <motion.div
          initial={{ opacity: 0, x: 24, y: 12, scale: 0.98, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative mx-auto w-full max-w-[480px] sm:max-w-[560px] md:max-w-none md:w-[55%]"
        >
          {/* 3D FLOOR GRID */}
          <div
            className="pointer-events-none absolute inset-x-[-10%] -bottom-28 sm:-bottom-36 md:-bottom-44 flex justify-center overflow-hidden"
            style={{ perspective: '1400px' }}
          >
            <div
              style={{
                width: '140%',
                height: '260px',
                backgroundImage:
                  'repeating-linear-gradient(0deg, rgba(148,163,184,0.3) 0px, rgba(148,163,184,0.55) 2px, transparent 2px, transparent 28px), ' +
                  'repeating-linear-gradient(90deg, rgba(148,163,184,0.3) 0px, rgba(148,163,184,0.55) 2px, transparent 2px, transparent 28px)',
                transform: 'rotateX(68deg)',
                transformOrigin: 'center top',
                WebkitMaskImage:
                  'linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)',
                maskImage:
                  'linear-gradient(to top, transparent 0%, black 20%, black 85%, transparent 100%)',
              }}
            />
          </div>

          {/* HELMET IMAGE */}
          <Image
            src={SmartHelmetImage}
            alt="Smart Helmet"
            className="relative z-10 h-auto w-full"
            style={{ transform: 'scale(1.05)' }}
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}