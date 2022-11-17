import { createPortal } from "react-dom";
import { m, type Variants } from "framer-motion";
import { createStyles } from "@mantine/core";
import { useWindowEvent } from "@mantine/hooks";

import Overlay from "./Overlay";

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
}));

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 145px) 43px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      when: "afterChildren",
    },
  }),
  closed: {
    clipPath: "circle(25px at calc(100vw - 145px) 43px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      when: "beforeChildren",
    },
  },
};

const MyDrawer = ({ onClose }: MyDrawerProps) => {
  const { classes, theme } = useStyles();

  useWindowEvent("resize", (e: UIEvent) => {
    // @ts-ignore
    if (e.target?.innerWidth > theme.breakpoints.sm) onClose();
  });

  return createPortal(
    <m.nav
      id="drawer"
      initial="closed"
      animate="open"
      exit="closed"
      className={classes.nav}
      role="dialog"
    >
      <m.div className={classes.bg} variants={sidebar}>
        <Overlay onClose={onClose} blur={5} withinPortal />
      </m.div>
    </m.nav>,
    document.body
  );
};

export default MyDrawer;
