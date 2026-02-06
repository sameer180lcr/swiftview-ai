import { Button } from "@/components/ui/button";
import { Download, Monitor, Sparkles } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 opacity-0 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">Now with AI Translation Engine</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                The Ultimate <span className="text-gradient">PDF Reader</span> for Windows
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Experience blazing-fast PDF rendering, AI-powered translation sidebar, smart annotations, and a beautiful modern interface designed for professionals.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-2">
              <Button size="xl" variant="hero" className="gap-3">
                <Download className="w-5 h-5" />
                Download for Windows
              </Button>
              <Button size="xl" variant="outline" className="gap-3 border-primary/30 text-foreground hover:bg-accent">
                <Monitor className="w-5 h-5" />
                View Screenshots
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 opacity-0 animate-fade-up stagger-3">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">500K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 opacity-0 animate-fade-up stagger-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
                Windows 10/11
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
                Free Forever
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
                No Ads
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative opacity-0 animate-scale-in stagger-2">
            <div className="relative z-10 animate-float">
              <img
                src={heroMockup}
                alt="PDFReader Pro Interface"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-elevated"
              />
            </div>
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl scale-90 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
