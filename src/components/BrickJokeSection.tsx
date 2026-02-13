import { motion } from "framer-motion";
import NextButton from "@/components/NextButton";

interface Props {
  onNext: () => void;
}

const BrickJokeSection = ({ onNext }: Props) => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-valentine-peach/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-lg"
      >
        <p className="mb-4 text-4xl">🧱</p>
        <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
          Before we start…
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Remember how you got hit by a brick to the kop? Yah nay…
        </p>

        {/* Brick throw GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-6 max-w-xs overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/gifs/123.gif"
            alt="Brick being thrown"
            className="w-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg font-medium text-primary"
        >
          Vang?? 😂🧱💕
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-2 text-base text-muted-foreground"
        >
          That brick really said "go fall in love" nuh 😏
        </motion.p>

        <NextButton onClick={onNext} label="Okay okay, next" />
      </motion.div>
    </section>
  );
};

export default BrickJokeSection;
