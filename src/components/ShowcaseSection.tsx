import { Languages, ArrowRight } from "lucide-react";

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* AI Translation Feature Highlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <Languages className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">AI-Powered</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Translate Documents <span className="text-gradient">Instantly</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our AI translation panel understands context, technical terms, and preserves formatting. 
              Select any text and get instant translations in over 100 languages.
            </p>

            <ul className="space-y-4">
              {[
                "Context-aware translation for accurate results",
                "Support for technical and academic documents",
                "Preserve original formatting and layout",
                "Offline translation for saved documents"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Mockup */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-elevated border border-border p-6">
              {/* Translation Panel Mock */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">Translation Panel</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 rounded bg-accent text-accent-foreground">English</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="px-2 py-1 rounded bg-primary text-primary-foreground">Spanish</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-muted">
                    <p className="text-sm text-muted-foreground mb-1">Original</p>
                    <p className="text-foreground">"Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience."</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-accent border border-primary/20">
                    <p className="text-sm text-primary mb-1">Translation</p>
                    <p className="text-foreground">"El aprendizaje automático es un subconjunto de la inteligencia artificial que permite a los sistemas aprender y mejorar a partir de la experiencia."</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button className="text-sm text-primary hover:underline">Copy translation</button>
                  <button className="text-sm text-muted-foreground hover:text-foreground">Add to notes</button>
                </div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
