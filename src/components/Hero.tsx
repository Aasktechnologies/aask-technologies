import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLabels } from "@/hooks/useLabels";

const Hero = () => {
  const labels = useLabels();
  const { hero } = labels;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent pb-48 md:pb-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8 pt-24 pb-8">
        <div className="max-w-4xl">
          <div className="mb-4">
            <span className="inline-block text-secondary font-medium uppercase tracking-wider text-sm animate-fade-in">
              {hero.tagline}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-accent-foreground leading-none mb-6">
            <span className="block overflow-hidden">
              <span className="inline-block animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {hero.heading.line1}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {hero.heading.line2} <span className="text-secondary">{hero.heading.line2Highlight}</span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block animate-fade-in" style={{ animationDelay: "0.3s" }}>
                {hero.heading.line3}
              </span>
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-accent-foreground/70 max-w-xl mb-8 animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            {hero.description}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-gray-900 hover:bg-secondary/90 font-semibold text-base sm:text-lg px-6 sm:px-8 group"
            >
              <Link to="/services">
                {hero.buttons.services}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent-foreground/30 hover:bg-accent-foreground/10 font-semibold text-base sm:text-lg px-6 sm:px-8 group"
            >
              <Link to="/projects">
                <Play className="mr-2 h-5 w-5" />
                {hero.buttons.projects}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="container px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {hero.stats.map((stat, index) => (
              <div
                key={index}
                className="py-6 px-4 text-center animate-fade-in opacity-0"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-display text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
