import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Clients from "@/components/Clients";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLabels } from "@/hooks/useLabels";
import { getIcon } from "@/lib/iconRegistry";

const AboutPage = () => {
  const labels = useLabels();
  const { pages, meta } = labels;
  const { about: aboutPage } = pages;
  return (
    <>
      <Helmet>
        <title>{meta?.about?.title || 'About Us - AASKTECHNOLOGIES'}</title>
        <meta
          name="description"
          content={meta?.about?.description || 'Learn about AASKTECHNOLOGIES'}
        />
      </Helmet>
      <Layout>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-accent text-accent-foreground">
          <div className="container px-4 lg:px-8">
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              {aboutPage.header.label}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mt-4">
              {aboutPage.header.heading}
            </h1>
          </div>
        </section>

        <About />

        {/* Mission, Vision, Values */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {aboutPage?.values?.map((item, index) => {
                const Icon = getIcon(item.icon);
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover-lift"
                  >
                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-display text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-medium uppercase tracking-widest text-sm">
                {aboutPage?.timeline?.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4">
                {aboutPage?.timeline?.heading}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {aboutPage.timeline.events.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-display text-secondary">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 bg-secondary rounded-full mt-2" />
                    {index < aboutPage.timeline.events.length - 1 && (
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-foreground text-lg">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Clients />

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-accent text-accent-foreground">
          <div className="container px-4 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              {aboutPage.cta.heading}
            </h2>
            <p className="text-accent-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              {aboutPage.cta.description}
            </p>
            <Button asChild size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
              <Link to="/contact">
                {aboutPage.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;
