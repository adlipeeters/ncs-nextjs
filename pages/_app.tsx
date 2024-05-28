import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar2 } from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
      <Navbar2 />
      <Component {...pageProps} />
      <SpeedInsights />
    </ThemeProvider>
  )
}
