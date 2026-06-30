const firstYearCosts = [
  {
    category: "BSA National Registration",
    amount: 85,
    frequency: "annual",
    notes: "Includes accident insurance. Due at registration.",
    icon: "🏛️",
  },
  {
    category: "Pack 5 Dues",
    amount: 75,
    frequency: "annual",
    notes: "Covers den supplies, Pinewood Derby, awards, and pack activities.",
    icon: "🎒",
  },
  {
    category: "Uniform Shirt",
    amount: 45,
    frequency: "one-time",
    notes: "Official Cub Scout uniform shirt. Kids often wear for multiple years.",
    icon: "👕",
  },
  {
    category: "Neckerchief & Slide",
    amount: 20,
    frequency: "one-time",
    notes: "Pack-specific neckerchief included in Pack dues for new members.",
    icon: "🪢",
  },
  {
    category: "Hat / Cap",
    amount: 20,
    frequency: "one-time",
    notes: "Rank-specific cap (e.g., Tiger orange, Wolf tan).",
    icon: "🧢",
  },
  {
    category: "Rank Handbook",
    amount: 15,
    frequency: "annual",
    notes: "Grade-level handbook. New book each year as your Scout advances.",
    icon: "📘",
  },
  {
    category: "Camp / Activities",
    amount: 150,
    frequency: "annual",
    notes: "Estimate for day camps, overnight camps, and special events. Varies by participation.",
    icon: "🏕️",
  },
  {
    category: "Pinewood Derby Car Kit",
    amount: 5,
    frequency: "annual",
    notes: "Official BSA kit required. Sold at Pack meetings.",
    icon: "🏎️",
  },
];

const renewalCosts = [
  { category: "BSA National Registration", amount: 85 },
  { category: "Pack 5 Dues", amount: 75 },
  { category: "Rank Handbook", amount: 15 },
  { category: "Camp / Activities (estimate)", amount: 150 },
  { category: "Pinewood Derby Car Kit", amount: 5 },
];

const budgetItems = [
  { label: "Den Supplies & Crafts", pct: 25, color: "bg-blue-500" },
  { label: "Camping & Outdoor Events", pct: 30, color: "bg-green-500" },
  { label: "Awards & Advancements", pct: 15, color: "bg-yellow-500" },
  { label: "Pinewood Derby", pct: 10, color: "bg-orange-500" },
  { label: "Pack Events & Outings", pct: 15, color: "bg-purple-500" },
  { label: "Administrative / Recharter", pct: 5, color: "bg-gray-400" },
];

export default function Costs() {
  const firstYearTotal = firstYearCosts.reduce((s, c) => s + c.amount, 0);
  const renewalTotal = renewalCosts.reduce((s, c) => s + c.amount, 0);

  return (
    <section id="costs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">Costs &amp; Budget</h2>
          <p className="section-subheading">
            We believe in full transparency. Here&apos;s a clear breakdown of what to budget for
            the year — and how Pack 5 uses its funds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* First year cost table */}
          <div>
            <h3 className="text-xl font-bold text-scout-blue-900 mb-1">First-Year Cost Estimate</h3>
            <p className="text-sm text-gray-500 mb-4">
              One-time uniform costs are included in year one. Financial assistance is available —
              ask your den leader.
            </p>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-scout-blue-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Item</th>
                    <th className="text-right px-4 py-3 font-semibold">Cost</th>
                    <th className="text-right px-4 py-3 font-semibold hidden md:table-cell">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {firstYearCosts.map((item, i) => (
                    <tr
                      key={item.category}
                      className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      <td className="px-4 py-3 flex items-center gap-2">
                        <span>{item.icon}</span>
                        <div>
                          <div className="font-medium text-gray-800">{item.category}</div>
                          <div className="text-xs text-gray-400 leading-tight">{item.notes}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-gray-700">
                        ${item.amount}
                      </td>
                      <td className="px-4 py-3 text-right hidden md:table-cell">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            item.frequency === "one-time"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {item.frequency}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-scout-blue-900 text-white">
                    <td className="px-4 py-3 font-bold">Estimated First-Year Total</td>
                    <td className="px-4 py-3 text-right font-extrabold text-scout-gold text-lg">
                      ${firstYearTotal}
                    </td>
                    <td className="hidden md:table-cell" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Renewal + budget breakdown */}
          <div className="space-y-8">
            {/* Renewal estimate */}
            <div>
              <h3 className="text-xl font-bold text-scout-blue-900 mb-1">Renewal Years</h3>
              <p className="text-sm text-gray-500 mb-4">
                Once the uniform is purchased, ongoing annual costs are significantly lower.
              </p>
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left px-4 py-2 font-semibold text-gray-700">Item</th>
                      <th className="text-right px-4 py-2 font-semibold text-gray-700">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renewalCosts.map((item, i) => (
                      <tr
                        key={item.category}
                        className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                      >
                        <td className="px-4 py-2 text-gray-700">{item.category}</td>
                        <td className="px-4 py-2 text-right font-bold text-gray-700">
                          ${item.amount}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-scout-blue-900 text-white">
                      <td className="px-4 py-2 font-bold">Annual Renewal Total</td>
                      <td className="px-4 py-2 text-right font-extrabold text-scout-gold">
                        ${renewalTotal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pack budget breakdown */}
            <div>
              <h3 className="text-xl font-bold text-scout-blue-900 mb-1">Pack Budget Breakdown</h3>
              <p className="text-sm text-gray-500 mb-4">
                How Pack 5 allocates dues and fundraising revenue each year.
              </p>
              <div className="space-y-3">
                {budgetItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-bold text-gray-700">{item.pct}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color} transition-all`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Financial assistance callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start">
          <span className="text-3xl flex-shrink-0">💛</span>
          <div>
            <h4 className="font-bold text-amber-900 text-lg mb-1">Financial Assistance Available</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              No Scout should miss out on Scouting due to financial constraints. BSA offers
              the&nbsp;
              <strong>Scoutreach</strong> program, and Pack 5 has limited scholarship funds
              available for families in need. Please contact our Cubmaster confidentially at{" "}
              <a
                href="mailto:pack5wilmette@gmail.com"
                className="font-semibold underline hover:text-amber-900"
              >
                pack5wilmette@gmail.com
              </a>{" "}
              to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
