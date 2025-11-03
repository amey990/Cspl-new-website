// 'use client';

// import Image from 'next/image';
// import { motion, cubicBezier } from 'framer-motion';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// type Testimonial = {
//   name: string;
//   handle: string;
//   avatar: string;   // /public path or remote URL
//   quote: string;
// };

// const testimonials: Testimonial[] = [
//   {
//     name: 'Ryan Carniato',
//     handle: '@RyanCarniato',
//     avatar: '/avatars/ryan.jpg',
//     quote:
//       "I'm loving what Commedia enables. The DX is fast and predictable, and the ecosystem keeps surprising me.",
//   },
//   {
//     name: 'Mark Dalgleish',
//     handle: '@markdalgleish',
//     avatar: '/avatars/mark.jpg',
//     quote:
//       'It’s also a great platform to build a framework on since it provides a pluggable dev environment.',
//   },
//   {
//     name: 'Dion Almaer',
//     handle: '@dalmaer',
//     avatar: '/avatars/dion.jpg',
//     quote:
//       'Excited to see so many frameworks teaming up on top of this. So many will benefit. ❤️ to the team.',
//   },
//   {
//     name: 'Jason Miller',
//     handle: '@_developit',
//     avatar: '/avatars/jason.jpg',
//     quote:
//       "Every time I suspect I’ve hit the bounds of what it can do, I end up being wrong.",
//   },
//   {
//     name: 'Christoph Nakazawa',
//     handle: '@cpojer',
//     avatar: '/avatars/christo.jpg',
//     quote: 'Gonna eat the world. The developer experience is unreal.',
//   },
//   {
//     name: 'Nikolaj',
//     handle: '@lopugit',
//     avatar: '/avatars/nikolaj.jpg',
//     quote:
//       'Wow, wow, wow. The build speed + hot reload is addicting. Shipping more, stressing less.',
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section
//       aria-labelledby="testimonials-title"
//       className="relative overflow-hidden bg-[#0A0B0C] px-6 py-24 md:px-8 lg:px-16"
//     >
//       {/* soft page lighting (subtle neutral wash like other sections) */}
//       <div aria-hidden className="pointer-events-none absolute inset-0">
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'radial-gradient(55% 45% at 50% 0%, rgba(71,85,105,0.06) 0%, rgba(71,85,105,0) 70%)',
//             filter: 'blur(45px)',
//           }}
//         />
//       </div>

//       <div className="mx-auto w-full max-w-[1200px]">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.6, ease: easeOutExpo }}
//           className="mb-12 text-center"
//         >
//           <h2
//             id="testimonials-title"
//             className="text-[44px] leading-[50px] font-medium tracking-[-0.02em] text-white md:text-[52px] md:leading-[58px]"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             Loved by the community
//           </h2>
//           <p
//             className="mx-auto mt-3 max-w-[720px] text-[16px] leading-[24px] text-white/60"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             Don’t take our word for it — hear from teams who ship with Commedia.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((t, i) => (
//             <motion.article
//               key={t.handle + i}
//               initial={{ opacity: 0, y: 18, scale: 0.98, filter: 'blur(6px)' }}
//               whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
//               viewport={{ once: true, amount: 0.35 }}
//               transition={{ duration: 0.6, delay: i * 0.04, ease: easeOutExpo }}
//               className="group relative rounded-2xl border border-white/8 bg-white/[0.02] p-5 shadow-[0_30px_120px_-50px_rgba(0,0,0,.6)]"
//             >
//               {/* inner glow on hover */}
//               <div
//                 aria-hidden
//                 className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//                 style={{
//                   background:
//                     'radial-gradient(120px 80px at 20% 0%, rgba(148,163,184,.10), transparent 70%)',
//                   filter: 'blur(14px)',
//                 }}
//               />

//               {/* header: avatar + name */}
//               <div className="mb-4 flex items-center gap-3">
//                 <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
//                   {/* Replace Image with <img> if you don’t use next/image */}
//                   <Image
//                     src={t.avatar}
//                     alt={`${t.name} avatar`}
//                     fill
//                     sizes="40px"
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <div
//                     className="text-[15px] font-medium text-white"
//                     style={{
//                       fontFamily:
//                         '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//                     }}
//                   >
//                     {t.name}
//                   </div>
//                   <div className="text-[13px] text-white/50">{t.handle}</div>
//                 </div>
//               </div>

//               {/* quote */}
//               <p className="text-[15px] leading-[22px] text-white/80">
//                 {t.quote}
//               </p>

//               {/* card chrome: faint border/highlight on hover */}
//               <div
//                 aria-hidden
//                 className="pointer-events-none absolute inset-0 rounded-2xl transition-[box-shadow,border-color] duration-300 group-hover:border-white/15"
//                 style={{
//                   boxShadow:
//                     'inset 0 1px 0 rgba(255,255,255,.06), 0 8px 32px rgba(0,0,0,.35)',
//                 }}
//               />
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion, cubicBezier } from 'framer-motion';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

type Testimonial = {
  name: string;
  handle: string;
  avatar?: string; // optional URL; falls back to initials
  quote: string;
};

// Demo content — replace with your data
const testimonials: Testimonial[] = [
  {
    name: 'Ryan Carniato',
    handle: '@RyanCarniato',
    avatar: 'https://i.pravatar.cc/80?img=12',
    quote:
      "I'm loving what Commedia enables. The DX is fast and predictable, and the ecosystem keeps surprising me.",
  },
  {
    name: 'Mark Dalgleish',
    handle: '@markdalgleish',
    avatar: 'https://i.pravatar.cc/80?img=22',
    quote:
      'It’s also a great platform to build a framework on since it provides a pluggable dev environment.',
  },
  {
    name: 'Dion Almaer',
    handle: '@dalmaer',
    avatar: 'https://i.pravatar.cc/80?img=32',
    quote:
      'Excited to see so many frameworks teaming up on top of this. So many will benefit. ❤️ to the team.',
  },
  {
    name: 'Jason Miller',
    handle: '@_developit',
    avatar: 'https://i.pravatar.cc/80?img=42',
    quote:
      "Every time I suspect I’ve hit the bounds of what it can do, I end up being wrong.",
  },
  {
    name: 'Christoph Nakazawa',
    handle: '@cpojer',
    avatar: 'https://i.pravatar.cc/80?img=52',
    quote: 'Gonna eat the world. The developer experience is unreal.',
  },
  {
    name: 'Nikolaj',
    handle: '@lopugit',
    avatar: 'https://i.pravatar.cc/80?img=62',
    quote:
      'Wow, wow, wow. The build speed + hot reload is addicting. Shipping more, stressing less.',
  },
  {
    name: 'Rich Harris',
    handle: '@Rich_Harris',
    avatar: 'https://i.pravatar.cc/80?img=72',
    quote:
      "It’s basically the united nations of JavaScript. I’ll be there as a representative of Sveltelandia.",
  },
  {
    name: 'David Cramer',
    handle: '@zeeg',
    avatar: 'https://i.pravatar.cc/80?img=82',
    quote: 'This has been a game changer for the industry.',
  },
  {
    name: 'Sarah Vieira',
    handle: '@NikkitaFTW',
    avatar: 'https://i.pravatar.cc/80?img=15',
    quote:
      'The details are delightful. Hot reload feels instant and the ergonomics are well thought-out.',
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
    // <section className="relative overflow-hidden bg-[#0A0B0C] px-6 py-24 md:px-8 lg:px-16">
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
            Loved by the community
          </h2>
          <p
            className="mx-auto mt-2 max-w-[720px] text-[16px] leading-[24px] text-white/60"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            Don’t take our word for it — hear from teams who ship with Commedia.
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
          <img
            src={t.avatar}
            alt={`${t.name} avatar`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
          />
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
