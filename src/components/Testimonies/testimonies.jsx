const TESTIMONIALS = [
  {
    name: "Random User",
    role: "Alumni SMK Al-Bahri",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare quam ante",
    footer: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Random User",
    role: "Alumni SMK Al-Bahri",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare quam ante",
    footer: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Random User",
    role: "Alumni SMK Al-Bahri",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare quam ante",
    footer: "Lorem ipsum dolor sit amet",
  },
];

export default function Testimonies() {
  return (
    <section className="bg-[var(--bg-purple)] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">Testimonies</p>
        <h2 className="mt-2 text-2xl font-bold">What they said about us</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="h-70 rounded-md bg-indigo-900/60 p-5">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 flex-shrink-0 rounded-full bg-white" />
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-indigo-300">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm italic text-indigo-100">&ldquo;{t.quote}&rdquo;</p>
              <p className="flex min-h-[16vh] flex-col justify-end text-xs font-semibold text-indigo-200">{t.footer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}