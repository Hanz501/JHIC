export default function Career() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--text-blue)]">Career Opportunity</h2>
        <a href="#find-more" className="group relative inline-block text-sm font-semibold text-[var(--text-blue)]">
          See more opportunities!
          <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[var(--text-blue)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </a>
      </div>

      <div className="flex h-80 items-center justify-center rounded-md bg-[var(--component-gray)]">
        <span className="text-lg font-bold text-white">Nama-nama PT</span>
      </div>
    </section>
  );
}