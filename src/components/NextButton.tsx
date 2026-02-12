import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onClick: () => void;
  label?: string;
}

const NextButton = ({ onClick, label = "Continue" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="mt-12 flex justify-center"
    >
      <Button
        onClick={onClick}
        size="lg"
        className="group rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {label}
        <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
};

export default NextButton;
