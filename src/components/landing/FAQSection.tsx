const faqs = [
  { q: "Is this financial advice?", a: "No. Informational only." },
  { q: "What's the advantage of AI?", a: "Consistency, speed, reduced emotional decisions." },
  { q: "Does AI eliminate risk?", a: "No. Risk still exists. AI can reduce emotional errors, not guarantee results." },
  { q: "How long does setup take?", a: "Many users complete it in about 10 minutes." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding band-default">
    <div className="gold-divider mb-14" />
    <div className="max-w-7xl mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="card-surface p-5">
            <h3 className="text-foreground font-semibold text-sm mb-1">{f.q}</h3>
            <p className="text-muted-foreground text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
