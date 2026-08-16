import { useState } from "react";

const POSTS = [
  { date: "DD/MM/YY", author: "Al Bahri", title: "Lorem ipsum dolor sit am consectetur adipiscing el" },
  { date: "DD/MM/YY", author: "Al Bahri", title: "Lorem ipsum dolor sit am consectetur adipiscing el" },
  { date: "DD/MM/YY", author: "Al Bahri", title: "Lorem ipsum dolor sit am consectetur adipiscing el" },
];

const TOTAL_PAGES = 5;

export default function Blog() {
  const [page, setPage] = useState(1);

  return (
    <section id="blog" className="bg-gray-100 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 ml-15 flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="text-sm font-semibold text-[var(--text-purple)]">Blog</p>
            <h2 className="mt-1 text-2xl font-bold text-[var(--text-purple)]">Our Latest News</h2>
          </div>
          <a href="#blog" className="group relative inline-block text-sm font-semibold text-[var(--text-purple)]">
            See More
            <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[var(--text-blue)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POSTS.map((post, i) => (
            <article key={i} className="rounded-md bg-white shadow-sm">
              <div className="aspect-square w-full rounded-t-md bg-gray-300" />
              <div className="p-4">
                <div className="flex justify-between text-xs font-semibold text-[var(--text-purple)]">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <p className="mt-2 text-sm font-bold text-[var(--text-purple)]">{post.title}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setPage(num)}
              className={`h-8 w-8 rounded-md text-sm font-semibold transition ${
                page === num ? "bg-[var(--text-purple)] text-white" : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(p + 1, TOTAL_PAGES))}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--text-purple)] hover:bg-[var(--bg-purple)] text-white"
            aria-label="Next page"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </section>
  );
}