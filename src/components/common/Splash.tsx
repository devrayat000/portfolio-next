import { AnimatePresence, motion } from "framer-motion";
// import { createPortal } from "react-dom";
import useSplash from "~/hooks/use-splash";
import Logo from "../icon/Logo";

const Splash = () => {
  const { isSplashed, removeSplash } = useSplash();
  return (
    <AnimatePresence>
      {isSplashed && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "white",
            zIndex: 1500,
            display: "grid",
            placeItems: "center",
          }}
          initial="close"
          animate="open"
          exit="exit"
          variants={{
            open: {
              transition: {
                duration: 0.1,
                when: "beforeChildren",
              },
            },
            exit: {
              opacity: [0.7, 0],
              transition: {
                duration: 0.3,
                when: "afterChildren",
              },
            },
          }}
          onAnimationComplete={() => {
            removeSplash();
          }}
        >
          <Logo height={240} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
