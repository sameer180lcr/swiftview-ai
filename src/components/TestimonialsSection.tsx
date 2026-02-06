import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, a PDF reader that doesn't slow down my computer. The AI translation feature is a game-changer for my research work.",
    author: "Dr. Sarah Chen",
    role: "Research Scientist",
    avatar: "SC"
  },
  {
    quote: "I read technical documentation all day. The tab management and annotation features have made my workflow so much faster.",
    author: "Michael Rodriguez",
    role: "Software Engineer",
    avatar: "MR"
  },
  {
    quote: "Clean interface, fast performance, and the dark mode is perfect for late-night reading sessions. Highly recommended!",
    author: "Emma Thompson",
    role: "Graduate Student",
    avatar: "ET"
  },
  {
    quote: "The best PDF viewer I've used on Windows. It opens huge documents instantly and the translation feature is incredibly accurate.",
    author: "James Wilson",
    role: "Technical Writer",
    avatar: "JW"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by <span className="text-gradient">Thousands</span> of Users
          </h2>
          <p className="text-lg text-muted-foreground">
            Join professionals, researchers, and students who trust PDFReader Pro for their daily document needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/50 shadow-elevated hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
