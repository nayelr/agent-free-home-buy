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
    <section className="py-32 px-6 bg-gradient-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-foreground tracking-tight">
            How it works
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our streamlined process makes home buying simple, transparent, and cost-effective.
            No agents, no hidden fees, just smart technology working for you.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col lg:flex-row items-start gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-none flex items-center justify-center font-black text-lg border-2 border-primary">
                    {step.number}
                  </div>
                  <div className="px-4 py-2 bg-muted text-muted-foreground text-xs font-medium uppercase tracking-wider border border-border">
                    {step.highlight}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-foreground tracking-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-sm aspect-[4/3] bg-gradient-card border border-border flex items-center justify-center">
                  <div className="text-4xl text-muted-foreground/30 font-black">
                    {step.number}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <div className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 border-2 border-primary">
            <span className="font-black text-lg">$18,000</span>
            <span className="font-medium">Average savings in agent commissions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;