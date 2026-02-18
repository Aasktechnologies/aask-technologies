import { useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ProjectDetailModal from "@/components/ProjectDetailModal";

const upcomingProjects = [
  {
    title: "Floating Solar Farm Installation",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    description: "Innovative floating solar panel system for reservoir-based power generation",
    year: "2025 - 2026",
    location: "Kerala, India",
    client: "Indian Renewable Energy Development Agency",
    status: "Planned",
  },
  {
    title: "Hyperloop Component Manufacturing",
    category: "Railways",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=80",
    description: "Precision engineering of vacuum tube components for next-generation transport",
    year: "2025 - 2027",
    location: "Dubai-Abu Dhabi Corridor, UAE",
    client: "Virgin Hyperloop One",
    status: "Planning Phase",
  },
  {
    title: "Carbon Capture Facility",
    category: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
    description: "Advanced carbon capture and storage system for industrial emissions reduction",
    year: "2025",
    location: "Alberta, Canada",
    client: "Canadian Energy Solutions",
    status: "Bidding Phase",
  },
  {
    title: "Autonomous Vehicle Testing Track",
    category: "Automotives",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art autonomous vehicle testing facility with AI infrastructure",
    year: "2025 - 2026",
    location: "Silicon Valley, USA",
    client: "Tech Automotive Alliance",
    status: "Proposal Stage",
  },
];

const currentProjects = [
  {
    title: "North Sea Offshore Wind Integration",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    description: "Engineering and supply of critical components for a 500MW offshore wind farm project",
    year: "2024 - Ongoing",
    location: "North Sea, UK",
    client: "European Energy Consortium",
    status: "In Progress",
    fullDescription: "A comprehensive offshore wind farm project involving the engineering, procurement, and installation of critical infrastructure components for a 500MW renewable energy facility in the North Sea. This project represents a significant contribution to the UK's renewable energy targets and showcases our expertise in complex offshore installations.",
    scope: [
      "Design and engineering of offshore platform foundations",
      "Supply of high-grade steel components for turbine towers",
      "Installation of subsea cable protection systems",
      "Procurement and testing of critical electrical components",
      "Project management and quality assurance throughout installation"
    ],
    keyAchievements: [
      "Successfully delivered first phase 2 months ahead of schedule",
      "Zero safety incidents during offshore installation",
      "Achieved 99.5% quality compliance rate on all deliverables",
      "Reduced material costs by 15% through optimized procurement"
    ],
    technologies: [
      "Advanced Welding Techniques",
      "Subsea Cable Technology",
      "High-Voltage Electrical Systems",
      "Offshore Installation Equipment",
      "Quality Management Systems (ISO 9001)"
    ],
    outcomes: [
      "Expected to power 350,000 homes upon completion",
      "Reduction of 1.2 million tons of CO2 emissions annually",
      "Creation of 150 long-term maintenance jobs in the region"
    ]
  },
  {
    title: "Metro Rail System Expansion",
    category: "Railways",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    description: "Precision manufacturing and fabrication of railway components for major metro expansion",
    year: "2024 - 2025",
    location: "Mumbai, India",
    client: "Mumbai Metro Rail Corporation",
    status: "In Progress",
  },
  {
    title: "EV Charging Infrastructure",
    category: "Automotives",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    description: "Design and installation of advanced EV charging stations across urban centers",
    year: "2024 - 2025",
    location: "Multiple Locations, UAE",
    client: "Emirates Electric Vehicle Initiative",
    status: "In Progress",
  },
];

const recentProjects = [
  {
    title: "Offshore Platform Installation",
    category: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
    description: "Complete EPC contracting for deep-water platform in the Gulf region",
    year: "2023",
    location: "Persian Gulf",
    client: "Gulf Oil Exploration Ltd.",
  },
  {
    title: "Solar Power Plant Construction",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    description: "Large-scale solar panel installation and grid integration for 250MW facility",
    year: "2023",
    location: "Rajasthan, India",
    client: "Solar Energy Corporation",
  },
  {
    title: "High-Speed Rail Components",
    category: "Railways",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
    description: "Precision manufactured components for bullet train systems and infrastructure",
    year: "2022",
    location: "Tokyo-Osaka Line, Japan",
    client: "Japan Railways Group",
  },
  {
    title: "Marine Vessel Outfitting",
    category: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    description: "Complete marine interior and electrical systems installation for oil tankers",
    year: "2022",
    location: "Singapore Shipyard",
    client: "Marine Solutions International",
  },
  {
    title: "Automotive Testing Facility",
    category: "Automotives",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art vehicle testing and validation center with advanced equipment",
    year: "2021",
    location: "Stuttgart, Germany",
    client: "German Automotive Research Institute",
  },
  {
    title: "Hydrogen Production Facility",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    description: "Green hydrogen production plant engineering and equipment supply",
    year: "2021",
    location: "Rotterdam, Netherlands",
    client: "European Hydrogen Alliance",
  },
];

const previousWorks = [
  {
    title: "Petrochemical Refinery Expansion",
    category: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=80",
    description: "Major refinery upgrade with advanced distillation units and safety systems",
    year: "2018 - 2020",
    location: "Saudi Arabia",
    client: "Saudi Aramco",
  },
  {
    title: "Freight Railway Infrastructure",
    category: "Railways",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-duty rail track components and signaling systems for cargo corridors",
    year: "2017 - 2019",
    location: "Trans-Siberian Route, Russia",
    client: "Russian Railways",
  },
  {
    title: "Geothermal Power Plant",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80",
    description: "Geothermal energy extraction and power generation facility engineering",
    year: "2016 - 2018",
    location: "Reykjavik, Iceland",
    client: "Iceland National Energy Authority",
  },
  {
    title: "Industrial Valve Manufacturing Plant",
    category: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    description: "Establishment of high-pressure valve production facility with quality systems",
    year: "2015 - 2017",
    location: "Houston, USA",
    client: "American Valve Corporation",
  },
  {
    title: "Automotive Assembly Line Automation",
    category: "Automotives",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    description: "Robotic automation systems for vehicle assembly and quality control",
    year: "2014 - 2016",
    location: "Detroit, USA",
    client: "Big Three Automotive Alliance",
  },
  {
    title: "Offshore Oil Rig Maintenance",
    category: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive maintenance and upgrade services for aging offshore platforms",
    year: "2013 - 2015",
    location: "North Sea, Norway",
    client: "Statoil (Equinor)",
  },
  {
    title: "Urban Metro Development",
    category: "Railways",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    description: "Complete metro rail system components for new urban transport network",
    year: "2012 - 2014",
    location: "Delhi, India",
    client: "Delhi Metro Rail Corporation",
  },
  {
    title: "Wind Turbine Component Supply",
    category: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
    description: "Manufacturing and supply of critical wind turbine parts and gearbox systems",
    year: "2010 - 2012",
    location: "Denmark",
    client: "Vestas Wind Systems",
  },
  {
    title: "Oil Pipeline Infrastructure",
    category: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=800&q=80",
    description: "Cross-country pipeline installation with advanced monitoring systems",
    year: "2008 - 2010",
    location: "Kazakhstan",
    client: "KazMunayGas",
  },
];

const ProjectCard = ({ project, showStatus = false, onClick }: { project: any; showStatus?: boolean; onClick: () => void }) => (
  <div onClick={onClick} className="group relative overflow-hidden rounded-xl cursor-pointer bg-card border border-border hover-lift">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

    {showStatus && project.status && (
      <div className="absolute top-4 left-4 z-10">
        <Badge className="bg-energy text-white border-none">
          {project.status}
        </Badge>
      </div>
    )}

    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <span className="text-secondary text-sm font-medium uppercase tracking-wide mb-2">
        {project.category}
      </span>
      <h3 className="text-xl font-display text-white mb-2 group-hover:text-secondary transition-colors">
        {project.title}
      </h3>
      <p className="text-white/90 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="space-y-1 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2">
          <Calendar className="w-3 h-3" />
          <span>{project.year}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3" />
          <span>{project.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-3 h-3" />
          <span>{project.client}</span>
        </div>
      </div>
    </div>

    <div className="absolute top-4 right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
      <ArrowUpRight className="w-5 h-5 text-secondary-foreground" />
    </div>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}

      {/* Current Projects Section - Most Relevant */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container px-4 lg:px-8">
          <div className="mb-12">
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              Active Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4 mb-4">
              CURRENT PROJECTS
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Our ongoing projects showcase our commitment to innovation and excellence across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                showStatus={true}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Works Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container px-4 lg:px-8">
          <div className="mb-12">
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              Future Pipeline
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4 mb-4">
              UPCOMING WORKS
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Exciting projects in planning and bidding stages that represent the future of industrial innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                showStatus={true}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-24 lg:py-32 bg-accent text-accent-foreground">
        <div className="container px-4 lg:px-8">
          <div className="mb-12">
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              Recently Completed
            </span>
            <h2 className="text-4xl md:text-5xl font-display mt-4 mb-4">
              RECENT PROJECTS
            </h2>
            <p className="text-accent-foreground/70 text-lg max-w-3xl">
              Successfully completed projects from 2021-2023 demonstrating our expertise and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Previous Works Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container px-4 lg:px-8">
          <div className="mb-12">
            <span className="text-secondary font-medium uppercase tracking-widest text-sm">
              Legacy Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4 mb-4">
              PREVIOUS WORKS
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Historic projects spanning over two decades showcasing our extensive experience and global reach since 2008.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousWorks.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
