import { useState, useRef, useEffect } from "react";

const TABS = ["Admission", "Campuses", "Major"];

const ADMISSION_CARDS = [
  { label: "Why us?", color: "bg-orange-500" },
  { label: "FAQ", color: "bg-yellow-400 text-gray-900" },
  { label: "Fees", color: "bg-blue-700" },
];

export default function FindMore() {
  const [activeTab, setActiveTab] = useState("Admission");
  const tabRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const index = TABS.indexOf(activeTab);
    const el = tabRefs.current[index];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeTab]);

  return (
    <section id="find-more" className="mx-auto max-w-6xl px-6 py-10">
      <div className="relative flex gap-8 border-b text-[var(--text-blue)] text-sm font-semibold">
        {TABS.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => {
                tabRefs.current[index] = el;
            }}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer pb-4 transition-colors ${
              activeTab === tab
                ? "text-[var(--text-blue)]"
                : "text-[var(--text-blue)]/50"
            }`}
          >
            {tab}
          </button>
        ))}

        <span
        className="absolute bottom-0 h-1 rounded-full bg-[var(--text-blue)] transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
      </div>

      {activeTab === "Admission" && (
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-[var(--text-blue)]">Find out More!</h1>
            <a href="#find-more" className="group relative inline-block text-sm font-semibold text-[var(--text-blue)]">
              Learn More
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[var(--text-blue)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-md sm:grid-cols-3">
            {ADMISSION_CARDS.map((card) => (
              <button
                key={card.label}
                type="button"
                className={`${card.color} flex h-100 items-center justify-center text-lg font-bold text-white transition hover:opacity-90`}
              >
                {card.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Campuses" && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {["Campus A", "Campus C"].map((campus) => (
            <div key={campus} className="flex min-h-[40vh] flex-col justify-end rounded-md bg-[var(--card-gray)] p-6 min-h-[40vh]">
              <p className="text-s font-medium text-white">SMK Al Bahri</p>
              <h2 className="mt-1 text-2xl font-bold text-white">{campus}</h2>
              <hr className="mt-3 border-t-3 border-white" />
              <p className="mt-2 text-sm text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
          <i className="mt-2 mb-6 text-l text-[var(--text-blue)]">
                Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit.
              </i>
        </div>
      )}

      {activeTab === "Major" && (
        <div className="mt-8">
          <div className="mb-4 flex gap-2">
            <button type="button" className="rounded-md border text-[var(--text-blue)] px-4 py-1 text-sm font-semibold text-[var(--text-blue)] transition hover:bg-[var(--text-blue)] hover:text-white cursor-pointer">
              Campus A
            </button>
            <button type="button" className="rounded-md bg-[var(--text-blue)] px-4 py-1 text-sm font-semibold text-white">
              Campus C
            </button>
          </div>
          <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
            {["Teknik Komputer Jaringan", "Desain Komunikasi Visual", "Rekayasa Perangkat Lunak"].map(
              (major) => (
                <li key={major} className="p-4 text-sm font-semibold text-gray-700">
                  {major}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </section>
  );
}