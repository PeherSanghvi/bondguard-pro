import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, PipetteIcon, Shield, Wrench } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Tank Rubber Lining",
    description: "Complete rubber lining solutions for storage tanks, reactors, and vessels to prevent corrosion and chemical damage.",
    href: "/services/tank-lining",
  },
  {
    icon: PipetteIcon,
    title: "Pipe Rubber Lining",
    description: "Internal pipe lining for chemical transport, slurry handling, and process pipelines.",
    href: "/services/pipe-lining",
  },
  {
    icon: Shield,
    title: "Chemical Resistant Lining",
    description: "Specialized acid and alkali resistant linings for the most demanding chemical processing environments.",
    href: "/services/chemical-lining",
  },
  {
    icon: Wrench,
    title: "On-Site Services",
    description: "Expert on-site rubber lining, repair, and maintenance services at your facility.",
    href: "/services/on-site",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            className="industrial-badge mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.span>
          <motion.h2
            className="heading-section text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Comprehensive Rubber Lining Services
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-industrial"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From storage tanks to complex piping systems, we provide end-to-end 
            rubber lining solutions tailored to your industrial needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={service.href}
                className="card-industrial h-full flex flex-col hover:border-accent/50"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="heading-card text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
