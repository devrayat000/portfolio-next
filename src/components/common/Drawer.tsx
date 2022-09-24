import { createPortal } from "react-dom";
import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import { createStyles, Portal } from "@mantine/core";
import { useEffect } from "react";

export type MyDrawerProps = {
  onClose(): void;
};

const useStyles = createStyles((theme) => ({
  nav: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 300,
    zIndex: 1200,

    [theme.fn.largerThan("xs")]: {
      width: 400,
    },
  },
  bg: {
    backgroundColor: theme.white,
    height: "100%",
  },
  overlayBackdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 5,
  },
  overlay: {
    backgroundColor: theme.black,
  },
}));

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 145px) 43px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      //   delay: 0.1,
    },
  }),
  closed: {
    clipPath: "circle(25px at calc(100vw - 145px) 43px)",
    transition: {
      //   delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const overlayBackdrop: Variants = {
  open: {
    transition: {
      duration: 0.1,
    },
  },
  close: {
    transition: {
      duration: 0.1,
      delay: 0.2,
    },
  },
};

const overlay: Variants = {
  open: {
    opacity: 0.6,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.3,
    },
  },
};

const MyDrawer = ({ onClose }: MyDrawerProps) => {
  const { classes, cx, theme } = useStyles();

  const opacity = useMotionValue(0);
  const backdropFilter = useTransform(opacity, (o) => `blur(${o * 5}px)`);

  useEffect(() => {
    function handleResize(e: UIEvent) {
      // @ts-ignore
      if (e.target?.innerWidth > theme.breakpoints.sm) onClose();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <motion.nav
      id="drawer"
      initial="closed"
      animate="open"
      exit="closed"
      className={classes.nav}
      role="dialog"
    >
      <motion.div className={classes.bg} variants={sidebar} />
      <Portal target={document.body}>
        <motion.div
          className={classes.overlayBackdrop}
          variants={overlayBackdrop}
          onClick={onClose}
          style={{ backdropFilter }}
        >
          <motion.div
            className={cx(classes.overlayBackdrop, classes.overlay)}
            variants={overlay}
            style={{ opacity }}
          />
        </motion.div>
      </Portal>
    </motion.nav>,
    document.body
  );
};

export default MyDrawer;
