import { type Variants } from "framer-motion";

export const stagger: Variants = {
  open: (staggerChildren = 0.2) => ({
    transition: {
      staggerChildren,
    },
  }),
};

export const reverse: Variants = {
  open: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

export const fade: Variants = {
  initial: (opacity = 0) => ({ opacity }),
  close: (opacity = 0) => ({ opacity }),
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      // duration: 1,
    },
  },
};

export const grow: Variants = {
  close: { scale: 1 },
  open: (scale = 1.05) => ({
    scale,
    transition: {
      type: "spring",
    },
  }),
};

export const slideUp: Variants = {
  close: (c) => ({
    opacity: c?.opacity ?? 0,
    y: c?.y ?? 50,
  }),
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

export const slideRight: Variants = {
  close: (c) => ({
    opacity: c?.opacity ?? 0,
    x: c?.x ?? -50,
  }),
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};
