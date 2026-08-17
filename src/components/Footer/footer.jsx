import { useState } from "react";
import { FaLocationDot, FaPhoneFlip,} from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer id="footer">
      <div className="bg-indigo-200 px-6 py-10 text-center">
        <h3 className="text-lg font-bold text-[var(--bg-purple)]">Lorem Ipsum dolor sit amet</h3>
        <form
          onSubmit={handleSubscribe}
          className="mx-auto mt-4 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            className="flex-1 bg-[var(--bg)] px-4 py-2 text-sm focus:outline-none focus:ring-1.2 focus:ring-bg-[var(--text-purple)]"
          />
          <button
            type="submit"
            className="bg-[var(--bg-purple)] px-6 py-2 text-sm font-semibold text-[var(--text-white)] cursor-pointer transition hover:bg-indigo-800"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="mt-2 text-xs font-medium text-indigo-800">Thanks for subscribing!</p>
        )}
      </div>

      <div className="bg-[var(--bg-purple)] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="h-14 w-14 flex-shrink-0 rounded-md bg-white" />
            <p className="text-sm font-semibold">Lorem ipsum dolor sit amet</p>
          </div>
          <a href="#footer" className="flex items-center gap-4 text-sm font-medium" target="_blank" rel="noopener noreferrer">
            <FaPhoneFlip className="h-4 w-4 text-[var(--text-yellow)]" />
            +6221 2345 6789
          </a>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-xs text-indigo-300 cursor-default">
          © {new Date().getFullYear()} SMK Al-Bahri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}