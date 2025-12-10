// //pp//
// 'use client';

// import Image from 'next/image';
// import { useState, useEffect, useRef } from 'react';

// import AboutHero from '../../../assets/AboutUshero.png';

// // Leader Images
// import Leader1 from '../../../assets/Leaders/leader1.jpg';
// import Leader2 from '../../../assets/Leaders/leader2.jpeg';
// import Leader3 from '../../../assets/Leaders/leader3.jpg';
// import Leader4 from '../../../assets/Leaders/leader4.jpg';
// import Leader5 from '../../../assets/Leaders/leader5.jpg';
// import Leader6 from '../../../assets/Leaders/leader6.jpg';
// import Leader8 from '../../../assets/Leaders/leader8.jpg';

// // Presence Images
// import IndiaUp from '../../../assets/IndiaUp.png';
// import GlobalUp from '../../../assets/GlobalUp.png';

// // ---------------------------------------------
// // INTERSECTION OBSERVER HOOK
// // ---------------------------------------------
// function useInView(options = {}) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       {
//         threshold: 0.1,
//         ...options,
//       }
//     );

//     const currentRef = ref.current;
//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, []);

//   return { ref, isInView };
// }

// // ---------------------------------------------
// // PRESENCE SLIDER COMPONENT
// // ---------------------------------------------
// function PresenceSlider() {
//   const images = [IndiaUp, GlobalUp];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex w-full justify-center">
//       <div className="h-[480px] w-[480px] overflow-hidden rounded-3xl shadow-xl transition-all duration-700">
//         <Image
//           src={images[index]}
//           alt="Global Presence Map"
//           className="h-full w-full object-contain"
//         />
//       </div>
//     </div>
//   );
// }

// // ---------------------------------------------
// // MAIN ABOUT US PAGE
// // ---------------------------------------------
// export default function AboutUs() {
//   const { ref: titleRef, isInView: titleInView } = useInView();
//   const { ref: heroRef, isInView: heroInView } = useInView();
//   const { ref: leftHeadingRef, isInView: leftHeadingInView } = useInView();
//   const { ref: rightTextRef, isInView: rightTextInView } = useInView();
//   const { ref: leadersRef, isInView: leadersInView } = useInView();
//   const { ref: presenceRef, isInView: presenceInView } = useInView();
//   const { ref: achievementsRef, isInView: achievementsInView } = useInView();

//   return (
//     <section className="relative w-full overflow-hidden bg-[#010000] px-6 py-18 md:px-8 lg:px-16">
//       {/* Title */}
//       <div
//         ref={titleRef}
//         className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
//           titleInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'
//         }`}
//       >
//         <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
//           Reimagining How Teams <br /> Build Together
//         </h1>
//       </div>

//       {/* Hero */}
//       <div
//         ref={heroRef}
//         className={`relative mx-auto -mt-8 max-w-6xl transition-all duration-1000 delay-200 ${
//           heroInView ? 'opacity-100 scale-100' : 'scale-95 opacity-0'
//         }`}
//       >
//         <div
//           className="
//           pointer-events-none absolute inset-x-0 bottom-0 h-[45%]
//           z-10 rounded-b-3xl bg-gradient-to-t from-[#010000] via-[#010000]/90 to-transparent
//         "
//         />
//         <Image
//           src={AboutHero}
//           alt="About Commedia"
//           className="w-full rounded-3xl shadow-xl"
//           priority
//         />
//       </div>

//       {/* NEXT CONTENT SECTION */}
//       <div className="mx-auto mt-0 grid max-w-5xl grid-cols-1 gap-20 px-4 md:grid-cols-2 md:px-0">
//         {/* Left Heading */}
//         <h2
//           ref={leftHeadingRef}
//           className={`text-3xl md:text-4xl font-semibold text-white leading-snug md:pr-10 transition-all duration-1000 ${
//             leftHeadingInView
//               ? 'opacity-100 translate-x-0'
//               : '-translate-x-10 opacity-0'
//           }`}
//         >
//           We're crafting the project <br />
//           planning tool for teams <br />
//           that care about quality
//         </h2>

//         {/* Right text */}
//         <div
//           ref={rightTextRef}
//           className={`space-y-5 text-base leading-7 text-zinc-300 transition-all duration-1000 delay-200 md:text-lg ${
//             rightTextInView
//               ? 'opacity-100 translate-x-0'
//               : 'translate-x-10 opacity-0'
//           }`}
//         >
//           <p>
//             Computers used to be magical. But much of that magic has been lost over time,
//             replaced by subpar tools and practices that slow teams down and hold back great
//             work. Frustrated with the status quo, we decided to build something better.
//           </p>

//           <p>
//             What started as a simple issue tracker has since evolved into a powerful project
//             and issue tracking system that streamlines workflows across the entire product
//             development process. We think of our platform not as a better tool, but as a
//             better way to build software.
//           </p>

//           <p>
//             Today, thousands of teams around the globe — from early-stage startups to public
//             companies — use our solutions. We help teams focus on what they do best:
//             crafting exceptional digital experiences.
//           </p>
//         </div>
//       </div>

//       {/* LEADERS SECTION */}
//       <div
//         ref={leadersRef}
//         className={`mx-auto mt-26 max-w-5xl transition-all duration-1000 ${
//           leadersInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'
//         }`}
//       >
//         <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-2xl">
//           We care deeply about the <br /> quality of our work
//         </h2>

//         <p className="mt-6 text-lg leading-7 text-zinc-300 max-w-3xl">
//           Our small but mighty team is united by relentless focus...
//         </p>

//         <button className="mt-8 rounded-lg border border-white/20 bg-white/10 px-5 py-2 text-white transition hover:bg-white/20">
//           We're hiring →
//         </button>

//         {/* Leaders */}
//         <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//           {[
//             { img: Leader1, name: 'C S Raghava Rao', role: 'Founder & MD' },
//             { img: Leader2, name: 'Shri C Subba Rao', role: 'Director' },
//             { img: Leader3, name: 'C V Ramani', role: 'Designation' },
//             { img: Leader4, name: 'G Padmavati', role: 'Advisor Finance' },
//             { img: Leader5, name: 'Harshad Awasare', role: 'COO' },
//             { img: Leader6, name: 'Subeeth Kotian', role: 'VP - Commercial' },
//             { img: Leader8, name: 'Deepak Trisal', role: 'VP - Service Delivery' },
//           ].map((leader, i) => (
//             <div
//               key={i}
//               className={`text-center transition-all duration-700 ${
//                 leadersInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: `${i * 100}ms` }}
//             >
//               <div className="aspect-square w-full overflow-hidden rounded-2xl">
//                 <Image
//                   src={leader.img}
//                   alt={leader.name}
//                   className="h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0"
//                 />
//               </div>
//               <h3 className="mt-3 text-base text-white">{leader.name}</h3>
//               <p className="text-xs text-zinc-400">{leader.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* GLOBAL & INDIA PRESENCE SECTION */}
//       <div
//         ref={presenceRef}
//         className="mx-auto -mt-4 grid max-w-6xl grid-cols-1 items-center gap-20 md:grid-cols-2"
//       >
//         <div
//           className={`transition-all duration-1000 ${
//             presenceInView ? 'opacity-100 translate-x-0' : '-translate-x-10 opacity-0'
//           }`}
//         >
//           <h2 className="text-3xl font-semibold leading-tight text-white">
//             Our Global & Domestic Presence
//           </h2>

//           <p className="mt-5 text-lg leading-7 text-zinc-400">
//             We deliver projects across India and the world.
//             The map cycles automatically showcasing our footprint.
//           </p>
//         </div>

//         <div
//           className={`transition-all duration-1000 delay-300 ${
//             presenceInView ? 'opacity-100 scale-100' : 'scale-90 opacity-0'
//           }`}
//         >
//           <PresenceSlider />
//         </div>
//       </div>

//       {/* ACHIEVEMENTS SECTION */}
//       {/* ACHIEVEMENTS SECTION */}
// <div
//   ref={achievementsRef}
//   className="mx-auto max-w-6xl mt-28"
// >
//   <div className="flex justify-between items-center mb-12">
//     <h2
//       className={`text-3xl md:text-4xl font-semibold text-white leading-tight transition-all duration-1000 ${
//         achievementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//       }`}
//     >
//       Achievements & Milestones
//     </h2>
//     <button className="text-zinc-400 hover:text-white transition flex items-center gap-2 text-sm">
//       See more <span>→</span>
//     </button>
//   </div>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//     {[
//       {
//         title: '500+ Projects Delivered',
//         subtitle: 'Across multiple industries worldwide',
//         date: 'Milestone · 2024',
//         visual: (
//           <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
//             {/* subtle grid */}
//             <div
//               className="absolute inset-0 opacity-[0.22]"
//               style={{
//                 backgroundImage: `
//                   linear-gradient(to right, rgba(148,163,184,0.10) 1px, transparent 1px),
//                   linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)
//                 `,
//                 backgroundSize: '40px 40px',
//               }}
//             />
//             <div className="relative flex h-full items-center justify-center">
//               <span className="text-[96px] font-semibold tracking-tight text-zinc-500">
//                 500+
//               </span>
//             </div>
//           </div>
//         ),
//       },
//       {
//         title: '20+ Years of Excellence',
//         subtitle: 'A legacy of innovation & engineering',
//         date: 'Founded · 2004',
//         visual: (
//           <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black" />
//             <div className="relative flex h-full items-center justify-center">
//               <div className="grid grid-cols-5 gap-3 px-10">
//                 {Array.from({ length: 20 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className="h-4 w-4 rounded-sm bg-zinc-600/40"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ),
//       },
//       {
//         title: 'Global Client Portfolio',
//         subtitle: 'Trusted by enterprises in 14+ countries',
//         date: 'Worldwide · 2024',
//         visual: (
//           <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
//             <div className="absolute inset-0 bg-radial from-white/[0.06] via-transparent to-black" />
//             <div className="relative flex h-full items-center justify-center">
//               <svg
//                 className="w-40 h-40 text-zinc-500/60"
//                 viewBox="0 0 100 100"
//                 fill="none"
//               >
//                 <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1" />
//                 <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.8" />
//                 <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="0.8" />
//                 <line x1="50" y1="16" x2="50" y2="84" stroke="currentColor" strokeWidth="0.8" />
//                 <line x1="16" y1="50" x2="84" y2="50" stroke="currentColor" strokeWidth="0.8" />
//                 <ellipse cx="50" cy="50" rx="34" ry="12" stroke="currentColor" strokeWidth="0.6" />
//                 <ellipse cx="50" cy="50" rx="12" ry="34" stroke="currentColor" strokeWidth="0.6" />
//               </svg>
//             </div>
//           </div>
//         ),
//       },
//       {
//         title: 'Cutting-Edge AI Solutions',
//         subtitle: 'Transforming businesses with automation',
//         date: 'Innovation · 2024',
//         visual: (
//           <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-black" />
//             <div className="relative flex h-full items-center justify-center px-10">
//               <div className="flex w-full items-end justify-between gap-2 h-32">
//                 {Array.from({ length: 12 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className="flex-1 rounded-t bg-zinc-500/45"
//                     style={{ height: `${30 + i * 4}%` }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ),
//       },
//       {
//         title: 'Award-Winning Service',
//         subtitle: 'Recognized for quality & customer success',
//         date: 'Recognition · 2024',
//         visual: (
//           <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black" />
//             <div className="relative flex h-full items-center justify-center">
//               <svg
//                 className="w-40 h-40 text-zinc-500/65"
//                 viewBox="0 0 100 100"
//                 fill="none"
//               >
//                 <path
//                   d="M50 14L36 64L80 40H20L64 64L50 14Z"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                   fill="currentColor"
//                   fillOpacity="0.18"
//                 />
//                 <circle cx="50" cy="50" r="12" fill="currentColor" fillOpacity="0.28" />
//               </svg>
//             </div>
//           </div>
//         ),
//       },
//       {
//         title: 'Expanding Global Footprint',
//         subtitle: 'Growing presence in APAC, EMEA & USA',
//         date: 'Expansion · 2024',
//         visual: (
//           <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
//             <div className="absolute inset-0 opacity-[0.5]"
//               style={{
//                 backgroundImage: `
//                   radial-gradient(circle at 20% 20%, rgba(148,163,184,0.25) 0, transparent 55%),
//                   radial-gradient(circle at 80% 30%, rgba(148,163,184,0.18) 0, transparent 60%),
//                   radial-gradient(circle at 40% 80%, rgba(148,163,184,0.16) 0, transparent 55%)
//                 `,
//               }}
//             />
//             <div className="relative flex h-full items-center justify-center">
//               <div className="relative w-32 h-32 flex items-center justify-center">
//                 <div className="absolute inset-0 rounded-full border border-zinc-600/40" />
//                 <div className="absolute inset-4 rounded-full border border-zinc-600/30" />
//                 <div className="absolute inset-8 rounded-full border border-zinc-600/20" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   {Array.from({ length: 6 }).map((_, i) => (
//                     <div
//                       key={i}
//                       className="absolute w-px h-full bg-zinc-600/25"
//                       style={{ transform: `rotate(${i * 30}deg)` }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ),
//       },
//     ].map((item, i) => (
//       <article
//         key={i}
//         className={`group transition-all duration-700 cursor-pointer ${
//           achievementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}
//         style={{ transitionDelay: `${i * 100}ms` }}
//       >
//         {/* Visual card */}
//         {item.visual}

//         {/* Text below card */}
//         <div className="pt-6">
//           <p className="text-xs text-zinc-500 mb-2">
//             {item.date}
//           </p>
//           <h3 className="text-xl md:text-2xl font-medium text-white mb-1 group-hover:text-white">
//             {item.title}
//           </h3>
//           <p className="text-sm text-zinc-400 leading-relaxed">
//             {item.subtitle}
//           </p>
//         </div>
//       </article>
//     ))}
//   </div>
// </div>

//     </section>
//   );
// }



//pp/
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

import AboutHero from '../../../assets/AboutUshero.png';

// Leader Images
import Leader1 from '../../../assets/Leaders/leader1.jpg';
import Leader2 from '../../../assets/Leaders/leader2.jpeg';
import Leader3 from '../../../assets/Leaders/leader3.jpg';
import Leader4 from '../../../assets/Leaders/leader4.jpg';
import Leader5 from '../../../assets/Leaders/leader5.jpg';
import Leader6 from '../../../assets/Leaders/leader6.jpg';
import Leader8 from '../../../assets/Leaders/leader8.jpg';

// Presence Images
import IndiaUp from '../../../assets/IndiaUp.png';
import GlobalUp from '../../../assets/GlobalUp.png';

// ---------------------------------------------
// INTERSECTION OBSERVER HOOK
// ---------------------------------------------
function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1, ...options }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return { ref, isInView };
}

// ---------------------------------------------
// PRESENCE SLIDER COMPONENT
// ---------------------------------------------
function PresenceSlider() {
  const images = [IndiaUp, GlobalUp];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3500
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex w-full justify-center">
      {/* show raw maps, no extra card */}
      <div className="h-[420px] w-[480px]">
        <Image
          src={images[index]}
          alt="Global Presence Map"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

// ---------------------------------------------
// MAIN ABOUT US PAGE
// ---------------------------------------------
export default function AboutUs() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: leftHeadingRef, isInView: leftHeadingInView } = useInView();
  const { ref: rightTextRef, isInView: rightTextInView } = useInView();
  const { ref: leadersRef, isInView: leadersInView } = useInView();
  const { ref: presenceRef, isInView: presenceInView } = useInView();
  const { ref: achievementsRef, isInView: achievementsInView } = useInView();

  return (
    <section className="relative w-full overflow-hidden bg-[#010000] px-6 pb-24 pt-16 md:px-8 lg:px-16">
      {/* ----------------------------------------- */}
      {/* HERO TITLE + CHIP                        */}
      {/* ----------------------------------------- */}
      <div
        ref={titleRef}
        className={`mx-auto max-w-6xl transition-all duration-1000 ${
          titleInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
          <span className="mr-2 h-2.5 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          About Commedia
        </div>

        <h1 className="mt-6 max-w-4xl text-left text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Reimagining How Teams
          <br />
          Build Together
        </h1>

        <p className="mt-4 max-w-3xl text-left text-sm leading-relaxed text-zinc-300 md:text-base">
          We help operations, safety and infrastructure teams plan, monitor and act
          in real time – connecting AI-first products with the messy reality of the
          physical world.
        </p>
      </div>

      {/* ----------------------------------------- */}
      {/* HERO IMAGE (UNCHANGED, NO CARD)          */}
      {/* ----------------------------------------- */}
      <div
        ref={heroRef}
        className={`mx-auto -mt-24 max-w-3xl transition-all duration-1000 ${
          heroInView ? 'opacity-100 scale-110' : 'scale-[0.98] opacity-0'
        }`}
      >
        <Image
          src={AboutHero}
          alt="About Commedia"
          className="w-full"
          priority
        />
      </div>

      {/* ----------------------------------------- */}
      {/* VISION / MISSION / IMPACT SECTION        */}
      {/* ----------------------------------------- */}
      <div className="mx-auto mt-30 max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 md:grid-cols-2">
          {/* Left – main narrative */}
          <div
            ref={leftHeadingRef}
            className={`transition-all duration-1000 ${
              leftHeadingInView
                ? 'translate-x-0 opacity-100'
                : '-translate-x-6 opacity-0'
            }`}
          >
            <h2 className="text-3xl font-semibold leading-snug text-white md:text-4xl">
              We&apos;re crafting the project planning fabric for teams that care
              about quality, uptime and safety.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              Commedia sits where AI, safety and real-world infrastructure meet –
              helping teams orchestrate critical operations without losing sight of
              people on the ground.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              From control rooms to field devices, we design products that feel
              opinionated, reliable and calm – even when the environments they run
              in are anything but.
            </p>
          </div>

          {/* Right – three cards with simple grayscale visuals */}
          <div
            ref={rightTextRef}
            className={`space-y-4 transition-all duration-1000 ${
              rightTextInView
                ? 'translate-x-0 opacity-100'
                : 'translate-x-6 opacity-0'
            }`}
          >
            {[
              {
                label: 'Vision',
                color: 'text-emerald-300',
                text: 'A world where industrial operations are as observable and collaborative as modern software teams – with every worker supported by intelligent tools.',
              },
              {
                label: 'Mission',
                color: 'text-sky-300',
                text: 'Build AI-first products that connect control rooms, field workers and assets into a single operational loop, so teams can move from reacting to anticipating.',
              },
              {
                label: 'Impact',
                color: 'text-fuchsia-300',
                text: 'Higher uptime, safer shifts and faster incident response for enterprises across energy, utilities, manufacturing and infrastructure – with measurable gains in reliability and trust.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 rounded-2xl border border-white/8 bg-zinc-950/60 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.85)]"
              >
                {/* grayscale illustration block */}
                <div className="mt-1 h-14 w-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-black shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(148,163,184,0.18),transparent_55%)]" />
                </div>

                <div className="space-y-1">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${item.color}`}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-200">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* --------------------------------------------- */}
        {/* LEADERS SECTION */}
        {/* --------------------------------------------- */}
        <div
          ref={leadersRef}
          className={`mx-auto mt-30 max-w-6xl transition-all duration-1000 ${
            leadersInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
                We care deeply about the quality of our work.
              </h2>
              <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-300">
                A compact team of builders, operators and domain experts – united by a
                bias for shipping and a respect for real-world complexity.
              </p>
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100 shadow-[0_0_28px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400/20"
            >
              We&apos;re hiring
              <span className="text-base">↗</span>
            </Link>
          </div>

          {/* Leaders grid */}
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[
              { img: Leader1, name: 'C S Raghava Rao', role: 'Founder & MD' },
              { img: Leader2, name: 'Shri C Subba Rao', role: 'Director' },
              { img: Leader3, name: 'C V Ramani', role: 'Advisor' },
              { img: Leader4, name: 'G Padmavati', role: 'Advisor – Finance' },
              { img: Leader5, name: 'Harshad Awasare', role: 'COO' },
              { img: Leader6, name: 'Subeeth Kotian', role: 'VP – Commercial' },
              { img: Leader8, name: 'Deepak Trisal', role: 'VP – Service Delivery' },
            ].map((leader, i) => (
              <div
                key={leader.name}
                className={`group rounded-2xl border border-white/8 bg-white/[0.02] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-all duration-700 ${
                  leadersInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    className="h-full w-full object-cover grayscale transition duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium text-white">
                  {leader.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      {/* ----------------------------------------- */}
      {/* GLOBAL & INDIA PRESENCE SECTION          */}
      {/* ----------------------------------------- */}
      <div
        ref={presenceRef}
        className="mx-auto mt-28 grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2"
      >
        <div
          className={`transition-all duration-1000 ${
            presenceInView ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
          }`}
        >
          <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
            Our Footprint
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-4xl">
            Our Global &amp; Domestic Presence
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
            We deliver projects across India and the world. The map cycles
            automatically between domestic and international deployments, reflecting
            our growing footprint across APAC, EMEA and the Americas.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-zinc-300 md:text-base">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Deployments in 14+ countries.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Deep experience across industrial &amp; infrastructure verticals.
            </li>
          </ul>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            presenceInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <PresenceSlider />
        </div>
      </div>

      {/* ----------------------------------------- */}
      {/* ACHIEVEMENTS SECTION                     */}
      {/* ----------------------------------------- */}
      <div
        ref={achievementsRef}
        className="mx-auto mt-28 max-w-6xl"
      >
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2
            className={`text-3xl font-semibold leading-tight text-white md:text-4xl transition-all duration-1000 ${
              achievementsInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            Achievements &amp; Milestones
          </h2>
          <button className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            See more <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: '500+ Projects Delivered',
              subtitle: 'Across multiple industries worldwide.',
              date: 'Milestone · 2024',
              visual: (
                <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
                  <div
                    className="absolute inset-0 opacity-[0.22]"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(148,163,184,0.10) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <div className="relative flex h-full items-center justify-center">
                    <span className="text-[96px] font-semibold tracking-tight text-zinc-500">
                      500+
                    </span>
                  </div>
                </div>
              ),
            },
            {
              title: '20+ Years of Excellence',
              subtitle: 'A legacy of innovation & engineering.',
              date: 'Founded · 2004',
              visual: (
                <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black" />
                  <div className="relative flex h-full items-center justify-center">
                    <div className="grid grid-cols-5 gap-3 px-10">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-4 w-4 rounded-sm bg-zinc-600/40"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: 'Global Client Portfolio',
              subtitle: 'Trusted by enterprises in 14+ countries.',
              date: 'Worldwide · 2024',
              visual: (
                <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
                  <div className="absolute inset-0 bg-radial from-white/[0.06] via-transparent to-black" />
                  <div className="relative flex h-full items-center justify-center">
                    <svg
                      className="h-40 w-40 text-zinc-500/60"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1" />
                      <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.8" />
                      <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="0.8" />
                      <line
                        x1="50"
                        y1="16"
                        x2="50"
                        y2="84"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                      <line
                        x1="16"
                        y1="50"
                        x2="84"
                        y2="50"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                      <ellipse
                        cx="50"
                        cy="50"
                        rx="34"
                        ry="12"
                        stroke="currentColor"
                        strokeWidth="0.6"
                      />
                      <ellipse
                        cx="50"
                        cy="50"
                        rx="12"
                        ry="34"
                        stroke="currentColor"
                        strokeWidth="0.6"
                      />
                    </svg>
                  </div>
                </div>
              ),
            },
            {
              title: 'Cutting-Edge AI Solutions',
              subtitle: 'Transforming businesses with automation.',
              date: 'Innovation · 2024',
              visual: (
                <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-black" />
                  <div className="relative flex h-full items-center justify-center px-10">
                    <div className="flex h-32 w-full items-end justify-between gap-2">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-zinc-500/45"
                          style={{ height: `${30 + i * 4}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: 'Award-Winning Service',
              subtitle: 'Recognized for quality & customer success.',
              date: 'Recognition · 2024',
              visual: (
                <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black" />
                  <div className="relative flex h-full items-center justify-center">
                    <svg
                      className="h-40 w-40 text-zinc-500/65"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <path
                        d="M50 14L36 64L80 40H20L64 64L50 14Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="currentColor"
                        fillOpacity="0.18"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="12"
                        fill="currentColor"
                        fillOpacity="0.28"
                      />
                    </svg>
                  </div>
                </div>
              ),
            },
            {
              title: 'Expanding Global Footprint',
              subtitle: 'Growing presence in APAC, EMEA & USA.',
              date: 'Expansion · 2024',
              visual: (
                <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
                  <div
                    className="absolute inset-0 opacity-[0.5]"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 20%, rgba(148,163,184,0.25) 0, transparent 55%),
                        radial-gradient(circle at 80% 30%, rgba(148,163,184,0.18) 0, transparent 60%),
                        radial-gradient(circle at 40% 80%, rgba(148,163,184,0.16) 0, transparent 55%)
                      `,
                    }}
                  />
                  <div className="relative flex h-full items-center justify-center">
                    <div className="relative flex h-32 w-32 items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-zinc-600/40" />
                      <div className="absolute inset-4 rounded-full border border-zinc-600/30" />
                      <div className="absolute inset-8 rounded-full border border-zinc-600/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute h-full w-px bg-zinc-600/25"
                            style={{ transform: `rotate(${i * 30}deg)` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
          ].map((item, i) => (
            <article
              key={item.title}
              className={`group cursor-pointer transition-all duration-700 ${
                achievementsInView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.visual}
              <div className="pt-5">
                <p className="mb-2 text-xs text-zinc-500">{item.date}</p>
                <h3 className="mb-1 text-xl font-medium text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
