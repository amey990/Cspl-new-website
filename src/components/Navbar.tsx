// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-white/5 bg-[#010000]/95 backdrop-blur">
//       <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
//         {/* Brand */}
//         <Link href="/" className="flex items-center gap-2">
//           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90" />
//           <span className="text-sm font-medium tracking-tight text-white" style={{ fontFamily: '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial,"Apple Color Emoji","Segoe UI Emoji"' }}>
//             Linear
//           </span>
//         </Link>

//         {/* Desktop links */}
//         <div className="hidden items-center gap-8 md:flex">
//           <Link href="#" className="text-sm text-zinc-300 hover:text-white transition">Product</Link>
//           <Link href="#" className="text-sm text-zinc-300 hover:text-white transition">Resources</Link>
//           <Link href="#" className="text-sm text-zinc-300 hover:text-white transition">Pricing</Link>
//           <Link href="#" className="text-sm text-zinc-300 hover:text-white transition">Customers</Link>
//           <Link href="#" className="text-sm text-zinc-300 hover:text-white transition">Now</Link>
//           <Link href="#" className="text-sm text-zinc-300 hover:text-white transition">Contact</Link>
//         </div>

//         {/* Actions */}
//         <div className="hidden items-center gap-3 md:flex">
//           <Link href="#" className="text-sm text-zinc-300 hover:text-white transition">Log in</Link>
//           <Link
//             href="#"
//             className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition"
//           >
//             Sign up
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
//           onClick={() => setOpen((v) => !v)}
//           aria-label="Toggle menu"
//         >
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile panel */}
//       {open && (
//         <div className="border-t border-white/5 bg-[#010000] md:hidden">
//           <div className="mx-auto grid max-w-screen-2xl gap-2 px-4 py-4">
//             {['Product','Resources','Pricing','Customers','Now','Contact'].map((item) => (
//               <Link
//                 key={item}
//                 href="#"
//                 className="rounded-md px-2 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition"
//               >
//                 {item}
//               </Link>
//             ))}
//             <div className="mt-2 flex items-center gap-3">
//               <Link href="#" className="text-sm text-zinc-300 hover:text-white transition">Log in</Link>
//               <Link
//                 href="#"
//                 className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }



//t3 updated //
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = ['Products', 'Verticals', 'Solutions', 'Partners', 'Case Studies', 'Contact'];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090A0A]">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Brand (text only) */}
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

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item} href="#" className="text-sm text-zinc-300 hover:text-white transition">
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="#"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-white/5 bg-[#010000] md:hidden">
          <div className="mx-auto grid max-w-screen-2xl gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="rounded-md px-2 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-2 inline-flex w-fit items-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
