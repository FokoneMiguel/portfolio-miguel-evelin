import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Skills Page
 * Présentation des compétences techniques et créatives
 * Design Philosophy: Minimalisme, clarté, hiérarchie visuelle
 */
export default function Skills() {
  const skillCategories = [
    {
      title: "Développement Web",
      skills: [
        { name: "HTML / CSS", level: "Avancé" },
        { name: "JavaScript", level: "Intermédiaire" },
        { name: "PHP / MySQL", level: "Intermédiaire" },
        { name: "React", level: "Intermédiaire" },
        { name: "Responsive Design", level: "Avancé" },
        { name: "Web Performance", level: "Intermédiaire" },
      ],
    },
    {
      title: "Design & Infographie",
      skills: [
        { name: "Photoshop", level: "Avancé" },
        { name: "Illustrator", level: "Avancé" },
        { name: "InDesign", level: "Intermédiaire" },
        { name: "Figma", level: "Avancé" },
        { name: "UI/UX Design", level: "Intermédiaire" },
        { name: "Branding", level: "Intermédiaire" },
      ],
    },
    {
      title: "Outils & Méthodes",
      skills: [
        { name: "Git / GitHub", level: "Intermédiaire" },
        { name: "WordPress", level: "Intermédiaire" },
        { name: "Tailwind CSS", level: "Avancé" },
        { name: "Vite", level: "Intermédiaire" },
        { name: "VS Code", level: "Avancé" },
        { name: "Agile / Scrum", level: "Basique" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Avancé":
        return "text-primary font-semibold";
      case "Intermédiaire":
        return "text-muted-foreground";
      case "Basique":
        return "text-muted-foreground opacity-75";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <h1 className="font-display text-foreground mb-6">Compétences</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Une vue d'ensemble de mes compétences techniques et créatives,
              organisées par domaine d'expertise.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="space-y-16">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h2 className="font-heading text-foreground mb-8">
                    {category.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="p-6 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-foreground">
                            {skill.name}
                          </h3>
                          <span className={`text-sm ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {index < skillCategories.length - 1 && (
                    <div className="mt-16 pt-16 border-t border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="font-heading text-foreground mb-6">À noter</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Je suis honnête sur mes compétences. Les niveaux indiqués reflètent
                  ma véritable expertise basée sur l'expérience pratique et les projets
                  réalisés.
                </p>
                <p>
                  Je suis en apprentissage continu et j'améliore régulièrement mes
                  compétences en explorant de nouvelles technologies et méthodologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="font-heading text-foreground mb-6">
                Prêt à collaborer ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Si vous recherchez quelqu'un avec ces compétences pour votre projet,
                je serais ravi de discuter de comment je peux vous aider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
                >
                  <a href="/contact" className="flex items-center gap-2">
                    Démarrer un projet
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-secondary transition-all duration-200"
                >
                  <a href="/projects">Voir mes projets</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
