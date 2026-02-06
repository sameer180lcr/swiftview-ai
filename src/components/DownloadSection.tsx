import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Download } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-subtle">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-12 lg:p-16 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              <Download className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Free Download Available</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your PDF Experience?
            </h2>
            
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Join thousands of users who have upgraded their document workflow. Available on Mac App Store and iOS App Store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-3">
                <Apple className="w-5 h-5" />
                Download for Mac
              </Button>
              <Button size="xl" variant="hero-outline" className="gap-3">
                <Smartphone className="w-5 h-5" />
                Download for iOS
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 text-primary-foreground/70 text-sm">
              <span>✓ Free to download</span>
              <span>✓ No account required</span>
              <span>✓ macOS 13+ / iOS 16+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
