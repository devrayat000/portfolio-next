import { createStyles } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import { createPortal } from "react-dom";

const useStyles = createStyles((theme) => ({
  overlayBackdrop: {
    position: "absolute",
    inset: 0,
    zIndex: 5,
  },
  overlay: {
    backgroundColor: theme.black,
  },
}));

const overlayBackdrop: Variants = {
  open: (opacity = 0.6) => ({
    "--opacity": opacity,
    transition: {
      duration: 0.1,
    },
  }),
  closed: {
    // @ts-ignore
    "--opacity": 0,
    transition: {
      duration: 0.1,
    },
  },
};

const overlay: Variants = {
  open: {
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    transition: {
      duration: 0.2,
    },
  },
};

export type OverlayProps = {
  onClose?(): void;
  withinPortal?: boolean;
  opacity?: number;
  blur?: number;
};

const Overlay = ({
  onClose,
  withinPortal,
  opacity = 0.6,
  blur = 0,
}: OverlayProps) => {
  const { classes, cx } = useStyles();

  useHotkeys([["Escape", () => onClose?.()]]);

  const ov = (
    <motion.div
      className={classes.overlayBackdrop}
      variants={overlayBackdrop}
      onClick={onClose}
      style={{ backdropFilter: `blur(calc(var(--opacity) * ${blur}px))` }}
      custom={opacity}
    >
      <motion.div
        className={cx(classes.overlayBackdrop, classes.overlay)}
        variants={overlay}
        style={{ opacity: "var(--opacity)" }}
      />
    </motion.div>
  );

  return withinPortal ? createPortal(ov, document.body) : ov;
};

export default Overlay;
