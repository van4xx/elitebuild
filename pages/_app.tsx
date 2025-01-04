import "@/styles/globals.css";
import "@/styles/include.css";
import "@/styles/swiper.css";
import type { AppProps } from "next/app";
import { AppProvider } from '@/src/context/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>;
}
