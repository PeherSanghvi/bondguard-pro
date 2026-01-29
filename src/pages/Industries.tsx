import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Factory, Zap, Mountain, Wheat, Building2, Droplets, CheckCircle } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Chemical Industry",
    id: "chemical",
    description: "Protecting chemical processing equipment from aggressive acids, alkalis, and corrosive substances.",
    challenges: [
      "Exposure to concentrated acids and alkalis",
      "High-temperature chemical reactions",
      "Frequent cleaning and maintenance cycles",
      "Strict safety and environmental compliance"
    ],
    solutions: [
      "Acid-resistant natural rubber linings",
      "Chlorobutyl linings for chlorine service",
      "High-temperature resistant compounds",
      "Complete tank and pipe protection systems"
    ]
  },
  {
    icon: Zap,
    name: "Power Plants",
    id: "power",
    description: "Extending equipment life in thermal and nuclear power generation facilities.",
    challenges: [
      "FGD (Flue Gas Desulfurization) system corrosion",
      "Cooling water chemical treatment",
      "High abrasion from ash handling",
      "Continuous operation requirements"
    ],
    solutions: [
      "FGD absorber and duct linings",
      "Cooling tower basin protection",
      "Ash slurry pipe linings",
      "Demineralized water tank linings"
    ]
  },
  {
    icon: Mountain,
    name: "Mining",
    id: "mining",
    description: "Providing abrasion-resistant solutions for mineral processing and slurry handling.",
    challenges: [
      "Extreme abrasion from ore transport",
      "Acidic mine drainage",
      "Impact damage from material handling",
      "Remote location maintenance challenges"
    ],
    solutions: [
      "Abrasion-resistant natural rubber linings",
      "Acid-resistant linings for leach tanks",
      "Impact-absorbing wear linings",
      "Quick-replacement lining systems"
    ]
  },
  {
    icon: Wheat,
    name: "Fertilizers",
    id: "fertilizers",
    description: "Protecting storage and processing equipment in fertilizer manufacturing.",
    challenges: [
      "Phosphoric acid storage and handling",
      "Ammonia and urea corrosion",
      "Sulfuric acid processing",
      "Slurry abrasion in processing"
    ],
    solutions: [
      "Phosphoric acid resistant linings",
      "Ammonia-compatible rubber compounds",
      "Sulfuric acid storage tank linings",
      "Slurry pipe and pump linings"
    ]
  },
  {
    icon: Building2,
    name: "Steel & Cement",
    id: "steel",
    description: "Heavy-duty linings for steel and cement manufacturing processes.",
    challenges: [
      "Acid pickling tank corrosion",
      "High-temperature applications",
      "Severe abrasion conditions",
      "Chemical treatment system protection"
    ],
    solutions: [
      "Pickling tank rubber linings",
      "Heat-resistant compound applications",
      "Wear-resistant mill linings",
      "Water treatment system protection"
    ]
  },
  {
    icon: Droplets,
    name: "Water Treatment",
    id: "water",
    description: "Ensuring safe chemical containment in water and wastewater treatment.",
    challenges: [
      "Chemical storage tank corrosion",
      "Chlorine and chlorine dioxide handling",
      "Ozone system compatibility",
      "Long-term potable water contact"
    ],
    solutions: [
      "Chemical storage tank linings",
      "Chlorine resistant rubber applications",
      "Ozone-compatible materials",
      "NSF-certified potable water linings"
    ]
  }
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="industrial-container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="industrial-badge mb-4">Industries</span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We understand the unique challenges of each industry and provide 
              tailored rubber lining solutions to meet specific requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries List */}
      <section className="section-padding bg-background">
        <div className="industrial-container">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                        <industry.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h2 className="heading-card text-foreground">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-industrial mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="bg-secondary rounded-lg p-6 mb-4">
                      <h3 className="font-heading font-semibold text-foreground mb-3">
                        Industry Challenges
                      </h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`bg-card rounded-lg p-6 border border-border ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Our Solutions
                    </h3>
                    <ul className="space-y-3">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < industries.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
