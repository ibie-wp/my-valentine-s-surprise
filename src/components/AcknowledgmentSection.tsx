import { motion } from "framer-motion";

const AcknowledgmentSection = () => {
  return (
    <section className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-md border-l-4 border-primary/30 py-4 pl-6"
      >
        <p className="text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
          "Even when I get a little upset, it's only because I care so much — I
          always come back to choosing you."
        </p>
      </motion.div>
    </section>
  );
};

export default AcknowledgmentSection;
