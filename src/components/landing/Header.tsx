const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-14">
      <span className="text-foreground font-bold text-lg tracking-tight">AI Wealth System</span>
      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#compare" className="hover:text-foreground transition-colors">Comparison</a>
        <a href="#how" className="hover:text-foreground transition-colors">Process</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </nav>
      <a href="#start" className="btn-primary text-xs px-4 py-2">Start</a>
    </div>
  </header>
);

export default Header;
