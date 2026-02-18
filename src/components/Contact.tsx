import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLabels } from "@/hooks/useLabels";
import { getIcon } from "@/lib/iconRegistry";

const Contact = () => {
  const labels = useLabels();
  const { contact } = labels;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              {contact.sectionLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4 mb-6">
              {contact.heading}
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              {contact.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {contact.info.map((item, index) => {
                const Icon = getIcon(item.icon);
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-display text-foreground mb-6">
              {contact.form.heading}
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {contact.form.fields.firstName.label}
                  </label>
                  <Input
                    placeholder={contact.form.fields.firstName.placeholder}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {contact.form.fields.lastName.label}
                  </label>
                  <Input
                    placeholder={contact.form.fields.lastName.placeholder}
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {contact.form.fields.email.label}
                </label>
                <Input
                  type="email"
                  placeholder={contact.form.fields.email.placeholder}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {contact.form.fields.phone.label}
                </label>
                <Input
                  type="tel"
                  placeholder={contact.form.fields.phone.placeholder}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {contact.form.fields.service.label}
                </label>
                <Input
                  placeholder={contact.form.fields.service.placeholder}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {contact.form.fields.message.label}
                </label>
                <Textarea
                  placeholder={contact.form.fields.message.placeholder}
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary text-gray-900 hover:bg-secondary/90 font-semibold"
              >
                {contact.form.submit}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
