const pillars = [
  {
    icon: "🧭",
    title: "Character",
    description:
      "We guide Scouts to develop integrity, responsibility, and a strong moral compass through real experiences.",
  },
  {
    icon: "🌍",
    title: "Citizenship",
    description:
      "Scouts learn to give back to the Wilmette community through service projects and civic engagement.",
  },
  {
    icon: "🏃",
    title: "Fitness",
    description:
      "From hikes at Illinois Beach State Park to Pinewood Derby, Scouts stay active and healthy.",
  },
  {
    icon: "👫",
    title: "Friendship",
    description:
      "Dens of 6–8 kids from your neighborhood become lifelong friends through shared adventures.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">About Pack 5</h2>
          <p className="section-subheading">
            For over 80 years, Pack 5 has been a cornerstone of the Wilmette community — helping young
            people discover who they are and what they can achieve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-scout-blue-900 mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cub Scout Pack 5 meets in Wilmette, Illinois and is proud to be part of the Boy Scouts
              of America&apos;s Chicago Area Council. We welcome all youth in grades K–5 (ages 5–10)
              regardless of experience level.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our dens are organized by grade level: Lions (K), Tigers (1st), Wolves (2nd), Bears
              (3rd), and Webelos/Arrow of Light (4th–5th). Each den meets regularly, working toward
              rank advancements, badges, and amazing shared experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Throughout the year we camp, hike, build, create, compete in the Pinewood Derby, and
              serve our community — always guided by the Scout Oath and Scout Law.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Lions", grade: "Kindergarten", color: "bg-yellow-50 border-yellow-300", icon: "🦁" },
              { label: "Tigers", grade: "1st Grade", color: "bg-orange-50 border-orange-300", icon: "🐯" },
              { label: "Wolves", grade: "2nd Grade", color: "bg-gray-50 border-gray-300", icon: "🐺" },
              { label: "Bears", grade: "3rd Grade", color: "bg-amber-50 border-amber-300", icon: "🐻" },
              { label: "Webelos", grade: "4th Grade", color: "bg-blue-50 border-blue-300", icon: "⚜️" },
              { label: "Arrow of Light", grade: "5th Grade", color: "bg-indigo-50 border-indigo-300", icon: "🏹" },
            ].map((den) => (
              <div
                key={den.label}
                className={`border rounded-xl p-4 text-center ${den.color}`}
              >
                <div className="text-3xl mb-1">{den.icon}</div>
                <div className="font-bold text-scout-blue-900 text-sm">{den.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{den.grade}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h4 className="font-bold text-scout-blue-900 text-lg mb-2">{p.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
