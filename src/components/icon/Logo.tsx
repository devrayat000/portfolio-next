import { useMantineTheme } from "@mantine/core";
import { motion, type Variants, type SVGMotionProps } from "framer-motion";

const shrink: Variants = {
  exit: {
    scale: 0,
    originX: "50%",
    originY: "50%",
    transition: { type: "spring" },
  },
};

const draw: Variants = {
  close: {
    pathLength: 0,
    opacity: 0,
    fillOpacity: 0,
  },
  open: {
    pathLength: 1,
    opacity: 1,
    fillOpacity: 1,
    transition: {
      pathLength: {
        // delay: 0.5,
        duration: 1.5,
        ease: "easeOut",
      },
      fillOpacity: {
        delay: 1.5,
        duration: 0.5,
      },
    },
  },
};

const Logo = (props: SVGMotionProps<HTMLOrSVGElement>) => {
  const theme = useMantineTheme();

  return (
    <motion.svg
      key={theme.colorScheme}
      width="auto"
      height="48"
      viewBox="0 0 245 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={shrink}
      {...props}
    >
      <motion.path
        d="M49 0L0 48L152 43.5L9 204L70 215L245 4L49 0Z"
        fill={theme.colorScheme === "light" ? "black" : "white"}
        stroke={theme.colorScheme === "light" ? "black" : "white"}
        strokeWidth={3}
        variants={draw}
      />
      <motion.path
        d="M245 254L0 209L4 257L245 254Z"
        fill={theme.colors[theme.primaryColor][6]}
        stroke={theme.colors[theme.primaryColor][6]}
        strokeWidth={3}
        variants={draw}
      />
    </motion.svg>
  );
};

export default Logo;
