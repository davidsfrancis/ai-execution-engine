import { Check, AlertTriangle } from "lucide-react";

const controls = [
  "Your deposit amount",
  "Your risk comfort",
  "Compound mode ON/OFF",
  "Withdraw decisions",
];

const ControlSection = () => (
  <section className="section-padding band-alt">
    <div className="gold-divider mb-14" />
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">You Keep Control. AI Handles Execution.</h2>
        <p className="text-muted-foreground leading-relaxed">
          This is not handing your future to a black box. You decide the inputs. The system focuses on structured execution.
        </p>
      </div>
      <div className="card-surface p-6">
        <h3 className="text-foreground font-semibold mb-4">Your Controls</h3>
        <ul className="space-y-3 mb-4">
          {controls.map((c) => (
            <li key={c} className="flex items-center gap-2 text-muted-foreground text-sm">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              {c}
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-2 text-xs text-muted-foreground/60 border-t border-border pt-3">
          <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          Always use funds you can afford to risk.
        </div>
      </div>
    </div>
  </section>
);

export default ControlSection;
