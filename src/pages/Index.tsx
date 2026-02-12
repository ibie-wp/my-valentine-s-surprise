import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import LandingSection from "@/components/LandingSection";
import BrickJokeSection from "@/components/BrickJokeSection";
import MemorySection from "@/components/MemorySection";
import SongSection from "@/components/SongSection";
import HumorSection from "@/components/HumorSection";
import AcknowledgmentSection from "@/components/AcknowledgmentSection";
import ValentineAsk from "@/components/ValentineAsk";
import CelebrationScreen from "@/components/CelebrationScreen";

const sections = [
  "landing",
  "brick",
  "memories",
  "song",
  "humor",
  "acknowledgment",
  "ask",
] as const;

const Index = () => {
  const [saidYes, setSaidYes] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const goNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleYes = () => {
    setSaidYes(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = () => {
    switch (sections[currentSection]) {
      case "landing":
        return <LandingSection onNext={goNext} />;
      case "brick":
        return <BrickJokeSection onNext={goNext} />;
      case "memories":
        return <MemorySection onNext={goNext} />;
      case "song":
        return <SongSection onNext={goNext} />;
      case "humor":
        return <HumorSection onNext={goNext} />;
      case "acknowledgment":
        return <AcknowledgmentSection onNext={goNext} />;
      case "ask":
        return <ValentineAsk onYes={handleYes} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!saidYes ? (
          <motion.div
            key={sections[currentSection]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
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
