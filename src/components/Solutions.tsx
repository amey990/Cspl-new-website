// //p3//
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// // import { Plus } from 'lucide-react';
// import { ChevronRight } from 'lucide-react';
// import { motion } from 'framer-motion';
// import GradientText from '@/components/GradientText';

// import NetworkSecurityImg from '../../assets/Network Security.png';
// import CloudSolutionsImg from '../../assets/Cloud_new.png';
// import SatelliteImg from '../../assets/Satellite.png';

// const CARD_BG = '#141516';
// const CARD_BG_HOVER = '#191A1B';
// const CARD_BORDER = '#232427';
// const CARD_BORDER_HOVER = '#2A2B2E';

// export default function Solutions() {
//   // Prevent SSR/CSR mismatch while still allowing animations on the client.
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   const solutions = [
//     {
//       id: 1,
//       title: 'Network Security',
//       image: (
//         <div
//           className="relative h-full w-full flex items-center justify-center"
//           style={{ backgroundColor: CARD_BG }}
//         >
//           <div className="relative h-[150%] w-[152%]">
//             <Image
//               src={NetworkSecurityImg}
//               alt="Network Security"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       title: 'Cloud Solutions',
//       image: (
//         <div
//           className="relative h-full w-full flex items-center justify-center"
//           style={{ backgroundColor: CARD_BG }}
//         >
//           <div className="relative h-[100%] w-[132%]">
//             <Image
//               src={CloudSolutionsImg}
//               alt="Cloud Solutions"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       title: 'Satellite Communication',
//       image: (
//         <div
//           className="relative h-full w-full flex items-center justify-center"
//           style={{ backgroundColor: CARD_BG }}
//         >
//           <div className="relative h-[150%] w-[152%]">
//             <Image
//               src={SatelliteImg}
//               alt="Satellite Communication"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <section className="relative bg-[#08090A] px-6 pt-10 pb-16 md:px-8 md:pt-12 lg:px-16 lg:pt-16 lg:pb-24 xl:px-24">
//       <div className="mx-auto max-w-[1280px]">
//         {/* Header with animation */}
//         <motion.div
//           className="mb-4 flex flex-col items-center justify-center text-center lg:mb-8"
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.6 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* Top streaks / 3-line element */}
//           <div className="mb-5 flex justify-center">
//             <svg width="108" height="46" viewBox="0 0 108 46" fill="none" aria-hidden="true">
//               <defs>
//                 <linearGradient id="hx-blue" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0" stopColor="#B9F1FF" />
//                   <stop offset="1" stopColor="#6FD7FF" stopOpacity="0.15" />
//                 </linearGradient>
//                 <linearGradient id="hx-white" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0" stopColor="#FFFFFF" />
//                   <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.18" />
//                 </linearGradient>
//                 <linearGradient id="hx-grey" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0" stopColor="#C9CED6" />
//                   <stop offset="1" stopColor="#C9CED6" stopOpacity="0.12" />
//                 </linearGradient>
//                 <radialGradient
//                   id="hx-dot"
//                   cx="0"
//                   cy="0"
//                   r="1"
//                   gradientUnits="userSpaceOnUse"
//                   gradientTransform="matrix(0 10 -10 0 22 20)"
//                 >
//                   <stop stopColor="#BFF5FF" />
//                   <stop offset="1" stopColor="#64D3FF" stopOpacity="0" />
//                 </radialGradient>
//               </defs>

//               <path
//                 d="M10 37 C20 22, 24 12, 28 5"
//                 stroke="url(#hx-blue)"
//                 strokeWidth="2.7"
//                 strokeLinecap="round"
//               />

//               <path
//                 className="hx-pulse"
//                 d="M54 8 L54 39"
//                 stroke="url(#hx-white)"
//                 strokeWidth="1.7"
//                 strokeLinecap="round"
//                 opacity="0.95"
//               />

//               <path
//                 d="M90 37 C79 22, 75 12, 71 5"
//                 stroke="url(#hx-grey)"
//                 strokeWidth="2.3"
//                 strokeLinecap="round"
//                 opacity="0.85"
//               />

//               <g className="hx-orb">
//                 <circle cx="22" cy="22" r="7" fill="url(#hx-dot)" />
//                 <circle cx="22" cy="22" r="2.6" fill="#D0FAFF" />
//               </g>

//               <style>{`
//                 .hx-pulse {
//                   filter: drop-shadow(0 0 6px rgba(255,255,255,.35));
//                   animation: hxPulse 2.2s ease-in-out infinite;
//                 }
//                 @keyframes hxPulse {
//                   0%,100% { opacity: .9 }
//                   50% { opacity: 1 }
//                 }
//                 .hx-orb {
//                   animation: hxOrb 2.8s cubic-bezier(.22,1,.36,1) infinite;
//                 }
//                 @keyframes hxOrb {
//                   0%   { transform: translate(-4px, 10px) }
//                   50%  { transform: translate( 0px,-10px) }
//                   100% { transform: translate(-4px, 10px) }
//                 }
//               `}</style>
//             </svg>
//           </div>

//           {/* Gradient headline */}
//           <GradientText className="mb-8">
//             <h2
//               className="pb-2 text-[56px] leading-[1.15] font-semibold tracking-[-0.02em]"
//               style={{
//                 fontFamily:
//                   '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//               }}
//             >
//               Built to solve, designed to scale
//             </h2>
//           </GradientText>

//           <p
//             className="max-w-2xl"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//               fontSize: '15px',
//               lineHeight: '24px',
//               fontWeight: 400,
//               color: 'rgb(138, 143, 152)',
//             }}
//           >
//             From strategy to deployment, our services are built to deliver impact at every stage. We
//             craft solutions with speed, precision, and purpose — so you can focus on growth.{` `}
//             <Link
//               href="#"
//               className="inline-flex items-center gap-1 text-white hover:text-zinc-300"
//               style={{ fontWeight: 500 }}
//             >
//               Explore more
//               <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </p>
//         </motion.div>

//         {/* Cards with staggered entrance animation */}
//         <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
//           {solutions.map((solution, idx) => (
//             <motion.div
//               key={solution.id}
//               className="card group relative overflow-hidden rounded-[24px]"
//               initial={{ opacity: 0, y: 36, rotateX: -6, scale: 0.98, filter: 'blur(8px)' }}
//               whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
//               viewport={{ once: true, amount: 0.35 }}
//               transition={{
//                 duration: 0.7,
//                 delay: idx * 0.12,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               style={{
//                 backgroundColor: CARD_BG,
//                 border: `1px solid ${CARD_BORDER}`,
//               }}
//             >
//               {/* Illustration area */}
//               <div className="aspect-[16/11]">{solution.image}</div>

//               {/* Content */}
//               <div className="flex items-start justify-between gap-3 p-6">
//                 <h3
//                   className="max-w-[82%] leading-[1.3] text-white"
//                   style={{
//                     fontFamily:
//                       '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//                     fontSize: '20px',
//                     fontWeight: 500,
//                   }}
//                 >
//                   {solution.title}
//                 </h3>
//                 <button
//                   type="button"
//                   aria-label="Open"
//                   className="mt-0.5 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border text-white/40 transition-all duration-300 hover:text-white/70"
//                   style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
//                 >
//                   {/* <Plus className="h-4 w-4" strokeWidth={1.5} /> */}
//                   <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
//                 </button>

                

//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Card hover & shimmer keyframes */}
//       <style jsx>{`
//         .card {
//           transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             background-color 0.25s ease, border-color 0.25s ease, filter 0.35s ease;
//         }
//         .card:hover {
//           background-color: ${CARD_BG_HOVER} !important;
//           border-color: ${CARD_BORDER_HOVER} !important;
//           transform: translateY(-4px);
//         }

//         @keyframes shimmer {
//           from {
//             filter: brightness(1);
//             transform: translateX(0);
//           }
//           to {
//             filter: brightness(1.1);
//             transform: translateX(2px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


//p3//
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Plus } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '@/components/GradientText';

import NetworkSecurityImg from '../../assets/Network Security.png';
import CloudSolutionsImg from '../../assets/Cloud_new.png';
import SatelliteImg from '../../assets/Satellite.png';

const CARD_BG = '#141516';
const CARD_BG_HOVER = '#191A1B';
const CARD_BORDER = '#232427';
const CARD_BORDER_HOVER = '#2A2B2E';

export default function Solutions() {
  // Prevent SSR/CSR mismatch while still allowing animations on the client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const solutions = [
    {
      id: 1,
      title: 'Network Security',
      href: '/Solutions-NetworkSecurity',
      image: (
        <div
          className="relative h-full w-full flex items-center justify-center"
          style={{ backgroundColor: CARD_BG }}
        >
          <div className="relative h-[150%] w-[152%]">
            <Image
              src={NetworkSecurityImg}
              alt="Network Security"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      href: '/Solutions-Cloudsolutions',
      image: (
        <div
          className="relative h-full w-full flex items-center justify-center"
          style={{ backgroundColor: CARD_BG }}
        >
          <div className="relative h-[100%] w-[132%]">
            <Image
              src={CloudSolutionsImg}
              alt="Cloud Solutions"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Satellite Communication',
      href: '/Solutions-Satcom',
      image: (
        <div
          className="relative h-full w-full flex items-center justify-center"
          style={{ backgroundColor: CARD_BG }}
        >
          <div className="relative h-[150%] w-[152%]">
            <Image
              src={SatelliteImg}
              alt="Satellite Communication"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative bg-[#08090A] px-6 pt-10 pb-16 md:px-8 md:pt-12 lg:px-16 lg:pt-16 lg:pb-24 xl:px-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Header with animation */}
        <motion.div
          className="mb-4 flex flex-col items-center justify-center text-center lg:mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top streaks / 3-line element */}
          <div className="mb-5 flex justify-center">
            <svg width="108" height="46" viewBox="0 0 108 46" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="hx-blue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#B9F1FF" />
                  <stop offset="1" stopColor="#6FD7FF" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="hx-white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#FFFFFF" />
                  <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.18" />
                </linearGradient>
                <linearGradient id="hx-grey" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#C9CED6" />
                  <stop offset="1" stopColor="#C9CED6" stopOpacity="0.12" />
                </linearGradient>
                <radialGradient
                  id="hx-dot"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(0 10 -10 0 22 20)"
                >
                  <stop stopColor="#BFF5FF" />
                  <stop offset="1" stopColor="#64D3FF" stopOpacity="0" />
                </radialGradient>
              </defs>

              <path
                d="M10 37 C20 22, 24 12, 28 5"
                stroke="url(#hx-blue)"
                strokeWidth="2.7"
                strokeLinecap="round"
              />

              <path
                className="hx-pulse"
                d="M54 8 L54 39"
                stroke="url(#hx-white)"
                strokeWidth="1.7"
                strokeLinecap="round"
                opacity="0.95"
              />

              <path
                d="M90 37 C79 22, 75 12, 71 5"
                stroke="url(#hx-grey)"
                strokeWidth="2.3"
                strokeLinecap="round"
                opacity="0.85"
              />

              <g className="hx-orb">
                <circle cx="22" cy="22" r="7" fill="url(#hx-dot)" />
                <circle cx="22" cy="22" r="2.6" fill="#D0FAFF" />
              </g>

              <style>{`
                .hx-pulse {
                  filter: drop-shadow(0 0 6px rgba(255,255,255,.35));
                  animation: hxPulse 2.2s ease-in-out infinite;
                }
                @keyframes hxPulse {
                  0%,100% { opacity: .9 }
                  50% { opacity: 1 }
                }
                .hx-orb {
                  animation: hxOrb 2.8s cubic-bezier(.22,1,.36,1) infinite;
                }
                @keyframes hxOrb {
                  0%   { transform: translate(-4px, 10px) }
                  50%  { transform: translate( 0px,-10px) }
                  100% { transform: translate(-4px, 10px) }
                }
              `}</style>
            </svg>
          </div>

          {/* Gradient headline */}
          <GradientText className="mb-8">
            <h2
              className="pb-2 text-[56px] leading-[1.15] font-semibold tracking-[-0.02em]"
              style={{
                fontFamily:
                  '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
              }}
            >
              Built to solve, designed to scale
            </h2>
          </GradientText>

          <p
            className="max-w-2xl"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
              fontSize: '15px',
              lineHeight: '24px',
              fontWeight: 400,
              color: 'rgb(138, 143, 152)',
            }}
          >
            From strategy to deployment, our services are built to deliver impact at every stage. We
            craft solutions with speed, precision, and purpose — so you can focus on growth.{` `}
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1 text-white hover:text-zinc-300"
              style={{ fontWeight: 500 }}
            >
              Explore more
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </p>
        </motion.div>

        {/* Cards with staggered entrance animation */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.id}
              className="card group relative overflow-hidden rounded-[24px]"
              initial={{ opacity: 0, y: 36, rotateX: -6, scale: 0.98, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
              }}
            >
              {/* Illustration area */}
              {/* <div className="aspect-[16/11]">{solution.image}</div> */}
              <div className="relative z-0 aspect-[16/11] overflow-hidden">
  {solution.image}
</div>


              {/* Content */}
              {/* <div className="flex items-start justify-between gap-3 p-6"> */}
              <div className="relative z-10 flex items-start justify-between gap-3 p-6">

                <h3
                  className="max-w-[82%] leading-[1.3] text-white"
                  style={{
                    fontFamily:
                      '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
                    fontSize: '20px',
                    fontWeight: 500,
                  }}
                >
                  {solution.title}
                </h3>

                {/* ✅ Arrow navigation */}
                <Link
                  href={solution.href}
                  aria-label={`Open ${solution.title}`}
                  className="mt-0.5 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border text-white/40 transition-all duration-300 hover:text-white/70"
                  style={{
                    borderColor: 'rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Card hover & shimmer keyframes */}
      <style jsx>{`
        .card {
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.25s ease, border-color 0.25s ease, filter 0.35s ease;
        }
        .card:hover {
          background-color: ${CARD_BG_HOVER} !important;
          border-color: ${CARD_BORDER_HOVER} !important;
          transform: translateY(-4px);
        }

        @keyframes shimmer {
          from {
            filter: brightness(1);
            transform: translateX(0);
          }
          to {
            filter: brightness(1.1);
            transform: translateX(2px);
          }
        }
      `}</style>
    </section>
  );
}
