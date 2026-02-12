import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ImageIcon } from "lucide-react";

const CelebrationScreen = () => {
  useEffect(() => {
    const end = Date.now() + 3000;
    const colors = ["#e8788a", "#f5c6a5", "#f9e4d4", "#ff6b8a"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-lg"
      >
        <p className="mb-6 text-6xl">🥳💕</p>
        <h2 className="mb-6 text-4xl font-bold text-primary sm:text-5xl">
          I knew you'd say yes!
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          The picnic + painting date is ready whenever we get the chance — no
          rush, no stress 💛
        </p>
        <p className="mb-10 text-lg leading-relaxed text-foreground">
          I choose you. Every single day. Happy Valentine's Day, my love. 🤍
        </p>

        {/* Final image placeholder */}
        <div className="mx-auto flex aspect-square max-w-xs items-center justify-center rounded-2xl border-2 border-dashed border-primary/20 bg-valentine-blush/40">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageIcon className="h-10 w-10 text-primary/30" />
            <span className="text-sm font-medium">
              [Replace with a cute photo of you two]
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CelebrationScreen;
