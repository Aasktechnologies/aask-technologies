import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLabels } from "@/hooks/useLabels";

const ProjectsPage = () => {
  const labels = useLabels();
  const { pages, meta } = labels;
  const { projects: projectsPage } = pages;

  return (
    <>
      <Helmet>
        <title>{meta.projects.title}</title>
        <meta
          name="description"
          content={meta.projects.description}
        />
      </Helmet>
      <Layout>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-accent text-accent-foreground">
          <div className="container px-4 lg:px-8">
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              {projectsPage.header.label}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mt-4">
              {projectsPage.header.heading}
            </h1>
            <p className="text-accent-foreground/70 text-lg max-w-2xl mt-6">
              {projectsPage.header.description}
            </p>
          </div>
        </section>

        <Projects />

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container px-4 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              {projectsPage.cta.heading}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {projectsPage.cta.description}
            </p>
            <Button asChild size="lg" className="bg-secondary text-gray-900 hover:bg-secondary/90">
              <Link to="/contact">
                {projectsPage.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProjectsPage;
