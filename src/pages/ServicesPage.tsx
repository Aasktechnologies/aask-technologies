import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLabels } from "@/hooks/useLabels";

const ServicesPage = () => {
  const labels = useLabels();
  const { pages, meta } = labels;
  const { services: servicesPage } = pages;

  return (
    <>
      <Helmet>
        <title>{meta.services.title}</title>
        <meta
          name="description"
          content={meta.services.description}
        />
      </Helmet>
      <Layout>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-accent text-accent-foreground">
          <div className="container px-4 lg:px-8">
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              {servicesPage.header.label}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mt-4">
              {servicesPage.header.heading}
            </h1>
            <p className="text-accent-foreground/70 text-lg max-w-2xl mt-6">
              {servicesPage.header.description}
            </p>
          </div>
        </section>

        <Services />

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-accent text-accent-foreground">
          <div className="container px-4 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              {servicesPage.cta.heading}
            </h2>
            <p className="text-accent-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              {servicesPage.cta.description}
            </p>
            <Button asChild size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
              <Link to="/contact">
                {servicesPage.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServicesPage;
