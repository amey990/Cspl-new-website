// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
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

// import VisionImg from '../../../assets/Vision.png';
// import MissionImg from '../../../assets/Mission.png';
// import ImpactImg from '../../../assets/Impact.png';

// // Presence Images
// import IndiaUp from '../../../assets/Aboutus/Indiamap.png';
// import GlobalUp from '../../../assets/Aboutus/Global.png';

// // Achievement Images (Corrected spelling and folder paths)
// import Achievement1 from '../../../assets/Achivement1Groundstation.png';
// import Achievement2 from '../../../assets/Achivement2Panindiasdwan.png';
// import Achievement3 from '../../../assets/Achivement3Wifiandlan.png';
// import Achievement4 from '../../../assets/Achievement4train.png';
// import Achievement5 from '../../../assets/Achievement5datacentre.png';
// import Achievement6 from '../../../assets/Achievement6Airport.png';

// // ---------------------------------------------
// // INTERSECTION OBSERVER HOOK
// // ---------------------------------------------
// function useInView(options: IntersectionObserverInit = {}) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsInView(true);
//       },
//       { threshold: 0.1, ...options }
//     );

//     const currentRef = ref.current;
//     if (currentRef) observer.observe(currentRef);

//     return () => {
//       if (currentRef) observer.unobserve(currentRef);
//     };
//   }, [options]);

//   return { ref, isInView };
// }

// // ---------------------------------------------
// // PRESENCE SLIDER COMPONENT
// // ---------------------------------------------
// function PresenceSlider() {
//   const images = [IndiaUp, GlobalUp];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setIndex((prev) => (prev + 1) % images.length),
//       3500
//     );
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative flex w-full justify-center">
//       {/* show raw maps, no extra card */}
//       <div className="h-[420px] w-[480px]">
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
//     <section className="relative w-full overflow-hidden bg-[#010000] px-6 pb-24 pt-16 md:px-8 lg:px-16">
//       {/* ----------------------------------------- */}
//       {/* HERO TITLE + CHIP                        */}
//       {/* ----------------------------------------- */}
//       <div
//         ref={titleRef}
//         className={`mx-auto max-w-6xl transition-all duration-1000 ${
//           titleInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//         }`}
//       >
//         <div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
//           <span className="mr-2 h-2.5 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
//           About Commedia
//         </div>

//         <h1 className="mt-6 max-w-4xl text-left text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
//           Reimagining How Teams
//           <br />
//           Build Together
//         </h1>

//         <p className="mt-4 max-w-3xl text-left text-sm leading-relaxed text-zinc-300 md:text-base">
//           We help operations, safety and infrastructure teams plan, monitor and act
//           in real time  connecting AI-first products with the messy reality of the
//           physical world.
//         </p>
//       </div>

//       {/* ----------------------------------------- */}
//       {/* HERO IMAGE (UNCHANGED, NO CARD)          */}
//       {/* ----------------------------------------- */}
//       <div
//         ref={heroRef}
//         className={`mx-auto -mt-24 max-w-3xl transition-all duration-1000 ${
//           heroInView ? 'opacity-100 scale-110' : 'scale-[0.98] opacity-0'
//         }`}
//       >
//         <Image
//           src={AboutHero}
//           alt="About Commedia"
//           className="w-full"
//           priority
//         />
//       </div>

//       {/* ----------------------------------------- */}
//       {/* VISION / MISSION / IMPACT SECTION        */}
//       {/* ----------------------------------------- */}
//       <div className="mx-auto mt-30 max-w-6xl">
//         <div className="grid grid-cols-1 gap-12 lg:gap-16 md:grid-cols-2">
//           {/* Left  main narrative */}
//           <div
//             ref={leftHeadingRef}
//             className={`transition-all duration-1000 ${
//               leftHeadingInView
//                 ? 'translate-x-0 opacity-100'
//                 : '-translate-x-6 opacity-0'
//             }`}
//           >
//             <h2 className="text-3xl font-semibold leading-snug text-white md:text-4xl">
//               We&apos;re crafting the project planning fabric for teams that care
//               about quality, uptime and safety.
//             </h2>
//             <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//               Commedia sits where AI, safety and real-world infrastructure meet 
//               helping teams orchestrate critical operations without losing sight of
//               people on the ground.
//             </p>
//             <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
//               From control rooms to field devices, we design products that feel
//               opinionated, reliable and calm  even when the environments they run
//               in are anything but.
//             </p>
//           </div>

//           {/* Right  three cards with simple outline visuals + images */}
//           <div
//             ref={rightTextRef}
//             className={`space-y-4 transition-all duration-1000 ${
//               rightTextInView
//                 ? 'translate-x-0 opacity-100'
//                 : 'translate-x-6 opacity-0'
//             }`}
//           >
//             {[
//               {
//                 label: 'Vision',
//                 color: 'text-emerald-300',
//                 text: 'A world where industrial operations are as observable and collaborative as modern software teams  with every worker supported by intelligent tools.',
//                 image: VisionImg,
//               },
//               {
//                 label: 'Mission',
//                 color: 'text-sky-300',
//                 text: 'Build AI-first products that connect control rooms, field workers and assets into a single operational loop, so teams can move from reacting to anticipating.',
//                 image: MissionImg,
//               },
//               {
//                 label: 'Impact',
//                 color: 'text-fuchsia-300',
//                 text: 'Higher uptime, safer shifts and faster incident response for enterprises across energy, utilities, manufacturing and infrastructure  with measurable gains in reliability and trust.',
//                 image: ImpactImg,
//               },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className="flex gap-4 rounded-2xl border border-white/8 bg-zinc-950/60 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.85)]"
//               >
//                 {/* outline image block */}
//                 <div className="mt-1 h-14 w-14 flex-shrink-0 rounded-xl border border-white/18 bg-transparent overflow-hidden">
//                   <Image
//                     src={item.image}
//                     alt={`${item.label} illustration`}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <p
//                     className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${item.color}`}
//                   >
//                     {item.label}
//                   </p>
//                   <p className="text-sm leading-relaxed text-zinc-200">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --------------------------------------------- */}
//       {/* LEADERS SECTION */}
//       {/* --------------------------------------------- */}
//       <div
//         ref={leadersRef}
//         className={`mx-auto mt-30 max-w-6xl transition-all duration-1000 ${
//           leadersInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}
//       >
//         <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
//               We care deeply about the quality of our work.
//             </h2>
//             <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-300">
//               A compact team of builders, operators and domain experts  united by a
//               bias for shipping and a respect for real-world complexity.
//             </p>
//           </div>

//           <Link
//             href="/Careers"
//             className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100 shadow-[0_0_28px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400/20"
//           >
//             We&apos;re hiring
//             <span className="text-base">↗</span>
//           </Link>
//         </div>

//         {/* Leaders grid */}
//         <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//           {[
//             { img: Leader1, name: 'C S Raghava Rao', role: 'Founder & MD' },
//             { img: Leader2, name: 'Shri C Subba Rao', role: 'Director' },
//             { img: Leader3, name: 'C V Ramani', role: 'Advisor' },
//             { img: Leader4, name: 'G Padmavati', role: 'Advisor  Finance' },
//             { img: Leader5, name: 'Harshad Awasare', role: 'COO' },
//             { img: Leader6, name: 'Subeeth Kotian', role: 'VP  Commercial' },
//             { img: Leader8, name: 'Deepak Trisal', role: 'VP  Service Delivery' },
//           ].map((leader, i) => (
//             <div
//               key={leader.name}
//               className={`group rounded-2xl border border-white/8 bg-white/[0.02] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-all duration-700 ${
//                 leadersInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//               }`}
//               style={{ transitionDelay: `${i * 90}ms` }}
//             >
//               <div className="aspect-square w-full overflow-hidden rounded-xl">
//                 <Image
//                   src={leader.img}
//                   alt={leader.name}
//                   className="h-full w-full object-cover grayscale transition duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
//                 />
//               </div>
//               <h3 className="mt-3 text-sm font-medium text-white">
//                 {leader.name}
//               </h3>
//               <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
//                 {leader.role}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ----------------------------------------- */}
//       {/* GLOBAL & INDIA PRESENCE SECTION          */}
//       {/* ----------------------------------------- */}
//       <div
//         ref={presenceRef}
//         className="mx-auto mt-20 grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2"
//       >
//         <div
//           className={`transition-all duration-1000 ${
//             presenceInView ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
//           }`}
//         >
//           <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
//             Our Footprint
//           </p>

//           <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-4xl">
//             Our Global &amp; Domestic Presence
//           </h2>

//           <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
//             We deliver projects across India and the world. The map cycles
//             automatically between domestic and international deployments, reflecting
//             our growing footprint across APAC, EMEA and the Americas.
//           </p>

//           <ul className="mt-5 space-y-2 text-sm text-zinc-300 md:text-base">
//             <li className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//               Deployments in 14+ countries.
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//               Deep experience across industrial &amp; infrastructure verticals.
//             </li>
//           </ul>
//         </div>

//         <div
//           className={`transition-all duration-1000 delay-200 ${
//             presenceInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//           }`}
//         >
//           <PresenceSlider />
//         </div>
//       </div>

//       {/* ----------------------------------------- */}
//       {/* ACHIEVEMENTS SECTION                     */}
//       {/* ----------------------------------------- */}
//       <div
//         ref={achievementsRef}
//         className="mx-auto mt-28 max-w-6xl"
//       >
//         <div className="mb-10 flex items-center justify-between gap-4">
//           <h2
//             className={`text-3xl font-semibold leading-tight text-white md:text-4xl transition-all duration-1000 ${
//               achievementsInView
//                 ? 'translate-y-0 opacity-100'
//                 : 'translate-y-6 opacity-0'
//             }`}
//           >
//             Achievements &amp; Milestones
//           </h2>
         
//         </div>

//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               title: 'Supporting Leo satellite with AWS Ground Station',
//               subtitle: "We're proud to support a prestigious government space mission with 24/7 ground station services via AWS Ground Station, enabling real-time satellite communication for complex orbital maneuvers",
              
//               visual: (
//                 <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
//                   <Image 
//                     src={Achievement1} 
//                     alt="Achievement 1" 
//                     className="h-full w-full object-cover" 
//                   />
//                 </div>
//               ),
//             },
//             {
//               title: 'PAN-India SD-WAN Rollout',
//               subtitle: 'We successfully executed a PAN-India SD-WAN rollout using FortiGate, delivering secure, optimized, and centrally managed network connectivity across all locations',
              
//               visual: (
//                 <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
//                   <Image 
//                     src={Achievement2} 
//                     alt="Achievement 2" 
//                     className="h-full w-full object-cover" 
//                   />
//                 </div>
//               ),
//             },
//             {
//               title: 'Managed Wi-Fi & LAN Deployment',
//               subtitle: 'We deliver end-to-end managed Wi-Fi and LAN deployment services, ensuring secure, high-performance connectivity across enterprise environments.',
              
//               visual: (
//                 <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
//                   <Image 
//                     src={Achievement3} 
//                     alt="Achievement 3" 
//                     className="h-full w-full object-cover" 
//                   />
//                 </div>
//               ),
//             },
//             {
//               title: 'Pan-India Wi-Fi Rollout for Indian Railways',
//               subtitle: 'Managed the Wi-Fi network rollout across 4,791 railway stations nationwide within stringent timelines, showcasing superior project management and technical expertise.',
              
//               visual: (
//                 <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
//                   <Image 
//                     src={Achievement4} 
//                     alt="Achievement 4" 
//                     className="h-full w-full object-cover" 
//                   />
//                 </div>
//               ),
//             },
//             {
//               title: 'Datacenter & Network Ops for Indian Bank',
//               subtitle: 'Provided 24/7 network monitoring and management for 1,900+ branches, improving uptime and operational efficiency.',
              
//               visual: (
//                 <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
//                   <Image 
//                     src={Achievement5} 
//                     alt="Achievement 5" 
//                     className="h-full w-full object-cover" 
//                   />
//                 </div>
//               ),
//             },
//             {
//               title: 'Enterprise Network Upgrade for Hyderabad Airport',
//               subtitle: 'Upgraded wireless and data center infra at Hyderabad International Airport using Cisco Catalyst, enabling scalability and security.',
              
//               visual: (
//                 <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900">
//                   <Image 
//                     src={Achievement6} 
//                     alt="Achievement 6" 
//                     className="h-full w-full object-cover" 
//                   />
//                 </div>
//               ),
//             },
//           ].map((item, i) => (
//             <article
//               key={item.title}
//               className={`group cursor-pointer transition-all duration-700 ${
//                 achievementsInView
//                   ? 'translate-y-0 opacity-100'
//                   : 'translate-y-6 opacity-0'
//               }`}
//               style={{ transitionDelay: `${i * 100}ms` }}
//             >
//               {item.visual}
//               <div className="pt-5">
                
//                 <h3 className="mb-1 text-xl font-medium text-white md:text-2xl">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-zinc-400">
//                   {item.subtitle}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


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

import VisionImg from '../../../assets/Vision.png';
import MissionImg from '../../../assets/Mission.png';
import ImpactImg from '../../../assets/Impact.png';

// Presence Images
import IndiaUp from '../../../assets/Aboutus/Indiamap.png';
import GlobalUp from '../../../assets/Aboutus/Global.png';

// Achievement Images
import Achievement1 from '../../../assets/Achivement1Groundstation.png';
import Achievement2 from '../../../assets/Achivement2Panindiasdwan.png';
import Achievement3 from '../../../assets/Achivement3Wifiandlan.png';
import Achievement4 from '../../../assets/Achievement4train.png';
import Achievement5 from '../../../assets/Achievement5datacentre.png';
import Achievement6 from '../../../assets/Achievement6Airport.png';

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
      <div className="relative h-[280px] w-full max-w-[420px] sm:h-[340px] sm:max-w-[460px] md:h-[380px] md:max-w-[480px]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt={i === 0 ? 'India Presence Map' : 'Global Presence Map'}
              className="h-full w-full object-contain"
              sizes="(min-width: 768px) 480px, (min-width: 640px) 460px, 100vw"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-5 bg-emerald-400' : 'w-1.5 bg-zinc-600'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
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
    <section className="relative w-full overflow-hidden bg-[#010000]">
      {/* GLOBAL GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 md:px-8 lg:px-16">

        {/* ----------------------------------------- */}
        {/* HERO TITLE + CHIP                         */}
        {/* ----------------------------------------- */}
        <div
          ref={titleRef}
          className={`mx-auto max-w-6xl transition-all duration-1000 ${
            titleInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200 sm:px-4 sm:text-xs">
            <span className="mr-2 h-2 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] sm:h-2.5 sm:w-4" />
            About Commedia
          </div>

          <h1 className="mt-4 max-w-4xl text-left text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Reimagining How Teams
            <br />
            Build Together
          </h1>

          <p className="mt-3 max-w-3xl text-left text-sm leading-relaxed text-zinc-300 sm:mt-4 md:text-base">
            We help operations, safety and infrastructure teams plan, monitor and act
            in real time  connecting AI-first products with the messy reality of the
            physical world.
          </p>
        </div>

        {/* ----------------------------------------- */}
        {/* HERO IMAGE                                */}
        {/* ----------------------------------------- */}
        <div
          ref={heroRef}
          className={`mx-auto mt-8 max-w-3xl transition-all duration-1000 sm:mt-10 md:-mt-16 lg:-mt-24 ${
            heroInView ? 'opacity-100 scale-100 sm:scale-110' : 'scale-[0.98] opacity-0'
          }`}
        >
          <Image
            src={AboutHero}
            alt="About Commedia"
            className="w-full"
            priority
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        {/* ----------------------------------------- */}
        {/* VISION / MISSION / IMPACT SECTION         */}
        {/* ----------------------------------------- */}
        <div className="mx-auto mt-16 max-w-6xl sm:mt-20 md:mt-24 lg:mt-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">

            {/* Left  main narrative */}
            <div
              ref={leftHeadingRef}
              className={`transition-all duration-1000 ${
                leftHeadingInView
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-6 opacity-0'
              }`}
            >
              <h2 className="text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
                We&apos;re crafting the project planning fabric for teams that care
                about quality, uptime and safety.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                Commedia sits where AI, safety and real-world infrastructure meet 
                helping teams orchestrate critical operations without losing sight of
                people on the ground.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                From control rooms to field devices, we design products that feel
                opinionated, reliable and calm  even when the environments they run
                in are anything but.
              </p>
            </div>

            {/* Right  three cards */}
            <div
              ref={rightTextRef}
              className={`space-y-3 transition-all duration-1000 sm:space-y-4 ${
                rightTextInView
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-6 opacity-0'
              }`}
            >
              {[
                {
                  label: 'Vision',
                  color: 'text-emerald-300',
                  text: 'A world where industrial operations are as observable and collaborative as modern software teams  with every worker supported by intelligent tools.',
                  image: VisionImg,
                },
                {
                  label: 'Mission',
                  color: 'text-sky-300',
                  text: 'Build AI-first products that connect control rooms, field workers and assets into a single operational loop, so teams can move from reacting to anticipating.',
                  image: MissionImg,
                },
                {
                  label: 'Impact',
                  color: 'text-fuchsia-300',
                  text: 'Higher uptime, safer shifts and faster incident response for enterprises across energy, utilities, manufacturing and infrastructure  with measurable gains in reliability and trust.',
                  image: ImpactImg,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 rounded-2xl border border-white/8 bg-zinc-950/60 p-3 shadow-[0_18px_70px_rgba(0,0,0,0.85)] sm:gap-4 sm:p-4"
                >
                  <div className="mt-0.5 h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-white/18 bg-transparent sm:h-14 sm:w-14">
                    <Image
                      src={item.image}
                      alt={`${item.label} illustration`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px] ${item.color}`}>
                      {item.label}
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-200 sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ----------------------------------------- */}
        {/* LEADERS SECTION                           */}
        {/* ----------------------------------------- */}
        <div
          ref={leadersRef}
          className={`mx-auto mt-20 max-w-6xl transition-all duration-1000 sm:mt-24 md:mt-28 ${
            leadersInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-5 sm:gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                We care deeply about the quality of our work.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:mt-4 md:text-base">
                A compact team of builders, operators and domain experts  united by a
                bias for shipping and a respect for real-world complexity.
              </p>
            </div>

            <Link
              href="/Careers"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-100 shadow-[0_0_28px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400/20 sm:px-5 sm:text-xs"
            >
              We&apos;re hiring
              <span className="text-sm sm:text-base">↗</span>
            </Link>
          </div>

          {/* Leaders grid  2 cols mobile, 3 tablet, 4 md, 5 lg */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-7 lg:grid-cols-5 lg:mt-14 lg:gap-8">
            {[
              { img: Leader1, name: 'C S Raghava Rao', role: 'Founder & MD' },
              { img: Leader2, name: 'Shri C Subba Rao', role: 'Director' },
              { img: Leader3, name: 'C V Ramani', role: 'Advisor' },
              { img: Leader4, name: 'G Padmavati', role: 'Advisor  Finance' },
              { img: Leader5, name: 'Harshad Awasare', role: 'COO' },
              { img: Leader6, name: 'Subeeth Kotian', role: 'VP  Commercial' },
              { img: Leader8, name: 'Deepak Trisal', role: 'VP  Service Delivery' },
            ].map((leader, i) => (
              <div
                key={leader.name}
                className={`group rounded-2xl border border-white/8 bg-white/[0.02] p-2.5 shadow-[0_20px_70px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-all duration-700 sm:p-3 ${
                  leadersInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    className="h-full w-full object-cover grayscale transition duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <h3 className="mt-2 text-xs font-medium leading-snug text-white sm:mt-3 sm:text-sm">
                  {leader.name}
                </h3>
                <p className="text-[9px] uppercase tracking-[0.14em] text-zinc-400 sm:text-[11px] sm:tracking-[0.16em]">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------------------- */}
        {/* GLOBAL & INDIA PRESENCE SECTION           */}
        {/* ----------------------------------------- */}
        <div
          ref={presenceRef}
          className="mx-auto mt-20 max-w-6xl sm:mt-24 md:mt-28"
        >
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div
              className={`transition-all duration-1000 ${
                presenceInView ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
              }`}
            >
              <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200 sm:px-4 sm:text-xs">
                Our Footprint
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl md:text-4xl">
                Our Global &amp; Domestic Presence
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-300 sm:mt-4 md:text-base">
                We deliver projects across India and the world. The map cycles
                automatically between domestic and international deployments, reflecting
                our growing footprint across APAC, EMEA and the Americas.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-zinc-300 sm:mt-5 md:text-base">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  Deployments in 14+ countries.
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                  Deep experience across industrial &amp; infrastructure verticals.
                </li>
              </ul>
            </div>

            <div
              className={`pb-8 transition-all duration-1000 delay-200 md:pb-0 ${
                presenceInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <PresenceSlider />
            </div>
          </div>
        </div>

        {/* ----------------------------------------- */}
        {/* ACHIEVEMENTS SECTION                      */}
        {/* ----------------------------------------- */}
        <div
          ref={achievementsRef}
          className="mx-auto mt-20 max-w-6xl sm:mt-24 md:mt-28"
        >
          <div className="mb-8 sm:mb-10">
            <h2
              className={`text-2xl font-semibold leading-tight text-white transition-all duration-1000 sm:text-3xl md:text-4xl ${
                achievementsInView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
            >
              Achievements &amp; Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {[
              {
                title: 'Supporting Leo satellite with AWS Ground Station',
                subtitle:
                  "We're proud to support a prestigious government space mission with 24/7 ground station services via AWS Ground Station, enabling real-time satellite communication for complex orbital maneuvers",
                image: Achievement1,
                alt: 'Ground Station Achievement',
              },
              {
                title: 'PAN-India SD-WAN Rollout',
                subtitle:
                  'We successfully executed a PAN-India SD-WAN rollout using FortiGate, delivering secure, optimized, and centrally managed network connectivity across all locations',
                image: Achievement2,
                alt: 'Pan India SD-WAN Achievement',
              },
              {
                title: 'Managed Wi-Fi & LAN Deployment',
                subtitle:
                  'We deliver end-to-end managed Wi-Fi and LAN deployment services, ensuring secure, high-performance connectivity across enterprise environments.',
                image: Achievement3,
                alt: 'WiFi and LAN Achievement',
              },
              {
                title: 'Pan-India Wi-Fi Rollout for Indian Railways',
                subtitle:
                  'Managed the Wi-Fi network rollout across 4,791 railway stations nationwide within stringent timelines, showcasing superior project management and technical expertise.',
                image: Achievement4,
                alt: 'Indian Railways WiFi Achievement',
              },
              {
                title: 'Datacenter & Network Ops for Indian Bank',
                subtitle:
                  'Provided 24/7 network monitoring and management for 1,900+ branches, improving uptime and operational efficiency.',
                image: Achievement5,
                alt: 'Datacenter Achievement',
              },
              {
                title: 'Enterprise Network Upgrade for Hyderabad Airport',
                subtitle:
                  'Upgraded wireless and data center infra at Hyderabad International Airport using Cisco Catalyst, enabling scalability and security.',
                image: Achievement6,
                alt: 'Airport Network Achievement',
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
                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 sm:h-[240px] md:h-[260px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {/* subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl" />
                </div>
                <div className="pt-4">
                  <h3 className="mb-1.5 text-base font-medium text-white sm:text-lg md:text-xl lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}