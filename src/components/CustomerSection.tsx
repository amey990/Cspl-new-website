// //p4//
// 'use client';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import Image from 'next/image';
// import Logo1 from '../../assets/Airtel-bg.png';
// import Logo2 from '../../assets/NttData-bg.png';
// import Logo3 from '../../assets/Logitech-bg.png';
// import Logo4 from '../../assets/Pccw-bg.png';
// import Logo5 from '../../assets/TataCom-bg.png';
// import Logo6 from '../../assets/Disney-bg.png';
// import Logo7 from '../../assets/Sont-bg.png';
// import Logo8 from '../../assets/Cisco-bg.png';

// export default function Customers() {
//   const [isHovered, setIsHovered] = useState(false);

//   const customers = [
//     { name: 'Company 1', logo: Logo1 },
//     { name: 'Company 2', logo: Logo2 },
//     { name: 'Company 3', logo: Logo3 },
//     { name: 'Company 4', logo: Logo4 },
//     { name: 'Company 5', logo: Logo5 },
//     { name: 'Company 6', logo: Logo6 },
//     { name: 'Company 7', logo: Logo7 },
//     { name: 'Company 8', logo: Logo8 },
//   ];

//   return (
//     <section className="relative bg-[#0A0B0C] px-6 py-12 md:px-8 lg:px-16 lg:py-0">
//       <div className="mx-auto max-w-[1200px]">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.6 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-10 text-center"
//         >
//           <h2
//             className="mb-3 text-[20px] font-medium leading-[56px] text-white md:text-[32px] md:leading-[30px]"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             Partnering with world's best product teams.
//           </h2>
//           <p
//             className="text-[18px] leading-[28px] text-[#6B7280]"
//             style={{
//               fontFamily:
//                 '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
//             }}
//           >
//             From next-gen startups to established enterprises.
//           </p>
//         </motion.div>

//         {/* Logos Grid with Hover Effect */}
//         <div 
//           className="relative"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Logos Grid */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//             className={`grid grid-cols-2 gap-x-8 gap-y-20 md:grid-cols-4 lg:gap-x-12 lg:gap-y-24 transition-all duration-300 ${
//               isHovered ? 'blur-sm' : 'blur-0'
//             }`}
//           >
//             {customers.map((customer, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center justify-center"
//               >
//                 <Image
//                   src={customer.logo}
//                   alt={customer.name}
//                   className="h-auto w-full max-w-[140px] object-contain opacity-70 hover:opacity-100"
//                   quality={100}
//                   width={120}
//                   height={60}
//                 />
//               </div>
//             ))}
//           </motion.div>

//           {/* Meet Our Customers Button - Shows on Hover */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ 
//               opacity: isHovered ? 1 : 0,
//               scale: isHovered ? 1 : 0.95,
//             }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className="pointer-events-none absolute inset-0 flex items-center justify-center"
//           >
//             <button className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0B0C]/80 backdrop-blur-sm px-6 py-3 text-[15px] font-medium text-white hover:border-white/20 hover:bg-[#0A0B0C]/90 transition-colors">
//               Meet our customers
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M9 5l7 7-7 7"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
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
import Logo1 from '../../assets/Airtel-bg.png';
import Logo2 from '../../assets/NttData-bg.png';
import Logo3 from '../../assets/Logitech-bg.png';
import Logo4 from '../../assets/Pccw-bg.png';
import Logo5 from '../../assets/TataCom-bg.png';
import Logo6 from '../../assets/Disney-bg.png';
import Logo7 from '../../assets/Sont-bg.png';
import Logo8 from '../../assets/Cisco-bg.png';

export default function Customers() {
  const [isHovered, setIsHovered] = useState(false);

  const customers = [
    { name: 'Company 1', logo: Logo1 },
    { name: 'Company 2', logo: Logo2 },
    { name: 'Company 3', logo: Logo3 },
    { name: 'Company 4', logo: Logo4 },
    { name: 'Company 5', logo: Logo5 },
    { name: 'Company 6', logo: Logo6 },
    { name: 'Company 7', logo: Logo7 },
    { name: 'Company 8', logo: Logo8 },
  ];

  return (
    // <section className="relative bg-[#0A0B0C] px-6 py-12 md:px-8 lg:px-16 lg:py-20">
    <section className="relative bg-[#0A0B0C] px-6 py-12 md:px-8 lg:px-16 lg:pt-2 lg:pb-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center md:mb-24 lg:mb-13"
        >
          <h2
            className="mb-3 text-[20px] font-medium leading-[56px] text-white md:text-[32px] md:leading-[30px]"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            Partnering with world's best product teams.
          </h2>
          <p
            className="text-[18px] leading-[28px] text-[#6B7280]"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            From next-gen startups to established enterprises.
          </p>
        </motion.div>

        {/* Logos Grid with Hover Effect */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={`grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-12 md:gap-y-16 lg:gap-x-16 lg:gap-y-16 transition-all duration-300 ${
              isHovered ? 'blur-sm' : 'blur-0'
            }`}
          >
            {customers.map((customer, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center"
              >
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  className="h-auto w-full max-w-[140px] object-contain opacity-70 hover:opacity-100"
                  quality={100}
                  width={120}
                  height={60}
                />
              </div>
            ))}
          </motion.div>

          {/* Meet Our Customers Button - Shows on Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.95,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <button className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0B0C]/80 backdrop-blur-sm px-6 py-3 text-[15px] font-medium text-white hover:border-white/20 hover:bg-[#0A0B0C]/90 transition-colors">
              Meet our customers
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}