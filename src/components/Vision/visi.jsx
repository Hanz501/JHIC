const VISIONS = [
  {
    title: "Visi Pertama",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare quam ante",
  },
  {
    title: "Visi Kedua",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare quam ante",
  },
  {
    title: "Visi Ketiga",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare quam ante",
  },
];

export default function Vision() {
  return (
    <section id="about" className="mx-auto flex max-w-5xl items-center gap-20 px-6 py-16">
      <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full bg-[var(--component-red)] text-lg font-bold text-white">
        Model
      </div>

      <ul className="flex flex-1 flex-col gap-3 cursor-default">
        {VISIONS.map((visi) => (
            <li
            key={visi.title}
            className="flex items-start gap-4 rounded-md p-4 transition hover:bg-blue-100"
            >
            <span className="mt-1 h-6 w-6 flex-shrink-0 rounded-full border-2 border-indigo-700" />
            <div>
                <h3 className="font-bold text-[var(--text-blue)]">{visi.title}</h3>
                <p className="text-m text-[var(--text-default)]">{visi.text}</p>
            </div>
            </li>
        ))}
        </ul>
    </section>
  );
}