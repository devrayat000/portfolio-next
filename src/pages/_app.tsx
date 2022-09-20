import type { AppProps } from "next/app";
import NavigationMenuDemo from "~/components/common/Header";
import ScrollArea, { Box } from "~/components/common/ScrollArea";
import { globalStyles } from "~/styles/stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ScrollArea>
      <NavigationMenuDemo />
      <Box css={{ py: 15, px: 48 }}>
        <Component {...pageProps} />
      </Box>
    </ScrollArea>
  );
}

export default MyApp;
