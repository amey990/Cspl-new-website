'use client';

import { WebGLShader } from '@/components/WebGLShader';
import BlurText from '@/components/BlurText';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#08090A] lg:min-h-[700px]">
      {/* Background WebGL Shader - Wave lines behind the text */}
      <div className="absolute inset-0">
        <WebGLShader />
        {/* Gradient overlays to blend the waves with background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#08090A] via-[#08090A]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08090A] via-[#08090A]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#08090A] via-[#08090A]/0 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#08090A] via-[#08090A]/0 to-transparent" />
      </div>

      {/* Content - In front of wave */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-20 pt-16 sm:pt-20 md:px-6 lg:px-8 lg:pt-24 xl:pr-16">
        <div className="max-w-4xl">
          {/* Heading */}
          <div
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial,"Apple Color Emoji","Segoe UI Emoji"',
              lineHeight: 1.06,
              fontWeight: 600,
              fontSize: 'clamp(2.25rem, 4.2vw, 4.5rem)',
            }}
          >
            <BlurText
              as="h1"
              text="From Thought To Reality Turning Ideas Into Impact"
              className="tracking-tight text-white"
              animateBy="words"
              delay={80}
              direction="top"
            />
          </div>

          {/* Subtext */}
          <div
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            <BlurText
              as="p"
              text="Beyond development, into transformation. We deliver services that shape tomorrow."
              className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8"
              animateBy="words"
              delay={50}
              direction="bottom"
            />
          </div>

          {/* Buttons – animated with blur effect */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/products"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              Our Products
            </a>

            <a
              href="/verticals"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-all hover:bg-white/10"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-white/80" />
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}