import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 opacity-0 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent-foreground">Now with AI Translation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                The Most <span className="text-gradient">Advanced</span> PDF Viewer for Apple Devices
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Built with SwiftUI. Experience lightning-fast rendering, AI-powered translation, and beautiful native interface.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-2">
              <Button size="xl" variant="hero" className="gap-3">
                <Apple className="w-5 h-5" />
                Download for Mac
              </Button>
              <Button size="xl" variant="outline" className="gap-3 border-primary/30 text-foreground hover:bg-accent">
                <Smartphone className="w-5 h-5" />
                Get iOS App
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 opacity-0 animate-fade-up stagger-3">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">App Store</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
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
