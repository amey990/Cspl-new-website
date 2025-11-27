// 'use client';

// import Link from 'next/link';
// import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

// const brand = {
//   name: 'Commedia',
//   blurb:
//     'Empowering teams with reliable, scalable, and elegant product experiences.',
// };

// const columns = {
//   solutions: [
//     { label: 'Business Automation', href: '#' },
//     { label: 'Network Security', href: '#' },
//     { label: 'Cloud Services', href: '#' },
//     { label: 'A/v Solutions', href: '#' },
//     { label: 'Satcom', href: '#' },
//   ],
//   resources: [
//     { label: 'Documentation', href: '#' },
//     { label: 'Case Studies', href: '#' },
//     { label: 'Blog', href: '#' },
//     { label: 'Webinars', href: '#' },
//     { label: 'Community', href: '#' },
//   ],
//   company: [
//     { label: 'About Us', href: '#' },
//     { label: 'Careers', href: '#' },
//     { label: 'Contact', href: '#' },
//     { label: 'Partners', href: '#' },
//   ],
// };

// const socials = [
//   { Icon: Instagram, href: '#', label: 'Instagram' },
//   { Icon: Twitter, href: '#', label: 'Twitter/X' },
//   { Icon: Linkedin, href: '#', label: 'LinkedIn' },
//   { Icon: Youtube, href: '#', label: 'YouTube' },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative mt-24 w-full border-t border-white/10 bg-[#010000] overflow-hidden">
//       {/* subtle radial glow */}
//       <div className="pointer-events-none absolute inset-0 opacity-60">
//         <div className="absolute left-1/2 top-[45%] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0)_60%)]" />
//       </div>

//       {/* Newsletter */}
//       <div className="relative mx-auto max-w-screen-2xl px-4 pt-14 md:px-6 lg:px-8">
//         <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
//           <div>
//             <h2
//               className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
//               style={{ fontFamily: '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial' }}
//             >
//               Stay ahead with {brand.name}.
//             </h2>
//             <p className="mt-3 max-w-2xl text-lg text-zinc-300">
//               Join thousands of professionals who trust {brand.name} for innovative business solutions.
//             </p>

//             <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-zinc-400 focus:border-white/20 focus:outline-none sm:flex-1"
//               />
//               <button className="h-12 rounded-xl bg-white px-5 text-sm font-medium text-black hover:bg-zinc-100">
//                 Subscribe Now
//               </button>
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-md">
//             <div className="absolute -left-3 -top-5 h-[88%] w-[92%] -rotate-3 rounded-3xl bg-white/10" />
//             <div className="absolute -right-2 -bottom-5 h-[88%] w-[92%] rotate-3 rounded-3xl bg-white/10" />
//             <img
//               src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"
//               alt="Newsletter visual"
//               className="relative z-10 rounded-3xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Link Columns */}
//       <div className="relative mx-auto max-w-screen-2xl px-4 pt-12 md:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
//           <div>
//             <div
//               className="text-xl font-semibold text-white"
//               style={{ fontFamily: '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial' }}
//             >
//               {brand.name}.
//             </div>
//             <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">{brand.blurb}</p>

//             <div className="mt-6 flex items-center gap-4">
//               {socials.map(({ Icon, href, label }) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white">Solutions</h3>
//             <ul className="mt-5 space-y-3 text-sm">
//               {columns.solutions.map((item) => (
//                 <li key={item.label}>
//                   <Link href={item.href} className="text-zinc-400 hover:text-white">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white">Resources</h3>
//             <ul className="mt-5 space-y-3 text-sm">
//               {columns.resources.map((item) => (
//                 <li key={item.label}>
//                   <Link href={item.href} className="text-zinc-400 hover:text-white">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-white">Company</h3>
//             <ul className="mt-5 space-y-3 text-sm">
//               {columns.company.map((item) => (
//                 <li key={item.label}>
//                   <Link href={item.href} className="text-zinc-400 hover:text-white">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar — last element, no extra spacing after */}
//       <div className="mt-10 border-t border-white/10">
//         <div className="mx-auto max-w-screen-2xl px-4 py-6 text-sm text-zinc-400 md:px-6 lg:px-8">
//           <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
//             <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
//             <div className="flex items-center gap-6">
//               <Link href="#" className="hover:text-white">Terms of Service</Link>
//               <Link href="#" className="hover:text-white">Privacy Policy</Link>
//               <Link href="#" className="hover:text-white">Cookie Settings</Link>
//               <Link href="#" className="hover:text-white">Accessibility</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* nothing after this */}
//     </footer>
//   );
// }



'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

import NewsletterImage from '../../assets/main.png';

const brand = {
  name: 'Commedia',
  blurb:
    'Empowering teams with reliable, scalable, and elegant product experiences.',
};

const columns = {
  solutions: [
    { label: 'Business Automation', href: '#' },
    { label: 'Network Security', href: '#' },
    { label: 'Cloud Services', href: '#' },
    { label: 'A/V Solutions', href: '#' },
    { label: 'Satcom', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Webinars', href: '#' },
    { label: 'Community', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Partners', href: '#' },
  ],
};

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter/X' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 w-full overflow-hidden border-t border-white/10 bg-[#010000]">
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-[45%] h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0)_60%)]" />
      </div>

      {/* Newsletter */}
      <div className="relative mx-auto max-w-screen-2xl px-4 pt-14 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              style={{
                fontFamily:
                  '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
              }}
            >
              Stay ahead with {brand.name}.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-zinc-300">
              Join thousands of professionals who trust {brand.name} for innovative business
              solutions.
            </p>

            <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-zinc-400 focus:border-white/20 focus:outline-none sm:flex-1"
              />
              <button className="h-12 rounded-xl bg-white px-5 text-sm font-medium text-black hover:bg-zinc-100">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* <div className="relative mx-auto w-full max-w-md"> */}
          <div className="relative mx-auto w-full max-w-[400px]">

            <div className="absolute -left-3 -top-5 h-[88%] w-[92%] -rotate-3 rounded-3xl bg-white/10" />
            <div className="absolute -right-2 -bottom-5 h-[88%] w-[92%] rotate-3 rounded-3xl bg-white/10" />
            <Image
              src={NewsletterImage}
              alt="Newsletter visual"
              className="relative z-10 rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Link Columns */}
      <div className="relative mx-auto max-w-screen-2xl px-4 pt-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div
              className="text-xl font-semibold text-white"
              style={{
                fontFamily:
                  '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
              }}
            >
              {brand.name}.
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">{brand.blurb}</p>

            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Solutions</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {columns.solutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {columns.resources.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {columns.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — last element, no extra spacing after */}
      <div className="mt-10 border-t border-white/10">
        <div className="mx-auto max-w-screen-2xl px-4 py-6 text-sm text-zinc-400 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Settings
              </Link>
              <Link href="#" className="hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
