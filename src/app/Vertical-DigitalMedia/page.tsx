// 'use client';

// import { motion, cubicBezier } from 'framer-motion';
// import Image from 'next/image';
// import Digitalmedia from '../../../assets/DigitalM.png';
// const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

// const fadeUp = {
//   initial: { opacity: 0, y: 26 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.3 },
//   transition: { duration: 0.7, ease: easeOutExpo },
// };

// const fadeIn = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   viewport: { once: true, amount: 0.3 },
//   transition: { duration: 0.7, ease: easeOutExpo },
// };

// export default function DigitalMediaSection() {
//   return (
//     <section className="mx-auto mt-20 max-w-6xl px-6 md:mt-24 md:px-10 lg:px-16">
//       <motion.div
//         {...fadeUp}
//         className="grid gap-10 md:grid-cols-[1.35fr,1fr]"
//       >
//         {/* LEFT: MAIN COPY */}
//         <div>
//           <p className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fuchsia-200">
//             Digital Media · Vertical
//           </p>

//           <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
//             Broadcast and OTT workflows, re-architected for IP and AI.
//           </h2>

//           <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
//             Broadcast industry in India is undergoing a shift in terms of technology on
//             multiple fronts. In the production area, baseband and non-automated workflows
//             are giving way to IP-based and automated workflows. Compression is shifting
//             to newer HEVC standards, reducing operational cost while maintaining quality.
//           </p>

//           <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
//             Latest technologies like AI, AR and VR are being used across the broadcast
//             domain – especially as online platforms explode at an exponential rate. Most
//             telcos, broadcasters, content producers and aggregators are venturing into
//             OTT/IPTV platforms, giving their customers a wholesome experience as 4G / 5G
//             LTE networks roll out.
//           </p>

//           <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
//             Commedia works closely with major broadcasters in India and abroad. Our
//             experienced team handles projects end-to-end – from setting up a satellite /
//             cable channel to modernising existing teleport and playout operations.
//           </p>

//           {/* bullets block */}
//           <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
//               Within broadcast &amp; teleport, we help with
//             </p>

//             <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
//               <ul className="space-y-2">
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>
//                     SITC of turnkey projects, headend and teleport infrastructure.
//                   </span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>PCR / MCR / studio setups.</span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>MAM / DAM, storage and archival solutions.</span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>
//                     ENG cameras, newsroom control, online / offline graphics, video
//                     graphics.
//                   </span>
//                 </li>
//               </ul>

//               <ul className="mt-3 space-y-2 md:mt-0">
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>OTT, IPTV and streaming solutions.</span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>DSNG and OB van setup with fabrication.</span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>
//                     Compliance and service-level monitoring across the full transmission
//                     chain (QoS / QoE).
//                   </span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>
//                     SITC &amp; annual maintenance of television receive antenna farms.
//                   </span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
//                   <span>
//                     Managed services for audits, playout management, metadata tagging
//                     and QC.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: IMAGE PLACEHOLDER / VISUAL CARD */}
//         <motion.div
//           {...fadeIn}
//           className="flex items-center justify-center md:justify-end"
//         >
//           <div className="relative w-full max-w-md">
//             {/* soft glows */}
//             <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-fuchsia-500/18 blur-2xl" />
//             <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

//             <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
//               {/* main placeholder image area */}
//               <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
//                 <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 text-center text-[11px] text-zinc-500 px-4">
//                   <Image
//     src={Digitalmedia}
//     alt="Government Operations"
//     className="h-full w-full object-contain"
//     priority
//   />
//                 </div>
//               </div>

//               {/* small overlay chips */}
//               <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
//                 <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
//                   <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
//                   <span>IP-based workflows</span>
//                 </div>
//                 <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
//                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                   <span>HEVC &amp; compression savings</span>
//                 </div>
//                 <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
//                   <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
//                   <span>OTT / IPTV &amp; 5G</span>
//                 </div>
//               </div>

//               {/* mini info strip */}
//               <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
//                 <div>
//                   <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                     Typical footprint
//                   </p>
//                   <p className="text-xs text-zinc-100">
//                     Multi-site broadcast + teleport
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
//                     Outcomes
//                   </p>
//                   <p className="text-xs text-zinc-100">
//                     Faster launches, measurable QoS / QoE
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


'use client';

import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import Digitalmedia from '../../../assets/DigitalM.png';

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export default function DigitalMediaSection() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6 md:mt-24 md:px-10 lg:px-16">
      <motion.div {...fadeUp} className="space-y-10">
        {/* TOP: MAIN COPY (full width) */}
        <div>
          <p className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-fuchsia-200">
            Digital Media · Vertical
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-snug text-white md:text-4xl">
            Broadcast and OTT workflows, re-architected for IP and AI.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            Broadcast industry in India is undergoing a shift in terms of technology on
            multiple fronts. In the production area, baseband and non-automated workflows
            are giving way to IP-based and automated workflows. Compression is shifting
            to newer HEVC standards, reducing operational cost while maintaining quality.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            Latest technologies like AI, AR and VR are being used across the broadcast
            domain – especially as online platforms explode at an exponential rate. Most
            telcos, broadcasters, content producers and aggregators are venturing into
            OTT/IPTV platforms, giving their customers a wholesome experience as 4G / 5G
            LTE networks roll out.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
            Commedia works closely with major broadcasters in India and abroad. Our
            experienced team handles projects end-to-end – from setting up a satellite /
            cable channel to modernising existing teleport and playout operations.
          </p>
        </div>

        {/* BOTTOM ROW: BULLETS CARD (left) + IMAGE CARD (right) */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* LEFT: bullets block */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                Within broadcast &amp; teleport, we help with
              </p>

              {/* On md: two columns; on lg: keep single column so the card feels compact and tall like your mock */}
              <div className="mt-3 grid gap-3 text-sm text-zinc-200 md:grid-cols-2 lg:grid-cols-1">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      SITC of turnkey projects, headend and teleport infrastructure.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>PCR / MCR / studio setups.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>MAM / DAM, storage and archival solutions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      ENG cameras, newsroom control, online / offline graphics, video
                      graphics.
                    </span>
                  </li>
                </ul>

                <ul className="mt-3 space-y-2 md:mt-0 lg:mt-3">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>OTT, IPTV and streaming solutions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>DSNG and OB van setup with fabrication.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      Compliance and service-level monitoring across the full transmission
                      chain (QoS / QoE).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      SITC &amp; annual maintenance of television receive antenna farms.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                    <span>
                      Managed services for audits, playout management, metadata tagging
                      and QC.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: image card */}
          <div className="lg:col-span-7">
            <motion.div {...fadeIn} className="relative">
              {/* soft glows */}
              <div className="pointer-events-none absolute -left-8 top-2 h-24 w-24 rounded-full bg-fuchsia-500/18 blur-2xl" />
              <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-4 shadow-[0_26px_90px_rgba(0,0,0,1)]">
                {/* image window */}
                <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/18 bg-zinc-950/85">
                  <div className="aspect-[16/10] w-full">
                    <Image
                      src={Digitalmedia}
                      alt="Digital Media operations"
                      className="h-full w-full object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* chips */}
                <div className="mt-4 flex flex-wrap gap-3 text-[11px]">
                  <div className="flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/5 px-3 py-1 text-sky-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>IP-based workflows</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>HEVC &amp; compression savings</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/5 px-3 py-1 text-fuchsia-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    <span>OTT / IPTV &amp; 5G</span>
                  </div>
                </div>

                {/* mini info strip */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] text-zinc-300">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      Typical footprint
                    </p>
                    <p className="text-xs text-zinc-100">
                      Multi-site broadcast + teleport
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      Outcomes
                    </p>
                    <p className="text-xs text-zinc-100">
                      Faster launches, measurable QoS / QoE
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
