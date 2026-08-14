import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have questions? Our Pack leaders are happy to help. Reach out and we&apos;ll get back
            to you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: "📧",
              title: "Email the Pack",
              detail: "cubscoutpack5wilmette@gmail.com",
              href: "mailto:cubscoutpack5wilmette@gmail.com",
              sub: "Best for general inquiries and registration questions",
            },
            {
              icon: "📍",
              title: "We Meet In",
              detail: "Wilmette, Illinois",
              href: null,
              sub: "Den and pack meeting locations shared with registered families",
            },
            {
              icon: "🌐",
              title: "Register Online",
              detail: "my.Scouting.org",
              href: "https://my.scouting.org",
              sub: "Official BSA registration portal — create your family account here",
            },
            {
              icon: "🏛️",
              title: "Northeast Illinois Council",
              detail: "neic.org",
              href: "https://www.neic.org",
              sub: "Our local NEIC council for events, camp registration, and scholarship resources",
            },
          ].map((item) => (
            <div key={item.title} className="card flex gap-4 hover:shadow-lg transition-shadow">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-bold text-scout-blue-900 text-sm">{item.title}</h4>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-scout-blue-900 font-semibold hover:text-scout-gold transition-colors"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="font-semibold text-scout-blue-900">{item.detail}</p>
                )}
                <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Group */}
        <div className="mt-10 max-w-4xl mx-auto">
          <a
            href="https://chat.whatsapp.com/Du1KDPXFhj2GWmujIaD1kL?s=cl&p=i&ilr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col sm:flex-row items-center gap-6 hover:shadow-xl transition-shadow group"
          >
            {/* WhatsApp logo + label */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2 sm:w-40">
              {/* WhatsApp SVG icon */}
              <svg viewBox="0 0 32 32" className="w-12 h-12" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="#25D366"/>
                <path
                  d="M23.5 8.5A10.45 10.45 0 0 0 16 5.5C10.2 5.5 5.5 10.2 5.5 16c0 1.85.48 3.65 1.4 5.23L5.5 26.5l5.43-1.38A10.47 10.47 0 0 0 16 26.5c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.09-5.43-3-7.5zm-7.5 16.1a8.7 8.7 0 0 1-4.43-1.22l-.32-.19-3.22.82.84-3.13-.2-.33A8.68 8.68 0 0 1 7.3 16c0-4.8 3.9-8.7 8.7-8.7 2.32 0 4.5.9 6.14 2.55A8.63 8.63 0 0 1 24.7 16c0 4.8-3.9 8.6-8.7 8.6zm4.77-6.5c-.26-.13-1.55-.77-1.79-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.28-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.16.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.91-.21-.5-.43-.43-.58-.44h-.5c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.65c.13.17 1.8 2.75 4.37 3.86.61.26 1.09.42 1.46.54.61.2 1.17.17 1.61.1.49-.07 1.51-.62 1.73-1.22.21-.6.21-1.1.15-1.21-.06-.11-.22-.17-.48-.3z"
                  fill="#fff"
                />
              </svg>
              <span className="text-xs font-bold text-[#25D366] uppercase tracking-wide">WhatsApp</span>
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-bold text-scout-blue-900 text-lg group-hover:text-scout-blue-700 transition-colors">
                Join Our Pack 5 WhatsApp Group
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                Scan the QR code or tap to join — get real-time updates, event reminders, and stay connected with Pack 5 families.
              </p>
            </div>

            {/* QR code */}
            <div className="flex-shrink-0">
              <Image
                src="/whatsappgroupqrcode.jpg"
                alt="Pack 5 WhatsApp group QR code"
                width={100}
                height={100}
                className="rounded-lg border border-gray-200"
              />
            </div>
          </a>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-scout-blue-900 to-blue-800 rounded-2xl p-10 text-white">
          <div className="text-5xl mb-4">⚜️</div>
          <h3 className="text-3xl font-bold mb-3">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-blue-200 max-w-xl mx-auto mb-6">
            The best time to join Pack 5 is right now. Come to our next Pack meeting and see
            what Scouting is all about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#calendar" className="btn-primary text-lg px-8 py-4">
              📅 See Upcoming Events
            </a>
            <a href="mailto:cubscoutpack5wilmette@gmail.com" className="btn-secondary text-lg px-8 py-4">
              📧 Email the Cubmaster
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
