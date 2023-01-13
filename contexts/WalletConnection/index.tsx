import { RPC_URL } from "@/lib/constants"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import {
  PhantomWalletAdapter,
  GlowWalletAdapter,
  BackpackWalletAdapter,
} from "@solana/wallet-adapter-wallets"
import { ReactNode, useMemo } from "react"

type WalletConnectionProviderProps = {
  children: ReactNode
}

export function WalletConnectionProvider({
  children,
}: WalletConnectionProviderProps) {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new BackpackWalletAdapter(),
      new GlowWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={RPC_URL}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
