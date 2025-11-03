// import Hero from "@/components/Hero";

// export default function HomePage() {
//   return <Hero />;
// }

// // app/page.tsx  (or src/app/page.tsx)
// import React from "react";
// import Hero from "@/components/Hero";
// import Solutions from "@/components/Solutions";

// export default function Page(): React.ReactElement {
//   return (
//     <>
//       <Hero />
//       <Solutions />
//     </>
//   );
// }


import React from "react";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import ProductsSection from "@/components/ProductsSection";
import CustomerSection from "@/components/CustomerSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";

export default function HomePage(): React.ReactElement{
  return (
    <>
      <Hero />
      <Solutions />
      <ProductsSection />
      <CustomerSection />
      <StatsSection />
      <Testimonials />
    </>
  );
}