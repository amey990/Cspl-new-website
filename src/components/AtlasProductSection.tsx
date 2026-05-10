// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, cubicBezier } from 'framer-motion';

// import AtlasImage from '../../assets/Atlas.png';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// export default function AtlasGrid() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-4 pt-12 pb-16 sm:px-6 md:px-8 lg:px-16 md:pt-16 md:pb-24">
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

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-0">

//         {/* Chip */}
//         <motion.div
//           initial={{ opacity: 0, y: 6 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.6 }}
//           transition={{ duration: 0.6, ease: easeOutExpo }}
//           className="mb-4 flex items-center gap-2 self-start text-[13px] sm:text-[14px] text-slate-200"
//         >
//           <span className="h-2 w-3.5 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(190,242,100,0.9)]" />
//           <span className="text-slate-100">Project management</span>
//           <span className="text-base leading-none text-slate-500">›</span>
//         </motion.div>

//         {/* Hero image - Commented Out */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(8px)' }}
//           whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.8, ease: easeOutExpo }}
//           className="relative mx-auto w-full max-w-5xl"
//         >
//           <Image
//             src={AtlasImage}
//             alt="Atlas project management dashboard"
//             className="w-full rounded-[10px] sm:rounded-[12px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.9)]"
//             priority
//           />
//         </motion.div>
//         */}

//         {/* Giant "Atlas" text - Commented Out */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.6 }}
//           transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
//           className="pointer-events-none relative z-10 -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-20 text-center"
//         >
//           <h2
//             className="text-[64px] sm:text-[100px] md:text-[130px] lg:text-[150px] leading-none font-semibold tracking-tight text-transparent"
//             style={{
//               backgroundImage:
//                 'linear-gradient(to bottom, #f9fafb 0%, #d1d5db 35%, #9ca3af 55%, #020617 100%)',
//               WebkitBackgroundClip: 'text',
//               backgroundClip: 'text',
//             }}
//           >
//             Atlas
//           </h2>
//         </motion.div>
//         */}

//         {/* ── BOTTOM: IMAGE + TEXT ── */}
//         <div className="mt-10 sm:mt-14 md:mt-20 grid items-center gap-8 sm:gap-12 md:grid-cols-2">
//           {/* LEFT: Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.35 }}
//             transition={{ duration: 0.7, ease: easeOutExpo }}
//             className="relative flex items-center justify-center order-2 md:order-1"
//           >
//             <div className="relative w-full max-w-xl">
//               <div className="relative mx-auto w-full rounded-[10px] sm:rounded-[16px] border border-white/10 bg-gradient-to-b from-white/8 via-white/3 to-black/60 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
//                 <Image
//                   src={AtlasImage}
//                   alt="Atlas project grid view"
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT: Text + CTA */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.35 }}
//             transition={{ duration: 0.7, ease: easeOutExpo }}
//             className="space-y-4 sm:space-y-6 text-left order-1 md:order-2 md:pl-4"
//           >
//             <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-3 sm:px-4 py-1 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.18em] text-lime-300">
//               Atlas · Project Management
//             </p>

//             <h3 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-white leading-tight">
//               Keep every media project on the same timeline.
//             </h3>

//             <p className="max-w-xl text-[15px] sm:text-[17px] md:text-[18px] text-slate-300/80 leading-relaxed">
//               Atlas gives broadcast and streaming teams a single live grid to plan, assign and
//               track every activity across shows, channels and locations.
//             </p>

//             <div className="mt-2 grid gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] text-slate-100/90 grid-cols-1 sm:grid-cols-2 md:gap-4">
//               <div className="flex items-start gap-2">
//                 <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-400" />
//                 <span>Grid-level visibility across all productions and venues.</span>
//               </div>
//               <div className="flex items-start gap-2">
//                 <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-400" />
//                 <span>Real-time status for every role, from studio ops to field teams.</span>
//               </div>
//               <div className="flex items-start gap-2">
//                 <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-400" />
//                 <span>Templates for recurring shows, events and channel grids.</span>
//               </div>
//               <div className="flex items-start gap-2">
//                 <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-400" />
//                 <span>Built for high-volume media operations that can&apos;t miss a go-live.</span>
//               </div>
//             </div>

//             {/* ── EXPLORE BUTTON ── */}
//             <div className="pt-1">
//               <Link
//                 href="/Atlas"
//                 className="group inline-flex items-center gap-2.5 rounded-full border border-lime-400/30 bg-lime-400/8 px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium text-lime-300 transition-all duration-200 hover:border-lime-400/60 hover:bg-lime-400/15 hover:-translate-y-0.5 active:scale-95"
//               >
//                 Explore Atlas
//                 <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/15 text-[11px] transition-transform duration-200 group-hover:translate-x-0.5">
//                   →
//                 </span>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


//p2//
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';

import AtlasImage from '../../assets/Atlas.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function AtlasGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101] px-4 pt-12 pb-16 sm:px-6 md:px-8 lg:px-16 md:pt-16 md:pb-24">
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

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-0">

        {/* ── BOTTOM: IMAGE + TEXT ── */}
        <div className="mt-10 sm:mt-14 md:mt-20 grid items-center gap-8 sm:gap-12 md:grid-cols-2">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="relative flex items-center justify-center order-2 md:order-1"
          >
            <div className="relative w-full max-w-xl">
              <div className="relative mx-auto w-full rounded-[10px] sm:rounded-[16px] border border-white/10 bg-gradient-to-b from-white/8 via-white/3 to-black/60 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
                <Image
                  src={AtlasImage}
                  alt="Atlas project grid view"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="space-y-4 sm:space-y-6 text-left order-1 md:order-2 md:pl-4"
          >
            {/* Category chip — sits above the pill, matches CNMS layout */}
            <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-slate-200">
              <span className="h-2 w-3.5 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(190,242,100,0.9)]" />
              <span className="text-slate-100">Project management</span>
              <span className="text-base leading-none text-slate-500">›</span>
            </div>

            <p className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/5 px-3 sm:px-4 py-1 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.18em] text-lime-300">
              Atlas · Project Management
            </p>

            <h3 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-white leading-tight">
              Keep every media project on the same timeline.
            </h3>

            <p className="max-w-xl text-[15px] sm:text-[17px] md:text-[18px] text-slate-300/80 leading-relaxed">
              Atlas gives broadcast and streaming teams a single live grid to plan, assign and
              track every activity across shows, channels and locations.
            </p>

            <div className="mt-2 grid gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] text-slate-100/90 grid-cols-1 sm:grid-cols-2 md:gap-4">
              <div className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-400" />
                <span>Grid-level visibility across all productions and venues.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-400" />
                <span>Real-time status for every role, from studio ops to field teams.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-400" />
                <span>Templates for recurring shows, events and channel grids.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-400" />
                <span>Built for high-volume media operations that can&apos;t miss a go-live.</span>
              </div>
            </div>

            {/* ── EXPLORE BUTTON ── */}
            <div className="pt-1">
              <Link
                href="/Atlas"
                className="group inline-flex items-center gap-2.5 rounded-full border border-lime-400/30 bg-lime-400/8 px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium text-lime-300 transition-all duration-200 hover:border-lime-400/60 hover:bg-lime-400/15 hover:-translate-y-0.5 active:scale-95"
              >
                Explore Atlas
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/15 text-[11px] transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}