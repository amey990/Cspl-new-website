// // src/app/layout.tsx
// import type { Metadata } from 'next';
// import './globals.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import DemoCornerPlayer from '@/components/DemoCornerPlayer';
// import ChatbotWidget from '@/components/chatbot/ChatbotWidget';
// import { Toaster } from 'sonner';

// export const metadata: Metadata = {
//   title: 'Commedia Solutions',
//   description: 'Purpose-built tools and solutions.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="h-full">
//       <body
//         className="min-h-screen bg-[#010000] text-white antialiased flex flex-col"
//         style={{
//           fontFamily:
//             '"Inter var","InterVariable",Inter,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial',
//         }}
//       >
//         <Navbar />
//         <main className="flex-1">{children}</main>
//         <Footer />
//         <DemoCornerPlayer />

//         {/* ✅ Global bottom-right chatbot */}
//         <ChatbotWidget />
//         <Toaster theme="dark" position="bottom-right" />
//       </body>
//     </html>
//   );
// }



// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DemoCornerPlayer from '@/components/DemoCornerPlayer';
import ChatbotWidget from '@/components/chatbot/ChatbotWidget';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Commedia Solutions',
  description: 'Purpose-built tools and solutions.',

  icons: {
    icon: '/favicon.ico?v=2',       // main favicon
    shortcut: '/favicon.ico?v=2',   // browser shortcut icon
    apple: '/favicon.ico?v=2',      // for Apple devices
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Extra fallback (helps Google + browsers) */}
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>

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
        <DemoCornerPlayer />

        {/* Chatbot */}
        <ChatbotWidget />

        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}