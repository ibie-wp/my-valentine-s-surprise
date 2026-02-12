import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const memories = [
  {
    caption: "Remember this day? We laughed so hard 😄",
    label: "Replace with photo #1",
  },
  {
    caption: "Our first mini-adventure together 🛶",
    label: "Replace with photo #2",
  },
  {
    caption: "One of my favorite memories with you ❤️",
    label: "Replace with photo #3",
  },
  {
    caption: "You probably don't know I screenshotted this 😏",
    label: "Replace with photo #4",
  },
  {
    caption: "This one just makes me smile every time 🥰",
    label: "Replace with photo #5",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const MemorySection = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-bold text-primary sm:text-4xl"
        >
          Us, in snapshots 📸
        </motion.h2>

        <div className="space-y-16">
          {memories.map((m, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={`flex flex-col items-center gap-4 ${
                i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
              }`}
            >
              {/* Placeholder */}
              <div className="flex aspect-[4/3] w-full max-w-sm items-center justify-center rounded-2xl border-2 border-dashed border-primary/20 bg-valentine-blush/40">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="h-10 w-10 text-primary/30" />
                  <span className="text-sm font-medium">[{m.label}]</span>
                </div>
              </div>

              {/* Caption */}
              <p className="max-w-xs text-center text-lg leading-relaxed text-foreground sm:text-left">
                {m.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemorySection;
