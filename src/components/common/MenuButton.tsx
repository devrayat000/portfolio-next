import { Burger, LoadingOverlay, MediaQuery } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const NoSSRDrawer = dynamic(() => import("./Drawer"), {
  ssr: false,
  loading: ({ isLoading }) => <LoadingOverlay visible={!!isLoading} />,
});

const MenuButton = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <Fragment>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          sx={{ zIndex: 1201 }}
          opened={isOpen}
          onClick={() => toggle()}
          role="menu"
          type="button"
        />
      </MediaQuery>
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <NoSSRDrawer
            key={isOpen ? "open" : "closed"}
            onClose={() => toggle(false)}
          />
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default MenuButton;
