import { X, Check } from "lucide-react";

const humanBullets = [
  "Reacts to price swings",
  "Often enters late after confirmation",
  "Often exits early due to fear",
  "Strategy changes under stress",
  "More screen time, more emotional load",
];

const aiBullets = [
  "Executes systematically",
  "Reduces emotional timing errors",
  "Follows structure consistently",
  "Removes impulsive decisions",
  "Designed for repeatable deployment",
];

const ComparisonSection = () => (
  <section id="compare" className="section-padding band-default">
    <div className="gold-divider mb-14" />
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">AI Execution vs Human Trading</h2>
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="card-surface p-6">
          <h3 className="text-foreground font-semibold text-lg mb-4">Human Trading</h3>
          <ul className="space-y-3">
            {humanBullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-muted-foreground text-sm">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-surface-gold p-6">
          <h3 className="text-primary font-semibold text-lg mb-4">AI Execution</h3>
          <ul className="space-y-3">
            {aiBullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-muted-foreground text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-surface-gold p-4 text-center">
        <p className="text-muted-foreground text-sm">
          <span className="text-primary font-semibold">Bottom Line:</span> The market doesn't reward effort. It rewards execution.
        </p>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
