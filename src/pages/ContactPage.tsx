import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import { useLabels } from "@/hooks/useLabels";

const ContactPage = () => {
  const labels = useLabels();
  const { pages, meta } = labels;
  const { contact: contactPage } = pages;

  return (
    <>
      <Helmet>
        <title>{meta.contact.title}</title>
        <meta
          name="description"
          content={meta.contact.description}
        />
      </Helmet>
      <Layout>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-accent text-accent-foreground">
          <div className="container px-4 lg:px-8">
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              {contactPage.header.label}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mt-4">
              {contactPage.header.heading}
            </h1>
            <p className="text-accent-foreground/70 text-lg max-w-2xl mt-6">
              {contactPage.header.description}
            </p>
          </div>
        </section>

        <Contact />
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.412052573732!2d80.01657587776855!3d13.036859354498544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b44f62f3871%3A0xb0de2dd4a3b9cd9a!2sAASKTECHNOLOGIES%20TECHNOLOGIES%20(ATS)!5e1!3m2!1sen!2ssg!4v1765065451942!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        {/* Map Section */}
        <section className="h-96 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.412052573732!2d80.01657587776855!3d13.036859354498544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b44f62f3871%3A0xb0de2dd4a3b9cd9a!2sAASKTECHNOLOGIES%20TECHNOLOGIES%20(ATS)!5e1!3m2!1sen!2ssg!4v1765065451942!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={contactPage.mapTitle}
          />
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
