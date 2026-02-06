import { FileText } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-hero-gradient rounded-xl flex items-center justify-center shadow-hero-glow">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PDFReader Pro</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors">
              Showcase
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center justify-center h-10 px-6 rounded-xl bg-hero-gradient text-primary-foreground font-semibold shadow-hero-glow hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              Download Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
