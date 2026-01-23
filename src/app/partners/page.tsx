// // src/app/partners/page.tsx
// 'use client';

// import Image, { type StaticImageData } from 'next/image';
// import { motion, cubicBezier } from 'framer-motion';
// import PartnersCubesField from '../../components/PartnersHeroField';

// // ✅ Audio/Video real logos (from /assets/Audio_partners)
// import Biamp from '../../../assets/Audio_partners/biamp.png';
// import Cisco from '../../../assets/Audio_partners/cisco.png';
// import Kramer from '../../../assets/Audio_partners/kramer.png';
// import Lg from '../../../assets/Audio_partners/Lg.png';
// import Lumens from '../../../assets/Audio_partners/Lumens.png';
// import Polycom from '../../../assets/Audio_partners/Polycom.png';
// import Samsung from '../../../assets/Audio_partners/Samsung.png';
// import Shure from '../../../assets/Audio_partners/Shure.png';

// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// const fadeUp = {
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.2 },
//   transition: { duration: 0.7, ease: easeOutExpo },
// };

// type PartnerLogo = {
//   name: string;
//   src: string | StaticImageData;
// };

// type PartnerGroup = {
//   id: string;
//   label: string;
//   dotClass: string;
//   badgeClass: string;
//   logos: PartnerLogo[];
// };

// // ---------------------------------------------------------------------------
// // Partner logo config
// // Other groups: dummy unique filenames (you’ll replace later)
// // Audio/Video: ✅ real imports from assets/Audio_partners
// // ---------------------------------------------------------------------------

// const partnerGroups: PartnerGroup[] = [
//   {
//     id: 'cloud',
//     label: 'Cloud',
//     dotClass: 'bg-sky-400',
//     badgeClass: 'border-sky-400/40 bg-sky-400/10 text-sky-100',
//     logos: Array.from({ length: 2 }, (_, i) => ({
//       name: `Cloud Partner ${i + 1}`,
//       src: `/assets/partners/cloud/cloud-${i + 1}.png`,
//     })),
//   },
//   {
//     id: 'broadcast-media',
//     label: 'Broadcast & Media',
//     dotClass: 'bg-fuchsia-400',
//     badgeClass: 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-100',
//     // 8 logos => 2 rows on md (md:grid-cols-4)
//     logos: Array.from({ length: 8 }, (_, i) => ({
//       name: `Broadcast & Media Partner ${i + 1}`,
//       src: `/assets/partners/broadcast-media/broadcast-${i + 1}.png`,
//     })),
//   },
//   {
//     id: 'network-oems',
//     label: 'Network OEMs',
//     dotClass: 'bg-emerald-400',
//     badgeClass: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100',
//     logos: Array.from({ length: 8 }, (_, i) => ({
//       name: `Network OEM ${i + 1}`,
//       src: `/assets/partners/network-oems/oem-${i + 1}.png`,
//     })),
//   },
//   {
//     id: 'audio-video',
//     label: 'Audio/Video',
//     dotClass: 'bg-amber-300',
//     badgeClass: 'border-amber-300/40 bg-amber-300/10 text-amber-50',
//     // ✅ real logos from assets/Audio_partners (8 slots)
//     logos: [
//       { name: 'Biamp', src: Biamp },
//       { name: 'Cisco', src: Cisco },
//       { name: 'Kramer', src: Kramer },
//       { name: 'LG', src: Lg },
//       { name: 'Lumens', src: Lumens },
//       { name: 'Polycom', src: Polycom },
//       { name: 'Samsung', src: Samsung },
//       { name: 'Shure', src: Shure },
//     ],
//   },
//   {
//     id: 'satellite-communication',
//     label: 'Satellite Communication',
//     dotClass: 'bg-cyan-300',
//     badgeClass: 'border-cyan-300/40 bg-cyan-300/10 text-cyan-50',
//     logos: Array.from({ length: 8 }, (_, i) => ({
//       name: `Satellite Communication Partner ${i + 1}`,
//       src: `/assets/partners/satellite-communication/sat-${i + 1}.png`,
//     })),
//   },
// ];

// export default function PartnersPage() {
//   return (
//     <main className="relative min-h-screen bg-[#010101] text-white">
//       {/* Hero */}
//       <section>
//         <PartnersCubesField />
//       </section>

//       {/* Subtle grid background */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px',
//           backgroundPosition: 'center',
//         }}
//       />

//       {/* Partner sections */}
//       <div className="relative z-10 pb-28 pt-10 md:pt-16">
//         <section className="mx-auto max-w-6xl space-y-16 px-6 md:space-y-20 md:px-10 lg:px-16">
//           {partnerGroups.map((group) => {
//             const isTwo = group.logos.length <= 2;

//             return (
//               <motion.div key={group.id} {...fadeUp} className="space-y-6 md:space-y-8">
//                 {/* Header badge only (no helper copy) */}
//                 <div className="flex items-center">
//                   <span
//                     className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${group.badgeClass}`}
//                   >
//                     <span className={`h-1.5 w-1.5 rounded-full ${group.dotClass}`} />
//                     {group.label}
//                   </span>
//                 </div>

//                 {/* Grid */}
//                 <div
//                   className={[
//                     'grid gap-4',
//                     isTwo ? 'grid-cols-2 md:grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
//                   ].join(' ')}
//                 >
//                   {group.logos.map((logo) => (
//                     <div
//                       key={`${group.id}-${logo.name}`}
//                       className="group flex items-center justify-center rounded-2xl border border-white/8 bg-black/30 px-4 py-4 backdrop-blur-sm transition-transform duration-150 hover:-translate-y-1 hover:border-white/25"
//                     >
//                       <div className="relative flex w-full items-center justify-center">
//                        <div className="relative h-20 w-full max-w-[320px]">
//   <Image
//     src={logo.src}
//     alt={logo.name}
//     fill
//     sizes="260px"
//     className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
//   />
// </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </section>
//       </div>
//     </main>
//   );
// }


// src/app/partners/page.tsx
'use client';

import Image, { type StaticImageData } from 'next/image';
import { motion, cubicBezier } from 'framer-motion';
import PartnersCubesField from '../../components/PartnersHeroField';

// ✅ Audio/Video real logos (from /assets/Audio_partners)
import Biamp from '../../../assets/Audio_partners/biamp.png';
import CiscoAV from '../../../assets/Audio_partners/cisco.png';
import Kramer from '../../../assets/Audio_partners/kramer.png';
import LgAV from '../../../assets/Audio_partners/Lg.png';
import Lumens from '../../../assets/Audio_partners/Lumens.png';
import Polycom from '../../../assets/Audio_partners/Polycom.png';
import SamsungAV from '../../../assets/Audio_partners/Samsung.png';
import Shure from '../../../assets/Audio_partners/Shure.png';

// ✅ Network OEMs real logos (from /assets/Network_partners)
import Aruba from '../../../assets/Network_partners/Aruba.png';
import CiscoNet from '../../../assets/Network_partners/cisco.png';
import Fortinet from '../../../assets/Network_partners/Fortinet.png';
import HP from '../../../assets/Network_partners/HP.png';
import Juniper from '../../../assets/Network_partners/juniper.png';
import Netgear from '../../../assets/Network_partners/Netgear.png';
import Quantum from '../../../assets/Network_partners/quantum.png';

// ✅ Satcom real logos (from /assets/Satcom_partners)
import BiampSat from '../../../assets/Satcom_partners/biamp.png';
import CiscoSat from '../../../assets/Satcom_partners/cisco.png';
import KramerSat from '../../../assets/Satcom_partners/kramer.png';
import LgSat from '../../../assets/Satcom_partners/Lg.png';
import LumensSat from '../../../assets/Satcom_partners/Lumens.png';
import PolycomSat from '../../../assets/Satcom_partners/Polycom.png';
import SamsungSat from '../../../assets/Satcom_partners/Samsung.png';
import ShureSat from '../../../assets/Satcom_partners/Shure.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

type PartnerLogo = {
  name: string;
  src: string | StaticImageData;
};

type PartnerGroup = {
  id: string;
  label: string;
  dotClass: string;
  badgeClass: string;
  logos: PartnerLogo[];
};

const partnerGroups: PartnerGroup[] = [
  {
    id: 'cloud',
    label: 'Cloud',
    dotClass: 'bg-sky-400',
    badgeClass: 'border-sky-400/40 bg-sky-400/10 text-sky-100',
    logos: Array.from({ length: 2 }, (_, i) => ({
      name: `Cloud Partner ${i + 1}`,
      src: `/assets/partners/cloud/cloud-${i + 1}.png`,
    })),
  },
  {
    id: 'broadcast-media',
    label: 'Broadcast & Media',
    dotClass: 'bg-fuchsia-400',
    badgeClass: 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-100',
    logos: Array.from({ length: 8 }, (_, i) => ({
      name: `Broadcast & Media Partner ${i + 1}`,
      src: `/assets/partners/broadcast-media/broadcast-${i + 1}.png`,
    })),
  },

  // ✅ UPDATED: Network OEMs uses real assets
  {
    id: 'network-oems',
    label: 'Network OEMs',
    dotClass: 'bg-emerald-400',
    badgeClass: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100',
    logos: [
      { name: 'Aruba', src: Aruba },
      { name: 'Cisco', src: CiscoNet },
      { name: 'Fortinet', src: Fortinet },
      { name: 'HP', src: HP },
      { name: 'Juniper', src: Juniper },
      { name: 'Netgear', src: Netgear },
      { name: 'Quantum', src: Quantum },
      // If you add 1 more logo later, just import it and add here for full 8.
    ],
  },

  {
    id: 'audio-video',
    label: 'Audio/Video',
    dotClass: 'bg-amber-300',
    badgeClass: 'border-amber-300/40 bg-amber-300/10 text-amber-50',
    logos: [
      { name: 'Biamp', src: Biamp },
      { name: 'Cisco', src: CiscoAV },
      { name: 'Kramer', src: Kramer },
      { name: 'LG', src: LgAV },
      { name: 'Lumens', src: Lumens },
      { name: 'Polycom', src: Polycom },
      { name: 'Samsung', src: SamsungAV },
      { name: 'Shure', src: Shure },
    ],
  },

  // ✅ UPDATED: Satellite Communication uses real assets
  {
    id: 'satellite-communication',
    label: 'Satellite Communication',
    dotClass: 'bg-cyan-300',
    badgeClass: 'border-cyan-300/40 bg-cyan-300/10 text-cyan-50',
    logos: [
      { name: 'Biamp', src: BiampSat },
      { name: 'Cisco', src: CiscoSat },
      { name: 'Kramer', src: KramerSat },
      { name: 'LG', src: LgSat },
      { name: 'Lumens', src: LumensSat },
      { name: 'Polycom', src: PolycomSat },
      { name: 'Samsung', src: SamsungSat },
      { name: 'Shure', src: ShureSat },
    ],
  },
];

export default function PartnersPage() {
  return (
    <main className="relative min-h-screen bg-[#010101] text-white">
      {/* Hero */}
      <section>
        <PartnersCubesField />
      </section>

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center',
        }}
      />

      {/* Partner sections */}
      <div className="relative z-10 pb-28 pt-10 md:pt-16">
        <section className="mx-auto max-w-6xl space-y-16 px-6 md:space-y-20 md:px-10 lg:px-16">
          {partnerGroups.map((group) => {
            const isTwo = group.logos.length <= 2;

            return (
              <motion.div key={group.id} {...fadeUp} className="space-y-6 md:space-y-8">
                {/* Header badge only */}
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${group.badgeClass}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${group.dotClass}`} />
                    {group.label}
                  </span>
                </div>

                {/* Grid */}
                <div
                  className={[
                    'grid gap-4',
                    isTwo ? 'grid-cols-2 md:grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
                  ].join(' ')}
                >
                  {group.logos.map((logo) => (
                    <div
                      key={`${group.id}-${logo.name}`}
                      className="group flex items-center justify-center rounded-2xl border border-white/8 bg-black/30 px-4 py-4 backdrop-blur-sm transition-transform duration-150 hover:-translate-y-1 hover:border-white/25"
                    >
                      <div className="relative flex w-full items-center justify-center">
                        {/* Bigger logo inside same card */}
                        <div className="relative h-20 w-full max-w-[320px]">
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            sizes="320px"
                            className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
