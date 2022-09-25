import { Global, MantineProvider, ScrollArea } from "@mantine/core";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import type { AppProps } from "next/app";

import Shell from "~/components/common/Shell";
import Splash from "~/components/common/Splash";
import { theme } from "~/styles/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={theme}
    >
      <Global
        styles={(theme) => ({
          ":root": {
            "--bg": "hsl(180, 33%, 98%)",
            "--text-primary": "hsl(197, 20%, 18%)",
            "--text-paragraph": "hsl(201, 11%, 41%)",
          },
          body: {
            color: "var(--text-primary)",
            // position: "relative",
            [theme.fn.smallerThan("sm")]: {
              fontSize: 12,
            },
            [theme.fn.smallerThan("xs")]: {
              fontSize: 7,
            },
          },
          p: {
            color: "var(--text-paragraph)",
            fontSize: `calc(${theme.fontSizes.xl / 16}em + 4px)`,
            lineHeight: "1.5em",
          },
          ".snap": {
            scrollSnapAlign: "center",
          },
        })}
      />
      {/* <Splash /> */}
      <ScrollArea
        id="scroll-area"
        style={{ height: "100vh" }}
        styles={{ viewport: { scrollSnapType: "y proximity" } }}
      >
        <motion.main
          initial={["close", "hidden"]}
          animate={["open", "animate"]}
          whileInView={["open", "scroll"]}
          exit={["close", "exit"]}
        >
          <Shell>
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </Shell>
        </motion.main>
      </ScrollArea>
    </MantineProvider>
  );
}

export default MyApp;
