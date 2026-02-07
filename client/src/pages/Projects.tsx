import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

/**
 * Projects Page
 * Galerie complète des projets avec détails
 * Design Philosophy: Minimalisme, asymétrie, espace blanc
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "FarmShop",
      type: "Site e-commerce",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/diyPemToNZwMTVuiQo2piB/sandbox/17dmWsTZtaHY7Hb3kYUiIy-img-2_1770369705000_na1fn_cHJvamVjdC1lY29tbWVyY2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZGl5UGVtVG9OWndNVFZ1aVFvMnBpQi9zYW5kYm94LzE3ZG1Xc1RadGFIWTdIYjNrWVVpSXktaW1nLTJfMTc3MDM2OTcwNTAwMF9uYTFmbl9jSEp2YW1WamRDMWxZMjl0YldWeVkyVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lJc0Nrk1UAJgNGYh407wpeR~AG63W3TkJRt~NdK3A4AIrjzKCfPpjbEiKviimvTnECC2sdDGIImee~-VDzcrHLMID9hE3~XzoijbMpZK7jRyJwRNRA1D1IdAiE1VpbRwniq6VVv5Gjlb6sljZFE-1kVw3XzSGE2nAotol29NWdBrBZk4Uxh090BQ9PSgqtkPJqgczOCRAvDsrnNWTFXgWICKRIv1qulvWrpuqFpp6neDpQVoIQ7rkBAhxvsumCAp78UL36wX6s3o-I~AAjgWoOPYI4Qn7EmZcAoy55gVo~-j6xYVyM6dajXUauvtpflnec-PjJGpF3WcNLeBRuwNbA__",
      description: "Plateforme de vente d'animaux de ferme en ligne",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      role: "Conception et développement complet",
      features: ["Catalogue produits", "Panier", "Système de paiement", "Contact"],
    },
    {
      id: 2,
      name: "Portfolio Créatif",
      type: "Site portfolio",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/diyPemToNZwMTVuiQo2piB/sandbox/17dmWsTZtaHY7Hb3kYUiIy-img-3_1770369706000_na1fn_cHJvamVjdC1wb3J0Zm9saW8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZGl5UGVtVG9OWndNVFZ1aVFvMnBpQi9zYW5kYm94LzE3ZG1Xc1RadGFIWTdIYjNrWVVpSXktaW1nLTNfMTc3MDM2OTcwNjAwMF9uYTFmbl9jSEp2YW1WamRDMXdiM0owWm05c2FXOC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CMAGcv2W5bw937zOC2wwuaXCU86lJKUIkZ5vsg3c2ZLYKu~tld-jOJKE0XOJDE9kfBrzFFCDVhyNUhGMcSObCUtRKtDRJFsV0sjg4l9pSvoSxK2w4PWxDrG6gHPJGgm~PFYUSnTDFkvs5Aw4wr~IIeDMTXYwRbEJHhBcgtt9-ytsXLv24BJ9AyF~OW0vriogJiGutfNA7o4xtGf1l1SN90CrzSXLGLwf-EVWnIlM7dNK5OJn~7dNMiwLhOMN1I5P5BzPx5q-zy0zuzgbhKZti2cs63jwja59VkyV3K1BUSd96JVsG~cUufBIxhzjb8KTstRgBdm0MBOfDe5IJbUFEQ__",
      description: "Vitrine créative pour artistes et designers",
      technologies: ["React", "Tailwind CSS", "Figma"],
      role: "Design et développement frontend",
      features: ["Galerie d'images", "Filtrage", "Responsive design"],
    },
    {
      id: 3,
      name: "Branding Complet",
      type: "Identité visuelle",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/diyPemToNZwMTVuiQo2piB/sandbox/17dmWsTZtaHY7Hb3kYUiIy-img-4_1770369703000_na1fn_cHJvamVjdC1icmFuZGluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZGl5UGVtVG9OWndNVFZ1aVFvMnBpQi9zYW5kYm94LzE3ZG1Xc1RadGFIWTdIYjNrWVVpSXktaW1nLTRfMTc3MDM2OTcwMzAwMF9uYTFmbl9jSEp2YW1WamRDMWljbUZ1WkdsdVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wHbeMNEKZyIxBQFLADjQFGFelJ0PnlgmoqTFLGKu6qkV8KzcjKU8UDNW~fqNjg4uBJjCoWw5Xm3vHrjKpk-gIbsBsnuGdL8CSHBS-Jv6yNoeKtwdXvtokTAMa7YFdgwOZRoCxqKhGcGORen5j~YPlac9gr0-cJ2RJTxPh9WhNlmx1jRodh88VomSLyIfIYn~8HeZ7ftcY2SjqxnQNinsK20isWeElRNMq920EwNh2fP3ivAbQFW457cGKI4585DnD9qP18RILfJgJg3UaqD-RNLRslHButj5FXjtsrs-8f5ILhu8K8fpDCN-7V9myyVvc2qdMAWkEAUaLA2IEESV6A__",
      description: "Identité visuelle complète pour startup tech",
      technologies: ["Photoshop", "Illustrator", "Figma"],
      role: "Direction artistique et conception",
      features: ["Logo", "Palette couleur", "Typographie", "Guidelines"],
    },
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
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
                        <a href="#" className="flex items-center gap-2">
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

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
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
