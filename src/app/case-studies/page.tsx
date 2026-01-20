import CaseStudiesCubesField from '../../components/CaseStudiesCubesField';
import CaseStudiesGrid from './CaseStudiesGrid';
import { CASE_STUDIES } from './caseStudies.data';

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#050506]">
      <CaseStudiesCubesField />

      <section className="px-6 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Explore case studies
          </h2>
          <p className="mt-3 text-zinc-300 max-w-2xl">
            Browse deployments by verticals and solutions — open any case study for full details.
          </p>
        </div>

        <div className="mt-10">
          <CaseStudiesGrid items={CASE_STUDIES} />
        </div>
      </section>
    </main>
  );
}
