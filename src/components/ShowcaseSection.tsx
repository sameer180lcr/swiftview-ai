import { Languages, ArrowRight, Globe, Wand2, BookOpen } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* AI Translation Feature Highlight */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <Languages className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">AI-Powered Translation</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Translate Documents <span className="text-gradient">Instantly</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Our AI translation panel understands context, technical terms, and preserves formatting. 
              Select any text and get instant translations in over 100 languages.
            </p>

            <ul className="space-y-4">
              {[
                { icon: Wand2, text: "Context-aware translation for accurate results" },
                { icon: BookOpen, text: "Support for technical and academic documents" },
                { icon: Globe, text: "100+ languages with offline support" },
                { icon: ArrowRight, text: "Preserve original formatting and layout" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground pt-1">{item.text}</span>
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
                    <span className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground font-medium">English</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium">Spanish</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-muted">
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Original Text</p>
                    <p className="text-foreground">"Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed."</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-accent border-2 border-primary/20">
                    <p className="text-xs text-primary mb-2 uppercase tracking-wide">Translation</p>
                    <p className="text-foreground">"El aprendizaje automático es un subconjunto de la inteligencia artificial que permite a los sistemas aprender y mejorar a partir de la experiencia sin ser programados explícitamente."</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">Copy translation</button>
                  <button className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">Add to notes</button>
                </div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-3xl -z-10" />
          </div>
        </div>

        {/* Interface Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image first on large screens */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={heroMockup} 
              alt="PDFReader Pro Interface" 
              className="rounded-2xl shadow-elevated"
            />
            <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">Beautiful Interface</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Clean & <span className="text-gradient">Intuitive</span> Design
            </h2>
            
            <p className="text-lg text-muted-foreground">
              A distraction-free reading experience with quick access to all the tools you need. 
              The sidebar keeps everything organized while you focus on your content.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">Pages</div>
                <p className="text-sm text-muted-foreground">Thumbnail navigation for quick page jumping</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">Marks</div>
                <p className="text-sm text-muted-foreground">All your bookmarks in one organized view</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">TOC</div>
                <p className="text-sm text-muted-foreground">Table of contents for structured documents</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-1">AI</div>
                <p className="text-sm text-muted-foreground">Smart translation and text analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
