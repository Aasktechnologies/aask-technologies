import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLabels } from "@/hooks/useLabels";
import { getIcon } from "@/lib/iconRegistry";

const Services = () => {
  const labels = useLabels();
  const { services: servicesData } = labels;

  const servicesWithIcons = servicesData.list.map(service => ({
    ...service,
    icon: getIcon(service.icon)
  }));

  const [activeService, setActiveService] = useState(servicesWithIcons[0]);
  const location = useLocation();

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const service = servicesWithIcons.find(s => s.id === hash);
      if (service) {
        setActiveService(service);
      }
    }
  }, [location.hash, servicesWithIcons]);

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium uppercase tracking-widest text-sm">
            {servicesData.sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4 mb-6">
            {servicesData.heading}
          </h2>
          <p className="text-muted-foreground text-lg">
            {servicesData.description}
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {servicesWithIcons.map((service) => (
            <button
              key={service.id}
              id={service.id}
              onClick={() => setActiveService(service)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeService.id === service.id
                  ? "bg-secondary text-gray-900 shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              <service.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <activeService.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-3xl font-display text-white">
                  {activeService.title}
                </h3>
              </div>
              <p className="text-white/80">{activeService.description}</p>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {activeService.categories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover-lift"
              >
                <h4 className="text-xl font-display text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-sm font-sans text-secondary">
                    {index + 1}
                  </span>
                  {category.name}
                </h4>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-muted-foreground group cursor-default"
                    >
                      <ArrowRight className="w-4 h-4 text-secondary transition-transform group-hover:translate-x-1" />
                      <span className="group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
