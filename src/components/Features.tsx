import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      title: "AI Market Analysis",
      description: "Get data-driven insights on property values, market trends, and investment potential with our advanced AI algorithms.",
      icon: "🧠",
      stats: "97% accuracy"
    },
    {
      title: "Smart Property Search",
      description: "Browse real MLS listings with intelligent filtering and personalized recommendations that learn your preferences.",
      icon: "🔍",
      stats: "2M+ listings"
    },
    {
      title: "Automated Offers",
      description: "AI helps create competitive offers based on comprehensive market data and comparable sales analysis.",
      icon: "⚡",
      stats: "85% success rate"
    },
    {
      title: "Transaction Management",
      description: "Track everything from search to close in one platform. Never miss a deadline or document again.",
      icon: "📋",
      stats: "100% organized"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Everything you need to buy smart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform replaces traditional real estate agents with intelligent tools 
            that give you more control, better insights, and significant savings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-card border border-border/50 rounded-2xl p-8 hover:shadow-card hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="text-sm font-semibold text-accent">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="default" size="lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;