'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo1 from '../../assets/Airtel-bg.png';
import Logo2 from '../../assets/NttData-bg.png';
import Logo3 from '../../assets/SES.png';
import Logo4 from '../../assets/Telstra.png';
import Logo5 from '../../assets/TataCom-bg.png';
import Logo6 from '../../assets/Disney-bg.png';
import Logo7 from '../../assets/Sont-bg.png';
import Logo8 from '../../assets/encompass.png';



export default function Customers() {

  const customers = [
    { name: 'Airtel', logo: Logo1 },
    { name: 'NTT Data', logo: Logo2 },
    { name: 'SES', logo: Logo3 },
    { name: 'Telstra', logo: Logo4 },
    { name: 'Tata Communications', logo: Logo5 },
    { name: 'Disney', logo: Logo6 },
    { name: 'Sony', logo: Logo7 },
    { name: 'Encompass', logo: Logo8 },
  ];

  return (

    <section className="relative bg-[#0A0B0C] px-6 pt-20   pb-20 md:px-8 lg:px-16 lg:pt-24 lg:pb-24">

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
            Proudly collaborating with teams we truly value.
          </h2>
          <p
            className="text-[18px] leading-[28px] text-[#6B7280]"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            Dedicated to our customers, from innovative startups to established enterprises.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-12 md:gap-y-16 lg:gap-x-16 lg:gap-y-16"
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
      </div>
    </section>
  );
}