import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLabels } from "@/hooks/useLabels";

const Footer = () => {
  const labels = useLabels();
  const { footer, brand } = labels;

  const socialIcons = {
    Facebook,
    Twitter,
    LinkedIn: Linkedin,
    Instagram,
  };

  const getSocialIcon = (label: string) => {
    return socialIcons[label as keyof typeof socialIcons] || Facebook;
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <span className="text-5xl font-display tracking-wider text-accent-foreground">
                {brand.name}
              </span>
            </Link>
            <p className="mt-6 text-accent-foreground/70 max-w-md">
              {footer.description}
            </p>
            <div className="flex gap-4 mt-8">
              {footer.social.map((social, index) => {
                const Icon = getSocialIcon(social.label);
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-xl mb-6">{footer.sections.services.heading}</h4>
            <ul className="space-y-3">
              {footer.sections.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-accent-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-xl mb-6">{footer.sections.company.heading}</h4>
            <ul className="space-y-3">
              {footer.sections.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-accent-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
