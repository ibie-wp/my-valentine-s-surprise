import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import NextButton from "@/components/NextButton";

interface Props {
  onNext: () => void;
}

const memories = [
  {
    caption: "Remember this day? We laughed us stukken 😄",
    image: "/assets/laughing.jpg",
  },
  {
    caption: "Our first mini-adventure tg on a random ass week day 🛶",
    image: "/assets/mini adv.jpg",
  },
  {
    caption: "One of my favorite memories with you ❤️",
    image: "/assets/fav mem.jpg",
  },
  {
    caption: "You probably don't know I screenshotted this 😏",
    image: "/assets/ss.PNG",
  },
  {
    caption: "This one just makes me smile every time 🥰",
    image: "/assets/smile.jpg",
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

const MemorySection = ({ onNext }: Props) => {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16 text-center text-3xl font-bold text-primary sm:text-4xl"
        >
          Us, in snapshots 📸
        </motion.h2>

        <div className="space-y-12 sm:space-y-16">
          {memories.map((m, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`flex flex-col items-center gap-6 sm:gap-8 ${
                i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
              }`}
            >
              {/* Image Container */}
              <div className="w-full sm:w-1/2 flex-shrink-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-dashed border-primary/20 bg-valentine-blush/40">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <img 
                      src={m.image} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="w-full sm:w-1/2 flex-shrink-0">
                <p className="text-center sm:text-left text-lg leading-relaxed text-foreground px-4 sm:px-0">
                  {m.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <NextButton onClick={onNext} />
      </div>
    </section>
  );
};

export default MemorySection;