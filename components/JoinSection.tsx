const benefits = [
  { icon: "🏕️", text: "Camping trips and outdoor adventures" },
  { icon: "🏆", text: "Pinewood Derby car racing" },
  { icon: "🛶", text: "Kayaking, hiking, and nature exploration" },
  { icon: "🎭", text: "Skits, crafts, and creative projects" },
  { icon: "🤝", text: "Community service projects" },
  { icon: "🎖️", text: "Rank advancements and badge earning" },
  { icon: "👨‍👩‍👧", text: "Family-centered activities" },
  { icon: "🏛️", text: "STEM and engineering challenges" },
];

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-scout-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Join Pack 5?</h2>
          <p className="text-lg text-blue-200 mt-3 max-w-2xl mx-auto">
            Cub Scouting is more than meetings — it&apos;s a year-round adventure that the whole
            family enjoys together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Benefits grid */}
          <div>
            <h3 className="text-xl font-bold text-scout-gold mb-6">
              What your Scout will experience:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div
                  key={b.text}
                  className="flex items-start gap-3 bg-white/10 rounded-xl p-4 text-white"
                >
                  <span className="text-2xl flex-shrink-0">{b.icon}</span>
                  <span className="text-sm leading-snug">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-scout-blue-900 mb-2">
              Ready to Join?
            </h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              We welcome youth in grades K–5. No prior experience needed. Families
              are encouraged to get involved — many of our best leaders started as
              parents just like you!
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: "📅", text: "Attend a free Pack meeting to visit" },
                { icon: "🌐", text: "Register online at my.Scouting.org" },
                { icon: "📧", text: "Email our Cubmaster to connect" },
              ].map((step) => (
                <div key={step.text} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="text-xl">{step.icon}</span>
                  <span>{step.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="block text-center btn-primary w-full justify-center text-base py-4"
            >
              Contact the Cubmaster →
            </a>

            <p className="text-center text-xs text-gray-400 mt-4">
              Or email us at{" "}
              <a
                href="mailto:pack5wilmette@gmail.com"
                className="text-scout-blue-900 hover:underline"
              >
                pack5wilmette@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
