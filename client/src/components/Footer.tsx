import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";

/**
 * Footer Component
 * Minimaliste avec liens rapides et réseaux sociaux
 * Design Philosophy: Contraste noir/blanc, espace blanc, symétrie subtile
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-subheading mb-4">Miguel Evelin</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Développeur web et infographiste créant des expériences numériques
              modernes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Accueil
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    À propos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Projets
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Ressources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/cv"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Télécharger CV
                </a>
              </li>
              <li>
                <Link href="/skills">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Compétences
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Réseaux
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/miguel-fokone-619b772a7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 rounded"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/FokoneMiguel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 rounded"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:miguelfokone@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200 rounded"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} TSODZO FOKONE MIGUEL EVELIN. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
