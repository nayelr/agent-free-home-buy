import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Hero Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Modern luxury home" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-white to-accent-light bg-clip-text text-transparent leading-tight tracking-tight">
            buy a home,
            <br />
            <span className="text-accent-light animate-glow">skip the agent</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-delayed">
            Save thousands in agent commissions with AI-powered home buying. Get professional insights, 
            market analysis, and transaction management—all without the traditional middleman.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              Start Home Search
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px]">
              See How It Works
            </Button>
          </div>
          
          <div className="mt-16 text-white/70">
            <p className="text-sm mb-4">Join 10,000+ smart home buyers</p>
            <ArrowDown className="mx-auto animate-bounce" size={24} />
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;