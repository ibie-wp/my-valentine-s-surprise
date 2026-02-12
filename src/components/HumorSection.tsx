import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const HumorSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-valentine-peach/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-lg text-center"
      >
        <p className="mb-6 text-4xl">😅</p>
        <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
          Okay, real talk for a sec…
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          I can't give you the world this weekend… but I can give you this
          little site 😉
        </p>
        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
          Don't worry — I already have a picnic + painting date ready for when
          we can make it happen 🎨🍣
        </p>

        {/* GIF placeholder */}
        <div className="mx-auto flex aspect-video max-w-xs items-center justify-center rounded-2xl border-2 border-dashed border-primary/20 bg-valentine-blush/40">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageIcon className="h-8 w-8 text-primary/30" />
            <span className="text-sm font-medium">[Replace with a funny gif]</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HumorSection;
