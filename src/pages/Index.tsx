import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import LandingSection from "@/components/LandingSection";
import MemorySection from "@/components/MemorySection";
import HumorSection from "@/components/HumorSection";
import AcknowledgmentSection from "@/components/AcknowledgmentSection";
import ValentineAsk from "@/components/ValentineAsk";
import CelebrationScreen from "@/components/CelebrationScreen";

const Index = () => {
  const [saidYes, setSaidYes] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!saidYes ? (
          <motion.div
            key="main"
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <LandingSection />
            <MemorySection />
            <HumorSection />
            <AcknowledgmentSection />
            <ValentineAsk onYes={() => setSaidYes(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CelebrationScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
