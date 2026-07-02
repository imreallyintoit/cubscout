export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-scout-blue-900 text-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <span className="text-2xl">⚜️</span>
              <span>
                <span className="text-scout-gold">Pack 5</span> Wilmette
              </span>
            </div>
            <p className="text-sm text-blue-300">
              Cub Scout Pack 5 serves youth in grades K–5 in Wilmette, Illinois. Chartered by
              First Presbyterian Church of Wilmette through Scouting America and the Northeast
              Illinois Council (NEIC).
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#about", label: "About Pack 5" },
                { href: "#join", label: "Join Pack 5" },
                { href: "#costs", label: "Costs & Budget" },
                { href: "#calendar", label: "Event Calendar" },
                { href: "#contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-scout-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">National Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.scouting.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-scout-gold transition-colors"
                >
                  Scouting America (BSA)
                </a>
              </li>
              <li>
                <a
                  href="https://my.scouting.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-scout-gold transition-colors"
                >
                  my.Scouting.org (Login)
                </a>
              </li>
              <li>
                <a
                  href="https://www.nepathways.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-scout-gold transition-colors"
                >
                  Northeast Illinois Council (NEIC)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-6 text-sm text-blue-400 text-center">
          © {year} Cub Scout Pack 5, Wilmette, IL. All rights reserved. &nbsp;|&nbsp; Northeast Illinois Council, Scouting America
        </div>
      </div>
    </footer>
  );
}
