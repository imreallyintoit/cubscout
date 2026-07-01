export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-scout-blue-900 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-white text-9xl select-none">⚜️</div>
        <div className="absolute bottom-20 right-10 text-white text-8xl select-none rotate-12">⚜️</div>
        <div className="absolute top-1/2 left-1/3 text-white text-7xl select-none -rotate-6">⚜️</div>
      </div>

      {/* Gold accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-scout-gold" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-scout-gold text-scout-blue-900 font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow">
          🏕️ Wilmette, Illinois · Grades K–5
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Adventure Starts
          <br />
          <span className="text-scout-gold">Right Here.</span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Cub Scout Pack 5 helps kids in Wilmette build character, make lasting
          friendships, and discover the great outdoors — all while having the time of
          their lives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#join" className="btn-primary text-lg px-8 py-4 rounded-xl shadow-xl">
            🚀 Join Pack 5
          </a>
          <a href="#about" className="btn-secondary text-lg px-8 py-4 rounded-xl">
            Learn More
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "K–5", label: "All Grades" },
            { value: "Year-Round", label: "Activities" },
            { value: "Wilmette", label: "Based In" },
            { value: "BSA", label: "Chartered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-scout-gold">
                {stat.value}
              </div>
              <div className="text-blue-300 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Photo strip — shows pack photos when present in /public/images/ */}
        <div className="mt-10 grid grid-cols-4 gap-2 max-w-2xl mx-auto pb-4">
          {[
            { path: "/images/hero-1.jpg", label: "Camping" },
            { path: "/images/hero-2.jpg", label: "Hiking" },
            { path: "/images/hero-3.jpg", label: "Derby" },
            { path: "/images/hero-4.jpg", label: "Service" },
          ].map((photo) => (
            <div
              key={photo.path}
              className="aspect-square rounded-xl overflow-hidden bg-blue-800/60 ring-1 ring-white/10"
              style={{
                backgroundImage: `url(${photo.path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label={photo.label}
            />
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
