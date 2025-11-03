'use client';

import { motion } from 'framer-motion';

export default function Customers() {
  const customers = [
    { name: 'OpenAI', logo: 'OpenAI' },
    { name: 'Cash App', logo: '$', isBadge: true },
    { name: 'Scale', logo: 'scale' },
    { name: 'Ramp', logo: 'ramp ↗' },
    { name: 'Vercel', logo: '▲Vercel' },
    { name: 'Coinbase', logo: 'coinbase' },
    { name: 'BOOM', logo: '✱ BOOM' },
    { name: 'Cursor', logo: '◧ CURSOR' },
  ];

  return (
    <section className="relative bg-[#0A0B0C] px-6 py-20 md:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-3 text-[32px] font-medium leading-[40px] text-white md:text-[36px] md:leading-[44px]"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            Powering the world's best product teams.
          </h2>
          <p
            className="text-[17px] leading-[26px] text-[#6B7280]"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            From next-gen startups to established enterprises.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12 lg:gap-y-16"
        >
          {customers.map((customer, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center"
            >
              {customer.isBadge ? (
                // Cash App badge style
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black">
                    <span className="text-[20px] font-bold">{customer.logo}</span>
                  </div>
                  <span
                    className="text-[22px] font-medium text-white"
                    style={{
                      fontFamily:
                        '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
                    }}
                  >
                    Cash App
                  </span>
                </div>
              ) : (
                // Regular text logos
                <span
                  className="text-[22px] font-medium text-white md:text-[24px]"
                  style={{
                    fontFamily:
                      '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
                    letterSpacing: customer.name === 'Scale' ? '0.02em' : 'normal',
                  }}
                >
                  {customer.logo}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}