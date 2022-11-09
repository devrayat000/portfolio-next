import { Global, MantineProvider, ScrollArea } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import Shell from "~/components/common/Shell";
import { emotionCache, theme } from "~/styles/theme";
import fetcher from "~/utils/fetcher";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={theme}
      emotionCache={emotionCache}
    >
      <Global
        styles={(theme) => ({
          ":root": {
            "--bg": "hsl(180, 33%, 98%)",
            "--text-primary": "hsl(197, 20%, 18%)",
            "--text-paragraph": "hsl(201, 11%, 41%)",
            "--text-body-1": "hsl(200, 21.7%, 68.43%)",
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
          <SWRConfig
            value={{
              fetcher,
              errorRetryCount: Infinity,
              fallback: pageProps.ssr,
            }}
          >
            <Shell>
              <AnimatePresence mode="wait">
                <Component {...pageProps} key={router.asPath} />
              </AnimatePresence>
            </Shell>
          </SWRConfig>
        </motion.main>
      </ScrollArea>
    </MantineProvider>
  );
}

export default MyApp;
