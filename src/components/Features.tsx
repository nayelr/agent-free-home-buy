import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      title: "AI Market Analysis",
      description: "Get data-driven insights on property values, market trends, and investment potential with advanced algorithms.",
      stats: "97% accuracy"
    },
    {
      title: "Smart Property Search",
      description: "Browse real MLS listings with intelligent filtering and personalized recommendations that learn your preferences.",
      stats: "2M+ listings"
    },
    {
      title: "Automated Offers",
      description: "Create competitive offers based on comprehensive market data and comparable sales analysis.",
      stats: "85% success rate"
    },
    {
      title: "Transaction Management",
      description: "Track everything from search to close in one platform. Never miss a deadline or document again.",
      stats: "100% organized"
    }
  ];

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-foreground tracking-tight">
            Everything you need
            <br />
            <span className="text-muted-foreground">to buy smart</span>
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our AI-powered platform replaces traditional real estate agents with intelligent tools 
            that give you more control, better insights, and significant savings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-background p-12 hover:bg-gradient-card transition-all duration-500 hover:shadow-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-sm font-medium text-primary uppercase tracking-wider">
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Button variant="outline" size="lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;