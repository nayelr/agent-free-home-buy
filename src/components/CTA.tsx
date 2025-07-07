import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
          Ready to save thousands?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
          Join the home buying revolution. Get started with ruma today and experience 
          the future of real estate—no agents required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button variant="hero" size="xl" className="min-w-[250px] bg-white text-primary hover:bg-white/90">
            Start Your Home Search
          </Button>
          <Button variant="outline" size="xl" className="min-w-[200px]">
            Book a Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 text-sm">
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400">✓</span>
            <span>No agent commissions</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400">✓</span>
            <span>AI-powered insights</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Full transaction support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;