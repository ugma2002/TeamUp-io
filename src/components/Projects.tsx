import { Calendar, Users, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "Building a next-generation e-commerce platform with AI-driven recommendations and real-time analytics.",
      tech: ["React", "Node.js", "Python", "TensorFlow"],
      teamSize: 6,
      rating: 4.9,
      duration: "3 months",
      status: "Recruiting",
      roles: ["Frontend Developer", "ML Engineer"]
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description: "Secure, transparent voting system built on blockchain technology for democratic processes.",
      tech: ["Solidity", "React", "Web3.js", "IPFS"],
      teamSize: 4,
      rating: 4.8,
      duration: "4 months",
      status: "In Progress",
      roles: ["Blockchain Developer", "UI/UX Designer"]
    },
    {
      id: 3,
      title: "Climate Data Visualization",
      description: "Interactive dashboard for visualizing climate change data and environmental trends worldwide.",
      tech: ["D3.js", "Python", "Flask", "PostgreSQL"],
      teamSize: 5,
      rating: 4.7,
      duration: "2 months",
      status: "Recruiting",
      roles: ["Data Scientist", "Frontend Developer"]
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Explore Active Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join exciting projects across different domains and technologies. Find teams that match your skills and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card-project animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project status badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Recruiting' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  {project.status}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{project.rating}</span>
                </div>
              </div>

              {/* Project title and description */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project details */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize} members</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Open roles */}
              <div className="mb-4">
                <p className="text-sm font-medium text-foreground mb-2">Open Roles:</p>
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span 
                      key={role}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <Button className="w-full btn-secondary flex items-center justify-center gap-2">
                View Project
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-hero">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;