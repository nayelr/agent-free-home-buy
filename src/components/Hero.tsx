import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimalist Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Subtle geometric elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-12 text-white leading-[0.9] tracking-tighter">
            buy a home,
            <br />
            <span className="text-white/60">skip the agent</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-16 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-delayed">
            AI-powered home buying that saves thousands in commissions. 
            <br />
            Professional insights without the traditional middleman.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button variant="outline" size="xl" className="min-w-[200px] bg-white text-primary border-white hover:bg-white/90">
              Start Home Search
            </Button>
            <Button variant="ghost" size="xl" className="min-w-[200px] text-white border-white/20 hover:bg-white/10">
              How It Works
            </Button>
          </div>
          
          <div className="mt-20 text-white/40">
            <p className="text-xs uppercase tracking-widest mb-6 font-medium">Join 10,000+ smart buyers</p>
            <ArrowDown className="mx-auto animate-float opacity-60" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;