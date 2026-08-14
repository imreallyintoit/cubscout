const steps = [
  {
    number: "01",
    icon: "📅",
    title: "Visit a Pack Meeting",
    description:
      "Come to one of our free open Pack meetings (held monthly at First Presbyterian Church of Wilmette). Meet the Cubmaster, den leaders, and current Scouts. No commitment required — just show up!",
    action: "See our calendar →",
    actionHref: "#calendar",
    action2: null,
    actionHref2: null,
  },
  {
    number: "02",
    icon: "🌐",
    title: "Register Online",
    description:
      "Use our direct registration link to sign up online — it automatically routes to Pack 5 (Northeast Illinois Council). There are two registration fees: a Scouting America fee and a separate NEIC fee. See the Costs section for a full breakdown.",
    action: "Register for Pack 5 →",
    actionHref: "https://my.scouting.org/online-registration/5bbcced0-3329-4ac3-b533-d54dd99c9721/applicant-type?zip=60091",
    action2: null,
    actionHref2: null,
  },
  {
    number: "03",
    icon: "📧",
    title: "Connect With Us",
    description:
      "Email our Cubmaster at cubscoutpack5wilmette@gmail.com to confirm your registration and get assigned to the right den for your Scout's grade level.",
    action: "Email us →",
    actionHref: "mailto:cubscoutpack5wilmette@gmail.com",
    action2: null,
    actionHref2: null,
  },
  {
    number: "04",
    icon: "👕",
    title: "Get Your Uniform",
    description:
      "Pick up the official Cub Scout uniform shirt, neckerchief, and rank badge at the local Scout Shop in Vernon Hills or online. Budget approximately $80–120 for the full kit.",
    action: "National online Scout Shop →",
    actionHref: "https://www.scoutshop.org",
    action2: "Hours and Location of Local Scout Shop →",
    actionHref2: "https://neic.org/scout-shop",
  },
  {
    number: "05",
    icon: "📘",
    title: "Get Your Handbook",
    description:
      "Each rank has its own handbook (~$15) packed with activities, adventure requirements, and badge information. Your Scout will use it every meeting.",
    action: null,
    actionHref: null,
    action2: null,
    actionHref2: null,
  },
  {
    number: "06",
    icon: "🚀",
    title: "Start Scouting!",
    description:
      "Join your den for weekly or bi-weekly meetings, attend monthly Pack meetings, and dive into adventures. Welcome to Pack 5!",
    action: null,
    actionHref: null,
    action2: null,
    actionHref2: null,
  },
];

export default function Onboarding() {
  return (
    <section id="onboarding" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">Getting Started</h2>
          <p className="section-subheading">
            Joining Pack 5 is straightforward. Follow these six steps and your Scout will be on
            their way to their first adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="card relative overflow-hidden group hover:shadow-xl transition-shadow">
              {/* Step number watermark */}
              <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">
                {step.number}
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-xs font-bold text-scout-blue-900/50 uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-scout-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.description}</p>
                <div className="flex flex-col gap-1">
                  {step.action && step.actionHref && (
                    <a
                      href={step.actionHref}
                      target={step.actionHref.startsWith("http") ? "_blank" : undefined}
                      rel={step.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-scout-blue-900 font-semibold text-sm hover:text-scout-gold transition-colors"
                    >
                      {step.action}
                    </a>
                  )}
                  {step.action2 && step.actionHref2 && (
                    <a
                      href={step.actionHref2}
                      target={step.actionHref2.startsWith("http") ? "_blank" : undefined}
                      rel={step.actionHref2.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-scout-blue-900 font-semibold text-sm hover:text-scout-gold transition-colors"
                    >
                      {step.action2}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scout Law callout */}
        <div className="mt-14 bg-scout-blue-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold text-scout-gold mb-3">The Scout Oath</h3>
          <p className="italic text-blue-200 max-w-2xl mx-auto leading-relaxed">
            &ldquo;On my honor I will do my best to do my duty to God and my country and to obey the
            Scout Law; to help other people at all times; to keep myself physically strong, mentally
            awake, and morally straight.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
