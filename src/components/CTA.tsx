import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-32 px-6 bg-gradient-hero relative overflow-hidden border-t border-border">
      {/* Minimal geometric accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-black mb-12 text-primary leading-tight tracking-tighter">
          Ready to save
          <br />
          <span className="text-muted-foreground">thousands?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Join the home buying revolution. Get started with ruma today and experience 
          the future of real estate—no agents required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="default" size="xl" className="min-w-[250px]">
            Start Your Home Search
          </Button>
          <Button variant="outline" size="xl" className="min-w-[200px]">
            Book a Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-muted-foreground text-sm uppercase tracking-wider">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1 h-1 bg-primary rounded-full"></div>
            <span>No agent commissions</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-1 h-1 bg-primary rounded-full"></div>
            <span>AI-powered insights</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-1 h-1 bg-primary rounded-full"></div>
            <span>Full transaction support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;