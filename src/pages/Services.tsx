import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, PipetteIcon, Shield, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import rubberTexture from "@/assets/rubber-texture.jpg";

const services = [
  {
    icon: FlaskConical,
    title: "Tank Rubber Lining",
    description: "Complete rubber lining solutions for storage tanks, reactors, and vessels to prevent corrosion and chemical damage.",
    features: [
      "Natural rubber linings for general chemical resistance",
      "Neoprene linings for oil and weather resistance",
      "Butyl rubber for gas impermeability",
      "EPDM for steam and heat resistance",
      "Custom thickness based on application"
    ],
    href: "/services/tank-lining",
  },
  {
    icon: PipetteIcon,
    title: "Pipe Rubber Lining",
    description: "Internal pipe lining for chemical transport, slurry handling, and process pipelines.",
    features: [
      "Straight pipe lining up to 12m lengths",
      "Elbow and bend lining",
      "Tee and reducer linings",
      "Flange face protection",
      "On-site and off-site applications"
    ],
    href: "/services/pipe-lining",
  },
  {
    icon: Shield,
    title: "Chemical Resistant Lining",
    description: "Specialized acid and alkali resistant linings for the most demanding chemical processing environments.",
    features: [
      "Acid-proof linings (H2SO4, HCl, HNO3)",
      "Alkali resistant solutions",
      "Chlorine resistant linings",
      "Multi-chemical resistance",
      "High-temperature applications"
    ],
    href: "/services/chemical-lining",
  },
  {
    icon: Wrench,
    title: "On-Site Services",
    description: "Expert on-site rubber lining, repair, and maintenance services at your facility.",
    features: [
      "Equipment inspection and assessment",
      "On-site lining application",
      "Repair and patching services",
      "Preventive maintenance programs",
      "Emergency repair response"
    ],
    href: "/services/on-site",
  },
];

const process = [
  { step: "01", title: "Consultation", description: "We assess your requirements and recommend the best solution." },
  { step: "02", title: "Surface Prep", description: "Thorough surface preparation for optimal adhesion." },
  { step: "03", title: "Application", description: "Expert application of rubber lining materials." },
  { step: "04", title: "Vulcanization", description: "Controlled curing process for maximum durability." },
  { step: "05", title: "Quality Check", description: "Rigorous testing to ensure complete protection." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={rubberTexture} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="industrial-container relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="industrial-badge mb-4">Our Services</span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Complete Rubber Lining Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From storage tanks to complex piping systems, we provide comprehensive 
              rubber lining services tailored to your industrial needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="industrial-container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="heading-card text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-industrial mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="industrial" asChild>
                    <Link to={service.href}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={`bg-secondary rounded-lg p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-primary/5 rounded-lg flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="industrial-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="industrial-badge mb-4">Our Process</span>
            <h2 className="heading-section text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-industrial">
              Our proven 5-step process ensures consistent quality and 
              long-lasting results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-card rounded-lg p-6 text-center border border-border h-full">
                  <div className="text-4xl font-heading font-bold text-accent/20 mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="industrial-container text-center">
          <motion.h2
            className="heading-section text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our experts are ready to help you find the perfect rubber lining 
            solution for your specific requirements.
          </motion.p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
