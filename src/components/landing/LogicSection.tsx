import { Brain, Heart, Cpu } from "lucide-react";

const cards = [
  { icon: Brain, title: "Humans get tired", desc: "Cognitive load breaks strategy." },
  { icon: Heart, title: "Humans get emotional", desc: "Fear and greed distort timing." },
  { icon: Cpu, title: "Systems stay consistent", desc: "Rules don't panic." },
];

const LogicSection = () => (
  <section className="section-padding band-alt">
    <div className="gold-divider mb-14" />
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Systems Beat Willpower</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.title} className="card-surface card-hover p-6">
            <c.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-foreground font-semibold mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogicSection;
