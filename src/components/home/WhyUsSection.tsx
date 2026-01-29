import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Calendar, Shield } from "lucide-react";
import workerImage from "@/assets/worker-inspection.jpg";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "50+", label: "Expert Workers" },
];

const features = [
  { icon: Calendar, text: "20+ Years of Industry Expertise" },
  { icon: Users, text: "Skilled & Certified Workforce" },
  { icon: Award, text: "ISO 9001:2015 Certified" },
  { icon: Shield, text: "Quality Assurance at Every Step" },
];

export function WhyUsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="industrial-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-elevated">
              <img
                src={workerImage}
                alt="Quality inspection of rubber lined pipe"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card rounded-lg shadow-elevated p-6 border border-border">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-3xl font-heading font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="industrial-badge mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-section text-foreground mb-6">
              India's Trusted Partner in Industrial Protection
            </h2>
            <p className="text-muted-foreground text-industrial mb-8">
              Supreme Bonds Pvt Ltd has been protecting India's industrial 
              infrastructure for over two decades. Our commitment to quality, 
              combined with cutting-edge techniques and materials, makes us the 
              preferred choice for leading corporations.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg border border-border">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Quality Guaranteed:</strong> All our work 
                comes with comprehensive warranty and ongoing support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
