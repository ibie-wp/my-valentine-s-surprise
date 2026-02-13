import { motion } from "framer-motion";
import { Music } from "lucide-react";
import NextButton from "@/components/NextButton";

interface Props {
  onNext: () => void;
}

const SongSection = ({ onNext }: Props) => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-valentine-rose/20 blur-3xl" />
        <div className="absolute top-1/4 right-0 h-[300px] w-[300px] rounded-full bg-valentine-peach/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <Music className="mx-auto h-12 w-12 text-primary" />
        </motion.div>

        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          This song reminds me of you 🎵
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          There's so many songs, Bash… but every time this one comes on, I just
          think of you. I don't even know how to explain it, it just feels like
          us despite the meaning behind it. 💛
        </p>

        {/* Song embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-8 w-full max-w-md"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/6DH13QYXK7lKkYHSU88N48?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Song that reminds me of you"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-base italic text-muted-foreground"
        >
          Press play. Close your eyes. Dont it make you think of us? 🤍
        </motion.p>

        {/* Cute GIF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mx-auto mt-8 max-w-[200px] overflow-hidden rounded-2xl"
        >
          <img
            src="/gifs/teddy-love.gif"
            alt="Cute teddy bear with hearts"
            className="w-full"
          />
        </motion.div>

        <NextButton onClick={onNext} />
      </motion.div>
    </section>
  );
};

export default SongSection;