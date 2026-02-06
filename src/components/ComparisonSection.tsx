import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonFeatures = [
  { feature: "AI Translation Panel", us: true, others: false },
  { feature: "100+ Language Support", us: true, others: false },
  { feature: "Tab Management", us: true, others: true },
  { feature: "Dark Mode", us: true, others: true },
  { feature: "Annotations & Notes", us: true, others: true },
  { feature: "Lightning Fast Rendering", us: true, others: false },
  { feature: "No Ads or Bloatware", us: true, others: false },
  { feature: "Offline Functionality", us: true, others: true },
  { feature: "Free Forever", us: true, others: false },
  { feature: "Privacy-First (No Cloud)", us: true, others: false },
];

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">PDFReader Pro</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we compare to other PDF readers on the market.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border shadow-elevated">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted">
              <div className="p-4 font-semibold text-foreground">Feature</div>
              <div className="p-4 text-center font-semibold text-primary bg-accent">PDFReader Pro</div>
              <div className="p-4 text-center font-semibold text-muted-foreground">Other Readers</div>
            </div>
            
            {/* Rows */}
            {comparisonFeatures.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}
              >
                <div className="p-4 text-foreground">{item.feature}</div>
                <div className="p-4 flex justify-center bg-accent/30">
                  {item.us ? (
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex justify-center">
                  {item.others ? (
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button size="xl" variant="hero" className="gap-3">
              Download Free Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
