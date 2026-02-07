import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

/**
 * About Page
 * Présentation professionnelle, parcours, objectif
 * Design Philosophy: Minimalisme, espace blanc, hiérarchie typographique
 */
export default function About() {
  const timeline = [
    {
      year: "2023",
      title: "Formation Complète",
      description:
        "Certification en développement web et design graphique. Maîtrise des technologies modernes.",
    },
    {
      year: "2022",
      title: "Premiers Projets",
      description:
        "Lancement de premiers projets freelance. Création de sites vitrines et e-commerce.",
    },
    {
      year: "2021",
      title: "Début du Parcours",
      description:
        "Découverte de la programmation et du design. Apprentissage des fondamentaux.",
    },
  ];

  const expertise = [
    "Développement de sites web",
    "Intégration HTML/CSS",
    "Création d'interfaces modernes",
    "Conception graphique (flyers, affiches…)",
    "Responsive design",
    "Optimisation de performance",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <h1 className="font-display text-foreground mb-6">À propos de moi</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Développeur web et infographiste passionné par la création
              d'expériences numériques exceptionnelles et performantes.
            </p>
          </div>
        </section>

        {/* Professional Presentation */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-foreground mb-6">
                  Qui suis-je ?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Je suis un développeur web junior spécialisé dans la création
                    de sites web dynamiques et modernes, avec une forte sensibilité
                    au design graphique. Mon approche combine la rigueur technique
                    avec une vision créative pour produire des solutions numériques
                    de qualité.
                  </p>
                  <p>
                    Avec plusieurs années de pratique, j'ai développé une expertise
                    solide en technologies web modernes et une compréhension profonde
                    des principes de design. Je suis passionné par la création de
                    sites qui ne sont pas seulement beaux, mais aussi performants
                    et orientés business.
                  </p>
                  <p>
                    Mon objectif est de transformer vos idées en réalité numérique,
                    en créant des expériences utilisateur mémorables et des solutions
                    techniques robustes.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-secondary/50 p-8 rounded-lg">
                  <h3 className="font-subheading text-foreground mb-4">
                    Domaine principal
                  </h3>
                  <p className="text-muted-foreground">
                    Développement web frontend avec expertise en design d'interface
                    et création graphique.
                  </p>
                </div>
                <div className="bg-secondary/50 p-8 rounded-lg">
                  <h3 className="font-subheading text-foreground mb-4">
                    Niveau réel
                  </h3>
                  <p className="text-muted-foreground">
                    Développeur junior avec une solide compréhension des principes
                    fondamentaux et une expérience pratique en projets réels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container">
            <h2 className="font-heading text-foreground mb-12">
              Ce que je fais concrètement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 md:py-32">
          <div className="container">
            <h2 className="font-heading text-foreground mb-12">Parcours</h2>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-24 bg-border mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                      {item.year}
                    </p>
                    <h3 className="font-subheading text-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Objective */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container">
            <h2 className="font-heading text-foreground mb-8">
              Objectif professionnel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-background rounded-lg border border-border">
                <h3 className="font-subheading text-foreground mb-4">Emploi</h3>
                <p className="text-muted-foreground">
                  Recherche d'une position en tant que développeur web ou designer
                  au sein d'une équipe dynamique et innovante.
                </p>
              </div>
              <div className="p-8 bg-background rounded-lg border border-border">
                <h3 className="font-subheading text-foreground mb-4">Freelance</h3>
                <p className="text-muted-foreground">
                  Disponible pour des missions de développement web et de conception
                  graphique en tant que prestataire indépendant.
                </p>
              </div>
              <div className="p-8 bg-background rounded-lg border border-border">
                <h3 className="font-subheading text-foreground mb-4">
                  Collaboration
                </h3>
                <p className="text-muted-foreground">
                  Ouvert à des partenariats et collaborations pour des projets
                  innovants et stimulants.
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
                Discutons de votre projet
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Si mon profil vous intéresse, n'hésitez pas à me contacter pour
                discuter de vos besoins et des opportunités de collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                >
                  <Link href="/contact">Me contacter</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-secondary transition-all duration-200"
                >
                  <Link href="/skills">Voir mes compétences</Link>
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
