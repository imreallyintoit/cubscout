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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <div className="space-y-6">
            {[
              {
                icon: "📧",
                title: "Email the Pack",
                detail: "pack5wilmette@gmail.com",
                href: "mailto:pack5wilmette@gmail.com",
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
                title: "Chicago Area Council",
                detail: "chicagobsa.org",
                href: "https://www.chicagobsa.org",
                sub: "Our regional BSA council for events, camp registration, and resources",
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

          {/* Contact form */}
          <div className="card shadow-lg">
            <h3 className="text-xl font-bold text-scout-blue-900 mb-6">Send Us a Message</h3>
            <form
              action="mailto:pack5wilmette@gmail.com"
              method="get"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    name="parent"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-scout-blue-900"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Scout&apos;s Grade
                  </label>
                  <select
                    name="grade"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-scout-blue-900"
                  >
                    <option value="">Select grade…</option>
                    <option value="K">Kindergarten (Lions)</option>
                    <option value="1">1st Grade (Tigers)</option>
                    <option value="2">2nd Grade (Wolves)</option>
                    <option value="3">3rd Grade (Bears)</option>
                    <option value="4">4th Grade (Webelos)</option>
                    <option value="5">5th Grade (Arrow of Light)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-scout-blue-900"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="body"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-scout-blue-900 resize-none"
                  placeholder="Hi! My child is in 2nd grade and we'd love to learn more about Pack 5…"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center text-base py-3"
              >
                Send Message →
              </button>
              <p className="text-xs text-gray-400 text-center">
                This opens your email client. For fastest response, email{" "}
                <a href="mailto:pack5wilmette@gmail.com" className="underline">
                  pack5wilmette@gmail.com
                </a>{" "}
                directly.
              </p>
            </form>
          </div>
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
            <a href="mailto:pack5wilmette@gmail.com" className="btn-secondary text-lg px-8 py-4">
              📧 Email the Cubmaster
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
