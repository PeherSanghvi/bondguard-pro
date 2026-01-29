import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import industrialPlant from "@/assets/industrial-plant.jpg";

const projects = [
  {
    id: 1,
    title: "Chemical Storage Tank Lining",
    client: "Leading Chemical Manufacturer",
    industry: "Chemical",
    challenge: "Multiple storage tanks showing severe corrosion from concentrated sulfuric acid.",
    solution: "Complete tank lining with acid-resistant natural rubber compound and autoclave vulcanization.",
    outcome: "Extended tank life by 15+ years with zero leakage incidents.",
    image: industrialPlant,
  },
  {
    id: 2,
    title: "FGD System Protection",
    client: "Major Power Plant",
    industry: "Power Generation",
    challenge: "Flue gas desulfurization absorbers experiencing rapid deterioration from acidic conditions.",
    solution: "Comprehensive FGD absorber lining with chlorobutyl rubber for maximum chemical resistance.",
    outcome: "Reduced maintenance downtime by 60% and improved operational efficiency.",
    image: industrialPlant,
  },
  {
    id: 3,
    title: "Mining Slurry Pipeline",
    client: "Iron Ore Mining Operation",
    industry: "Mining",
    challenge: "Severe abrasion wear in ore slurry transport pipelines causing frequent replacements.",
    solution: "Installation of abrasion-resistant natural rubber lining with hard rubber backing.",
    outcome: "Pipeline life increased from 6 months to 4+ years.",
    image: industrialPlant,
  },
  {
    id: 4,
    title: "Fertilizer Process Vessels",
    client: "Fertilizer Manufacturing Plant",
    industry: "Fertilizers",
    challenge: "Phosphoric acid and ammonia causing equipment deterioration in process vessels.",
    solution: "Dual-layer rubber lining system designed for multi-chemical resistance.",
    outcome: "Eliminated unplanned shutdowns and reduced annual maintenance costs by 40%.",
    image: industrialPlant,
  },
];

const Projects = () => {
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
            <span className="industrial-badge mb-4">Our Projects</span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Proven Track Record
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Explore our successful projects across various industries and see 
              how we've helped clients protect their industrial assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="industrial-container">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-lg overflow-hidden shadow-elevated">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="industrial-badge mb-4">{project.industry}</span>
                  <h2 className="heading-card text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Client: {project.client}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-destructive rounded-full" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground text-sm pl-4">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        Solution
                      </h4>
                      <p className="text-muted-foreground text-sm pl-4">
                        {project.solution}
                      </p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h4 className="font-heading font-semibold text-accent mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Outcome
                      </h4>
                      <p className="text-foreground text-sm pl-6">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="industrial-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "100+", label: "Happy Clients" },
              { value: "50+", label: "Industries Served" },
              { value: "0", label: "Quality Complaints" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
