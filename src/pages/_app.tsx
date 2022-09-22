import { MantineProvider, ScrollArea } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Shell from "~/components/common/Shell";
import { globalStyles } from "~/styles/stitches.config";
import { theme } from "~/styles/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  globalStyles();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={theme}
    >
      <ScrollArea style={{ height: "100vh" }}>
        <Shell>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Shell>
      </ScrollArea>
    </MantineProvider>
  );
}

export default MyApp;
