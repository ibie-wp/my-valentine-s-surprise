import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  onYes: () => void;
}

const jokes = [
  "Oh no… are you mad at me? 😅",
  "Oh, so you hate my soul? 😂",
  "Wait — did I forget to take the trash out again? 🗑️😬",
];

const ValentineAsk = ({ onYes }: Props) => {
  const [noDialogOpen, setNoDialogOpen] = useState(false);
  const [jokeIndex, setJokeIndex] = useState(0);
  const noRef = useRef<HTMLButtonElement>(null);

  const handleNo = () => {
    setJokeIndex(Math.floor(Math.random() * jokes.length));
    setNoDialogOpen(true);
  };

  const dodgeNo = () => {
    if (!noRef.current) return;
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 100;
    noRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <>
      <section className="relative px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-lg text-center"
        >
          <p className="mb-4 text-5xl">💌</p>
          <h2 className="mb-10 text-4xl font-bold text-primary sm:text-5xl">
            Will you be my Valentine?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={onYes}
              className="rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Yes 💕
            </Button>
            <Button
              size="lg"
              onClick={onYes}
              variant="secondary"
              className="rounded-full px-8 text-lg font-semibold shadow transition-transform hover:scale-105"
            >
              Absolutely
            </Button>
            <Button
              size="lg"
              onClick={onYes}
              variant="secondary"
              className="rounded-full px-8 text-lg font-semibold shadow transition-transform hover:scale-105"
            >
              Can't wait 🥰
            </Button>

            <Button
              ref={noRef}
              size="lg"
              variant="outline"
              onClick={handleNo}
              onMouseEnter={dodgeNo}
              className="rounded-full px-8 text-lg font-semibold transition-all duration-300"
            >
              No
            </Button>
          </div>
        </motion.div>
      </section>

      {/* "No" joke dialog */}
      <Dialog open={noDialogOpen} onOpenChange={setNoDialogOpen}>
        <DialogContent className="max-w-sm rounded-2xl bg-valentine-cream text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl">{jokes[jokeIndex]}</DialogTitle>
            <DialogDescription className="pt-3 text-base text-muted-foreground">
              Kidding 😌… but seriously, I hope you'll say yes
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              setNoDialogOpen(false);
              onYes();
            }}
            className="mx-auto mt-2 rounded-full px-8"
          >
            Okay fine… Yes 💗
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ValentineAsk;
