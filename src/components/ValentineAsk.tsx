import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
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

const noStages = [
  { msg: "Oh no… are you mad at me, Bash? 😅", sub: "Come on, try again…", btn: "No, I mean it" },
  { msg: "Wait — what did I do?? 😰", sub: "Think about it… picnic? Painting? 🎨", btn: "Still no" },
  { msg: "Bash… you're really doing this to me? 😭", sub: "My heart is literally shrinking right now", btn: "Yep, still no" },
  { msg: "Okay I'm crying. Are you happy? 😂😭", sub: "The painting date is OFF the table if you keep this up", btn: "I don't care 😤" },
  { msg: "Oh so you hate my soul?? 💀", sub: "This is my villain origin story, Bash", btn: "Maybe a little" },
  { msg: "I'm going to ask one more time…", sub: "And the No button might just… disappear 👀", btn: "Try me" },
];

const ValentineAsk = ({ onYes }: Props) => {
  const [noDialogOpen, setNoDialogOpen] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const noRef = useRef<HTMLButtonElement>(null);

  const currentStage = noStages[Math.min(noCount, noStages.length - 1)];
  const noButtonGone = noCount >= noStages.length;

  const handleNo = () => {
    setNoDialogOpen(true);
  };

  const handleDialogNo = () => {
    setNoDialogOpen(false);
    setNoCount((prev) => prev + 1);
    setYesScale((prev) => prev + 0.15);
  };

  const dodgeNo = useCallback(() => {
    if (!noRef.current || noButtonGone) return;
    const x = (Math.random() - 0.5) * 260;
    const y = (Math.random() - 0.5) * 140;
    noRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, [noButtonGone]);

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
            Bash, will you be my Valentine?
          </h2>

          <div className="relative flex min-h-[120px] flex-wrap items-center justify-center gap-4">
            <motion.div animate={{ scale: yesScale }} transition={{ type: "spring", stiffness: 200 }}>
              <Button
                size="lg"
                onClick={onYes}
                className="rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                Yes 💕
              </Button>
            </motion.div>
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

            {!noButtonGone && (
              <Button
                ref={noRef}
                size="lg"
                variant="outline"
                onClick={handleNo}
                onMouseEnter={dodgeNo}
                onTouchStart={handleNo}
                className="rounded-full px-8 text-lg font-semibold transition-all duration-300"
                style={{ fontSize: `${Math.max(1 - noCount * 0.08, 0.6)}rem` }}
              >
                No
              </Button>
            )}
          </div>

          {noButtonGone && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Looks like "No" isn't an option anymore, Bash 😏💕
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* Escalating "No" dialog */}
      <Dialog open={noDialogOpen} onOpenChange={setNoDialogOpen}>
        <DialogContent className="max-w-sm rounded-2xl bg-valentine-cream text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl">{currentStage.msg}</DialogTitle>
            <DialogDescription className="pt-3 text-base text-muted-foreground">
              {currentStage.sub}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-3 pt-2">
            <Button
              onClick={() => {
                setNoDialogOpen(false);
                onYes();
              }}
              className="w-full rounded-full px-8"
            >
              Okay fine… Yes 💗
            </Button>
            {!noButtonGone && (
              <Button
                variant="ghost"
                onClick={handleDialogNo}
                className="text-sm text-muted-foreground"
              >
                {currentStage.btn}
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ValentineAsk;
