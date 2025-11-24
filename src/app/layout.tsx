// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "Commedia — Modern Product Experiences",
//   description: "Purpose-built tools and solutions.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className="h-full">
//       <body
//         className="min-h-screen bg-[#010000] text-white antialiased flex flex-col" // ← flex column
//         style={{
//           fontFamily:
//             '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
//         }}
//       >
//         <Navbar />
//         <main className="flex-1">{children}</main> {/* ← fills space */}
//         <Footer />
//       </body>
//     </html>
//   );
// }



// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Commedia — Modern Product Experiences',
  description: 'Purpose-built tools and solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-screen bg-[#010000] text-white antialiased flex flex-col"
        style={{
          fontFamily:
            '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
        }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
