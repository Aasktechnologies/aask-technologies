import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLabels } from "@/hooks/useLabels";
import { getIcon } from "@/lib/iconRegistry";

const Home = () => {
  const labels = useLabels();
  const { home, services: servicesData, meta } = labels;

  const services = servicesData.list.map(service => ({
    icon: getIcon(service.icon),
    title: service.title,
    description: service.description,
    link: `/services#${service.id}`,
    image: service.image,
  }));
  return (
    <>
      <Helmet>
        <title>{meta.home.title}</title>
        <meta
          name="description"
          content={meta.home.description}
        />
      </Helmet>
      <Layout>
        <Hero />

        {/* Services Preview */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-medium uppercase tracking-widest text-sm">
                {home.servicesPreview.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4 mb-6">
                {home.servicesPreview.heading}
              </h2>
              <p className="text-muted-foreground text-lg">
                {home.servicesPreview.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group relative overflow-hidden rounded-xl hover-lift h-[280px] border border-border"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/80 to-accent/40 group-hover:from-accent/95 group-hover:via-accent/85 transition-all duration-300" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div className="w-14 h-14 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>

                    <div>
                      <h3 className="text-xl font-display text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/90 mb-4">{service.description}</p>
                      <span className="inline-flex items-center text-secondary font-medium group-hover:gap-2 transition-all">
                        {home.servicesPreview.learnMore}
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
                <Link to="/services">
                  {home.servicesPreview.viewAll}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Clients />

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-accent text-accent-foreground">
          <div className="container px-4 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              {home.cta.heading}
            </h2>
            <p className="text-accent-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              {home.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
                <Link to="/contact">{home.cta.buttons.quote}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-gray-900 hover:bg-accent-foreground/10">
                <Link to="/about">{home.cta.buttons.about}</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
