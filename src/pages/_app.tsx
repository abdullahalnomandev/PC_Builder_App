import '@/styles/globals.css'
import { GetLayoutType } from '@/types/layout';
import type { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps }:AppProps | any) {
  // Use the layout defined at the page level, if available
  const getLayout:GetLayoutType = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}