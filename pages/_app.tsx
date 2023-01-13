import "@/styles/globals.css"
import "@solana/wallet-adapter-react-ui/styles.css"
import type { AppProps } from "next/app"
import { WalletConnectionProvider } from "@/contexts/WalletConnection"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  )
}
