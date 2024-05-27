import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
      <Component {...pageProps} />
      <SpeedInsights />
    </ThemeProvider>
  )
}
