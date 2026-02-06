import { Button } from "@/components/ui/button";
import { Download, Monitor, Shield, Zap } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-subtle">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-12 lg:p-20 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground rounded-full blur-3xl opacity-50" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              <Download className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Free Download Available</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your PDF Experience?
            </h2>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join over 500,000 users who have upgraded their document workflow. Download PDFReader Pro today and experience the difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-3 text-lg h-16 px-10">
                <Monitor className="w-6 h-6" />
                Download for Windows
              </Button>
            </div>

            {/* Features row */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 text-primary-foreground/90">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="font-medium">Instant Setup</span>
                <span className="text-sm text-primary-foreground/60">No registration needed</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-primary-foreground/90">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-medium">100% Secure</span>
                <span className="text-sm text-primary-foreground/60">No malware or adware</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-primary-foreground/90">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Monitor className="w-6 h-6" />
                </div>
                <span className="font-medium">Windows 10/11</span>
                <span className="text-sm text-primary-foreground/60">64-bit supported</span>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/50 pt-4">
              Version 2.5.1 • 45MB • Windows 10/11 (64-bit)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
