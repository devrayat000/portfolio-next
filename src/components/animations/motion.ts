import { type Variants } from "framer-motion";

export const reverse: Variants = {
  open: {
    transition: {
      staggerDirection: -1,
    },
  },
};

export const fade: Variants = {
  close: (opacity = 0) => ({ opacity }),
  open: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
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
