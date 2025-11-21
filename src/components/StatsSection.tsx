// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';

// export default function TechnologiesStats() {
//   const [hoveredTech, setHoveredTech] = useState<number | null>(null);

//   const stats = [
//     { label: 'Founded in', value: '2012' },
//     { label: 'Projects completed', value: '100+' },
//     { label: 'Team size', value: '150+' },
//     { label: 'Countries served', value: '100+' },
//   ];

//   const technologies = [
//     { name: 'Vitejs', color: '#646CFF', icon: '⚡' },
//     { name: 'React', color: '#61DAFB', icon: '⚛' },
//     { name: 'Angular', color: '#DD0031', icon: '🅰' },
//     { name: 'Vue', color: '#42B883', icon: 'V' },
//     { name: 'Svelte', color: '#FF3E00', icon: '🔥' },
//     { name: 'Sass', color: '#CC6699', icon: 'S' },
//     { name: 'Redux', color: '#764ABC', icon: '◉' },
//     { name: 'Apollo', color: '#311C87', icon: '▲' },
//     { name: 'Remix', color: '#FFFFFF', icon: 'R' },
//     { name: 'Nuxt', color: '#00DC82', icon: '△' },
//     { name: 'Next', color: '#0070F3', icon: '◆' },
//     { name: 'Preact', color: '#673AB8', icon: '⚛' },
//     { name: 'Astro', color: '#FF5D01', icon: '△' },
//     { name: 'Playwright', color: '#2EAD33', icon: '🎭' },
//     { name: 'Storybook', color: '#FF4785', icon: 'S' },
//     { name: 'Laravel', color: '#FF2D20', icon: 'L' },
//     { name: 'Polymer', color: '#FF4470', icon: '◇' },
//     { name: 'Linear', color: '#5E6AD2', icon: '◧' },
//     { name: 'Ember', color: '#E04E39', icon: 'e' },
//     { name: 'Supabase', color: '#3ECF8E', icon: '🔥' },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#0A0B0C] px-6 py-20 md:px-8 lg:px-16 lg:py-28">
//       {/* --- Top lighting (identical recipe to Products) --- */}
//       <div aria-hidden className="pointer-events-none absolute inset-0">
//         {/* neutral slate wash */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'radial-gradient(55% 45% at 50% 0%, rgba(71,85,105,0.08) 0%, rgba(71,85,105,0) 70%)',
//             filter: 'blur(50px)',
//           }}
//         />
//         {/* soft top glow */}
//         <div
//           className="absolute inset-0 opacity-[.25]"
//           style={{
//             background:
//               'radial-gradient(60% 40% at 50% 0%, rgba(100,116,139,.06), rgba(100,116,139,0) 70%)',
//             filter: 'blur(40px)',
//           }}
//         />
//       </div>

//       <div className="mx-auto max-w-[1400px]">
//         <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
//           {/* Left: stats */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="flex flex-col justify-center"
//           >
//             <h2
//               className="mb-12 text-[32px] font-medium  text-white md:text-[40px] "
//               style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial' }}
//             >
//               Delivering excellence
//               <br /> since day one
//             </h2>
            

//             <div className="space-y-8">
//               {stats.map((stat, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.5 }}
//                   transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
//                   className="group"
//                 >
//                   <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
//                     <span className="text-[15px] text-[#6B7280]" style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial' }}>
//                       {stat.label}
//                     </span>
//                     <span className="text-[28px] font-medium text-white md:text-[32px]" style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial' }}>
//                       {stat.value}
//                     </span>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right: tech grid */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="flex flex-col justify-center"
//           >
//             <h2
//               className="mb-8 text-center text-[28px] font-medium  text-white md:text-[32px] "
//               style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial' }}
//             >
             
//               Engineering excellence with 
//               <br />the technologies you trust.


//             </h2>

//             <div className="grid grid-cols-5 gap-3 md:gap-4">
//               {technologies.map((tech, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.4, delay: idx * 0.02, ease: [0.22, 1, 0.36, 1] }}
//                   onMouseEnter={() => setHoveredTech(idx)}
//                   onMouseLeave={() => setHoveredTech(null)}
//                   className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-white/5  transition-all duration-300"
//                   style={{
//                     boxShadow:
//                       hoveredTech === idx
//                         ? `0 0 30px ${tech.color}40, inset 0 0 20px ${tech.color}20`
//                         : 'none',
//                     backgroundColor: hoveredTech === idx ? `${tech.color}08` : 'rgba(255,255,255,0.02)',
//                     borderColor: hoveredTech === idx ? `${tech.color}30` : 'rgba(255,255,255,0.05)',
//                   }}
//                 >
//                   <div className="flex h-full items-center justify-center">
//                     <span
//                       className="text-[24px] transition-all duration-300 md:text-[28px]"
//                       style={{
//                         color: hoveredTech === idx ? tech.color : '#6B7280',
//                         filter: hoveredTech === idx ? 'brightness(1.2)' : 'brightness(0.7)',
//                       }}
//                     >
//                       {tech.icon}
//                     </span>
//                   </div>

//                   {hoveredTech === idx && (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="pointer-events-none absolute inset-0"
//                       style={{
//                         background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
//                       }}
//                     />
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// TODO: Replace these paths with your actual logo paths
import Logo1 from '../../assets/React-3dl.png';
import Logo2 from '../../assets/AWS-3d.png';
import Logo3 from '../../assets/Flutter-3d.png';
import Logo4 from '../../assets/Azure-3d.png';
import Logo5 from '../../assets/SDWAN-3d.png';
import Logo6 from '../../assets/webdev-3d.png';
import Logo7 from '../../assets/Satelliterf-3d.png';
import Logo8 from '../../assets/Statmux-3d.png';
import Logo9 from '../../assets/Multiplex-3d.png';
import Logo10 from '../../assets/Cloudmanage-3d.png';
import Logo11 from '../../assets/NMS-3d.png';
import Logo12 from '../../assets/software-3d.png';
// import Logo13 from '../../assets/React-3dl.png';
// import Logo14 from '../../assets/React-3dl.png';
// import Logo15 from '../../assets/React-3dl.png';
// import Logo16 from '../../assets/React-3dl.png';

export default function TechnologiesStats() {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const stats = [
    { label: 'Founded in', value: '2012' },
    { label: 'Projects completed', value: '100+' },
    { label: 'Team size', value: '150+' },
    { label: 'Countries served', value: '100+' },
  ];

  const technologies = [
    { name: 'Technology 1', logo: Logo1, color: '#646CFF' },
    { name: 'Technology 2', logo: Logo2, color: '#61DAFB' },
    { name: 'Technology 3', logo: Logo3, color: '#DD0031' },
    { name: 'Technology 4', logo: Logo4, color: '#42B883' },
    { name: 'Technology 5', logo: Logo5, color: '#FF3E00' },
    { name: 'Technology 6', logo: Logo6, color: '#CC6699' },
    { name: 'Technology 7', logo: Logo7, color: '#764ABC' },
    { name: 'Technology 8', logo: Logo8, color: '#311C87' },
    { name: 'Technology 9', logo: Logo9, color: '#FFFFFF' },
    { name: 'Technology 10', logo: Logo10, color: '#00DC82' },
    { name: 'Technology 11', logo: Logo11, color: '#0070F3' },
    { name: 'Technology 12', logo: Logo12, color: '#673AB8' },
    // { name: 'Technology 13', logo: Logo13, color: '#FF5D01' },
    // { name: 'Technology 14', logo: Logo14, color: '#2EAD33' },
    // { name: 'Technology 15', logo: Logo15, color: '#FF4785' },
    // { name: 'Technology 16', logo: Logo16, color: '#FF2D20' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0B0C] px-6 py-20 md:px-8 lg:px-16 lg:py-28">
      {/* --- Top lighting (identical recipe to Products) --- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* neutral slate wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 45% at 50% 0%, rgba(71,85,105,0.08) 0%, rgba(71,85,105,0) 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* soft top glow */}
        <div
          className="absolute inset-0 opacity-[.25]"
          style={{
            background:
              'radial-gradient(60% 40% at 50% 0%, rgba(100,116,139,.06), rgba(100,116,139,0) 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <h2
              className="mb-12 text-[32px] font-medium text-white md:text-[40px]"
              style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial' }}
            >
              Delivering excellence
              <br /> since day one
            </h2>

            <div className="space-y-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                    <span className="text-[15px] text-[#6B7280]" style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial' }}>
                      {stat.label}
                    </span>
                    <span className="text-[28px] font-medium text-white md:text-[32px]" style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial' }}>
                      {stat.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: tech grid - 4 columns x 4 rows = 16 logos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <h2
              className="mb-8 text-center text-[28px] font-medium text-white md:text-[32px]"
              style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial' }}
            >
              Engineering excellence with 
              <br />the technologies you trust.
            </h2>

            <div className="mx-auto grid max-w-[480px] grid-cols-4 gap-3 md:gap-4">
              {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.02, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredTech(idx)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-white/5 transition-all duration-300"
                  style={{
                    boxShadow:
                      hoveredTech === idx
                        ? `0 0 30px ${tech.color}40, inset 0 0 20px ${tech.color}20`
                        : 'none',
                    backgroundColor: hoveredTech === idx ? `${tech.color}08` : 'rgba(255,255,255,0.02)',
                    borderColor: hoveredTech === idx ? `${tech.color}30` : 'rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="flex h-full items-center justify-center p-4">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      className="h-auto w-full object-contain transition-all duration-300"
                      style={{
                        filter: hoveredTech === idx ? 'brightness(1.2) grayscale(0%)' : 'brightness(0.7) grayscale(30%)',
                        opacity: hoveredTech === idx ? 1 : 0.7,
                      }}
                      quality={100}
                    />
                  </div>

                  {hoveredTech === idx && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}``