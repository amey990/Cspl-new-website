// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// type MenuKey = 'products' | 'verticals' | 'solutions' | null;

// const navItems = [
//   { label: 'Products', href: '/products', menuKey: 'products' as MenuKey },
//   { label: 'Verticals', href: '/verticals', menuKey: 'verticals' as MenuKey },
//   { label: 'Solutions', href: '/solutions', menuKey: 'solutions' as MenuKey },
//   { label: 'Partners', href: '/partners', menuKey: null },
//   { label: 'Case Studies', href: '/case-studies', menuKey: null },
//   { label: 'Contact', href: '/contact', menuKey: null },
// ];

// // --- Mega-menu content data -----------------------------------------------

// const productsContent = {
//   left: [
//     {
//       section: 'Program Management',
//       items: [
//         {
//           title: 'Atlas Project Management',
//           description: 'Streamline project workflows and team collaboration',
//           href: '/products/atlas',
//         },
//         {
//           title: 'CNMS',
//           description: 'Comprehensive network management solutions',
//           href: '/products/cnms',
//         },
//       ],
//     },
//     {
//       section: 'IOT',
//       items: [
//         {
//           title: 'Smart Helmet',
//           description: 'Advanced safety monitoring and communication',
//           href: '/products/smart-helmet',
//         },
//       ],
//     },
//   ],
//   right: [
//     {
//       section: 'Artificial Intelligence',
//       items: [
//         {
//           title: 'C-Pal',
//           description: 'Intelligent conversational AI assistant',
//           href: '/products/c-pal',
//         },
//         {
//           title: 'Operations Advisor',
//           description: 'AI-driven operational insights and optimization',
//           href: '/products/operations-advisor',
//         },
//         {
//           title: 'Agentic Solution',
//           description: 'Autonomous AI agents for business automation',
//           href: '/products/agentic-solution',
//         },
//       ],
//     },
//   ],
// };

// const verticalsContent = {
//   left: [
//     {
//       section: 'Verticals',
//       items: [
//         {
//           title: 'Service Provider',
//           description: 'End-to-end solutions for telecom and service operators',
//           href: '/verticals/service-provider',
//         },
//         {
//           title: 'Digital Media',
//           description: 'Infrastructure and delivery for broadcast and OTT platforms',
//           href: '/verticals/digital-media',
//         },
//       ],
//     },
//   ],
//   right: [
//     {
//       section: '',
//       items: [
//         {
//           title: 'Enterprise',
//           description: 'Secure, scalable networks for modern enterprises',
//           href: '/verticals/enterprise',
//         },
//         {
//           title: 'Government',
//           description: 'Resilient communication for public sector and defence',
//           href: '/verticals/government',
//         },
//       ],
//     },
//   ],
// };

// const solutionsContent = {
//   left: [
//     {
//       section: 'Solutions',
//       items: [
//         {
//           title: 'Data Center & Networking',
//           description: 'High-performance switching, routing, and compute fabrics',
//           href: '/solutions/data-center-networking',
//         },
//         {
//           title: 'SDWAN',
//           description: 'Application-aware WAN with centralized orchestration',
//           href: '/solutions/sdwan',
//         },
//         {
//           title: 'Network Security',
//           description: 'Firewalls, zero-trust access, and threat protection',
//           href: '/solutions/network-security',
//         },
//         {
//           title: 'Cloud Solutions',
//           description: 'Hybrid and multi-cloud architectures and services',
//           href: '/solutions/cloud-solutions',
//         },
//       ],
//     },
//   ],
//   right: [
//     {
//       section: '',
//       items: [
//         {
//           title: 'Wireless Networking',
//           description: 'Secure Wi-Fi and private wireless connectivity',
//           href: '/solutions/wireless-networking',
//         },
//         {
//           title: 'Audio / Video Solutions',
//           description: 'Collaboration, conferencing, and digital signage systems',
//           href: '/solutions/audio-video-solutions',
//         },
//         {
//           title: 'Satellite Communications',
//           description: 'Reliable connectivity in remote and mission-critical locations',
//           href: '/solutions/satellite-communications',
//         },
//       ],
//     },
//   ],
// };

// function getMenuContent(key: Exclude<MenuKey, null>) {
//   if (key === 'products') return productsContent;
//   if (key === 'verticals') return verticalsContent;
//   return solutionsContent;
// }

// // --- Component -------------------------------------------------------------

// export default function Navbar() {
//   const [openMobile, setOpenMobile] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<MenuKey>(null); // controls mega-menu

//   const isMegaOpen = activeMenu !== null;

//   return (
//     <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090A0A]">
//       <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
//         {/* Brand */}
//         <Link href="/" className="flex items-center">
//           <span
//             className="text-base font-semibold tracking-tight text-white md:text-lg"
//             style={{
//               fontFamily:
//                 '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
//             }}
//           >
//             Commedia
//           </span>
//         </Link>

//         {/* Desktop nav + mega menu wrapper */}
//         <div
//           className="relative hidden items-center gap-8 md:flex"
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           {/* Top row links */}
//           {navItems.map((item) => {
//             const isActive = item.menuKey && activeMenu === item.menuKey;

//             return (
//               <button
//                 key={item.label}
//                 type="button"
//                 className="relative"
//                 onMouseEnter={() => {
//                   if (item.menuKey) setActiveMenu(item.menuKey);
//                   else setActiveMenu(null);
//                 }}
//                 onClick={() => {
//                   window.location.href = item.href;
//                 }}
//               >
//                 <span
//                   className={`text-sm text-zinc-300 hover:text-white transition ${
//                     isActive ? 'text-white' : ''
//                   }`}
//                 >
//                   {item.label}
//                 </span>
//               </button>
//             );
//           })}

//           {/* Shared mega-menu card – frame is static, inner content animates */}
//           {isMegaOpen && (
//             <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
//               <div className="rounded-xl border border-[#1C1D1E] bg-[#090A0B] p-2 shadow-[0_26px_80px_rgba(0,0,0,0.85)]">
//                 <div className="w-[640px] rounded-lg bg-[#161718]/95 backdrop-blur-sm px-5 py-3">
//                   <AnimatePresence mode="wait">
//                     {activeMenu && (
//                       <motion.div
//                         key={activeMenu} // animates when menu key changes
//                         initial={{ opacity: 0, y: 6 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -4 }}
//                         transition={{ duration: 0.2, ease: 'easeOut' }}
//                       >
//                         <div className="grid grid-cols-2 divide-x divide-[#252525]">
//                           {/* Left column */}
//                           <div className="pr-5">
//                             {getMenuContent(activeMenu).left.map((section) => (
//                               <div key={section.section || 'left'} className="mb-5 last:mb-0">
//                                 {section.section && (
//                                   <h3 className="mb-2.5 text-[10px] font-medium uppercase tracking-wider text-[#6E6E6E]">
//                                     {section.section}
//                                   </h3>
//                                 )}
//                                 <div className="space-y-0.5">
//                                   {section.items.map((item) => (
//                                     <Link
//                                       key={item.title}
//                                       href={item.href}
//                                       className="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-[#212223]"
//                                     >
//                                       <div className="text-[13px] font-medium text-white">
//                                         {item.title}
//                                       </div>
//                                       {item.description && (
//                                         <div className="mt-0.5 text-[11.5px] text-[#9B9B9B] leading-snug">
//                                           {item.description}
//                                         </div>
//                                       )}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               </div>
//                             ))}
//                           </div>

//                           {/* Right column */}
//                           <div className="pl-5">
//                             {getMenuContent(activeMenu).right.map((section, idx) => (
//                               <div key={idx} className="mb-5 last:mb-0">
//                                 {section.section && (
//                                   <h3 className="mb-2.5 text-[10px] font-medium uppercase tracking-wider text-[#6E6E6E]">
//                                     {section.section}
//                                   </h3>
//                                 )}
//                                 <div className="space-y-0.5">
//                                   {section.items.map((item) => (
//                                     <Link
//                                       key={item.title}
//                                       href={item.href}
//                                       className="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-[#212223]"
//                                     >
//                                       <div className="text-[13px] font-medium text-white">
//                                         {item.title}
//                                       </div>
//                                       {item.description && (
//                                         <div className="mt-0.5 text-[11.5px] text-[#9B9B9B] leading-snug">
//                                           {item.description}
//                                         </div>
//                                       )}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* CTA */}
//         <div className="hidden md:flex">
//           <Link
//             href="/contact"
//             className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition"
//           >
//             Book a Demo
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
//           onClick={() => setOpenMobile((v) => !v)}
//           aria-label="Toggle menu"
//         >
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <path
//               d="M4 6h16M4 12h16M4 18h16"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//             />
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile panel */}
//       {openMobile && (
//         <div className="border-t border-white/5 bg-[#010000] md:hidden">
//           <div className="mx-auto grid max-w-screen-2xl gap-2 px-4 py-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="rounded-md px-2 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition"
//                 onClick={() => setOpenMobile(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link
//               href="/contact"
//               className="mt-2 inline-flex w-fit items-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition"
//               onClick={() => setOpenMobile(false)}
//             >
//               Book a Demo
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MenuKey = 'products' | 'verticals' | 'solutions' | null;

const navItems = [
  { label: 'Products', href: '/products', menuKey: 'products' as MenuKey },
  { label: 'Verticals', href: '/verticals', menuKey: 'verticals' as MenuKey },
  { label: 'Solutions', href: '/solutions', menuKey: 'solutions' as MenuKey },
  { label: 'Partners', href: '/partners', menuKey: null },
  { label: 'Case Studies', href: '/case-studies', menuKey: null },
  { label: 'Contact', href: '/contact', menuKey: null },
];

// --- Mega-menu content data -----------------------------------------------

const productsContent = {
  left: [
    {
      section: 'Program Management',
      items: [
        {
          title: 'Atlas Project Management',
          description: 'Streamline project workflows and team collaboration',
          // maps to src/app/Atlas_P1/page.tsx
          href: '/Atlas_P1',
        },
        {
          title: 'CNMS',
          description: 'Comprehensive network management solutions',
          // maps to src/app/CNMS_P2/page.tsx
          href: '/CNMS_P2',
        },
      ],
    },
    {
      section: 'IoT',
      items: [
        {
          title: 'Smart Helmet',
          description: 'Advanced safety monitoring and communication',
          // maps to src/app/Smart_HP1/page.tsx
          href: '/Smart_HP1',
        },
      ],
    },
  ],
  right: [
    {
      section: 'Artificial Intelligence',
      items: [
        {
          title: 'C-Pal',
          description: 'Intelligent conversational AI assistant',
          // TEMP: send all AI line items to the same AI page
          href: '/AI_Line_P1',
        },
        {
          title: 'Operations Advisor',
          description: 'AI-driven operational insights and optimization',
          href: '/AI_Line_P1',
        },
        {
          title: 'Agentic Solution',
          description: 'Autonomous AI agents for business automation',
          href: '/AI_Line_P1',
        },
      ],
    },
  ],
};

const verticalsContent = {
  left: [
    {
      section: 'Verticals',
      items: [
        {
          title: 'Service Provider',
          description: 'End-to-end solutions for telecom and service operators',
          href: '/verticals/service-provider',
        },
        {
          title: 'Digital Media',
          description: 'Infrastructure and delivery for broadcast and OTT platforms',
          href: '/verticals/digital-media',
        },
      ],
    },
  ],
  right: [
    {
      section: '',
      items: [
        {
          title: 'Enterprise',
          description: 'Secure, scalable networks for modern enterprises',
          href: '/verticals/enterprise',
        },
        {
          title: 'Government',
          description: 'Resilient communication for public sector and defence',
          href: '/verticals/government',
        },
      ],
    },
  ],
};

const solutionsContent = {
  left: [
    {
      section: 'Solutions',
      items: [
        {
          title: 'Data Center & Networking',
          description: 'High-performance switching, routing, and compute fabrics',
          href: '/solutions/data-center-networking',
        },
        {
          title: 'SDWAN',
          description: 'Application-aware WAN with centralized orchestration',
          href: '/solutions/sdwan',
        },
        {
          title: 'Network Security',
          description: 'Firewalls, zero-trust access, and threat protection',
          href: '/solutions/network-security',
        },
        {
          title: 'Cloud Solutions',
          description: 'Hybrid and multi-cloud architectures and services',
          href: '/solutions/cloud-solutions',
        },
      ],
    },
  ],
  right: [
    {
      section: '',
      items: [
        {
          title: 'Wireless Networking',
          description: 'Secure Wi-Fi and private wireless connectivity',
          href: '/solutions/wireless-networking',
        },
        {
          title: 'Audio / Video Solutions',
          description: 'Collaboration, conferencing, and digital signage systems',
          href: '/solutions/audio-video-solutions',
        },
        {
          title: 'Satellite Communications',
          description: 'Reliable connectivity in remote and mission-critical locations',
          href: '/solutions/satellite-communications',
        },
      ],
    },
  ],
};

function getMenuContent(key: Exclude<MenuKey, null>) {
  if (key === 'products') return productsContent;
  if (key === 'verticals') return verticalsContent;
  return solutionsContent;
}

// --- Component -------------------------------------------------------------

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);

  const isMegaOpen = activeMenu !== null;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090A0A]">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <span
            className="text-base font-semibold tracking-tight text-white md:text-lg"
            style={{
              fontFamily:
                '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
            }}
          >
            Commedia
          </span>
        </Link>

        {/* Desktop nav + mega menu wrapper */}
        <div
          className="relative hidden items-center gap-8 md:flex"
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Top row links */}
          {navItems.map((item) => {
            const isActive = item.menuKey && activeMenu === item.menuKey;

            return (
              <button
                key={item.label}
                type="button"
                className="relative"
                onMouseEnter={() => {
                  if (item.menuKey) setActiveMenu(item.menuKey);
                  else setActiveMenu(null);
                }}
                onClick={() => {
                  window.location.href = item.href;
                }}
              >
                <span
                  className={`text-sm text-zinc-300 hover:text-white transition ${
                    isActive ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Mega-menu */}
          {isMegaOpen && (
            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
              <div className="rounded-xl border border-[#1C1D1E] bg-[#090A0B] p-2 shadow-[0_26px_80px_rgba(0,0,0,0.85)]">
                <div className="w-[640px] rounded-lg bg-[#161718]/95 backdrop-blur-sm px-5 py-3">
                  <AnimatePresence mode="wait">
                    {activeMenu && (
                      <motion.div
                        key={activeMenu}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        <div className="grid grid-cols-2 divide-x divide-[#252525]">
                          {/* Left column */}
                          <div className="pr-5">
                            {getMenuContent(activeMenu).left.map((section) => (
                              <div key={section.section || 'left'} className="mb-5 last:mb-0">
                                {section.section && (
                                  <h3 className="mb-2.5 text-[10px] font-medium uppercase tracking-wider text-[#6E6E6E]">
                                    {section.section}
                                  </h3>
                                )}
                                <div className="space-y-0.5">
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      className="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-[#212223]"
                                    >
                                      <div className="text-[13px] font-medium text-white">
                                        {item.title}
                                      </div>
                                      {item.description && (
                                        <div className="mt-0.5 text-[11.5px] text-[#9B9B9B] leading-snug">
                                          {item.description}
                                        </div>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Right column */}
                          <div className="pl-5">
                            {getMenuContent(activeMenu).right.map((section, idx) => (
                              <div key={idx} className="mb-5 last:mb-0">
                                {section.section && (
                                  <h3 className="mb-2.5 text-[10px] font-medium uppercase tracking-wider text-[#6E6E6E]">
                                    {section.section}
                                  </h3>
                                )}
                                <div className="space-y-0.5">
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      className="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-[#212223]"
                                    >
                                      <div className="text-[13px] font-medium text-white">
                                        {item.title}
                                      </div>
                                      {item.description && (
                                        <div className="mt-0.5 text-[11.5px] text-[#9B9B9B] leading-snug">
                                          {item.description}
                                        </div>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setOpenMobile((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {openMobile && (
        <div className="border-t border-white/5 bg-[#010000] md:hidden">
          <div className="mx-auto grid max-w-screen-2xl gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-zinc-300 hover:bg:white/5 hover:text-white transition"
                onClick={() => setOpenMobile(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit items-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition"
              onClick={() => setOpenMobile(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


