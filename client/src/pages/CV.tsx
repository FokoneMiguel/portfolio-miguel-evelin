import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * CV Page
 * Affichage du CV avec option de téléchargement
 * Design Philosophy: Minimalisme, clarté, professionnalisme
 */
export default function CV() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <h1 className="font-display text-foreground mb-6">Mon CV</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Téléchargez mon CV complet ou consultez mon profil professionnel
              ci-dessous.
            </p>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
              >
                <a
                  href="/cv.pdf"
                  download="CV-Miguel-Evelin.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Télécharger le CV (PDF)
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-muted-foreground text-sm">
                Dernière mise à jour : Février 2026
              </p>
            </div>
          </div>
        </section>

        {/* CV Content */}
        <section className="py-24 md:py-32">
          <div className="container max-w-4xl">
            {/* Header */}
            <div className="mb-12 pb-12 border-b border-border">
              <h2 className="font-display text-foreground mb-2">
                TSODZO FOKONE MIGUEL EVELIN
              </h2>
              <p className="text-lg text-primary font-semibold mb-4">
                Développeur Web & Infographiste
              </p>
              <div className="flex flex-col md:flex-row gap-6 text-muted-foreground text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:miguelfokone@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    miguelfokone@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/miguel-fokone-619b772a7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/miguel-fokone-619b772a7
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">GitHub</p>
                  <a
                    href="https://github.com/FokoneMiguel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/FokoneMiguel
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-12">
              <h3 className="font-subheading text-foreground mb-4">
                Résumé professionnel
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Développeur web junior spécialisé dans la création de sites web
                dynamiques et modernes, avec une forte sensibilité au design
                graphique. Passionné par la création d'expériences utilisateur
                exceptionnelles et de solutions techniques robustes. Capable de
                gérer des projets de bout en bout, du design à la livraison.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h3 className="font-subheading text-foreground mb-6">Expérience</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-primary font-semibold text-sm">2023 - Présent</p>
                  <h4 className="font-semibold text-foreground mt-1">
                    Développeur Web Freelance
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Création de sites vitrines, e-commerce et portfolios pour
                    différents clients. Gestion complète du projet du design à la
                    livraison.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-primary font-semibold text-sm">2022 - 2023</p>
                  <h4 className="font-semibold text-foreground mt-1">
                    Stage - Développement Web
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Apprentissage des technologies web modernes et contribution à
                    des projets d'équipe. Développement de compétences en frontend
                    et design.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="font-subheading text-foreground mb-6">Formation</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-primary font-semibold text-sm">2023</p>
                  <h4 className="font-semibold text-foreground mt-1">
                    Certification Développement Web & Design
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Formation complète en développement web et design graphique.
                    Maîtrise des technologies modernes et des principes de design.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-primary font-semibold text-sm">2021 - 2022</p>
                  <h4 className="font-semibold text-foreground mt-1">
                    Cours en Ligne - Programmation Web
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Apprentissage des fondamentaux de la programmation web et du
                    design d'interface.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="font-subheading text-foreground mb-6">Compétences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Développement
                  </h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• HTML / CSS (Avancé)</li>
                    <li>• JavaScript (Intermédiaire)</li>
                    <li>• React (Intermédiaire)</li>
                    <li>• PHP / MySQL (Intermédiaire)</li>
                    <li>• Responsive Design (Avancé)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Design</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Photoshop (Avancé)</li>
                    <li>• Illustrator (Avancé)</li>
                    <li>• Figma (Avancé)</li>
                    <li>• UI/UX Design (Intermédiaire)</li>
                    <li>• Branding (Intermédiaire)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mb-12">
              <h3 className="font-subheading text-foreground mb-6">Langues</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Français</h4>
                  <p className="text-muted-foreground text-sm">Courant</p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Anglais</h4>
                  <p className="text-muted-foreground text-sm">Intermédiaire</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-subheading text-foreground mb-6">
                Certifications
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    Certification Développement Web (2023)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    Certification Design Graphique (2023)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="font-heading text-foreground mb-6">
                Intéressé par mon profil ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                N'hésitez pas à me contacter pour discuter d'opportunités de
                collaboration ou pour en savoir plus sur mon expérience.
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
                  <Link href="/projects">Voir mes projets</Link>
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
