import store from "@/redux/store";
import "@/styles/globals.css";
import { GetLayoutType } from "@/types/layout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps | any) {
  // Use the layout defined at the page level, if available
  const getLayout: GetLayoutType = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}
