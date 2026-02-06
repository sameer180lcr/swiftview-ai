import { 
  Languages, 
  Bookmark, 
  FileSearch, 
  Palette, 
  Share2, 
  Zap,
  StickyNote,
  Layout,
  Shield,
  Layers,
  Printer,
  Eye
} from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "AI Translation Panel",
    description: "Translate any text instantly with our built-in AI engine. Supports 100+ languages with context-aware, accurate translations."
  },
  {
    icon: Layout,
    title: "Smart Side Panels",
    description: "Quick access to pages, bookmarks, and table of contents. Navigate large documents effortlessly with thumbnails."
  },
  {
    icon: StickyNote,
    title: "Rich Annotations",
    description: "Highlight, underline, strikethrough, and add sticky notes. Export all your annotations as a separate document."
  },
  {
    icon: FileSearch,
    title: "Powerful Search",
    description: "Find any text instantly across thousands of pages. Search within annotations, bookmarks, and metadata."
  },
  {
    icon: Bookmark,
    title: "Smart Bookmarks",
    description: "Create organized bookmark collections with folders. Auto-detect chapters and important sections automatically."
  },
  {
    icon: Palette,
    title: "Theme Customization",
    description: "Dark mode, sepia, and custom color themes. Customize the interface to match your workflow."
  },
  {
    icon: Eye,
    title: "Multiple View Modes",
    description: "Single page, continuous scroll, two-page spread, and presentation mode. Perfect for any reading scenario."
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized rendering engine opens 1000+ page documents in under a second. Smooth scrolling guaranteed."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "All processing happens locally on your device. Your documents never leave your computer."
  },
  {
    icon: Layers,
    title: "Tab Management",
    description: "Open multiple PDFs in tabs. Quickly switch between documents without losing your place."
  },
  {
    icon: Printer,
    title: "Advanced Printing",
    description: "Print with custom page ranges, multiple pages per sheet, and booklet printing options."
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share PDFs via email, cloud services, or export specific pages. Flatten annotations for sharing."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need in a <span className="text-gradient">PDF Viewer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed for professionals, researchers, students, and book lovers. Every feature crafted with attention to detail and performance in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
