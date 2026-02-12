import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LandingSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-valentine-peach/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-valentine-blush/50 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <p className="mb-3 text-lg tracking-widest text-muted-foreground uppercase">
          this is for you, Bash
        </p>
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-primary sm:text-8xl">
          Basheerah 💕
        </h1>
        <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I know timing's weird and we don't always get alone time, but I wanted
          to do this for you — because you deserve something that took a little
          thought, even if it's just a little corner of the internet.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-10"
      >
        <ChevronDown className="mx-auto h-8 w-8 animate-gentle-bounce text-primary/60" />
        <span className="mt-1 block text-xs tracking-widest text-muted-foreground uppercase">
          scroll down
        </span>
      </motion.div>
    </section>
  );
};

export default LandingSection;
