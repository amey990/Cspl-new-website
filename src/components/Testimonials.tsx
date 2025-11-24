// 'use client';

// import { motion, cubicBezier } from 'framer-motion';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// type Testimonial = {
//   name: string;
//   handle: string;
//   avatar?: string; // optional URL; falls back to initials
//   quote: string;
// };

// // Demo content — replace with your data
// const testimonials: Testimonial[] = [
//   {
//     name: 'Ryan Carniato',
//     handle: '@RyanCarniato',
//     avatar: 'https://i.pravatar.cc/80?img=12',
//     quote:
//       "I'm loving what Commedia enables. The DX is fast and predictable, and the ecosystem keeps surprising me.",
//   },
//   {
//     name: 'Mark Dalgleish',
//     handle: '@markdalgleish',
//     avatar: 'https://i.pravatar.cc/80?img=22',
//     quote:
//       'It’s also a great platform to build a framework on since it provides a pluggable dev environment.',
//   },
//   {
//     name: 'Dion Almaer',
//     handle: '@dalmaer',
//     avatar: 'https://i.pravatar.cc/80?img=32',
//     quote:
//       'Excited to see so many frameworks teaming up on top of this. So many will benefit. ❤️ to the team.',
//   },
//   {
//     name: 'Jason Miller',
//     handle: '@_developit',
//     avatar: 'https://i.pravatar.cc/80?img=42',
//     quote:
//       "Every time I suspect I’ve hit the bounds of what it can do, I end up being wrong.",
//   },
//   {
//     name: 'Christoph Nakazawa',
//     handle: '@cpojer',
//     avatar: 'https://i.pravatar.cc/80?img=52',
//     quote: 'Gonna eat the world. The developer experience is unreal.',
//   },
//   {
//     name: 'Nikolaj',
//     handle: '@lopugit',
//     avatar: 'https://i.pravatar.cc/80?img=62',
//     quote:
//       'Wow, wow, wow. The build speed + hot reload is addicting. Shipping more, stressing less.',
//   },
//   {
//     name: 'Rich Harris',
//     handle: '@Rich_Harris',
//     avatar: 'https://i.pravatar.cc/80?img=72',
//     quote:
//       "It’s basically the united nations of JavaScript. I’ll be there as a representative of Sveltelandia.",
//   },
//   {
//     name: 'David Cramer',
//     handle: '@zeeg',
//     avatar: 'https://i.pravatar.cc/80?img=82',
//     quote: 'This has been a game changer for the industry.',
//   },
//   {
//     name: 'Sarah Vieira',
//     handle: '@NikkitaFTW',
//     avatar: 'https://i.pravatar.cc/80?img=15',
//     quote:
//       'The details are delightful. Hot reload feels instant and the ergonomics are well thought-out.',
//   },
// ];

// // helper: distribute items into n columns for a masonry feel
// function toColumns<T>(arr: T[], n: number): T[][] {
//   const cols: T[][] = Array.from({ length: n }, () => []);
//   arr.forEach((item, i) => cols[i % n].push(item));
//   return cols;
// }

// // initials fallback if no avatar
// function initials(name: string) {
//   return name
//     .split(' ')
//     .map((n) => n[0])
//     .slice(0, 2)
//     .join('')
//     .toUpperCase();
// }

// export default function Testimonials() {
//   // 3 columns on lg, 2 on md (handled in markup with hidden)
//   const cols3 = toColumns(testimonials, 3);
//   const cols2 = toColumns(testimonials, 2);

//   return (
//     // <section className="relative overflow-hidden bg-[#0A0B0C] px-6 py-24 md:px-8 lg:px-16">
//     <section className="relative bg-[#0A0B0C] px-6 py-24 md:px-8 lg:px-16">
      

//       <div className="mx-auto w-full max-w-[1200px]">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.55 }}
//           transition={{ duration: 0.6, ease: easeOutExpo }}
//           className="mb-10 text-center"
//         >
//           <h2
//             className="text-[44px] leading-[50px] font-medium tracking-[-0.02em] text-white md:text-[52px] md:leading-[58px]"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             {/* Loved by the community */}
//             Built with Commedia. Backed by trust.
//           </h2>
//           <p
//             className="mx-auto mt-2 max-w-[720px] text-[16px] leading-[24px] text-white/60"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             {/* Don’t take our word for it — hear from teams who ship with Commedia. */}
//             From hot reloads to happy teams — here’s what our customers have to say.
//           </p>
//         </motion.div>

//         {/* Masonry on md:2 / lg:3 columns.
//             We render *two* layouts and hide one per breakpoint to keep the natural stagger. */}
//         {/* lg: three columns */}
//         <div className="hidden gap-4 lg:grid lg:grid-cols-3">
//           {cols3.map((col, colIndex) => (
//             <div key={`lg-col-${colIndex}`} className="flex flex-col gap-4">
//               {col.map((t, i) => (
//                 <TestimonialCard
//                   key={t.handle + i}
//                   t={t}
//                   delay={0.04 * (i + colIndex)}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* md: two columns */}
//         <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:hidden">
//           {cols2.map((col, colIndex) => (
//             <div key={`md-col-${colIndex}`} className="flex flex-col gap-4">
//               {col.map((t, i) => (
//                 <TestimonialCard
//                   key={t.handle + i}
//                   t={t}
//                   delay={0.05 * (i + colIndex)}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* mobile: single column */}
//         <div className="grid gap-4 sm:hidden">
//           {testimonials.map((t, i) => (
//             <TestimonialCard key={t.handle + i} t={t} delay={0.04 * i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialCard({
//   t,
//   delay = 0,
// }: {
//   t: Testimonial;
//   delay?: number;
// }) {
//   // make height variation feel organic: longer quotes get taller naturally.
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 18, scale: 0.985, filter: 'blur(6px)' }}
//       whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
//       viewport={{ once: true, amount: 0.35 }}
//       transition={{ duration: 0.6, delay, ease: easeOutExpo }}
//       className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_-50px_rgba(0,0,0,.6)]"
//     >
//       {/* inner glow on hover */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         style={{
//           background:
//             'radial-gradient(120px 80px at 20% 0%, rgba(148,163,184,.10), transparent 70%)',
//           filter: 'blur(14px)',
//         }}
//       />

//       {/* header */}
//       <div className="mb-4 flex items-center gap-3">
//         {t.avatar ? (
//           <img
//             src={t.avatar}
//             alt={`${t.name} avatar`}
//             width={40}
//             height={40}
//             className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
//           />
//         ) : (
//           <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/10">
//             <span className="text-xs">{initials(t.name)}</span>
//           </div>
//         )}
//         <div>
//           <div
//             className="text-[15px] font-medium text-white"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             {t.name}
//           </div>
//           <div className="text-[13px] text-white/50">{t.handle}</div>
//         </div>
//       </div>

//       {/* quote */}
//       <p className="text-[15px] leading-[22px] text-white/80">{t.quote}</p>

//       {/* subtle chrome */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 rounded-2xl transition-[box-shadow,border-color] duration-300 group-hover:border-white/15"
//         style={{
//           boxShadow:
//             'inset 0 1px 0 rgba(255,255,255,.06), 0 8px 32px rgba(0,0,0,.35)',
//         }}
//       />
//     </motion.article>
//   );
// }


// 'use client';

// import { motion, cubicBezier } from 'framer-motion';
// import Image from 'next/image';
// import type { StaticImageData } from 'next/image';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// type Testimonial = {
//   name: string;
//   handle: string;
//   avatar?: string | StaticImageData; // Can be URL string or imported image
//   quote: string;
// };

// // TODO: Replace these paths with your actual customer photos
// import Image1 from '../../assets/AIRTEL_BG.png';
// import Image2 from '../../assets/CBI-BG.png';
// import Image3 from '../../assets/NTT-BG.png';
// import Image4 from '../../assets/TATA-BG.png';
// import Image5 from '../../assets/HP-BG.png';
// import Image6 from '../../assets/LG-BG.png';
// import Image7 from '../../assets/AWS_BG.png';
// import Image8 from '../../assets/ISRO_BG.png';
// import Image9 from '../../assets/LG-BG.png';

// // Demo content — replace with your data
// const testimonials: Testimonial[] = [
//   {
//     name: 'Ryan Carniato',
//     handle: '@RyanCarniato',
//     avatar: Image1,
//     quote:
//       "I'm loving what Commedia enables. The DX is fast and predictable, and the ecosystem keeps surprising me.",
//   },
//   {
//     name: 'Mark Dalgleish',
//     handle: '@markdalgleish',
//     avatar: Image2,
//     quote:
//       'Its also a great platform to build a framework on since it provides a pluggable dev environment.',
//   },
//   {
//     name: 'Dion Almaer',
//     handle: '@dalmaer',
//     avatar: Image3,
//     quote:
//       'Excited to see so many frameworks teaming up on top of this. So many will benefit. ❤️ to the team.',
//   },
//   {
//     name: 'Jason Miller',
//     handle: '@_developit',
//     avatar: Image4,
//     quote:
//       "Every time I suspect I've hit the bounds of what it can do, I end up being wrong.",
//   },
//   {
//     name: 'Christoph Nakazawa',
//     handle: '@cpojer',
//     avatar: Image5,
//     quote: 'Gonna eat the world. The developer experience is unreal.',
//   },
//   {
//     name: 'Nikolaj',
//     handle: '@lopugit',
//     avatar: Image6,
//     quote:
//       'Wow, wow, wow. The build speed + hot reload is addicting. Shipping more, stressing less.',
//   },
//   {
//     name: 'Rich Harris',
//     handle: '@Rich_Harris',
//     avatar: Image7,
//     quote:
//       "It's basically the united nations of JavaScript. I'll be there as a representative of Sveltelandia.",
//   },
//   {
//     name: 'David Cramer',
//     handle: '@zeeg',
//     avatar: Image8,
//     quote: 'This has been a game changer for the industry.',
//   },
//   {
//     name: 'Sarah Vieira',
//     handle: '@NikkitaFTW',
//     avatar: Image9,
//     quote:
//       'The details are delightful. Hot reload feels instant and the ergonomics are well thought-out.',
//   },
// ];

// // helper: distribute items into n columns for a masonry feel
// function toColumns<T>(arr: T[], n: number): T[][] {
//   const cols: T[][] = Array.from({ length: n }, () => []);
//   arr.forEach((item, i) => cols[i % n].push(item));
//   return cols;
// }

// // initials fallback if no avatar
// function initials(name: string) {
//   return name
//     .split(' ')
//     .map((n) => n[0])
//     .slice(0, 2)
//     .join('')
//     .toUpperCase();
// }

// export default function Testimonials() {
//   // 3 columns on lg, 2 on md (handled in markup with hidden)
//   const cols3 = toColumns(testimonials, 3);
//   const cols2 = toColumns(testimonials, 2);

//   return (
//     <section className="relative bg-[#0A0B0C] px-6 py-24 md:px-8 lg:px-16">
//       <div className="mx-auto w-full max-w-[1200px]">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.55 }}
//           transition={{ duration: 0.6, ease: easeOutExpo }}
//           className="mb-10 text-center"
//         >
//           <h2
//             className="text-[44px] leading-[50px] font-medium tracking-[-0.02em] text-white md:text-[52px] md:leading-[58px]"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             Built with Commedia. Backed by trust.
//           </h2>
//           <p
//             className="mx-auto mt-2 max-w-[720px] text-[16px] leading-[24px] text-white/60"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             From hot reloads to happy teams — here's what our customers have to say.
//           </p>
//         </motion.div>

//         {/* Masonry on md:2 / lg:3 columns.
//             We render *two* layouts and hide one per breakpoint to keep the natural stagger. */}
//         {/* lg: three columns */}
//         <div className="hidden gap-4 lg:grid lg:grid-cols-3">
//           {cols3.map((col, colIndex) => (
//             <div key={`lg-col-${colIndex}`} className="flex flex-col gap-4">
//               {col.map((t, i) => (
//                 <TestimonialCard
//                   key={t.handle + i}
//                   t={t}
//                   delay={0.04 * (i + colIndex)}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* md: two columns */}
//         <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:hidden">
//           {cols2.map((col, colIndex) => (
//             <div key={`md-col-${colIndex}`} className="flex flex-col gap-4">
//               {col.map((t, i) => (
//                 <TestimonialCard
//                   key={t.handle + i}
//                   t={t}
//                   delay={0.05 * (i + colIndex)}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* mobile: single column */}
//         <div className="grid gap-4 sm:hidden">
//           {testimonials.map((t, i) => (
//             <TestimonialCard key={t.handle + i} t={t} delay={0.04 * i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialCard({
//   t,
//   delay = 0,
// }: {
//   t: Testimonial;
//   delay?: number;
// }) {
//   // make height variation feel organic: longer quotes get taller naturally.
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 18, scale: 0.985, filter: 'blur(6px)' }}
//       whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
//       viewport={{ once: true, amount: 0.35 }}
//       transition={{ duration: 0.6, delay, ease: easeOutExpo }}
//       className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_-50px_rgba(0,0,0,.6)]"
//     >
//       {/* inner glow on hover */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         style={{
//           background:
//             'radial-gradient(120px 80px at 20% 0%, rgba(148,163,184,.10), transparent 70%)',
//           filter: 'blur(14px)',
//         }}
//       />

//       {/* header */}
//       <div className="mb-4 flex items-center gap-3">
//         {t.avatar ? (
//           <img
//             src={typeof t.avatar === 'string' ? t.avatar : t.avatar.src}
//             alt={`${t.name} avatar`}
//             width={40}
//             height={40}
//             className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
//           />
//         ) : (
//           <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/10">
//             <span className="text-xs">{initials(t.name)}</span>
//           </div>
//         )}
//         <div>
//           <div
//             className="text-[15px] font-medium text-white"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             {t.name}
//           </div>
//           <div className="text-[13px] text-white/50">{t.handle}</div>
//         </div>
//       </div>

//       {/* quote */}
//       <p className="text-[15px] leading-[22px] text-white/80">{t.quote}</p>

//       {/* subtle chrome */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 rounded-2xl transition-[box-shadow,border-color] duration-300 group-hover:border-white/15"
//         style={{
//           boxShadow:
//             'inset 0 1px 0 rgba(255,255,255,.06), 0 8px 32px rgba(0,0,0,.35)',
//         }}
//       />
//     </motion.article>
//   );
// }


'use client';

import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

type Testimonial = {
  name: string;
  handle: string;
  avatar?: string | StaticImageData; // Can be URL string or imported image
  quote: string;
};

// TODO: Replace these paths with your actual customer photos
import Image1 from '../../assets/AIRTEL_BG.png';
import Image2 from '../../assets/CBI-BG.png';
import Image3 from '../../assets/NTT-BG.png';
import Image4 from '../../assets/TATA-BG.png';
import Image5 from '../../assets/HP-BG.png';
import Image6 from '../../assets/LG-BG.png';
import Image7 from '../../assets/AWS_BG.png';
import Image8 from '../../assets/ISRO_BG.png';
import Image9 from '../../assets/3M-BG.png';

// Demo content — replace with your data
const testimonials: Testimonial[] = [
  {
    name: 'Airtel',
    handle: '@airtel.in',
    avatar: Image1,
    quote:
      "Commedia’s team integrated seamlessly with our infrastructure. Their delivery speed and technical depth exceeded expectations.",
  },
  {
    name: 'Central Bank',
    handle: '@centralbank.bank.in',
    avatar: Image2,
    quote:
      "Security and scalability were non-negotiable for us. Commedia delivered both — with zero compromise on speed.",
  },
  {
    name: 'NTT Data',
    handle: '@nttdata.com',
    avatar: Image3,
    quote:
      "From planning to deployment, their engineers were proactive, precise, and deeply collaborative. A true extension of our team.",
  },
  {
    name: 'Tata Communications',
    handle: '@tatacommunications.com',
    avatar: Image4,
    quote:
     "Commedia helped us unify multiple platforms into one cohesive system. Their domain expertise made all the difference.",
  },
  {
    name: 'HP',
    handle: '@hp.com',
    avatar: Image5,
    quote: "We’ve worked with many vendors — Commedia stands out for their reliability and ability to handle complex integrations.",
  },
  {
    name: 'LG',
    handle: '@www.lg.com',
    avatar: Image6,
    quote:
      "Their delivery model is agile, transparent, and outcome-driven. We saw results within weeks, not months.",
  },
  {
    name: 'AWS',
    handle: '@amazon.com',
    avatar: Image7,
    quote:
      "Commedia’s integration work helped us scale faster and reduce operational overhead. Their team is sharp and solution-oriented.",
  },
  {
    name: 'ISRO',
    handle: '@isro.gov.in',
    avatar: Image8,
    quote: "Mission-critical systems require precision. Commedia brought both technical rigor and a deep understanding of our workflows."

,
  },
  {
    name: '3M',
    handle: '@3mindia.in',
    avatar: Image9,
    quote:
      "The integration was smooth, the support was proactive, and the collaboration felt like a true partnership.",
  },
];

// helper: distribute items into n columns for a masonry feel
function toColumns<T>(arr: T[], n: number): T[][] {
  const cols: T[][] = Array.from({ length: n }, () => []);
  arr.forEach((item, i) => cols[i % n].push(item));
  return cols;
}

// initials fallback if no avatar
function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  // 3 columns on lg, 2 on md (handled in markup with hidden)
  const cols3 = toColumns(testimonials, 3);
  const cols2 = toColumns(testimonials, 2);

  return (
    <section className="relative bg-[#0A0B0C] px-6 py-24 md:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-10 text-center"
        >
          <h2
            className="text-[44px] leading-[50px] font-medium tracking-[-0.02em] text-white md:text-[52px] md:leading-[58px]"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            Built with Commedia. Backed by trust.
          </h2>
          <p
            className="mx-auto mt-2 max-w-[720px] text-[16px] leading-[24px] text-white/60"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            From hot reloads to happy teams — here's what our customers have to say.
          </p>
        </motion.div>

        {/* Masonry on md:2 / lg:3 columns.
            We render *two* layouts and hide one per breakpoint to keep the natural stagger. */}
        {/* lg: three columns */}
        <div className="hidden gap-4 lg:grid lg:grid-cols-3">
          {cols3.map((col, colIndex) => (
            <div key={`lg-col-${colIndex}`} className="flex flex-col gap-4">
              {col.map((t, i) => (
                <TestimonialCard
                  key={t.handle + i}
                  t={t}
                  delay={0.04 * (i + colIndex)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* md: two columns */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:hidden">
          {cols2.map((col, colIndex) => (
            <div key={`md-col-${colIndex}`} className="flex flex-col gap-4">
              {col.map((t, i) => (
                <TestimonialCard
                  key={t.handle + i}
                  t={t}
                  delay={0.05 * (i + colIndex)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* mobile: single column */}
        <div className="grid gap-4 sm:hidden">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.handle + i} t={t} delay={0.04 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  delay = 0,
}: {
  t: Testimonial;
  delay?: number;
}) {
  // make height variation feel organic: longer quotes get taller naturally.
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, scale: 0.985, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay, ease: easeOutExpo }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_-50px_rgba(0,0,0,.6)]"
    >
      {/* inner glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120px 80px at 20% 0%, rgba(148,163,184,.10), transparent 70%)',
          filter: 'blur(14px)',
        }}
      />

      {/* header */}
      <div className="mb-4 flex items-center gap-3">
        {t.avatar ? (
          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
            <img
              src={typeof t.avatar === 'string' ? t.avatar : t.avatar.src}
              alt={`${t.name} avatar`}
              className="h-full w-full object-contain"
              style={{
                objectFit: 'contain',
                padding: '2px',
              }}
            />
          </div>
        ) : (
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/10">
            <span className="text-xs">{initials(t.name)}</span>
          </div>
        )}
        <div>
          <div
            className="text-[15px] font-medium text-white"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            {t.name}
          </div>
          <div className="text-[13px] text-white/50">{t.handle}</div>
        </div>
      </div>

      {/* quote */}
      <p className="text-[15px] leading-[22px] text-white/80">{t.quote}</p>

      {/* subtle chrome */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl transition-[box-shadow,border-color] duration-300 group-hover:border-white/15"
        style={{
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,.06), 0 8px 32px rgba(0,0,0,.35)',
        }}
      />
    </motion.article>
  );
}