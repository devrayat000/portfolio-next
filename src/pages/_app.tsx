import type { AppProps } from "next/app";
import ScrollArea from "~/components/common/ScrollArea";
import { globalStyles } from "~/styles/stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ScrollArea>
      <Component {...pageProps} />
    </ScrollArea>
  );
}

export default MyApp;
