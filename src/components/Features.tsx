import { Users, Zap, TrendingUp, Github } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Role-based Matching",
      description: "Get matched with projects that need your specific skills and experience level. Our AI considers your expertise, interests, and availability."
    },
    {
      icon: Zap,
      title: "Live Project Collaboration",
      description: "Real-time code collaboration, video calls, and project management tools. Work together seamlessly regardless of location."
    },
    {
      icon: TrendingUp,
      title: "Skill Progress Dashboard",
      description: "Track your contributions, skill improvements, and project outcomes. Build a portfolio that showcases your real-world impact."
    },
    {
      icon: Github,
      title: "GitHub Integration",
      description: "Seamless integration with GitHub repositories. Manage pull requests, issues, and code reviews directly within the platform."
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Everything you need to collaborate
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and intelligent matching to help you find the perfect team and build amazing projects together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="card-feature animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;