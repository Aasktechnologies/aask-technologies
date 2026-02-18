import { useLabels } from "@/hooks/useLabels";

const Clients = () => {
  const labels = useLabels();
  const { heading, list: clients } = labels.clients;
  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-muted-foreground text-sm uppercase tracking-widest">
            {heading}
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <div className="h-12 w-32 flex items-center justify-center">
                <span className="text-2xl font-display text-foreground/60 hover:text-foreground transition-colors">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
