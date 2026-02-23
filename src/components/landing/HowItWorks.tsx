import { UserPlus, Wallet, Zap, ArrowDownUp } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Create your account" },
  { icon: Wallet, title: "Fund with USDT" },
  { icon: Zap, title: "Activate AI execution" },
  { icon: ArrowDownUp, title: "Choose compound or withdraw" },
];

const HowItWorks = () => (
  <section id="how" className="section-padding band-default">
    <div className="gold-divider mb-14" />
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How It Works</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-6">
        {steps.map((s, i) => (
          <div key={s.title} className="card-surface card-hover p-6 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs text-primary font-semibold mb-1 block">Step {i + 1}</span>
            <p className="text-foreground text-sm font-medium">{s.title}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm">Simple setup. Clear flow.</p>
    </div>
  </section>
);

export default HowItWorks;
