export default function Page() {
  const faqs = [
    {
      q: "How does it learn my brand voice?",
      a: "You provide a short description of your tone and a few example responses. The AI uses these to match your style on every reply."
    },
    {
      q: "Does it post replies automatically?",
      a: "Yes. Once connected to your Google Business Profile, it can post responses automatically or queue them for your approval first."
    },
    {
      q: "What happens if I cancel?",
      a: "Your account stays active until the end of the billing period. No long-term contracts — cancel any time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Review Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Respond to Google Reviews<br />
          <span className="text-[#58a6ff]">in Your Brand Voice</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop spending hours crafting review replies. Our AI learns your tone, addresses every concern, and posts personalized responses automatically — so you never miss a review.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to start. $14/mo after trial.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "🎯", title: "Brand Voice Matching", desc: "AI trained on your tone and style" },
          { icon: "⚡", title: "Auto-Post Replies", desc: "Responds within minutes of a new review" },
          { icon: "📊", title: "Review Dashboard", desc: "Track sentiment and response history" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited review responses",
              "Custom brand voice profile",
              "Auto-post or approval queue",
              "Google Business Profile sync",
              "Sentiment analytics dashboard",
              "Email alerts for new reviews"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started — $14/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} ReviewReply AI. All rights reserved.
      </footer>
    </main>
  );
}
