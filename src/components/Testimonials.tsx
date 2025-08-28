import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Full Stack Developer",
      company: "Tech Startup",
      avatar: "SC",
      rating: 5,
      content: "TeamUp helped me transition into tech by connecting me with experienced developers. I learned more in 3 months than I did in a year of self-study. The projects are real-world and the mentorship is invaluable."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Senior Backend Engineer",
      company: "Fortune 500",
      avatar: "MR",
      rating: 5,
      content: "As a senior developer, I love contributing to meaningful projects in my spare time. TeamUp makes it easy to find projects that match my expertise and schedule. The skill-based matching is incredibly accurate."
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Product Designer",
      company: "Design Agency",
      avatar: "EW",
      rating: 5,
      content: "The collaboration tools are fantastic. Working with distributed teams has never been smoother. I've built my portfolio with 4 successful projects and expanded my network significantly through TeamUp."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Loved by developers worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who have accelerated their careers and built amazing projects through TeamUp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="card-testimonial animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;