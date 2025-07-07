const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Set Your Preferences",
      description: "Tell our AI what you're looking for—location, budget, style, and must-haves. The more specific, the better our recommendations.",
      highlight: "AI learns your taste"
    },
    {
      number: "02", 
      title: "Smart Search & Analysis",
      description: "Browse curated listings with instant market analysis, comparable sales, and investment potential scores for every property.",
      highlight: "Real-time insights"
    },
    {
      number: "03",
      title: "Make Competitive Offers",
      description: "Our AI analyzes market data to suggest optimal offer amounts and terms, then handles the paperwork and negotiations.",
      highlight: "Data-driven offers"
    },
    {
      number: "04",
      title: "Close with Confidence",
      description: "Track inspections, appraisals, and financing milestones. Get alerts for every deadline and document requirement.",
      highlight: "Stress-free closing"
    }
  ];

  return (
    <section className="py-24 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes home buying simple, transparent, and cost-effective.
            No agents, no hidden fees, just smart technology working for you.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-glow">
                    {step.number}
                  </div>
                  <div className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                    {step.highlight}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border border-primary/10 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-6xl opacity-40">
                    {step.number === "01" && "🎯"}
                    {step.number === "02" && "📊"}
                    {step.number === "03" && "💼"}
                    {step.number === "04" && "🏠"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-success/10 text-success px-8 py-4 rounded-2xl">
            <span className="text-2xl">💰</span>
            <span className="font-semibold">Average savings: $18,000 in agent commissions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;