import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide({
  children,
  isActive,
  direction = 1,
  distance = 200,
}) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ opacity: 1, x: direction * distance }}
          initial={{ opacity: 1, x: direction * distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
