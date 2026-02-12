import { motion } from "framer-motion";
import NextButton from "@/components/NextButton";

interface Props {
  onNext: () => void;
}

const AcknowledgmentSection = ({ onNext }: Props) => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-md border-l-4 border-primary/30 py-4 pl-6"
      >
        <p className="text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
          "Even when I get a little upset, it's only because I care so much — I
          always come back to choosing you."
        </p>
      </motion.div>

      {/* Minion love GIF */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mx-auto mt-10 max-w-[200px] overflow-hidden rounded-2xl"
      >
        <img
          src="/gifs/minion-love.gif"
          alt="Minion love"
          className="w-full"
        />
      </motion.div>

      <NextButton onClick={onNext} label="One more thing…" />
    </section>
  );
};

export default AcknowledgmentSection;
