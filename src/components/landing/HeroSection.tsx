import { Check } from "lucide-react";

const decisionRows = [
  { human: "Emotion", ai: "Rules" },
  { human: "Hesitation", ai: "Execution" },
  { human: "Impulse", ai: "Structure" },
  { human: "Fatigue", ai: "Consistency" },
];

const HeroSection = () => (
  <section className="section-padding pt-24 md:pt-28 band-default relative overflow-hidden">
    <div className="gradient-shape w-[400px] h-[400px] bg-gold top-0 right-0" />
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-4">
          AI Doesn't Guess.<br />
          <span className="text-primary">It Executes.</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
          Human trading breaks under emotion.<br />
          AI execution focuses on rules, speed, and consistency.
        </p>
        <ul className="space-y-2 mb-8">
          {["Less emotion, more structure", "Repeatable execution", "Clear setup in minutes", "You control compound/withdraw"].map((t) => (
            <li key={t} className="flex items-center gap-2 text-muted-foreground text-sm">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              {t}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <a href="#compare" className="btn-primary">See the Comparison</a>
          <a href="#how" className="btn-secondary">How It Works</a>
        </div>
      </div>

      <div className="card-surface p-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Decision Stack</h3>
        <div className="grid grid-cols-3 gap-0 text-sm">
          <div className="pb-3 mb-3 border-b border-border text-muted-foreground font-medium">Factor</div>
          <div className="pb-3 mb-3 border-b border-border text-muted-foreground font-medium text-center">Human</div>
          <div className="pb-3 mb-3 border-b border-border text-primary font-medium text-center">AI</div>
          {decisionRows.map((r) => (
            <>
              <div key={r.human + "-label"} className="py-2 text-muted-foreground">{r.human} vs {r.ai}</div>
              <div key={r.human} className="py-2 text-center text-muted-foreground/60">{r.human}</div>
              <div key={r.ai} className="py-2 text-center text-primary font-medium">{r.ai}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
