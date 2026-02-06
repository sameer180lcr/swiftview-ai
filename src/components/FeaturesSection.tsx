import { 
  Languages, 
  Bookmark, 
  FileSearch, 
  Palette, 
  Share2, 
  Zap,
  StickyNote,
  Layout
} from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "AI Translation Panel",
    description: "Translate any text instantly with our built-in AI. Supports 100+ languages with context-aware translation."
  },
  {
    icon: Layout,
    title: "Smart Side Panels",
    description: "Quick access to pages, bookmarks, and table of contents. Organize your reading experience effortlessly."
  },
  {
    icon: StickyNote,
    title: "Rich Annotations",
    description: "Highlight, underline, and add notes. Your annotations sync seamlessly across all your Apple devices."
  },
  {
    icon: FileSearch,
    title: "Powerful Search",
    description: "Find any text instantly across thousands of pages. Search within annotations and bookmarks too."
  },
  {
    icon: Bookmark,
    title: "Smart Bookmarks",
    description: "Create organized bookmark collections. Auto-detect chapters and important sections."
  },
  {
    icon: Palette,
    title: "Theme Customization",
    description: "Reading mode, night mode, and sepia tones. Customize colors to match your preference."
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share PDFs, annotations, or specific pages. Export notes as separate documents."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Native SwiftUI performance. Open 1000+ page documents in under a second."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need in a <span className="text-gradient">PDF Viewer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed for professionals, researchers, and book lovers. Every feature crafted with attention to detail.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-elevated hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
