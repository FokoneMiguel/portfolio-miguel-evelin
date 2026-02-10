import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Image as ImageIcon } from "lucide-react";

/**
 * Projects Page
 * Galerie complète des projets avec détails
 * Design Philosophy: Minimalisme, asymétrie, espace blanc
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Gestion palmarais (PlamaraisBST)",
      type: "Application web",
      images: ["/projects/palm1.png", "/projects/palm2.png"],
      link: "https://gestion-palmarais-d1za.vercel.app/",
      description:
        "Application de gestion pour la palmeraie BST : organisation et suivi des informations clés.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      role: "Conception & développement",
      features: ["Interface de gestion", "Navigation fluide", "Responsive"],
    },
    {
      id: 2,
      name: "Gestion immobilier (HOUZ)",
      type: "Application web",
      images: ["/projects/houz.png", "/projects/houz1.png", "/projects/houz3.png"],
      link: "https://dt-house.vercel.app/",
      description:
        "Plateforme de présentation/gestion immobilière, pensée pour une navigation claire et une consultation sécurisée.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      role: "Développement frontend",
      features: ["Pages de présentation", "UI responsive", "Parcours utilisateur"],
    },
    {
      id: 3,
      name: "Boutique statique",
      type: "Site vitrine e-commerce",
      images: ["/projects/store.png", "/projects/store1.png"],
      link: "https://eugene-store.vercel.app/",
      description:
        "Site boutique statique avec une mise en avant claire des produits et une navigation simple.",
      technologies: ["HTML", "CSS", "JavaScript"],
      role: "Intégration & mise en page",
      features: ["Pages produits", "Design responsive", "UI soignée"],
    },
    {
      id: 4,
      name: "Design FarmShop (Figma)",
      type: "Maquette UI/UX",
      images: ["/projects/farmshop.png", "/projects/farmshop1.png"],
      link: "https://www.figma.com/design/UpO95oRLa3VjMZTM8iyWXN/Design-FarmShop",
      description:
        "Maquette complète (UI/UX) d'une boutique FarmShop : composants, pages et parcours utilisateur.",
      technologies: ["Figma"],
      role: "Conception UI/UX",
      features: ["Design system", "Wireframes", "Prototypes", "Composants"],
    },
  ];

  const infographyItems = [
    { id: 1, title: "Affiche / Flyer", image: "/projects/info1.png" },
    { id: 2, title: "Post réseaux sociaux", image: "/projects/info.png" },
    { id: 3, title: "Carte de visite", image: "/projects/info2.png" },
    { id: 4, title: "Bannière", image: "/projects/info3.png" },
    { id: 4, title: "Bannière", image: "/projects/info4.png" },
    { id: 4, title: "Bannière", image: "/projects/info5.png" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <h1 className="font-display text-foreground mb-6">Mes projets</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Une sélection de projets qui démontrent ma capacité à concevoir et
              développer des solutions numériques de qualité.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.slice(0, 4).map((src, i) => (
                      <div
                        key={`${project.id}-${src}`}
                        className={[
                          "relative overflow-hidden rounded-lg border border-border bg-secondary/20",
                          i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square",
                        ].join(" ")}
                      >
                        <img
                          src={src}
                          alt={`${project.name} - aperçu ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                      {project.type}
                    </p>
                    <h2 className="font-heading text-foreground mb-4">
                      {project.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">
                          Objectif
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">
                          Rôle
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {project.role}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary/50 text-foreground text-xs rounded border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">
                          Fonctionnalités
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground text-sm flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Voir le projet
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infography Section */}
        <section className="py-24 md:py-32 bg-secondary/30" id="infographies">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <h2 className="font-heading text-foreground mb-4">
                Réalisations d’infographie
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Une sélection de créations graphiques (affiches, posts, bannières,
                supports de communication). Remplace simplement les images dans{" "}
                <code className="px-1 py-0.5 bg-secondary/60 rounded border border-border">
                  client/public/projects/
                </code>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {infographyItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-background border border-border rounded-lg overflow-hidden"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-foreground font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="font-heading text-foreground mb-6">
                Intéressé par un projet similaire ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Je suis disponible pour des missions de développement web et de
                conception graphique. Discutons de votre projet.
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
                  <a href="/skills">Voir mes compétences</a>
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
