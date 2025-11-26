// 'use client';

// import Image from 'next/image';
// import SmartHelmetImage from '../../assets/Smart_H.png';

// export default function SmartHelmetGrid() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#010101] px-6 py-24 md:px-8 lg:px-16">
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

//       <div className="relative z-10 mx-auto flex max-w-6xl justify-center">
//         {/* HELMET + FLOOR GRID WRAPPER */}
//         <div className="relative w-full max-w-[720px] mx-auto">
//           {/* 3D FLOOR GRID UNDER HELMET */}
//           <div
//             className="pointer-events-none absolute inset-x-[-20%] -bottom-44 flex justify-center"
//             style={{ perspective: '1400px' }}
//           >
//             <div
//               style={{
//                 width: '160%',
//                 height: '320px',
//                 /* Make grid lines thicker & more opaque here */
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
//             // className="relative z-10 h-auto w-full"
//             className="relative z-10 h-auto w-full scale-110 " 
//             quality={100}
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';

// import Image from 'next/image';
// import SmartHelmetImage from '../../assets/Smart_H.png';

// export default function SmartHelmetGrid() {
//   return (
//     // ↓ change py-24 to pt-10 pb-24 to cut the empty space on top
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
//           <div className="mb-4 flex items-center gap-3 text-sm text-slate-200">
//             <span className="h-2.5 w-5 rounded-full bg-[#ECE105] shadow-[0_0_12px_rgba(236,225,5,0.9)]" />
//             <span className="text-[15px] text-slate-100">Smart Helmet</span>
//             <span className="text-slate-500 text-lg leading-none">›</span>
//           </div>

          

//           {/* body copy */}
//           <p className="mb-8 max-w-md text-sm text-slate-300/85 md:text-[15px]">
//             Streamline product operations with AI-assisted labeling, root-cause hints, and
//             suggested actions across your backlog — while keeping workers safer on site.
//           </p>

//           {/* bullet list with yellow bars */}
//           <ul className="space-y-4 text-sm text-slate-100/90 md:text-[15px]">
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
//           </ul>

//           {/* watch demo button */}
//           <div className="mt-8">
//             <button
//               type="button"
//               className="group inline-flex items-center gap-2 rounded-full bg-[#ECE105] px-7 py-3 text-sm font-medium text-black shadow-[0_0_45px_rgba(236,225,5,0.65)] transition-transform duration-200 hover:-translate-y-0.5"
//             >
//               Watch demo
//               <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs group-hover:translate-x-0.5 transition-transform">
//                 ↗
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* RIGHT: HELMET + FLOOR GRID */}
//         <div className="relative w-full max-w-[720px] md:w-[60%] md:-mt-4 mx-auto">
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
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';
import SmartHelmetImage from '../../assets/Smart_H.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

export default function SmartHelmetGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010101] px-6 pt-15 pb-24 md:px-8 lg:px-16">
      {/* GLOBAL BACKGROUND GRID */}
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

      {/* CONTENT + HELMET */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center">
        {/* LEFT: TEXT CONTENT */}
        <div className="w-full md:w-[40%]">
          {/* chip */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="mb-4 flex items-center gap-3 text-sm text-slate-200"
          >
            <span className="h-2.5 w-5 rounded-full bg-[#ECE105] shadow-[0_0_12px_rgba(236,225,5,0.9)]" />
            <span className="text-[15px] text-slate-100">Smart Helmet</span>
            <span className="text-lg leading-none text-slate-500">›</span>
          </motion.div>

          {/* body copy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.05 }}
            className="mb-8 max-w-md text-sm text-slate-300/85 md:text-[15px]"
          >
            Streamline product operations with AI-assisted labeling, root-cause hints, and
            suggested actions across your backlog — while keeping workers safer on site.
          </motion.p>

          {/* bullet list with yellow bars */}
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.1 }}
            className="space-y-4 text-sm text-slate-100/90 md:text-[15px]"
          >
            <li className="flex items-center gap-4">
              <span className="h-8 w-[2px] bg-[#ECE105]" />
              <span>Worker safety.</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-8 w-[2px] bg-[#ECE105]" />
              <span>Real-time monitoring.</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-8 w-[2px] bg-[#ECE105]" />
              <span>Instant alerts.</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-8 w-[2px] bg-[#ECE105]" />
              <span>Fast issue tracking.</span>
            </li>
          </motion.ul>

          {/* watch demo button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.15 }}
            className="mt-8"
          >
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ECE105] px-7 py-3 text-sm font-medium text-black shadow-[0_0_45px_rgba(236,225,5,0.65)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Watch demo
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT: HELMET + FLOOR GRID */}
        <motion.div
          initial={{ opacity: 0, x: 24, y: 12, scale: 0.98, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="relative mx-auto w-full max-w-[720px] md:w-[60%] md:-mt-4"
        >
          {/* 3D FLOOR GRID UNDER HELMET */}
          <div
            className="pointer-events-none absolute inset-x-[-20%] -bottom-44 flex justify-center"
            style={{ perspective: '1400px' }}
          >
            <div
              style={{
                width: '160%',
                height: '320px',
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
            className="relative z-10 h-auto w-full scale-110"
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
