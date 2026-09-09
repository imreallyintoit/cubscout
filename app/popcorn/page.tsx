import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "2026 Popcorn Sale | Cub Scout Pack 5 Wilmette",
  description:
    "Pack 5's 2026 Popcorn Sale runs September 12 to November 27. See how to claim a storefront shift, set up your Scout's online store, and help your Scout build the confidence to make a sale.",
};

const lifeSkills = [
  { icon: "🎯", title: "Goal Setting", desc: "Breaking a $600 target into something a young kid can actually picture: three good storefront shifts, or ten neighbors, or one grandparent phone call at a time." },
  { icon: "🗣️", title: "Communication", desc: "Looking an adult in the eye, asking clearly for something, and handling whatever they say back." },
  { icon: "🧮", title: "Money Math", desc: "Adding up an order, making change, tracking progress toward a number." },
  { icon: "💪", title: "Resilience", desc: "Hearing \"no thank you\" and moving on to the next person without it stinging." },
  { icon: "🤝", title: "Gratitude", desc: "Saying thank you the same way whether someone buys or not." },
  { icon: "🌟", title: "Confidence", desc: "The specific, durable kind that comes from doing something brave and having it work." },
];

const faqs = [
  {
    q: "What if my Scout doesn't want to sell door to door?",
    a: "Totally fine. Storefront shifts and online sales through the Trail's End app cover a lot of ground without ever knocking on a door.",
  },
  {
    q: "What if we can't make it work this year at all?",
    a: "The $200 buyout contribution covers the same ground for your Scout's programming. See the Fundraising Goal section above for how to pay.",
  },
  {
    q: "Is there a penalty for not hitting $600?",
    a: "No. It's a goal to aim for, not a requirement. The buyout option exists specifically for families where popcorn selling isn't a fit.",
  },
  {
    q: "Do we need to buy inventory upfront?",
    a: "⚠️ CONFIRM WITH MATT — Based on the current setup (Trail's End app + storefront shifts), this looks like an app-tracked sale with no upfront inventory purchase required, but this hasn't been confirmed yet.",
    confirm: true,
  },
  {
    q: "When does the popcorn arrive?",
    a: "⚠️ CONFIRM WITH MATT — Delivery or pickup date not yet confirmed. Check back for updates.",
    confirm: true,
  },
];

export default function PopcornPage() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-scout-blue-900 via-blue-900 to-blue-800 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-300 font-semibold tracking-wide uppercase text-sm mb-3">
            🍿 September 12 to November 27, 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
            One Sale. A Whole Year of Scouting.
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            This is Pack 5&apos;s only fundraiser, and it pays for everything from the Pinewood Derby to campouts to
            the Blue &amp; Gold Banquet. It takes about ten minutes this week to get your Scout fully set up. Here&apos;s
            exactly where to start.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="https://www.signupgenius.com/go/20F0D4DADA72AAAF5C25-65689536-popcorn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold rounded-xl px-8 py-4 text-lg transition-colors"
            >
              🙋 Claim a Storefront Shift
            </a>
            <a
              href="https://www.trails-end.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl px-8 py-4 text-lg transition-colors"
            >
              📲 Set Up the Trail&apos;s End App
            </a>
          </div>

          {/* Stat Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { stat: "$600", label: "Scout Goal" },
              { stat: "Sep 12–Nov 27", label: "Sale Window" },
              { stat: "~25–30%", label: "Comes Back to Pack 5" },
              { stat: "🏒 Feb 28", label: "Blackhawks Reward Game" },
            ].map((pill) => (
              <div
                key={pill.label}
                className="bg-white/10 rounded-xl px-4 py-3 text-center border border-white/20"
              >
                <div className="text-xl font-black text-amber-300">{pill.stat}</div>
                <div className="text-xs text-blue-200 mt-0.5">{pill.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero photo ── */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <Image
          src="https://i.imgur.com/xGQHQoT.jpeg"
          alt="Pack 5 Scouts at a popcorn storefront shift"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Three Steps ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Do These Three Things This Week</h2>
            <p className="section-subheading">
              Everything else on this page is context. These three steps are what actually gets your Scout selling,
              and none of them takes more than a few minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 01 */}
            <div className="card relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-100 select-none">01</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🏪</span>
                  <span className="text-xs font-bold text-scout-blue-900/50 uppercase tracking-wider">Step 01 · 2 min</span>
                </div>
                <h3 className="text-lg font-bold text-scout-blue-900 mb-3">Claim a Storefront Shift</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  This is the single fastest way to hit the goal. Scouts working a storefront shift typically bring in
                  $200–$300 in just an hour or two — uniform on, sign in hand, a steady stream of neighbors who came
                  specifically to buy popcorn from a Scout.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700 mb-4 space-y-1">
                  <p className="font-semibold text-scout-blue-900">📍 Jewel-Osco</p>
                  <p className="text-xs">411 Green Bay Rd, Wilmette, IL 60091</p>
                  <p className="text-xs font-medium">10:00 AM – 8:00 PM</p>
                  <p className="text-xs mt-2 font-semibold text-scout-blue-900">Open dates:</p>
                  <ul className="text-xs space-y-0.5">
                    <li>• Saturday, September 12</li>
                    <li>• Sunday, September 20</li>
                    <li>• Sunday, October 25</li>
                    <li>• Sunday, November 1</li>
                  </ul>
                </div>
                <a
                  href="https://www.signupgenius.com/go/20F0D4DADA72AAAF5C25-65689536-popcorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold rounded-lg px-4 py-2.5 text-sm transition-colors w-full text-center"
                >
                  Sign Up for a Shift →
                </a>
              </div>
            </div>

            {/* Step 02 */}
            <div className="card relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-100 select-none">02</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📲</span>
                  <span className="text-xs font-bold text-scout-blue-900/50 uppercase tracking-wider">Step 02 · 5 min</span>
                </div>
                <h3 className="text-lg font-bold text-scout-blue-900 mb-3">Set Up Your Scout&apos;s Online Store</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  This is where every sale gets tracked and credited to your Scout — whether it happens at a storefront,
                  door to door, or from a grandparent three states away.
                </p>
                <ol className="text-sm text-gray-700 space-y-3 mb-4">
                  <li className="flex gap-2">
                    <span className="font-bold text-scout-blue-900 flex-shrink-0">1.</span>
                    <span>
                      Download the Trail&apos;s End app:{" "}
                      <a
                        href="https://apps.apple.com/us/app/trails-end/id1421483087"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-scout-blue-900 font-semibold hover:text-scout-gold underline"
                      >
                        iOS
                      </a>{" "}
                      ·{" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.trailsend.scout&hl=en_US&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-scout-blue-900 font-semibold hover:text-scout-gold underline"
                      >
                        Android
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-scout-blue-900 flex-shrink-0">2.</span>
                    <span>
                      Register using unit code{" "}
                      <span className="font-mono bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded text-sm">
                        RYNTE
                      </span>{" "}
                      — Pack 5, Potawatomi District, Northeast Illinois Council
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-scout-blue-900 flex-shrink-0">3.</span>
                    <span>
                      Stuck? Use the{" "}
                      <a
                        href="https://support.trails-end.com/en/articles/13974166-getting-started-with-the-trail-s-end-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-scout-blue-900 font-semibold hover:text-scout-gold underline"
                      >
                        step-by-step help guide
                      </a>
                      , or post in the Pack 5 WhatsApp group.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Step 03 */}
            <div className="card relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-100 select-none">03</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📞</span>
                  <span className="text-xs font-bold text-scout-blue-900/50 uppercase tracking-wider">Step 03</span>
                </div>
                <h3 className="text-lg font-bold text-scout-blue-900 mb-3">Reach Out to Get Started</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Questions, need popcorn on hand for a sale, or just want a hand getting set up? Reach Greg directly.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:3129077514"
                    className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 text-scout-blue-900 font-semibold hover:bg-blue-100 transition-colors"
                  >
                    <span className="text-xl">📞</span>
                    <span>Text: 312-907-7514</span>
                  </a>
                  <a
                    href="mailto:goneal@beaconcapital.com"
                    className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-3 text-scout-blue-900 font-semibold hover:bg-blue-100 transition-colors"
                  >
                    <span className="text-xl">✉️</span>
                    <span>goneal@beaconcapital.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fundraising Goal ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-3">Aim for $600. Every Bit Helps if You Land Short.</h2>
          <p className="section-subheading text-center mb-10">
            We ask each Scout to aim for a <strong>$600 goal</strong> this year. That number funds a real, tangible
            slice of Pack 5&apos;s year, not an arbitrary target.
          </p>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            If selling popcorn isn&apos;t the right fit for your family this year, that&apos;s completely fine. You can cover the
            same ground with a <strong>$200 buyout contribution</strong>, which goes straight to your Scout&apos;s annual
            programming.
          </p>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="font-bold text-scout-blue-900 text-lg mb-5">Ways to pay the buyout, or just chip in:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold text-scout-blue-900 text-sm">Venmo</div>
                <div className="text-gray-600 text-sm mt-1">@Greg-Oneal</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">✉️</div>
                <div className="font-bold text-scout-blue-900 text-sm">Check</div>
                <div className="text-gray-600 text-xs mt-1 leading-snug">
                  Payable to <em>Cub Scouts Pack 5</em><br />
                  1215 Greenwood Ave<br />
                  Wilmette, IL 60091
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">💳</div>
                <div className="font-bold text-scout-blue-900 text-sm">Online</div>
                <a
                  href="https://trails-end.com/store/scout/7QIHRTE0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 bg-scout-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg px-3 py-2 text-xs transition-colors"
                >
                  Make a Donation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blackhawks Reward ── */}
      <section className="py-20 bg-scout-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🏒</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Sell $600, Watch the Blackhawks.</h2>
          <p className="text-blue-200 text-lg mb-10">
            Pack 5 is heading to a Chicago Blackhawks game on{" "}
            <strong className="text-white">Sunday, February 28</strong>. Every Scout who hits their goal earns their way in.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            {[
              { sold: "$600 sold", reward: "1 free ticket" },
              { sold: "$1,200 sold", reward: "2 free tickets" },
              { sold: "$1,800 sold", reward: "3 free tickets" },
            ].map((tier) => (
              <div key={tier.sold} className="bg-white/10 border border-white/20 rounded-xl p-5">
                <div className="text-amber-300 font-black text-lg">{tier.sold}</div>
                <div className="text-white text-sm mt-1">→ {tier.reward}</div>
              </div>
            ))}
          </div>

          <p className="text-blue-300 text-sm">
            Extra tickets will be available to purchase, so bring the rest of the family too.
          </p>
        </div>
      </section>

      {/* ── Where the Money Goes ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Popcorn Is Pack 5&apos;s Only Fundraiser.</h2>
            <p className="section-subheading">
              Here&apos;s the part a lot of families don&apos;t realize: Scouting America and the Northeast Illinois Council
              keep almost all of the registration fees Pack 5 families pay each year. Almost none of it comes back to
              the Pack itself. Popcorn is what&apos;s left to run everything else.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🏎️", text: "Pinewood Derby car kits and trophies" },
              { icon: "🎖️", text: "Advancement patches and awards" },
              { icon: "🏕️", text: "Campout site fees and groceries" },
              { icon: "🍽️", text: "The Blue & Gold Banquet" },
              { icon: "🧰", text: "Meeting supplies and program materials" },
              { icon: "🎉", text: "Special Pack activities all year long" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-sm text-gray-700 leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching Your Scout to Sell ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">The Real Prize Isn&apos;t the Popcorn.</h2>
            <p className="section-subheading max-w-3xl mx-auto">
              Every dollar your Scout brings in matters, but the sale itself is doing something bigger. Asking a stranger
              for something, hearing &ldquo;no&rdquo; and staying friendly anyway, keeping track of a goal, making change, saying
              thank you regardless of the answer — these are grown-up skills, and popcorn season is one of the only times
              a 7-year-old gets to practice all of them at once, out loud, in public.
            </p>
          </div>

          {/* Life skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
            {lifeSkills.map((skill) => (
              <div key={skill.title} className="card">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-bold text-scout-blue-900 mb-2">{skill.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>

          {/* Build the pitch */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-scout-blue-900 mb-3">Build the Pitch Together</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Before the first shift, sit down with your Scout and build a simple pitch, then practice it out loud a few
              times — at the kitchen table, in front of a mirror, wherever. A kid who has said the words twenty times at
              home will say them steady the first time it counts.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-6 italic text-gray-700 leading-relaxed">
              &ldquo;Hi, my name is ______. I&apos;m a Cub Scout with Pack 5 in Wilmette. We&apos;re selling popcorn to help pay for
              ______ [something the Scout cares about: campouts, the Pinewood Derby, our Blackhawks trip]. Would you
              like to support us?&rdquo;
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-bold text-green-800 mb-1">If they say yes:</p>
                <p className="text-green-700">Show them the options on the app or the sign, take the payment, and say thank you.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-bold text-blue-800 mb-1">If they say no:</p>
                <p className="text-blue-700">&ldquo;No problem, have a great day!&rdquo; and move to the next person. That&apos;s the whole response. No follow-up needed.</p>
              </div>
            </div>
          </div>

          {/* Four Rules callout */}
          <div className="bg-scout-blue-900 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold text-scout-gold mb-4">💛 The Four Rules</h3>
            <ul className="space-y-2">
              {[
                "Stand tall and smile",
                "Look them in the eye",
                "Speak loud enough to actually be heard",
                "Say thank you no matter what they say",
              ].map((rule) => (
                <li key={rule} className="flex items-center gap-3 text-blue-100">
                  <span className="text-scout-gold font-bold">→</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            <p className="text-blue-300 text-sm mt-5 italic">
              A Scout who does just these four things will out-sell a Scout with a longer, more polished pitch and a
              mumbled delivery, every time.
            </p>
          </div>

          {/* Coaching tips */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-scout-blue-900 mb-5">Coaching Tips for Parents</h3>
            <ul className="space-y-4">
              {[
                { tip: "Practice at home first.", detail: "Two or three run-throughs the night before a shift make a real difference. Play the customer yourself, including saying no once, so it isn't a surprise the first time it happens for real." },
                { tip: "Let your Scout do the talking.", detail: "It's tempting to jump in when there's an awkward pause. Give it a few extra seconds before you help. That pause is where the confidence actually gets built." },
                { tip: 'Reset expectations on "no."', detail: 'Roughly one in ten people say yes. That means nine "no"s are completely normal on the way to a sale, not a sign anything is going wrong.' },
                { tip: "Debrief after each shift.", detail: "Three quick questions: What went well? What felt hard? What do you want to try differently next time? This turns each shift into a skill your Scout is building, not just a task getting checked off." },
                { tip: "Celebrate the effort, not just the total.", detail: "A Scout who confidently asked twenty people and sold three bags grew exactly as much as one who sold out in an hour. Notice that out loud." },
              ].map((item) => (
                <li key={item.tip} className="flex gap-3 text-sm text-gray-700">
                  <span className="text-scout-gold font-bold text-lg leading-none mt-0.5">•</span>
                  <span><strong className="text-scout-blue-900">{item.tip}</strong> {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Age-based guidance */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-scout-blue-900 mb-5">Matching the Approach to Your Scout&apos;s Age</h3>
            <div className="space-y-4">
              {[
                { rank: "Lions & Tigers", grade: "K, 1st grade", guidance: "Parent leads the conversation. Scout hands out samples, holds the sign, or just says \"thank you!\" at the end. That's a full, real contribution at this age." },
                { rank: "Wolves & Bears", grade: "2nd, 3rd grade", guidance: "Scout delivers the pitch with a parent standing right there. Parent handles the payment and the app." },
                { rank: "Webelos & Arrow of Light", grade: "4th, 5th grade", guidance: "Scout runs the whole interaction, pitch through checkout on the app. Parent supervises from a comfortable distance, only stepping in if asked." },
              ].map((item) => (
                <div key={item.rank} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 text-center min-w-[90px]">
                    <div className="font-bold text-scout-blue-900 text-sm">{item.rank}</div>
                    <div className="text-xs text-gray-500">{item.grade}</div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.guidance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-scout-blue-900 mb-5">Staying Safe</h3>
            <ul className="space-y-2">
              {[
                "Always sell with a parent or another trusted adult present",
                "Stick to familiar ground: your own neighborhood, family, friends, and signed-up storefront shifts",
                "Never go inside a stranger's home",
                "Wear the Pack 5 uniform, or something recognizable, so neighbors know who's asking",
              ].map((rule) => (
                <li key={rule} className="flex gap-3 text-sm text-gray-700">
                  <span className="text-scout-blue-900 font-bold">✓</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className={`rounded-2xl p-6 ${faq.confirm ? "border-2 border-amber-300 bg-amber-50" : "bg-gray-50"}`}
              >
                <h3 className="font-bold text-scout-blue-900 mb-2 text-sm">{faq.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA Banner ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-scout-blue-900 to-blue-800 rounded-2xl p-10 text-white text-center">
            <div className="text-5xl mb-4">🍿</div>
            <h2 className="text-3xl font-bold mb-3">
              Every $600 Sold Sends a Scout to a Blackhawks Game
            </h2>
            <p className="text-blue-200 max-w-xl mx-auto mb-8">
              Claim a shift, set up the app, and your Scout is on their way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://www.signupgenius.com/go/20F0D4DADA72AAAF5C25-65689536-popcorn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold rounded-xl px-6 py-3 transition-colors"
              >
                🙋 Sign Up for a Storefront Shift
              </a>
              <a
                href="https://apps.apple.com/us/app/trails-end/id1421483087"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl px-6 py-3 transition-colors"
              >
                📲 Download Trail&apos;s End (iOS)
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.trailsend.scout&hl=en_US&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl px-6 py-3 transition-colors"
              >
                📲 Download Trail&apos;s End (Android)
              </a>
              <a
                href="https://trails-end.com/store/scout/7QIHRTE0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl px-6 py-3 transition-colors"
              >
                💳 Make a Donation
              </a>
              <a
                href="tel:3129077514"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl px-6 py-3 transition-colors"
              >
                ✉️ Text or Call Greg
              </a>
            </div>
          </div>

          {/* Contact tie-in */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:3129077514"
              className="card flex gap-4 items-center hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl flex-shrink-0">📞</span>
              <div>
                <h4 className="font-bold text-scout-blue-900 text-sm">Call or Text Greg O&apos;Neal</h4>
                <p className="text-scout-blue-900 font-semibold">312-907-7514</p>
                <p className="text-gray-500 text-xs mt-0.5">Popcorn Sale Coordinator</p>
              </div>
            </a>
            <a
              href="mailto:goneal@beaconcapital.com"
              className="card flex gap-4 items-center hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl flex-shrink-0">✉️</span>
              <div>
                <h4 className="font-bold text-scout-blue-900 text-sm">Email Greg</h4>
                <p className="text-scout-blue-900 font-semibold text-sm">goneal@beaconcapital.com</p>
                <p className="text-gray-500 text-xs mt-0.5">For questions and setup help</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
