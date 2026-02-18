import { useLabels } from "@/hooks/useLabels";
import { getIcon } from "@/lib/iconRegistry";

const About = () => {
  const labels = useLabels();
  const { about } = labels;

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={about.images[0].url}
                    alt={about.images[0].alt}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={about.images[1].url}
                    alt={about.images[1].alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={about.images[2].url}
                    alt={about.images[2].alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={about.images[3].url}
                    alt={about.images[3].alt}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-gray-900 p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-display">{about.badge.value}</div>
              <div className="text-sm font-medium">{about.badge.label}</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              {about.sectionLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4 mb-6">
              {about.heading}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {about.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {about.features.map((feature, index) => {
                const Icon = getIcon(feature.icon);
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
