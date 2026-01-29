import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, CheckCircle, Calendar } from "lucide-react";
import industrialPlant from "@/assets/industrial-plant.jpg";
import workerInspection from "@/assets/worker-inspection.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We adhere to the highest quality standards in every project, ensuring long-lasting protection for your assets."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We work closely with clients to understand and exceed their expectations."
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "Honest communication and transparent practices form the foundation of our client relationships."
  },
  {
    icon: Calendar,
    title: "Reliability",
    description: "On-time delivery and consistent performance you can count on, every single time."
  }
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "ISO 45001:2018 Occupational Health & Safety",
  "ASTM Standards Compliant",
  "IS Standards Certified"
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={industrialPlant} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="industrial-container relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="industrial-badge mb-4">About Us</span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Two Decades of Industrial Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Supreme Bonds Pvt Ltd has been India's trusted partner in industrial 
              rubber lining solutions since 2003.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="industrial-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="industrial-badge mb-4">Our Story</span>
              <h2 className="heading-section text-foreground mb-6">
                Building Trust, One Lining at a Time
              </h2>
              <div className="space-y-4 text-muted-foreground text-industrial">
                <p>
                  Founded in 2003, Supreme Bonds Pvt Ltd started with a vision to provide 
                  world-class rubber lining solutions to India's growing industrial sector. 
                  What began as a small team of dedicated engineers has grown into one of 
                  India's most trusted names in industrial corrosion protection.
                </p>
                <p>
                  Today, we operate from our state-of-the-art manufacturing facility in 
                  Mumbai, equipped with modern vulcanization autoclaves and quality testing 
                  laboratories. Our team of 50+ skilled professionals brings decades of 
                  combined experience in rubber lining applications.
                </p>
                <p>
                  We have successfully completed over 500 projects across chemical plants, 
                  power stations, mining operations, and manufacturing facilities throughout 
                  India and abroad.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={workerInspection}
                alt="Quality inspection at Supreme Bonds"
                className="rounded-lg shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-heading font-bold">20+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="industrial-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card-industrial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="heading-card text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be India's leading rubber lining solutions provider, recognized 
                for our technical expertise, quality excellence, and commitment to 
                customer success. We envision a future where every industrial asset 
                is protected with the best corrosion-resistant solutions.
              </p>
            </motion.div>

            <motion.div
              className="card-industrial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="heading-card text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver superior rubber lining solutions that protect industrial 
                infrastructure, extend equipment life, and ensure operational safety. 
                We are committed to continuous innovation, sustainable practices, and 
                building lasting partnerships with our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="industrial-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="industrial-badge mb-4">Core Values</span>
            <h2 className="heading-section text-foreground mb-4">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding bg-primary">
        <div className="industrial-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="industrial-badge mb-4">Certifications</span>
            <h2 className="heading-section text-primary-foreground mb-4">
              Committed to Quality Standards
            </h2>
            <p className="text-primary-foreground/70">
              Our certifications reflect our commitment to maintaining the highest 
              standards of quality, safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Award className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-primary-foreground text-sm font-medium">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
