import { motion } from "framer-motion";
import { Factory, Zap, Mountain, Wheat, Building2, Droplets } from "lucide-react";

const industries = [
  { icon: Factory, name: "Chemical", description: "Acid & alkali resistant solutions" },
  { icon: Zap, name: "Power Plants", description: "FGD & cooling tower linings" },
  { icon: Mountain, name: "Mining", description: "Abrasion-resistant linings" },
  { icon: Wheat, name: "Fertilizers", description: "Corrosion protection systems" },
  { icon: Building2, name: "Steel & Cement", description: "Heavy-duty industrial linings" },
  { icon: Droplets, name: "Water Treatment", description: "Chemical containment solutions" },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            className="industrial-badge mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            className="heading-section text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted Across Heavy Industries
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-industrial"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our rubber lining solutions protect critical infrastructure in 
            India's most demanding industrial environments.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="bg-card rounded-lg p-6 text-center hover:shadow-elevated transition-shadow border border-border/50 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                <industry.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {industry.name}
              </h3>
              <p className="text-muted-foreground text-xs">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
