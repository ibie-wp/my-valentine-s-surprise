import { motion } from "framer-motion";
import NextButton from "@/components/NextButton";

interface Props {
  onNext: () => void;
}

const LandingSection = ({ onNext }: Props) => {
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
          sorry it took a while but i made this for you, Bash
        </p>
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-primary sm:text-8xl">
          Basheerah 💕
        </h1>
        <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I know timing's weird after last night and we don't always get alone time, but I wanted
          to do this for you either way, because you deserve something that took a little
          thought, even if it's just a little corner of the internet. and no dont tell me its that tt u sent bc i had this planned before then already
        </p>

        <NextButton onClick={onNext} label="Let's go 💕" />
      </motion.div>
    </section>
  );
};

export default LandingSection;
