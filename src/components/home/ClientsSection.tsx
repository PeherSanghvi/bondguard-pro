import { motion } from "framer-motion";

const clients = [
  "Tata Chemicals",
  "Reliance Industries",
  "NTPC",
  "Indian Oil",
  "GAIL",
  "Hindalco",
  "UltraTech Cement",
  "JSW Steel",
];

export function ClientsSection() {
  return (
    <section className="py-12 bg-secondary border-y border-border">
      <div className="industrial-container">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Trusted by India's Leading Industries
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <div
              key={client}
              className="text-muted-foreground/60 hover:text-foreground font-heading font-semibold text-lg transition-colors cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
