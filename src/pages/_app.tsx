import { Global, MantineProvider, ScrollArea } from "@mantine/core";
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
      <Global
        styles={(theme) => ({
          body: {
            [theme.fn.smallerThan("sm")]: {
              fontSize: 9,
            },
            [theme.fn.smallerThan("xs")]: {
              fontSize: 7,
            },
          },
        })}
      />
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
