export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-gray-700 bg-cover bg-center px-6 text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20,20,30,0.55), rgba(20,20,30,0.55)), url('/hero-building.jpg')",
      }}
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold md:text-5xl">SMK Al-Bahri</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-100 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare
          quam ante, vitae pellentesque elit iaculis eu. Fusce mollis.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            className="rounded-md border border-white px-6 py-2 text-sm font-semibold transition hover:bg-white hover:text-gray-800"
          >
            Daftar
          </button>
          <button
            type="button"
            className="rounded-md border border-white px-6 py-2 text-sm font-semibold transition hover:bg-white hover:text-gray-800"
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
}