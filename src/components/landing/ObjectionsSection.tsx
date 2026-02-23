const objections = [
  { q: "Is this guaranteed?", a: "No. Markets involve risk. This is about execution quality, not promises." },
  { q: "Do I need experience?", a: "No. Setup is designed to be simple and structured." },
  { q: "Can I withdraw?", a: "You control whether you withdraw or compound." },
];

const ObjectionsSection = () => (
  <section className="section-padding band-alt">
    <div className="gold-divider mb-14" />
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Common Concerns (Answered)</h2>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-5">
          {objections.map((o) => (
            <div key={o.q} className="card-surface p-5">
              <h3 className="text-foreground font-semibold text-sm mb-2">{o.q}</h3>
              <p className="text-muted-foreground text-sm">{o.a}</p>
            </div>
          ))}
        </div>
        <div className="card-surface-gold p-6 flex flex-col justify-center">
          <h3 className="text-primary font-semibold mb-3">Good Decision Rule</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            If you need rent money, don't use it here.<br /><br />
            If you can allocate risk capital responsibly, systems can reduce emotional mistakes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ObjectionsSection;
