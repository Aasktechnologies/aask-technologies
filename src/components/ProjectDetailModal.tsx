import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, MapPin, Building2, CheckCircle2, Wrench, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    year: string;
    location: string;
    client: string;
    status?: string;
    fullDescription?: string;
    scope?: string[];
    keyAchievements?: string[];
    technologies?: string[];
    challenges?: string[];
    outcomes?: string[];
  };
}

export default function ProjectDetailModal({
  isOpen,
  onClose,
  project,
}: ProjectDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display">{project.title}</DialogTitle>
        </DialogHeader>

        {/* Project Image */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-secondary text-gray-900">
              {project.category}
            </Badge>
          </div>
          {project.status && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-energy text-white border-none">
                {project.status}
              </Badge>
            </div>
          )}
        </div>

        {/* Project Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-y border-border">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-secondary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Timeline</p>
              <p className="font-medium">{project.year}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-secondary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{project.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-secondary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Client</p>
              <p className="font-medium">{project.client}</p>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-display mb-2">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Project Scope */}
          {project.scope && project.scope.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-display">Project Scope</h3>
              </div>
              <ul className="space-y-2">
                {project.scope.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Achievements */}
          {project.keyAchievements && project.keyAchievements.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-display">Key Achievements</h3>
              </div>
              <ul className="space-y-2">
                {project.keyAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-energy mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-display">Technologies & Methods</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h3 className="text-xl font-display mb-3">Project Outcomes</h3>
              <div className="bg-secondary/10 rounded-lg p-4 space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <p key={index} className="text-muted-foreground">
                    • {outcome}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
