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
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsInView(true);
//       }
//     }, {
//       threshold: 0.1,
//       ...options
//     });

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
//     <div className="relative w-full flex justify-center">
//       <div className="w-[480px] h-[480px] rounded-3xl overflow-hidden shadow-xl 
//                       transition-all duration-700 rotate-0 ">
//         <Image
//           src={images[index]}
//           alt="Global Presence Map"
//           className="w-full h-full object-contain "
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
//           titleInView 
//             ? 'opacity-100 translate-y-0' 
//             : 'opacity-0 translate-y-10'
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
//           heroInView 
//             ? 'opacity-100 scale-100' 
//             : 'opacity-0 scale-95'
//         }`}
//       >
//         <div className="
//           pointer-events-none absolute inset-x-0 bottom-0 h-[45%]
//           bg-gradient-to-t from-[#010000] via-[#010000]/90 to-transparent
//           rounded-b-3xl z-10
//         " />
//         <Image
//           src={AboutHero}
//           alt="About Commedia"
//           className="w-full rounded-3xl shadow-xl"
//           priority
//         />
//       </div>

//       {/* NEXT CONTENT SECTION */}
//       <div className="mx-auto mt-0 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-20 px-4 md:px-0">

//         {/* Left Heading */}
//         <h2 
//           ref={leftHeadingRef}
//           className={`text-3xl md:text-4xl font-semibold text-white leading-snug md:pr-10 transition-all duration-1000 ${
//             leftHeadingInView 
//               ? 'opacity-100 translate-x-0' 
//               : 'opacity-0 -translate-x-10'
//           }`}
//         >
//           We're crafting the project <br />
//           planning tool for teams <br />
//           that care about quality
//         </h2>

//         {/* Right text */}
//         <div 
//           ref={rightTextRef}
//           className={`text-zinc-300 space-y-5 text-base md:text-lg leading-7 transition-all duration-1000 delay-200 ${
//             rightTextInView 
//               ? 'opacity-100 translate-x-0' 
//               : 'opacity-0 translate-x-10'
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
//           leadersInView 
//             ? 'opacity-100 translate-y-0' 
//             : 'opacity-0 translate-y-10'
//         }`}
//       >
//         <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-2xl">
//           We care deeply about the <br /> quality of our work
//         </h2>

//         <p className="mt-6 text-zinc-300 text-lg max-w-3xl leading-7">
//           Our small but mighty team is united by relentless focus...
//         </p>

//         <button className="mt-8 px-5 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
//           We're hiring →
//         </button>

//         {/* Leaders */}
//         <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">

//           {[
//             { img: Leader1, name: 'C S Raghava Rao', role: 'Founder & MD' },
//             { img: Leader2, name: 'Shri C Subba Rao', role: 'Director' },
//             { img: Leader3, name: 'C V Ramani', role: 'Designation' },
//             { img: Leader4, name: 'G Padmavati', role: 'Advisor Finance' },
//             { img: Leader5, name: 'Harshad Awasare', role: 'COO' },
//             { img: Leader6, name: 'Subeeth Kotian', role: 'VP - Commercial' },
//             { img: Leader8, name: 'Deepak Trisal', role: 'VP - Service Delivery' }
//           ].map((leader, i) => (
//             <div 
//               key={i} 
//               className={`text-center transition-all duration-700 ${
//                 leadersInView 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-10'
//               }`}
//               style={{ transitionDelay: `${i * 100}ms` }}
//             >
//               <div className="w-full aspect-square overflow-hidden rounded-2xl">
//                 <Image
//                   src={leader.img}
//                   alt={leader.name}
//                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
//                 />
//               </div>
//               <h3 className="text-white text-base mt-3">{leader.name}</h3>
//               <p className="text-zinc-400 text-xs">{leader.role}</p>
//             </div>
//           ))}

//         </div>
//       </div>

//       {/* GLOBAL & INDIA PRESENCE SECTION */}
//       <div 
//         ref={presenceRef}
//         className="mx-auto max-w-6xl -mt-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
//       >
//         <div className={`transition-all duration-1000 ${
//           presenceInView 
//             ? 'opacity-100 translate-x-0' 
//             : 'opacity-0 -translate-x-10'
//         }`}>
//           <h2 className="text-3xl text-white font-semibold leading-tight">
//             Our Global & Domestic Presence
//           </h2>

//           <p className="mt-5 text-zinc-400 text-lg leading-7">
//             We deliver projects across India and the world.  
//             The map cycles automatically showcasing our footprint.
//           </p>
//         </div>

//         <div className={`transition-all duration-1000 delay-300 ${
//           presenceInView 
//             ? 'opacity-100 scale-100' 
//             : 'opacity-0 scale-90'
//         }`}>
//           <PresenceSlider />
//         </div>
//       </div>

//       {/* ACHIEVEMENTS SECTION */}
//       <div 
//         ref={achievementsRef}
//         className="mx-auto max-w-6xl mt-28"
//       >
//         <div className="flex justify-between items-center mb-12">
//           <h2 className={`text-3xl md:text-4xl font-semibold text-white leading-tight transition-all duration-1000 ${
//             achievementsInView 
//               ? 'opacity-100 translate-y-0' 
//               : 'opacity-0 translate-y-10'
//           }`}>
//             Achievements & Milestones
//           </h2>
//           <button className="text-zinc-400 hover:text-white transition flex items-center gap-2">
//             See more <span>→</span>
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {[
//             {
//               title: "500+ Projects Delivered",
//               subtitle: "Across multiple industries worldwide",
//               date: "Milestone · 2024",
//               visual: (
//                 <div className="w-full h-64 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl flex items-center justify-center">
//                   <div className="text-8xl font-bold text-zinc-600">500+</div>
//                 </div>
//               )
//             },
//             {
//               title: "20+ Years of Excellence",
//               subtitle: "A legacy of innovation & engineering",
//               date: "Founded · 2004",
//               visual: (
//                 <div className="w-full h-64 bg-gradient-to-br from-emerald-950 to-teal-950 rounded-2xl flex items-center justify-center">
//                   <div className="grid grid-cols-5 gap-2 p-8">
//                     {Array.from({ length: 20 }).map((_, i) => (
//                       <div key={i} className="w-4 h-4 rounded-sm bg-emerald-700/40" />
//                     ))}
//                   </div>
//                 </div>
//               )
//             },
//             {
//               title: "Global Client Portfolio",
//               subtitle: "Trusted by enterprises in 14+ countries",
//               date: "Worldwide · 2024",
//               visual: (
//                 <div className="w-full h-64 bg-gradient-to-br from-amber-950 to-orange-950 rounded-2xl flex items-center justify-center">
//                   <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none">
//                     <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" className="text-amber-700/40" />
//                     <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" className="text-amber-700/40" />
//                     <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" className="text-amber-700/40" />
//                     <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" className="text-amber-700/40" />
//                     <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-amber-700/40" />
//                     <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="0.5" className="text-amber-700/40" />
//                     <ellipse cx="50" cy="50" rx="15" ry="40" stroke="currentColor" strokeWidth="0.5" className="text-amber-700/40" />
//                   </svg>
//                 </div>
//               )
//             },
//             {
//               title: "Cutting-Edge AI Solutions",
//               subtitle: "Transforming businesses with automation",
//               date: "Innovation · 2024",
//               visual: (
//                 <div className="w-full h-64 bg-gradient-to-br from-violet-950 to-purple-950 rounded-2xl flex items-center justify-center p-12">
//                   <div className="w-full flex items-end justify-between gap-2 h-32">
//                     {Array.from({ length: 12 }).map((_, i) => (
//                       <div 
//                         key={i} 
//                         className="flex-1 bg-violet-700/30 rounded-t"
//                         style={{ height: `${Math.random() * 100}%` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )
//             },
//             {
//               title: "Award-Winning Service",
//               subtitle: "Recognized for quality & customer success",
//               date: "Recognition · 2024",
//               visual: (
//                 <div className="w-full h-64 bg-gradient-to-br from-yellow-950 to-amber-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
//                   <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
//                     <path 
//                       d="M 50 15 L 35 65 L 80 40 L 20 40 L 65 65 Z" 
//                       fill="currentColor" 
//                       className="text-yellow-700/30"
//                     />
//                     <circle cx="50" cy="50" r="12" fill="currentColor" className="text-yellow-600/40" />
//                   </svg>
//                   <div className="absolute bottom-8 w-full">
//                     <svg className="w-full h-16" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none">
//                       <path 
//                         d="M 0 30 Q 50 10, 100 30 T 200 30" 
//                         stroke="currentColor" 
//                         strokeWidth="0.5" 
//                         className="text-yellow-700/20"
//                         fill="none"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               )
//             },
//             {
//               title: "Expanding Global Footprint",
//               subtitle: "Growing presence in APAC, EMEA & USA",
//               date: "Expansion · 2024",
//               visual: (
//                 <div className="w-full h-64 bg-gradient-to-br from-cyan-950 to-blue-950 rounded-2xl flex items-center justify-center overflow-hidden relative">
//                   {Array.from({ length: 30 }).map((_, i) => (
//                     <div 
//                       key={i} 
//                       className="absolute w-2 h-2 bg-cyan-600/30 rounded-full"
//                       style={{
//                         left: `${Math.random() * 100}%`,
//                         top: `${Math.random() * 100}%`,
//                       }}
//                     />
//                   ))}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute w-px bg-cyan-600/20"
//                         style={{
//                           height: `${60 + i * 20}%`,
//                           transform: `rotate(${i * 36}deg)`,
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={`bg-black rounded-2xl overflow-hidden hover:opacity-90 
//                          transition-all duration-700 cursor-pointer ${
//                 achievementsInView 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-10'
//               }`}
//               style={{ transitionDelay: `${i * 100}ms` }}
//             >
//               {/* Visual Section - Just the image/design */}
//               {item.visual}

//               {/* Text Section Below */}
//               <div className="p-6 bg-black">
//                 <p className="text-zinc-500 text-xs mb-3">{item.date}</p>
//                 <h3 className="text-white text-xl font-medium mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-zinc-400 text-sm leading-relaxed">
//                   {item.subtitle}
//                 </p>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>

//     </section>
//   );
// }




//pp//
'use client';

import Image from 'next/image';
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
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isInView };
}

// ---------------------------------------------
// PRESENCE SLIDER COMPONENT
// ---------------------------------------------
function PresenceSlider() {
  const images = [IndiaUp, GlobalUp];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full justify-center">
      <div className="h-[480px] w-[480px] overflow-hidden rounded-3xl shadow-xl transition-all duration-700">
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
    <section className="relative w-full overflow-hidden bg-[#010000] px-6 py-18 md:px-8 lg:px-16">
      {/* Title */}
      <div
        ref={titleRef}
        className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
          titleInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
          Reimagining How Teams <br /> Build Together
        </h1>
      </div>

      {/* Hero */}
      <div
        ref={heroRef}
        className={`relative mx-auto -mt-8 max-w-6xl transition-all duration-1000 delay-200 ${
          heroInView ? 'opacity-100 scale-100' : 'scale-95 opacity-0'
        }`}
      >
        <div
          className="
          pointer-events-none absolute inset-x-0 bottom-0 h-[45%]
          z-10 rounded-b-3xl bg-gradient-to-t from-[#010000] via-[#010000]/90 to-transparent
        "
        />
        <Image
          src={AboutHero}
          alt="About Commedia"
          className="w-full rounded-3xl shadow-xl"
          priority
        />
      </div>

      {/* NEXT CONTENT SECTION */}
      <div className="mx-auto mt-0 grid max-w-5xl grid-cols-1 gap-20 px-4 md:grid-cols-2 md:px-0">
        {/* Left Heading */}
        <h2
          ref={leftHeadingRef}
          className={`text-3xl md:text-4xl font-semibold text-white leading-snug md:pr-10 transition-all duration-1000 ${
            leftHeadingInView
              ? 'opacity-100 translate-x-0'
              : '-translate-x-10 opacity-0'
          }`}
        >
          We're crafting the project <br />
          planning tool for teams <br />
          that care about quality
        </h2>

        {/* Right text */}
        <div
          ref={rightTextRef}
          className={`space-y-5 text-base leading-7 text-zinc-300 transition-all duration-1000 delay-200 md:text-lg ${
            rightTextInView
              ? 'opacity-100 translate-x-0'
              : 'translate-x-10 opacity-0'
          }`}
        >
          <p>
            Computers used to be magical. But much of that magic has been lost over time,
            replaced by subpar tools and practices that slow teams down and hold back great
            work. Frustrated with the status quo, we decided to build something better.
          </p>

          <p>
            What started as a simple issue tracker has since evolved into a powerful project
            and issue tracking system that streamlines workflows across the entire product
            development process. We think of our platform not as a better tool, but as a
            better way to build software.
          </p>

          <p>
            Today, thousands of teams around the globe — from early-stage startups to public
            companies — use our solutions. We help teams focus on what they do best:
            crafting exceptional digital experiences.
          </p>
        </div>
      </div>

      {/* LEADERS SECTION */}
      <div
        ref={leadersRef}
        className={`mx-auto mt-26 max-w-5xl transition-all duration-1000 ${
          leadersInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-2xl">
          We care deeply about the <br /> quality of our work
        </h2>

        <p className="mt-6 text-lg leading-7 text-zinc-300 max-w-3xl">
          Our small but mighty team is united by relentless focus...
        </p>

        <button className="mt-8 rounded-lg border border-white/20 bg-white/10 px-5 py-2 text-white transition hover:bg-white/20">
          We're hiring →
        </button>

        {/* Leaders */}
        <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {[
            { img: Leader1, name: 'C S Raghava Rao', role: 'Founder & MD' },
            { img: Leader2, name: 'Shri C Subba Rao', role: 'Director' },
            { img: Leader3, name: 'C V Ramani', role: 'Designation' },
            { img: Leader4, name: 'G Padmavati', role: 'Advisor Finance' },
            { img: Leader5, name: 'Harshad Awasare', role: 'COO' },
            { img: Leader6, name: 'Subeeth Kotian', role: 'VP - Commercial' },
            { img: Leader8, name: 'Deepak Trisal', role: 'VP - Service Delivery' },
          ].map((leader, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                leadersInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  className="h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
              <h3 className="mt-3 text-base text-white">{leader.name}</h3>
              <p className="text-xs text-zinc-400">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GLOBAL & INDIA PRESENCE SECTION */}
      <div
        ref={presenceRef}
        className="mx-auto -mt-4 grid max-w-6xl grid-cols-1 items-center gap-20 md:grid-cols-2"
      >
        <div
          className={`transition-all duration-1000 ${
            presenceInView ? 'opacity-100 translate-x-0' : '-translate-x-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-semibold leading-tight text-white">
            Our Global & Domestic Presence
          </h2>

          <p className="mt-5 text-lg leading-7 text-zinc-400">
            We deliver projects across India and the world.
            The map cycles automatically showcasing our footprint.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            presenceInView ? 'opacity-100 scale-100' : 'scale-90 opacity-0'
          }`}
        >
          <PresenceSlider />
        </div>
      </div>

      {/* ACHIEVEMENTS SECTION */}
      {/* ACHIEVEMENTS SECTION */}
<div
  ref={achievementsRef}
  className="mx-auto max-w-6xl mt-28"
>
  <div className="flex justify-between items-center mb-12">
    <h2
      className={`text-3xl md:text-4xl font-semibold text-white leading-tight transition-all duration-1000 ${
        achievementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Achievements & Milestones
    </h2>
    <button className="text-zinc-400 hover:text-white transition flex items-center gap-2 text-sm">
      See more <span>→</span>
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {[
      {
        title: '500+ Projects Delivered',
        subtitle: 'Across multiple industries worldwide',
        date: 'Milestone · 2024',
        visual: (
          <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
            {/* subtle grid */}
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
        subtitle: 'A legacy of innovation & engineering',
        date: 'Founded · 2004',
        visual: (
          <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
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
        subtitle: 'Trusted by enterprises in 14+ countries',
        date: 'Worldwide · 2024',
        visual: (
          <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
            <div className="absolute inset-0 bg-radial from-white/[0.06] via-transparent to-black" />
            <div className="relative flex h-full items-center justify-center">
              <svg
                className="w-40 h-40 text-zinc-500/60"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="0.8" />
                <line x1="50" y1="16" x2="50" y2="84" stroke="currentColor" strokeWidth="0.8" />
                <line x1="16" y1="50" x2="84" y2="50" stroke="currentColor" strokeWidth="0.8" />
                <ellipse cx="50" cy="50" rx="34" ry="12" stroke="currentColor" strokeWidth="0.6" />
                <ellipse cx="50" cy="50" rx="12" ry="34" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </div>
          </div>
        ),
      },
      {
        title: 'Cutting-Edge AI Solutions',
        subtitle: 'Transforming businesses with automation',
        date: 'Innovation · 2024',
        visual: (
          <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-black" />
            <div className="relative flex h-full items-center justify-center px-10">
              <div className="flex w-full items-end justify-between gap-2 h-32">
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
        subtitle: 'Recognized for quality & customer success',
        date: 'Recognition · 2024',
        visual: (
          <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black" />
            <div className="relative flex h-full items-center justify-center">
              <svg
                className="w-40 h-40 text-zinc-500/65"
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
                <circle cx="50" cy="50" r="12" fill="currentColor" fillOpacity="0.28" />
              </svg>
            </div>
          </div>
        ),
      },
      {
        title: 'Expanding Global Footprint',
        subtitle: 'Growing presence in APAC, EMEA & USA',
        date: 'Expansion · 2024',
        visual: (
          <div className="relative h-[260px] w-full rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(148,163,184,0.25) 0, transparent 55%),
                  radial-gradient(circle at 80% 30%, rgba(148,163,184,0.18) 0, transparent 60%),
                  radial-gradient(circle at 40% 80%, rgba(148,163,184,0.16) 0, transparent 55%)
                `,
              }}
            />
            <div className="relative flex h-full items-center justify-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-zinc-600/40" />
                <div className="absolute inset-4 rounded-full border border-zinc-600/30" />
                <div className="absolute inset-8 rounded-full border border-zinc-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-full bg-zinc-600/25"
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
        key={i}
        className={`group transition-all duration-700 cursor-pointer ${
          achievementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${i * 100}ms` }}
      >
        {/* Visual card */}
        {item.visual}

        {/* Text below card */}
        <div className="pt-6">
          <p className="text-xs text-zinc-500 mb-2">
            {item.date}
          </p>
          <h3 className="text-xl md:text-2xl font-medium text-white mb-1 group-hover:text-white">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
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
