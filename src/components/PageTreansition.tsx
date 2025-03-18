"use client"; // Required since we're using client-side hooks

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReactNode, useContext, useRef } from "react";

// Component to freeze the router context during animation
function FrozenRouter({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

// Define animation variants
const variants = {
  hidden: { opacity: 0, y: 100, scale: 0.98, rotate: 2, filter: "blur(5px)" },
  enter: { opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -100, scale: 0.98, rotate: -2, filter: "blur(5px)" },
};

// Page transition component
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Get the current path to trigger animations

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname} // Key ensures animation triggers on route change
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
