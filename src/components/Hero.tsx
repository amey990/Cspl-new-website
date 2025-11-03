import { WebGLShader } from '@/components/WebGLShader';

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
          <h1
            className="tracking-tight text-white"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial,"Apple Color Emoji","Segoe UI Emoji"',
              lineHeight: 1.06,
              fontWeight: 600,
              fontSize: 'clamp(2.25rem, 4.2vw, 4.5rem)',
            }}
          >
            Linear is a purpose-built tool for
            <br />
            planning and building products
          </h1>

          <p
            className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8"
            style={{
              fontFamily:
                '"ABC Diatype",-apple-system,system-ui,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial',
            }}
          >
            Meet the system for modern software development. Streamline issues, projects, and
            product roadmaps.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-100 transition"
            >
              Start building
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:border-white/20 hover:bg-white/10 transition"
            >
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-white/80" />
              New: Product Intelligence
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}