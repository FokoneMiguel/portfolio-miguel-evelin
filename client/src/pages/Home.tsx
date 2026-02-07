import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Hero section + aperçu rapide + projets en vedette + compétences clés + CTA final
 * Design Philosophy: Minimalisme contemporain, contraste dramatique, asymétrie intentionnelle
 */
export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      name: "FarmShop",
      type: "Site e-commerce",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/diyPemToNZwMTVuiQo2piB/sandbox/17dmWsTZtaHY7Hb3kYUiIy-img-2_1770369705000_na1fn_cHJvamVjdC1lY29tbWVyY2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZGl5UGVtVG9OWndNVFZ1aVFvMnBpQi9zYW5kYm94LzE3ZG1Xc1RadGFIWTdIYjNrWVVpSXktaW1nLTJfMTc3MDM2OTcwNTAwMF9uYTFmbl9jSEp2YW1WamRDMWxZMjl0YldWeVkyVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lJc0Nrk1UAJgNGYh407wpeR~AG63W3TkJRt~NdK3A4AIrjzKCfPpjbEiKviimvTnECC2sdDGIImee~-VDzcrHLMID9hE3~XzoijbMpZK7jRyJwRNRA1D1IdAiE1VpbRwniq6VVv5Gjlb6sljZFE-1kVw3XzSGE2nAotol29NWdBrBZk4Uxh090BQ9PSgqtkPJqgczOCRAvDsrnNWTFXgWICKRIv1qulvWrpuqFpp6neDpQVoIQ7rkBAhxvsumCAp78UL36wX6s3o-I~AAjgWoOPYI4Qn7EmZcAoy55gVo~-j6xYVyM6dajXUauvtpflnec-PjJGpF3WcNLeBRuwNbA__",
      description: "Plateforme de vente d'animaux de ferme en ligne",
    },
    {
      id: 2,
      name: "Portfolio Créatif",
      type: "Site portfolio",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/diyPemToNZwMTVuiQo2piB/sandbox/17dmWsTZtaHY7Hb3kYUiIy-img-3_1770369706000_na1fn_cHJvamVjdC1wb3J0Zm9saW8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZGl5UGVtVG9OWndNVFZ1aVFvMnBpQi9zYW5kYm94LzE3ZG1Xc1RadGFIWTdIYjNrWVVpSXktaW1nLTNfMTc3MDM2OTcwNjAwMF9uYTFmbl9jSEp2YW1WamRDMXdiM0owWm05c2FXOC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CMAGcv2W5bw937zOC2wwuaXCU86lJKUIkZ5vsg3c2ZLYKu~tld-jOJKE0XOJDE9kfBrzFFCDVhyNUhGMcSObCUtRKtDRJFsV0sjg4l9pSvoSxK2w4PWxDrG6gHPJGgm~PFYUSnTDFkvs5Aw4wr~IIeDMTXYwRbEJHhBcgtt9-ytsXLv24BJ9AyF~OW0vriogJiGutfNA7o4xtGf1l1SN90CrzSXLGLwf-EVWnIlM7dNK5OJn~7dNMiwLhOMN1I5P5BzPx5q-zy0zuzgbhKZti2cs63jwja59VkyV3K1BUSd96JVsG~cUufBIxhzjb8KTstRgBdm0MBOfDe5IJbUFEQ__",
      description: "Vitrine créative pour artistes et designers",
    },
    {
      id: 3,
      name: "Branding Complet",
      type: "Identité visuelle",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/diyPemToNZwMTVuiQo2piB/sandbox/17dmWsTZtaHY7Hb3kYUiIy-img-4_1770369703000_na1fn_cHJvamVjdC1icmFuZGluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZGl5UGVtVG9OWndNVFZ1aVFvMnBpQi9zYW5kYm94LzE3ZG1Xc1RadGFIWTdIYjNrWVVpSXktaW1nLTRfMTc3MDM2OTcwMzAwMF9uYTFmbl9jSEp2YW1WamRDMWljbUZ1WkdsdVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wHbeMNEKZyIxBQFLADjQFGFelJ0PnlgmoqTFLGKu6qkV8KzcjKU8UDNW~fqNjg4uBJjCoWw5Xm3vHrjKpk-gIbsBsnuGdL8CSHBS-Jv6yNoeKtwdXvtokTAMa7YFdgwOZRoCxqKhGcGORen5j~YPlac9gr0-cJ2RJTxPh9WhNlmx1jRodh88VomSLyIfIYn~8HeZ7ftcY2SjqxnQNinsK20isWeElRNMq920EwNh2fP3ivAbQFW457cGKI4585DnD9qP18RILfJgJg3UaqD-RNLRslHButj5FXjtsrs-8f5ILhu8K8fpDCN-7V9myyVvc2qdMAWkEAUaLA2IEESV6A__",
      description: "Identité visuelle complète pour startup tech",
    },
  ];

  const skills = [
    { icon: Code, label: "Développement Web", color: "text-primary" },
    { icon: Palette, label: "Design Graphique", color: "text-primary" },
    { icon: Zap, label: "Performance", color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('https://private-us-east-1.manuscdn.com/sessionFile/diyPemToNZwMTVuiQo2piB/sandbox/17dmWsTZtaHY7Hb3kYUiIy-img-1_1770369705000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZGl5UGVtVG9OWndNVFZ1aVFvMnBpQi9zYW5kYm94LzE3ZG1Xc1RadGFIWTdIYjNrWVVpSXktaW1nLTFfMTc3MDM2OTcwNTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EDgFYyEBT8MDJms0AFxw1fB0l8z7iveMNgCXrPGk6AD5P5eSVIb~d~b3NXkk2CRpnJD8OAgLnf5PbO~kEmCZXyKEpTfTil0HC8gYcOztR5W6peWqsdtWMc-rhQ-FVhpl4xs5y1caztDkHwGI3yaZmS6E7iENkagyjMaXlzsr1iwWOnnlr3s2~rLhu4Z9yD1bbgtXUMbUJW65avlgFTGY7fJxkMuFnis3SCHDNYoapP5k6-oOLeVvzmfc3xWj2EzRUnTHUcVaDVugyx5kLJHZ2mfO8gWkzVvOeT3~0n--A-KYauC6Igu3WYyntESYYW7Wafgze5u38r7g7y7N6Wa0CA__')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className="animate-slide-in-left">
                <h1 className="font-display text-foreground mb-4">
                  TSODZO FOKONE<br />MIGUEL EVELIN
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-6">
                  Développeur Web & Infographiste
                </p>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-md">
                  Création de sites web modernes, performants et orientés business.
                  Transformation de vos idées en solutions numériques exceptionnelles.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
                  >
                    <a href="/cv" className="flex items-center gap-2">
                      Télécharger mon CV
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-foreground text-foreground hover:bg-secondary transition-all duration-200"
                  >
                    <Link href="/contact">Me contacter</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Decorative */}
              <div className="hidden md:block relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg" />
                <div className="absolute top-12 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <h2 className="font-heading text-foreground mb-12">À propos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h3 className="font-subheading text-foreground">Profil</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Développeur web junior spécialisé dans la création de sites web
                  dynamiques et modernes, avec une forte sensibilité au design graphique.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-subheading text-foreground">Expérience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Plusieurs années de pratique en développement frontend et design,
                  avec une expertise en HTML/CSS, JavaScript et outils de conception.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-subheading text-foreground">Objectif</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cherche des opportunités en tant que développeur web ou designer,
                  en freelance ou en CDI pour contribuer à des projets innovants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-heading text-foreground">Projets en vedette</h2>
              <Link href="/projects">
                <a className="text-primary font-medium hover:underline transition-all duration-200 flex items-center gap-2">
                  Voir tous les projets
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer animate-fade-in-up"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <h3 className="font-subheading text-foreground mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.type}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <Link href={`/projects/${project.id}`}>
                    <a className="text-primary font-medium text-sm hover:underline transition-all duration-200 flex items-center gap-2">
                      Voir le projet
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Skills Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container">
            <h2 className="font-heading text-foreground mb-12">Compétences clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-primary/10 flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {skill.label}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Expertise technique et créative
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <Link href="/skills">
                <a className="text-primary font-medium hover:underline transition-all duration-200 flex items-center gap-2">
                  Voir toutes les compétences
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="font-heading text-foreground mb-6">
                Travaillons ensemble
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vous avez un projet en tête ? Parlons de vos besoins et de comment
                je peux vous aider à créer quelque chose d'extraordinaire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                >
                  <a href="/contact">Démarrer un projet</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-secondary transition-all duration-200"
                >
                  <a href="/cv">Télécharger mon CV</a>
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
