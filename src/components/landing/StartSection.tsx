import { useState, type FormEvent } from "react";
import { Send, FileText, CheckCircle, ShieldCheck } from "lucide-react";

const StartSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="start" className="section-padding band-alt">
      <div className="gold-divider mb-14" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Get the Setup Steps</h2>
          <p className="text-muted-foreground mb-6">We'll send:</p>
          <ul className="space-y-3">
            {[
              { icon: Send, text: "Setup link" },
              { icon: FileText, text: "Step-by-step checklist" },
              { icon: ShieldCheck, text: "Avoid-mistakes guide" },
            ].map((i) => (
              <li key={i.text} className="flex items-center gap-2 text-muted-foreground text-sm">
                <i.icon className="w-4 h-4 text-primary flex-shrink-0" />
                {i.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-surface p-6">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-foreground font-semibold">You're in!</p>
              <p className="text-muted-foreground text-sm mt-1">Check your email for setup steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Country"
                required
                className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button type="submit" className="btn-primary w-full">Send Setup Steps</button>
              <p className="text-xs text-muted-foreground/50 text-center">No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default StartSection;
