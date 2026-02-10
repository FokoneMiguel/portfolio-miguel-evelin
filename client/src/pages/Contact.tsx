import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

/**
 * Contact Page
 * Formulaire de contact et liens sociaux
 * Design Philosophy: Minimalisme, clarté, accessibilité
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <h1 className="font-display text-foreground mb-6">Contact</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Vous avez un projet en tête ou des questions ? Je serais ravi de
              vous entendre. Contactez-moi via le formulaire ou les réseaux.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-foreground mb-8">
                  Envoyez-moi un message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
                    <p className="text-primary font-medium">
                      Merci ! Votre message a été envoyé avec succès.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                      placeholder="Miguel Evelin"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Votre email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200 resize-none"
                      placeholder="Parlez-moi de votre projet..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-foreground mb-8">
                  Autres moyens de contact
                </h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="p-6 bg-secondary/30 rounded-lg border border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Email
                        </h3>
                        <a
                          href="mailto:miguelfokone@gmail.com"
                          className="text-primary hover:underline transition-colors duration-200"
                        >
                          miguelfokone@gmail.com
                        </a>
                        <p className="text-muted-foreground text-sm mt-2">
                          Réponse généralement dans les 24 heures
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="p-6 bg-secondary/30 rounded-lg border border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <Linkedin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          LinkedIn
                        </h3>
                        <a
                          href="https://www.linkedin.com/in/miguel-fokone-619b772a7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline transition-colors duration-200"
                        >
                          Visitez mon profil
                        </a>
                        <p className="text-muted-foreground text-sm mt-2">
                          Connectez-moi pour des opportunités professionnelles
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="p-6 bg-secondary/30 rounded-lg border border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <Github className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          GitHub
                        </h3>
                        <a
                          href="https://github.com/FokoneMiguel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline transition-colors duration-200"
                        >
                          Voir mes projets
                        </a>
                        <p className="text-muted-foreground text-sm mt-2">
                          Explorez mon code et mes contributions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-foreground font-medium mb-2">
                    Temps de réponse
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Je m'efforce de répondre à tous les messages dans les 24 à 48
                    heures. Pour les demandes urgentes, préférez LinkedIn ou email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container">
            <h2 className="font-heading text-foreground mb-12">
              Questions fréquentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Quels types de projets acceptez-vous ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Je travaille sur des sites vitrines, e-commerce, portfolios et
                  projets de branding. Je suis ouvert à différents types de
                  collaborations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Quel est votre délai de livraison ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Les délais dépendent de la complexité du projet. Nous discuterons
                  d'un calendrier réaliste lors de notre première conversation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Proposez-vous des services de maintenance ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oui, je propose des services de maintenance et de support après
                  la livraison du projet pour assurer son bon fonctionnement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Travaillez-vous en freelance ou en CDI ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Je suis ouvert aux deux. Que ce soit pour du freelance, du CDI ou
                  une collaboration ponctuelle, discutons de vos besoins.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
