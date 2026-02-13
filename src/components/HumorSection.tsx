import { motion } from "framer-motion";
import NextButton from "@/components/NextButton";

interface Props {
  onNext: () => void;
}

const HumorSection = ({ onNext }: Props) => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-valentine-peach/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-lg text-center"
      >
        <p className="mb-6 text-4xl">😅</p>
        <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
          Okay, so like real talk gou…
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          I can't give you the world this weekend… yk mos its the car and stuff, but I can give you this
          little site 😉
        </p>
        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
          But now Don't stress, I already have a date planned already for when
          we can make it happen 🎨🍣
        </p>

        {/* Cute love GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-6 max-w-xs overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/gifs/cute-love.gif"
            alt="Cute love gif"
            className="w-full"
          />
        </motion.div>

        <NextButton onClick={onNext} />
      </motion.div>
    </section>
  );
};

export default HumorSection;
